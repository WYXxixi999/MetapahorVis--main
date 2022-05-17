<template>
  <div class="detail">
    <el-button
      class="close"
      type="danger"
      :icon="CloseBold"
      size="small"
      circle
      @click="CloseWindow"
    />
    <div class="content">
        <div class="groups">
          <div v-for="g in content.group" :key="g">{{ g }}</div>
        </div>
        <el-image
          class="preview-img"
          :src="props.content.picture"
          fit="cover"
        />
        <div class="text">
          <div class="title">{{ props.content.name }}</div>
          <div class="authors">{{ props.content.authors }}</div>
          <a class="detailcontent" :href=props.content.url>{{props.content.title}}</a>
        </div>
    </div>
  </div>
</template>

<script setup>
import { Content } from "../data/content";
import { CloseBold } from "@element-plus/icons-vue";

const props = defineProps({
  content: {
    type: Content,
  },
});

const emits = defineEmits(["close"]);

function CloseWindow() {
  emits("close");
}
</script>

<style lang="less" scoped>
.detail {
  display: inline-block;
  width: 1000px;
  height: 300px;
  background-color: rgb(238, 245, 254);
  border: solid 2px rgb(96, 98, 102);

  .close {
    position: relative;
    left: -10px;
    top: -10px;
    filter: drop-shadow(1px 1px 3px rgba(0, 0, 0, 0.5));
  }
}

.content {
  position: relative;
  padding-left: 20px;
  padding-right: 20px;
  display: flex;

  .text {
    padding-left: 20px;
    .title {
      font-size: 30px;
      font-weight: bolder;
      left:270px;
    }
    .authors {
      font-size: 18px; 

    }
  }

  .groups {
    position: absolute;
    top: -5px;
    right: 0;
    margin-right: 10px;
    display: flex;
    div {
      background-color: rgb(72, 124, 198);
      padding: 2px;
      margin: 10px;
      border-radius: 3px;
    }
  }
}
.preview-img {
  height: 250px;
  width: 250px;
  border: solid 1px rgb(96, 98, 102);
  border-top-width:2px;
	border-left-width:2px;
	border-bottom-width:2px;
	border-right-width:2px;
}

.detailcontent {
  position:absolute;
  top:200px;
  left:300px;
	/* border-top-width:0px;
	border-left-width:2px;
	border-bottom-width:2px;
	border-right-width:2px; */
  
}
</style>