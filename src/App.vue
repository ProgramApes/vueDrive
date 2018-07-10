
<template>
  <div id="app" style="height:100%;">
    <div id="header" class="header">
      <div class="header-left">
        <div class="logo logo-icon">
        </div>
        <ul id="appmenu" name="haha">
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
        <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick" :expand-on-click-node="false"></el-tree>
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
   data() {
      return {
        data: [{
          label: '一级 1',
          children: [{
            label: '二级 1-1',
            children: [{
              label: '三级 1-1-1'
            }]
          }]
        }, {
          label: '一级 2',
          children: [{
            label: '二级 2-1',
            children: [{
              label: '三级 2-1-1'
            }]
          }, {
            label: '二级 2-2',
            children: [{
              label: '三级 2-2-1'
            }]
          }]
        }, {
          label: '一级 3',
          children: [{
            label: '二级 3-1',
            children: [{
              label: '三级 3-1-1'
            }]
          }, {
            label: '二级 3-2',
            children: [{
              label: '三级 3-2-1'
            }]
          }]
        }],
        defaultProps: {
          children: 'children',
          label: 'label'
        }
      };
    },
    methods: {
      handleNodeClick(data) {
        console.log(data);
      }
    }
};
</script>

<style>
@import "./assets/css/drive.css";
#app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
}
</style>
