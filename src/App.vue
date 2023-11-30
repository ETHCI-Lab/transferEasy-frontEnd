<template>
  <div id="upload" v-show="status == 0 || status == 1">
    <label>
      <i class="bi bi-cloud-arrow-up"></i>
      <input type="file" @change="fileUpdateHandler" accept=".pdf" />
    </label>
  </div>

  <span v-show="status == 1">uploading {{ file?.name }}</span>

  <div id="name" v-show="status == 2">
    {{ file?.name }}
    <!-- <div class="export" @click="exportDatas">導出</div> -->
  </div>
  <div id="content" v-show="status == 2">
    <div class="table" v-for="(table, index) in dataParsed" :key="index">
      <div class="cell" v-for="(cell, index) in table" :key="index">
        <div
          class="coloum"
          v-for="(content, index) in cell"
          :key="index"
          v-show="
            content.content != ':unselected:' && content.content != ':selected:'
          "
        >
          {{ content.content }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { apis } from "./utils/apis";
import { asyncPatch } from "./utils/fetch";
import { DocumentTable, DocumentTableCell } from "@azure/ai-form-recognizer";
import { idToArray } from "./utils/id2Arrary";
import { exportData } from "./utils/exportData";
import { simpleContent } from "./utils/content";
// import { data } from "./utils/data";

const file = ref<File>();
const tables = ref<Array<DocumentTable>>();
const dataParsed = ref<Array<idToArray<simpleContent>>>([]);
const status = ref<number>(0);

const fileUpdateHandler = (e: Event) => {
  const target = e.target as HTMLInputElement;
  if (target.files) {
    file.value = target.files[0];
    const formData = new FormData();
    formData.append("file", file.value);
    status.value = 1;
    asyncPatch(apis.upload, formData).then(
      (res: { tables: DocumentTable[] }) => {
        status.value = 2;
        tables.value = res.tables;
        dataPaser();
      }
    );
  }
};

const dataPaser = () => {
  if (tables.value) {
    const tempData: Array<idToArray<simpleContent>> = [];

    tables.value.forEach((table) => {
      const data: idToArray<simpleContent> = {};
      table.cells.forEach((cell) => {
        if (data[cell.rowIndex] == undefined) {
          data[cell.rowIndex] = [];
        }
        data[cell.rowIndex].push({
          rowIndex: cell.rowIndex,
          content: cell.content
        });
      });

      tempData.push(data);
    });

    dataParsed.value = tempData;
  }
};

// const exportDatas = () => {
//   exportData(dataParsed.value, `${file.value?.name}.json`);
// };

// onMounted(() => {
//   dataPaser();
// });
</script>


<style lang="scss" scoped>
#upload {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  i {
    font-size: 5rem;
    cursor: pointer;
    color: #212121;
    transition: all 0.25s;
    &:hover {
      color: rgba(91, 189, 200, 1);
    }
  }
  input {
    display: none;
  }
}
#name {
  font-weight: bold;
  font-size: 1.5rem;
}

#content {
  display: flex;
  gap: 1.5rem;
  align-items: flex-start;
  .table {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: flex-start;
    .cell {
      display: flex;
      gap: 0.5rem;
      .coloum {
        display: flex;
      }
    }
  }
}
</style>
