<script setup>
import { computed, reactive, ref, toRaw } from "vue";
import { Content } from "../data/content";
import { Search, Aim } from "@element-plus/icons-vue";
import CardView from "./Card.vue";
import DetailView from "./DetailView.vue";
import { paper } from "../data/paperData";

const data = reactive({
  content: [],
  filters: ["", "", ""],
  show_detail: false,
  detail_window: {
    x: 0,
    y: 0,
  },

  current_content: null,

  options: [{
          value: '选项1',
          label: '层次数据'
        }, {
          value: '选项2',
          label: '网络数据'
        }, {
          value: '选项3',
          label: '多维数据'
        }, {
          value: '选项4',
          label: '表格数据'
        }, {
          value: '选项5',
          label: '时空数据'
        }],

});

data.content = paper;

 

const show_cards = computed(() => {
  if (data.filters.join("") === "") {
    //如果没有选中筛选器
    return paper;
  } else {
    //如果有筛选
    console.log("选中：", data.filters); //初始data.filters["","",""]
    return data.content.filter((d) => {
      //开始筛选
      for (let i = 0; i < data.filters.length; i++) {
        const filter = data.filters[i]; //
        if (filter == "All") return true;
        else if (filter !== "") {
          console.log("filter:", filter);
          if (typeof filter == "object") {
            //如果是object 就是
            //console.log("选中数据类型（是一个数组）");
            console.log("d.group", d.group);
            if (d.group[2].includes("Text")) {
              //测试筛选数据类型为Text
              return true;
            } else return false;
          } else {
            if (d.group.find((d) => d === filter) === undefined) {
              return false;
            }
          }
        }
      }
      return true;
    });
  }
});

// 定义筛选器
function Filter(filter_index, condition) {
  if (filter_index != 2) data.filters[filter_index] = condition;
  else {
    data.filters[filter_index] = [condition];
  }
}

function SelectData(selectValue){
  console.log(selectValue)
}

const detailView = ref(null);
function ShowDetailWindow(content, card_rect) {
  // data.detail_window.x = card_rect.x - card_rect.width * 2;
  // data.detail_window.y = card_rect.y + card_rect.height / 2 ;

  // let w = window.innerWidth;
  // if (data.detail_window.x <= 0) {
  //   data.detail_window.x = 0;
  // }
  // if (data.detail_window.x + 1000 >= w) {
  //   data.detail_window.x = w - 1000;
  // }

  data.show_detail = true;
  data.current_content = content;
}


</script>

