<template>
  <div id="upload" v-show="status == 0 || status == 1">
    <label>
      <i
        class="bi bi-cloud-arrow-up"
        :class="{ load: file?.name != undefined }"
      ></i>
      <input type="file" @change="fileUpdateHandler" accept=".pdf" />
    </label>

    <div class="loading" v-show="status == 1">
      <span> Uploading {{ file?.name }} </span>
      <div class="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  </div>

  <div class="wrapper" v-show="status == 2">
    <div class="grade" :innerHTML="md.render(grade)" v-show="grade != ``"></div>
    <div class="loadingGrade" v-show="grade == ``">
      System Analyzing Your Grade
      <div class="lds-facebook">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
    <div id="chat" v-show="result != ``">
      <div id="gpt">
        <img
          src="https://media.discordapp.net/attachments/1166030132780208158/1179832403880054854/63c52af590250dd34bd6a9ab.png?ex=657b378d&is=6568c28d&hm=a33b06a4214d481cf777dd3356f837068753e501403ce67a165c8d5f822748f1&=&format=webp&quality=lossless"
          alt=""
        />
        Transfer Easy :
      </div>
      <div class="content" :innerHTML="md.render(result)">
      </div>
      <div class="link">
          <a href="http://localhost:3000/" target="_blank">More info? Visit our Q&A Page</a>
        </div>
    </div>
    <div class="loadingChat" v-show="grade != `` && result == ``">
      <img
        src="https://media.discordapp.net/attachments/1166030132780208158/1179832403880054854/63c52af590250dd34bd6a9ab.png?ex=657b378d&is=6568c28d&hm=a33b06a4214d481cf777dd3356f837068753e501403ce67a165c8d5f822748f1&=&format=webp&quality=lossless"
        alt=""
      />
      Ai assistant are generating opinion
      <div class="lds-roller">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { apis } from "./utils/apis";
import { asyncPatch } from "./utils/fetch";
import { DocumentTable } from "@azure/ai-form-recognizer";
import { idToArray } from "./utils/id2Arrary";
import { simpleContent } from "./utils/content";
import { BaseMessage, HumanMessage } from "langchain/schema";
import { ChatOpenAI } from "langchain/chat_models/openai";
import { gradePromptTemplate, JsonToPrompt } from "./utils/gradePromptTemplate";
import { md } from "./utils/markdown";

const file = ref<File>();
const tables = ref<Array<DocumentTable>>();
const dataParsed = ref<Array<idToArray<simpleContent>>>();
const status = ref<number>(2);
const messages = ref<Array<BaseMessage>>([]);
const grade = ref<string>(
  `\n\n1. 一般體育(一)\n   - 上學期學分：0\n   - 上學期成績：90\n   - 下學期學分：N/A\n   - 下學期成績：N/A\n\n2. 一般體育(二)\n   - 上學期學分：N/A\n   - 上學期成績：N/A\n   - 下學期學分：0\n   - 下學期成績：87\n\n3. 西洋藝術史\n   - 上學期學分：N/A\n   - 上學期成績：N/A\n   - 下學期學分：3\n   - 下學期成績：74\n\n4. 科技應用與文化創新\n   - 上學期學分：N/A\n   - 上學期成績：N/A\n   - 下學期學分：3\n   - 下學期成績：93\n\n5. 英文一\n   - 上學期學分：3\n   - 上學期成績：76\n   - 下學期學分：N/A\n   - 下學期成績：N/A\n\n6. 英文二\n   - 上學期學分：N/A\n   - 上學期成績：N/A\n   - 下學期學分：3\n   - 下學期成績：84\n\n7. 計算機概論\n   - 上學期學分：3\n   - 上學期成績：71\n   - 下學期學分：N/A\n   - 下學期成績：N/A\n\n8. 國文一\n   - 上學期學分：3\n   - 上學期成績：88\n   - 下學期學分：N/A\n   - 下學期成績：N/A\n\n9. 國文二\n   - 上學期學分：N/A\n   - 上學期成績：N/A\n   - 下學期學分：3\n   - 下學期成績：82\n\n10. 設計溝通與傳達\n    - 上學期學分：3\n    - 上學期成績：90\n    - 下學期學分：N/A\n    - 下學期成績：N/A\n  \n11. 通識涵養\n    - 上學期學分：0\n    - 上學期成績：N/A\n    - 下學期學分：N/A\n    - 下學期成績：N/A\n\n12. 創意思考\n    - 上學期學分：3\n    - 上學期成績：87\n    - 下學期學分：N/A\n    - 下學期成績：N/A\n\n13. 創意與科技產業概論\n    - 上學期學分：N/A\n    - 上學期成績：N/A\n    - 下學期學分：3\n    - 下學期成績：92\n\n14. 程式設計\n    - 上學期學分：3\n    - 上學期成績：89\n    - 下學期學分：N/A\n    - 下學期成績：N/A\n\n15. 視窗程式設計\n    - 上學期學分：N/A\n    - 上學期成績：N/A\n    - 下學期學分：3\n    - 下學期成績：80\n\n16. 溝通與簡報技巧\n    - 上學期學分：N/A\n    - 上學期成績：N/A\n    - 下學期學分：3\n    - 下學期成績：91\n\n17. 圖像繪製與編輯\n    - 上學期學分：3\n    - 上學期成績：96\n    - 下學期學分：N/A\n    - 下學期成績：N/A`
);

