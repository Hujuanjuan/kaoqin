<template>
<el-container>
  <div style="width:80%"   >
  <el-header style="text-align: left; font-size: 18px">
    昵称：<el-input type="textarea" autosize placeholder="请输入昵称" v-model="textarea1" style="width:40%" ></el-input>
    <div style="margin: 20px 0;"></div>
    留言：<el-input type="textarea" :autosize="{ minRows: 2, maxRows: 4}"  placeholder="请输入内容" style="width:80%" v-model="textarea2"></el-input>
    <div class="btn-con">
      <input @click="handleSend" type="button" class="btn" value="发布"/>
    </div>
    <v-list :list="list" @reply="handleReply"></v-list>
  </el-header>
  </div>
</el-container>
</template>

<script>
export default {
  data() {
    return {
      textarea1: '',
      textarea2: ''
    }
  }
}
// export default {
//   data () {
//     return {
//       username: '',
//       message: '',
//       list: []
//     }
//   },
//   components: {
//     vInput,
//     vTextarea,
//     vList
//   },
//   methods: {
//     handleSend: function () {
//       if (this.username === '') {
//         window.alert('请输入昵称')
//         return
//       }
//       if (this.message === '') {
//         window.alert('请输入留言内容')
//         return
//       }
//       // 数组list存储了所有的留言内容，通过函数给list添加一项留言数据，添加成功后把文本框置空
//       this.list.push({
//         name: this.username,
//         message: this.message
//       })
//       this.message = ''
//     },
//     handleReply: function (index) {
//       var name = this.list[index].name
//       this.message = '回复@' + name + ':'
//       this.$refs.message.focus()
//     }
//   }
// }
</script>

<style scoped>
.el-header {
    margin-left: 400px;
    margin-top: 150px;
    /* color: rgb(189, 186, 186); */
  }
.btn-con{
  margin-left: 100px;
  margin-top:40px; 
}
/* .message {
  display: flex;
  flex-direction: column;
}
.message div{
  margin-bottom: 12px;
  flex-direction: row;
}
.message input:focus,
.message textarea:focus{
  border: 1px solid #3399ff;
  border-radius: 5px;
}
.message .btn-con{
  text-align: center;
  display: inline-block;
}
.message .btn{
  padding: 6px 15px;
  border: 1px solid #39f;
  border-radius: 4px;
  color: #fff;
  background-color: #39f;
  cursor: pointer;
  outline: none;
} */
</style>
