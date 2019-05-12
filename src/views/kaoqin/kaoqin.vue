<template>   
<el-container>
<el-header style="text-align: left; font-size: 12px">
<div style="width:40%">
  <el-input placeholder="请输入姓名" v-model="input" class="input-with-select">
        <!-- <el-select v-model="select" slot="prepend" placeholder="请选择班级">
            <el-option label="软件1班" value="1"></el-option>
            <el-option label="软件2班" value="2"></el-option>
            <el-option label="计科1班（专升本）" value="3"></el-option>
            <el-option label="计科2班（专升本）" value="4"></el-option>
            <el-option label="信管1班" value="5"></el-option>
            <el-option label="信管2班" value="6"></el-option>
        </el-select> -->
  </el-input>
        <el-button slot="append" type="primary" icon="el-icon-search"></el-button>
    <el-dropdown>
        <i class="el-icon-setting" style="margin-right: 15px"></i>
    </el-dropdown>
</div>
</el-header>
    <el-main>
      <el-table :data="tableData">
        <el-table-column prop="date" label="日期" width="140"></el-table-column>
        <el-table-column prop="name" label="姓名" width="120"></el-table-column>
        <el-table-column prop="class" label="班级"></el-table-column>
        <el-table-column prop="kaoqin" label="考勤情况"></el-table-column>
      </el-table>
    </el-main>
  </el-container>
</template>

<style>
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
  .el-select .el-input {
    width: 180px;
  }
  .input-with-select 
  .el-input-group__prepend {
    background-color: rgb(255, 255, 255);
  }
</style>

<script>
  export default {
    data() {
      const item = {
        date: '2018-05-02',
        name: '王小虎',
        class:'软件2班',
        kaoqin: '缺勤'
      };
      return {
        tableData: Array(5).fill(item),
        input: '',
        select: ''
      }
    }
  };
</script>