const result = ref<string>(
  `[你的學分]可以抵免 [淡江資管必修學分]及[淡江資管選修學分]當中的學分如下(僅依據課程名稱的相似度進行對照)：\n\n1. 英文一與英文二：可以抵免英語能力檢定的0學分\n2. 計算機概論：可以抵免資訊概論的4學分\n3. 程式設計：可以抵免基礎程式設計的4學分\n4. 視窗程式設計：可以抵免進階程式設計的4學分，也可以抵免網路程式設計的3學分\n5. 圖像繪製與編輯：可以抵免專業排版與設計的2學分，或多媒體互動與使用者經驗的3學分\n6. 科技應用與文化創新：可以抵免資訊科技創新創業管理的2學分\n7. 設計溝通與傳達：可以抵免簡報設計技巧的2學分\n8. 通識涵養：無相似課程可抵免\n9. 一般體育(一)和一般體育(二)：無相似課程可抵免\n10. 國文一和國文二：無相似課程可抵免\n11. 創意思考和創意與科技產業概論：無相似課程可抵免\n12. 溝通與簡報技巧：可以抵免簡報設計技巧的2學分，或人際溝通的2學分\n\n對於其他未列出的必修和選修課程，可能需要詳細的課程內容或教學大綱進行更深入的比較，以確認是否可以互相抵免。建議進一步向學校或該學科專業的相關人員查詢，以得到最準確的抵免資訊。`
);
// const grade = ref<string>(``);
// const result = ref<string>(``);

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

const chatModel = new ChatOpenAI({
  openAIApiKey: "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",
  modelName: "gpt-4-0613",
});

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
          content: cell.content,
        });
      });

      tempData.push(data);
    });

    dataParsed.value = tempData;
    chat();
  }
};

const chat = async () => {
  const jsongrade = await JsonToPrompt.format({
    json: JSON.stringify(dataParsed.value),
  });

  const gradeData = new HumanMessage({ content: jsongrade });
  messages.value.push(gradeData);

  const gradeInfo = await chatModel.predictMessages(messages.value);

  grade.value = gradeInfo.content as string;

  const gradePrompt = await gradePromptTemplate.format({
    grade: gradeInfo.content,
  });
  const prompt = new HumanMessage({ content: gradePrompt });
  messages.value.push(prompt);

  const chatModelResult = await chatModel.predictMessages(messages.value);

  result.value = chatModelResult.content as string;
};
</script>


<style lang="scss" >
* {
  list-style: none;
  padding-inline-start: 0px;
  margin: 0px;
}

#upload {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .load {
    color: rgba(91, 189, 200, 1);
  }

  .loading {
    margin-top: -20px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    gap: 0.5rem;
    font-size: 1.25rem;
    color: rgba(91, 189, 200, 1);

    .lds-ellipsis {
      display: inline-block;
      position: relative;
      width: 80px;
      height: 80px;
    }
    .lds-ellipsis div {
      position: absolute;
      top: 33px;
      width: 13px;
      height: 13px;
      border-radius: 50%;
      background: rgba(91, 189, 200, 1);
      animation-timing-function: cubic-bezier(0, 1, 1, 0);
    }
    .lds-ellipsis div:nth-child(1) {
      left: 8px;
      animation: lds-ellipsis1 0.6s infinite;
    }
    .lds-ellipsis div:nth-child(2) {
      left: 8px;
      animation: lds-ellipsis2 0.6s infinite;
    }
    .lds-ellipsis div:nth-child(3) {
      left: 32px;
      animation: lds-ellipsis2 0.6s infinite;
    }
    .lds-ellipsis div:nth-child(4) {
      left: 56px;
      animation: lds-ellipsis3 0.6s infinite;
    }
    @keyframes lds-ellipsis1 {
      0% {
        transform: scale(0);
      }
      100% {
        transform: scale(1);
      }
    }
    @keyframes lds-ellipsis3 {
      0% {
        transform: scale(1);
      }
      100% {
        transform: scale(0);
      }
    }
    @keyframes lds-ellipsis2 {
      0% {
        transform: translate(0, 0);
      }
      100% {
        transform: translate(24px, 0);
      }
    }
  }

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

