<template>
<div >
  <el-table :data="tableData" style="width: 100%">
    <el-table-column fixed  prop="class_name"  label="班级" style="width: 20%"></el-table-column>
    <el-table-column  prop="name"  label="姓名" style="width: 20%"> </el-table-column>
    <el-table-column prop="age" label="年龄" style="width: 20%">
        <template slot-scope="scope"><span v-if="scope.row.age">22</span></template>
    </el-table-column>
    <el-table-column prop="phone" label="电话" style="width: 20%"></el-table-column>
    <el-table-column prop="sex" label="性别" style="width: 20%">
        <template slot-scope="scope"><span v-if="scope.row.sex">男</span></template>
    </el-table-column>
  </el-table>
</div>
</template>
<script>
import api from '@/utils/api'
  export default {
    methods: {
      handleClick(row) {
        console.log(row);
      }
    },
    data() {
      return {
        tableData: [{
          class_name:'',
          name: '',
          phone:'',
          sex:'',
          age:''
        },
        {
         class_name:'软件2班',
          name: '李强',
          phone:'122345',
          sex:'男',
          age:24
        },
        {
          class_name:'软件2班',
          name: '张三',
          phone:'122345',
          sex:'女',
          age:'24'
        },{
          class_name:'软件2班',
          name: '张三',
          phone:'122345',
          sex:'女',
          age:'24'
        },{
          class_name:'软件2班',
          name: '张三',
          phone:'122345',
          sex:'女',
          age:'24'
        },{
          class_name:'软件2班',
          name: '张三',
          phone:'122345',
          sex:'女',
          age:'24'
        },]
      }
    },
    created(){
      this.fetchData()
    },
    methods:{
      async fetchData(){
        var param = {
          ClassID:this.$route.query.id,
          token:localStorage.getItem("token")
        }
        const data =await api.userlist(param)
        console.log(data)
      }
    }
  }
</script>