<template>
  <div class="index">
    <div class="header">
      <div class="title-row"><div>Metaphor Vis</div></div>
      <div class="function-row">
        <div class="function-group">
          <div>MetaphorTypes</div>
          <el-tooltip class="item" effect="light" content="All" placement="top">
            <el-button
              color="rgb(72, 124, 198)"
              type="primary"
              @click="Filter(0, 'All')"
            >
              <!-- 第一组：隐喻类型：形式隐喻、交互隐喻 
              选中All (0：是group第一个维度，"All":名字叫All)-->

              <el-icon color="white"><aim /></el-icon>
            </el-button>
          </el-tooltip>

          <el-tooltip
            class="item"
            effect="light"
            content="Form"
            placement="top"
          >
            <el-button
              color="rgb(72, 124, 198)"
              type="primary"
              @click="Filter(0, 'Form')"
            >
              <!-- 形式隐喻Form 选中Form (0：是group第一个维度，"Form":形式隐喻)-->

              <el-icon color="white"><aim /></el-icon>
            </el-button>
          </el-tooltip>
          <!-- 交互隐喻 Interaction  (0：是group第一个维度，"Interaction":形式隐喻-->
          <el-tooltip
            class="item"
            effect="light"
            content="Interaction"
            placement="top"
          >
            <el-button
              color="rgb(72, 124, 198)"
              type="primary"
              @click="Filter(0, 'Interaction')"
            >
              <el-icon color="white"><aim /></el-icon>
            </el-button>
          </el-tooltip>
        </div>

        <!-- 第2组：映射种类 ： 自然景观Z  人造实体R  非实体F  动作D  可视化启发K -->
        <div class="function-group">
          <div>MappingTypes</div>
          <!-- 自然景观Z -->
          <el-tooltip
            class="item"
            effect="light"
            content="Natural Landscape"
            placement="top"
          >
            <el-button
              color="rgb(72, 124, 198)"
              type="primary"
              @click="Filter(1, 'Z')"
            >
              <el-icon color="white"><aim /></el-icon>
            </el-button>
          </el-tooltip>

          <!-- 人造实体R -->
          <el-tooltip
            class="item"
            effect="light"
            content="Man-made"
            placement="top"
          >
            <el-button
              color="rgb(72, 124, 198)"
              type="primary"
              @click="Filter(1, 'R')"
            >
              <el-icon color="white"><aim /></el-icon>
            </el-button>
          </el-tooltip>

          <!-- 非实体F -->
          <el-tooltip
            class="item"
            effect="light"
            content="Non-physical"
            placement="top"
          >
            <el-button
              color="rgb(72, 124, 198)"
              type="primary"
              @click="Filter(1, 'F')"
            >
              <el-icon color="white"><aim /></el-icon>
            </el-button>
          </el-tooltip>

          <!-- 动作D -->
          <el-tooltip
            class="item"
            effect="light"
            content="Action"
            placement="top"
          >
            <el-button
              color="rgb(72, 124, 198)"
              type="primary"
              @click="Filter(1, 'D')"
            >
              <el-icon color="white"><aim /></el-icon>
            </el-button>
          </el-tooltip>

          <!-- 可视化启发 -->
          <el-tooltip
            class="item"
            effect="light"
            content="Visualization Inspiration"
            placement="top"
          >
            <el-button
              color="rgb(72, 124, 198)"
              type="primary"
              @click="Filter(1, 'K')"
            >
              <el-icon color="white"><aim /></el-icon>
            </el-button>
          </el-tooltip>
        </div>

        <!-- 第3组：数据类型 ： 13种 -->
        <div class="function-group">
          <div>DataTypes</div>
          <!-- 文本数据Text -->
          <el-tooltip
            class="item"
            effect="light"
            content="Text"
            placement="top"
          >
            <el-button
              color="rgb(72, 124, 198)"
              type="primary"
              @click="Filter(2, 'Text')"
            >
              <el-icon color="white"><aim /></el-icon>
            </el-button>
          </el-tooltip>

          <el-select v-bind="value" placeholder="请选择">
            <el-option
              v-for="item in data.options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
              @click="SelectData(item.label)"
            > 
            <span style="float: left">{{ item.label }}</span>
            </el-option>
          </el-select>

        </div>

        <div class="function-group">
          <div>Fulltext Search</div>
          <el-input clearable :suffix-icon="Search" size="small"></el-input>
        </div>

        <div class="function-group">
          <div>Techniques Shown</div>
          <div
            style="
              margin-top: -10px;
              font-size: 35px;
              font-weight: bolder;
              text-align: center;
            "
          >
            {{ show_cards.length }}
            <!-- 173 -->
          </div>
        </div>
      </div>
    </div>

    <div class="content">
      <div class="gallery">
        <div v-for="c in show_cards" :key="c.id">
          <card-view @clickCard="ShowDetailWindow" :content="c"></card-view>
        </div>
      </div>
    </div>

    <div
      class="detail-window"
      v-if="data.show_detail"
      :style="{
        top: `${data.detail_window.y}px`,
        left: `${data.detail_window.x}px`,
      }"
    >
      <detail-view
        ref="detailView"
        @close="data.show_detail = false"
        :content="data.current_content"
      ></detail-view>
    </div>
  </div>
</template>

<style lang="less" scoped>
.index {
  height: 100vh;
  .header {
    position: fixed;
    z-index: 10;
    top: 0;
    width: 100%;
    .title-row {
      background-color: rgb(72, 124, 198);
      height: 60px;
      padding: 10px 20px 10px 10px;
      font-size: 40px;
      font-weight: bolder;
      color: white;
      display: flex;
      justify-content: center;
    }

    .function-row {
      width: 100%;
      height: 95px;
      background-color: rgb(203, 225, 252);
      border-bottom: solid 2px rgb(96, 98, 102);
      display: flex;
      justify-content: center;

      .function-group {
        font-size: 18px;
        margin: 10px 20px 10px 20px;
        text-align: center;
        div {
          margin-bottom: 10px;
        }
      }
    }
  }

  .content {
    position: absolute;
    top: 175px;
    width: 100%;

    .gallery {
      padding: 10px 30px 10px 30px;
      display: flex;
      justify-content: left;
      flex-wrap: wrap;
    }
  }
}

.detail-window {
  position: fixed;
  left: 25vw;
  height: 25vh;
  z-index: 10;
}
</style>