.wrapper {
  display: flex;
  padding: 3%;
  align-items: flex-start;
  flex-direction: column;
  gap: 5rem;

  #content {
    padding: 3%;
    display: flex;
    gap: 1.5rem;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    .table {
      display: flex;
      flex-direction: column;
      // gap: 1rem;
      align-items: flex-start;

      .cell {
        display: flex;
        // gap: 0.5rem;

        .coloum {
          display: flex;
          padding: 1%;
          justify-content: center;
          width: 13rem;
          border: solid 1px #212121;
          text-align: center;
        }
      }
    }
  }

  .grade {
    > p {
      margin: 3%;
    }
    ol {
      display: flex;
      gap: 5rem;
      flex-wrap: wrap;
      & > li {
        display: flex;
        flex-direction: column;
        width: 12rem;
        border-radius: 3%;
        border: solid 1px #515151ae;
        cursor: pointer;
        padding: 1%;
        text-align: start;
        ul {
          padding-inline-start: 0px;
          li {
            margin: 0.3rem;
          }
        }
        p {
          font-weight: bold;
          font-size: 1.25rem;
          margin: 0.3rem;
        }
      }
    }
  }

  #chat {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    #gpt {
      display: flex;
      gap: 1rem;
      font-weight: bold;
      align-items: center;
      img {
        overflow: hidden;
        display: flex;
        height: 30px;
        width: 30px;
        border-radius: 99%;
        justify-content: center;
      }
    }
    .content {
      padding: 1rem;
      margin-left: 30px;
      border-radius: 0.3rem;
      border: solid 1px #515151ae;
      text-align: start;
      line-height: 2;
    }
    .link{
      text-align: start;
      margin-left: 30px;
      a{
        text-decoration: none;
        color: #212121;
      }
    }
  }

  .loadingGrade {
    width: 100%;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: rgba(91, 189, 200, 1);
    font-weight: bold;
    font-size: 1.25rem;

    .lds-facebook {
      display: inline-block;
      position: relative;
      width: 80px;
      height: 80px;
    }
    .lds-facebook div {
      display: inline-block;
      position: absolute;
      left: 8px;
      width: 16px;
      background: rgba(91, 189, 200, 1);
      animation: lds-facebook 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;
    }
    .lds-facebook div:nth-child(1) {
      left: 8px;
      animation-delay: -0.24s;
    }
    .lds-facebook div:nth-child(2) {
      left: 32px;
      animation-delay: -0.12s;
    }
    .lds-facebook div:nth-child(3) {
      left: 56px;
      animation-delay: 0;
    }
    @keyframes lds-facebook {
      0% {
        top: 8px;
        height: 64px;
      }
      50%,
      100% {
        top: 24px;
        height: 32px;
      }
    }
  }

  .loadingChat {
    width: 100%;
    height: 80px;
    display: flex;
    align-items: center;
    gap: 1rem;
    justify-content: center;
    color: #212121;
    font-weight: bold;
    font-size: 1.25rem;
    img {
      overflow: hidden;
      display: flex;
      height: 30px;
      width: 30px;
      border-radius: 99%;
      justify-content: center;
    }
    .lds-roller {
      display: inline-block;
      position: relative;
      width: 80px;
      height: 80px;
    }
    .lds-roller div {
      animation: lds-roller 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
      transform-origin: 40px 40px;
    }
    .lds-roller div:after {
      content: " ";
      display: block;
      position: absolute;
      width: 7px;
      height: 7px;
      border-radius: 50%;
      background: #212121;
      margin: -4px 0 0 -4px;
    }
    .lds-roller div:nth-child(1) {
      animation-delay: -0.036s;
    }
    .lds-roller div:nth-child(1):after {
      top: 63px;
      left: 63px;
    }
    .lds-roller div:nth-child(2) {
      animation-delay: -0.072s;
    }
    .lds-roller div:nth-child(2):after {
      top: 68px;
      left: 56px;
    }
    .lds-roller div:nth-child(3) {
      animation-delay: -0.108s;
    }
    .lds-roller div:nth-child(3):after {
      top: 71px;
      left: 48px;
    }
    .lds-roller div:nth-child(4) {
      animation-delay: -0.144s;
    }
    .lds-roller div:nth-child(4):after {
      top: 72px;
      left: 40px;
    }
    .lds-roller div:nth-child(5) {
      animation-delay: -0.18s;
    }
    .lds-roller div:nth-child(5):after {
      top: 71px;
      left: 32px;
    }
    .lds-roller div:nth-child(6) {
      animation-delay: -0.216s;
    }
    .lds-roller div:nth-child(6):after {
      top: 68px;
      left: 24px;
    }
    .lds-roller div:nth-child(7) {
      animation-delay: -0.252s;
    }
    .lds-roller div:nth-child(7):after {
      top: 63px;
      left: 17px;
    }
    .lds-roller div:nth-child(8) {
      animation-delay: -0.288s;
    }
    .lds-roller div:nth-child(8):after {
      top: 56px;
      left: 12px;
    }
    @keyframes lds-roller {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  }
}
</style>