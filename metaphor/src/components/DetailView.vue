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
        <!-- <div>Form</div>
        <div>Man-made</div>
        <div>Text&Graph</div>
        <div>Map</div> -->
      </div>
      <el-image class="preview-img" :src="props.content.picture" fit="cover" />
      <div class="text">
        <div class="title">{{ props.content.name }}</div>
        <div class="authors">{{ props.content.authors }}</div>
        <a class="typeTitleConstructMethod"
          >constructMethod & Task & Application:</a
        >
        <a class="constructMethod">{{ props.content.constructMethod }}</a>
        <a class="task">{{ props.content.task }}</a>
        <a class="application">{{ props.content.application }}</a>
        <a class="publicationTitle">Publication:</a>
        <a class="publication">{{ props.content.publication }}</a>
        <a class="detailcontent" :href="props.content.url">{{
          props.content.title
        }}</a>
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
      left: 270px;
    }
    .authors {
      // div{
      //   width: 400px;
      //   height:100px;
      //   border: 5px solid green;
      //   //margin: 10px;
      //   overflow: scroll;
      //   line-height: 110%;
      //   font-size: 18px;
      // }
      //border: 1px solid rgb(114, 143, 114);
      height:42px;
      margin: 10px;
      width: 650px;
      font-size: 18px;
      line-height: 110%;
      text-overflow: ellipsis;
      overflow: hidden;
      word-break: break-all;  /* break-all(允许在单词内换行。) */	
      display: -webkit-box; /** 对象作为伸缩盒子模型显示 **/
      -webkit-box-orient: vertical; /** 设置或检索伸缩盒对象的子元素的排列方式 **/
      -webkit-line-clamp: 2; /** 显示的行数 **/
    }
  }

  .groups {
    position: absolute;
    top: -5px;
    right: 0;
    margin-right: 10px;
    display: flex;
    div {
      background-color: rgb(138, 186, 208);
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
  border-top-width: 2px;
  border-left-width: 2px;
  border-bottom-width: 2px;
  border-right-width: 2px;
}

.detailcontent {
  position: absolute;
  top: 230px;
  left: 300px;
  /* border-top-width:0px;
	border-left-width:2px;
	border-bottom-width:2px;
	border-right-width:2px; */
}
.publication {
  position: absolute;
  top: 210px;
  left: 300px;
  /* border-top-width:0px;
	border-left-width:2px;
	border-bottom-width:2px;
	border-right-width:2px; */
}
.publicationTitle {
  position: absolute;
  top: 195px;
  left: 300px;
  font-size: 15px;
  font-weight: bolder;
  /* border-top-width:0px;
	border-left-width:2px;
	border-bottom-width:2px;
	border-right-width:2px; */
}
.typeTitleConstructMethod {
  position: absolute;
  top: 100px;
  left: 300px;
  font-size: 15px;
  font-weight: bolder;
}
.constructMethod {
  position: absolute;
  top: 120px;
  left: 300px;
}
.task {
  position: absolute;
  top: 140px;
  left: 300px;
}
.application {
  position: absolute;
  top: 160px;
  left: 300px;
}
</style>