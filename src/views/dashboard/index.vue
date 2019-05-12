<template>
  <div class="dashboard-container">
    <div class="dashboard-text">欢迎老师！{{ name }}</div>
    <div class="dashboard-text"><span v-for="role in roles" :key="role">{{ role }}</span></div>
    <div>{{info}}</div>
  </div>
</template>

<script>
// import { mapGetters } from 'vuex'
// import axios from 'axios'

// export default {
//   name: 'Dashboard',
//   computed: {
//     ...mapGetters([
      
//     ])
//   },
//   data(){
//   return{
//       info:''
//     }
//   },
//   created(){
//     this.infos();
//   },
//   methods:{
//     infos(){
//       axios({
//           url: '/user/navlist',
//           method: 'post',
//           data: {}
//       }).then(res => {
//           this.info = res.data
//       })
//     }
//   }
// }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.dashboard {
  &-container {
    margin-left: 400px;
    margin-top: 150px;
    color: rgb(189, 186, 186);
  }
  &-text {
    font-size: 50px;
    line-height: 46px;
  }
}
</style>
