<template>
<div id="dirve">
<div id="dirve_header">
<nav>
	<ol class="cd-breadcrumb" id="example-1">
    <li v-for="item in items"><a :href='item.url'>{{item.url}}</a></li>
    <el-select v-model="value" multiple placeholder="请选择">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
	</ol>
</nav>
</div>
</div>
  
</template>

<script>
export default {
  name: "Drive",
  data() {
    return {
      imgSrc:"",
      items: [{ url: "Foo" }, { url: "Bar" }],
       options: [{
          value: '选项1',
          label: '文件'
        }, {
          value: '选项2',
          label: '文件夹'
        }],
        value: ''
    };
  }
};
</script>

<style>
#dirve {
  height: 100%;
  background: #fff;
  flex-grow: 1;
}
#dirve_header {
  height: 40px;
  width: 100%;
  display: inline-flex;
}
#dirve_header nav {
  align-items: center;
  display: inline-flex;
}
.cd-breadcrumb {
  padding: 0 1.2em;
  display: inline-flex;
  font-size: 14px;
  align-items: center;
}
.cd-breadcrumb li {
  flex-direction: row;
  height: 40px;
  display: inline-flex;
}
.cd-breadcrumb li a {
  font-size: 18px;
  margin: 15px auto;
}
.cd-breadcrumb li::after {
  color: #cccccc;
  content: "/ ";
  padding: 16px 20px;
  font-size: 18px;
}
#example-1 .el-input{
  width: 40px;
  }
#example-1 .el-input input{
background-image: url("../assets/img/加号.png");
background-repeat:no-repeat;
background-position: 0px 10px;
}
.el-icon-arrow-up:before {
    content: "";
}
.el-icon-arrow-up:after {
    content: "";
}
.el-select-dropdown {
  left: 390px;
}
</style>
