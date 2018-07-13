
import func from './vue-temp/vue-editor-bridge';
<template>
  <div id="app" style="height:100%;">
    <div id="header" class="header">
      <div class="header-left">
        <div class="logo logo-icon">
        </div>
        <ul id="appmenu" name="aha">
          <li data-id="files" class="" style="">
            <a href="/oodae4ch/apps/files/" class="active" aria-label="文件">
              <svg width="20" height="20" viewBox="0 0 20 20" alt="">
                <image x="0" y="0" width="20" height="20" preserveAspectRatio="xMinYMin meet" xlink:href="./assets/img/文件夹.png" class="app-icon"></image>
              </svg>
              <div class="icon-loading-small-dark" style="display:none;"></div>
            </a>
          </li>
        </ul>
      </div>
      <div class="header-right">
        <div class="searchIcon">
        </div>
        <div class="search">
          <input type="search" placeholder="请输入搜索的内容">
        </div>
      </div>
    </div>
    <div id="conten">
      <div id="left">
        <div id="left_header">
          <el-input  placeholder="输入关键字进行过滤"  v-model="filterText"></el-input>
          <div @click="arrowChange" id="left_header_arrow"><img id="arrow" :src="src"></div>
          </div>        
        <el-tree  class="filter-tree"  :data="data"  :props="defaultProps"  default-expand-all  :filter-node-method="filterNode" :expand-on-click-node="false" :highlight-current="true" :auto-expand-parent="true" ref="tree"></el-tree>
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  watch: {
    filterText(val) {
      this.$refs.tree.filter(val);
    }
  },
  data() {
    return {
      src: require("./assets/img/上箭头.png"),
      filterText: "",
      data: [
        {
          label: "一级 1",
          children: [
            {
              label: "二级 1-1",
              children: [
                {
                  label: "三级 1-1-1"
                }
              ]
            }
          ]
        },
        {
          label: "一级 2",
          children: [
            {
              label: "二级 2-1",
              children: [
                {
                  label: "三级 2-1-1"
                }
              ]
            },
            {
              label: "二级 2-2",
              children: [
                {
                  label: "三级 2-2-1"
                }
              ]
            }
          ]
        },
        {
          label: "一级 3",
          children: [
            {
              label: "二级 3-1",
              children: [
                {
                  label: "三级 3-1-1"
                }
              ]
            },
            {
              label: "二级 3-2",
              children: [
                {
                  label: "三级 3-2-1"
                }
              ]
            }
          ]
        }
      ],
      defaultProps: {
        children: "children",
        label: "label"
      }
    };
  },
  methods: {
    filterNode(value, data) {
      if (!value) return true;
      return data.label.indexOf(value) !== -1;
    },
    handleNodeClick(data) {
      console.log(data);
    },
    arrowChange() {
      if (this.src == require("./assets/img/上箭头.png")) {
        this.src = require("./assets/img/下箭头.png");
        var element = document.getElementsByClassName(
          "el-tree-node__expand-icon el-icon-caret-right expanded"
        );
        for (var i = 0; i < element.length; i++) {
          element[i].click();
        }
      } else {
        this.src = require("./assets/img/上箭头.png");
        var elementparent = document.querySelectorAll(
          "[style='padding-left: 0px;']"
        );
        var element = document.querySelectorAll(
          "[style='padding-left: 18px;']"
        );
        for (var i = 0; i < elementparent.length; i++) {
          elementparent[i].getElementsByTagName("span")[0].click();
        }
        setTimeout(function(){
          for (var j = 0; j < element.length; j++) {
          element[j].getElementsByTagName("span")[0].click();
        }
        }, 400 )
        
      }
    },
  },
  defaultProps: {
    children: "children",
    label: "label"
  }
};
</script>

<style>
@import "./assets/css/drive.css";
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
}
.el-tree-node__content {
  height: 34.48px;
}
.el-input__inner {
  border: 0px solid #dcdfe6;
}
</style>
