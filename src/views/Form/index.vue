<template>
<div>
  <!-- <el-header style="text-align: left"> 
  <el-date-picker v-model="value1" type="datetime" value-format="yyyy-MM-dd hh:mm:ss" placeholder="选择日期" style="width:20%"></el-date-picker>    
  <el-button icon="el-icon-search" circl @click="search"></el-button>
</el-header> -->
  <el-table v-loading="listLoading" :data="tableData" border style="width:100%">
    <el-table-column fixedprop="id" label="学号" align="center">
      <template slot-scope="scope"><span>{{ scope.row.StudentID }}</span></template>
    </el-table-column>
    <el-table-column prop="name" label="姓名" align="center">
      <template slot-scope="scope"><span>{{ scope.row.Name }}</span></template>
    </el-table-column>
    <el-table-column prop="class" label="班级"  align="center">
      <template slot-scope="scope"><span>{{ scope.row.Class }}</span></template>
    </el-table-column>
    <el-table-column prop="date" label="请假时间" align="center">
      <template slot-scope="scope"><span>{{ scope.row.StartTime }}</span></template>
    </el-table-column>
    <el-table-column prop="reason" label="请假原因" align="center">
      <template slot-scope="scope"><span>{{ scope.row.Reason }}</span></template>
    </el-table-column>
    <el-table-column label="状态" align="center">
      <template slot-scope="scope">
        <span v-if="scope.row.status==3">待审批</span>
        <span v-if="scope.row.status==1">通过</span>
        <span v-if="scope.row.status==2">拒绝</span>
      </template>
    </el-table-column>
    <el-table-column fixed="right" label="操作" align="center">
      <template slot-scope="scope">
        <el-button @click="handleClick(scope.row)" type="text">查看</el-button>
      </template>
    </el-table-column>
  </el-table>
  <el-dialog title="请假审批" :visible.sync="dialogFormVisible">
       <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
           <el-form-item label="学号">
            <el-input v-model="formLabelAlign.id"></el-input>
          </el-form-item>
          <el-form-item label="姓名">
            <el-input v-model="formLabelAlign.name"></el-input>
          </el-form-item>
          <el-form-item label="班级">
            <el-input v-model="formLabelAlign.class"></el-input>
          </el-form-item>
          <!-- <el-form-item label="请假时间">
            <el-input v-model="formLabelAlign.date"></el-input>
          </el-form-item> -->
           <el-form-item label="请假原因">
            <el-input v-model="formLabelAlign.reason"></el-input>
          </el-form-item>
      </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button type="danger" @click="dialogFormVisible = false">拒 绝</el-button>
      <el-button type="primary" @click="dialogFormVisible = false">同 意</el-button>
    </div>
  </el-dialog>
</div>
</template>

<script>
import api from '@/utils/api'
import {formatDate} from '@/utils/index'
  export default {
     data() {
      return {
        value1:'',
        list: [],
        listLoading: true,
        formLabelAlign:{},
        dialogFormVisible:false,
        tableData: []
      }
    },
    // methods: {
    //   handleClick(row) {
    //     console.log(row);
    //     this.dialogFormVisible = true
    //     this.formLabelAlign = row
    //   }
    // },
  //请假接口
    created() {
      // console.log(formatDate(new Date(),'yyyy-MM-dd hh:mm:ss'))
      // this.value1 = formatDate(new Date(),'yyyy-MM-dd hh:mm:ss')
    this.fetchData();
  },

methods: {
  search(){
    this.fetchData()
  },
    async fetchData() {
      this.listLoading = true
      var param = {
        token:localStorage.getItem("token"),
        StartTime:this.value1
      }
      const data =await api.apply(param)
      this.listLoading = false
      this.tableData = data.data  
    },
  async handleClick(row) {
        console.log(row);
        this.dialogFormVisible = true
        this.formLabelAlign = row
      }
  }
  }
</script>

<style>
.el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 70px;
  }
</style>
