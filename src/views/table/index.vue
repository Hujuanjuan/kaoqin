<template>
  <div class="app-container">
    <el-table v-loading="listLoading" :data="list" element-loading-text="Loading" 
       border fit  highlight-current-row>
      <!-- <el-table-column label="班号" align="center">
        <template slot-scope="scope">{{ scope.row.ID }}</template>
      </el-table-column> -->
      <el-table-column label="班级" align="center">
        <template slot-scope="scope"><span>{{ scope.row.Name }}</span></template>
      </el-table-column>
      <el-table-column label="操作" align="center" >
         <template slot-scope="scope">
        <el-button @click="handleClick(scope.row.ID)" type="text">查看</el-button>
      </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import api from '@/utils/api'
export default {
  data() {
    return {
      list: [],
      listLoading: true
    }
  },
  //班级接口
  created() {
    this.fetchData();
  },

  methods: {
    async fetchData() {
      this.listLoading = true
      var param = {
        token:localStorage.getItem("token")
      }
      const data =await api.list(param)
      this.listLoading = false
      this.list = data.data  
    },
  async handleClick(id){
    this.$router.push({
      path:'/userlist',
      query:{
        id:id
      }
    })
  }
  }
}
</script>