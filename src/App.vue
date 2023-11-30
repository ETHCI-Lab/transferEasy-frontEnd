<template>
<div id="upload">
  <i class="bi bi-cloud-arrow-up" v-show="canUpload"></i>
</div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const canUpload = ref<boolean>(false);

</script>


<style lang="scss" scoped>
#upload{
  width: 100%;
  height: 100%;
  i{
    font-size: 5rem;
    cursor: pointer;
    color: #212121;
    transition: all .25s;
    &:hover{
      color: rgba(91, 189, 200, 1)

    }
  }
}
</style>

function ref<T>(arg0: boolean) {
  throw new Error("Function not implemented.");
}
