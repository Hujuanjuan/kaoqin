<template>
<div>
<el-header style="text-align: left"> 
  <el-date-picker
      v-model="value1"
      type="date"
      placeholder="选择日期" style="width:20%">
  </el-date-picker>  
  <el-input placeholder="请输入课程名" v-model="input3" class="input-with-select" style="width:20%"></el-input>  
  <el-button icon="el-icon-search" circle></el-button>
  <el-button type="primary" size="small" @click="addStudent()">添加</el-button>
</el-header>
  <el-table :data="tableData" border style="width: 100%">
    <el-table-column fixed prop="date" label="日期" align="center"></el-table-column>
    <el-table-column prop="name" label="姓名" align="center"></el-table-column>
    <el-table-column prop="college" label="学院" align="center"></el-table-column>
    <el-table-column prop="class" label="班级" align="center"></el-table-column>
    <el-table-column prop="course_name" label="课程名" align="center"></el-table-column>
    <el-table-column prop="kaoqin" label="状态" align="center"></el-table-column>
    <el-table-column fixed="right" label="操作" align="center">
      <template slot-scope="scope">
        <el-button type="primary" size="small" @click="handleClick(scope.row,$index)">修改</el-button>
        <el-button @click.native.prevent="deleteRow(scope.$index, tableData)" type="danger" size="small">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
   <el-dialog :title="title" :visible.sync="dialogFormVisible">
       <el-form label-width="80px" :model="formLabelAlign">
          <el-form-item label="日期">
          <el-date-picker v-model="formLabelAlign.date" value-format="yyyy-MM-dd" type="date" placeholder="选择日期时间"></el-date-picker>
        </el-form-item>
        <el-form-item label="姓名">
          <el-input v-model="formLabelAlign.name"></el-input>
        </el-form-item>
        <el-form-item label="学院">
          <el-input v-model="formLabelAlign.college"></el-input>
        </el-form-item>
        <el-form-item label="班级">
          <el-input v-model="formLabelAlign.class"></el-input>
        </el-form-item>
          <el-form-item label="状态">
          <el-input v-model="formLabelAlign.kaoqin"></el-input>
        </el-form-item>
      </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button type="danger" @click="dialogFormVisible = false">取消</el-button>
      <el-button type="primary" @click="save">保存</el-button>
    </div>
  </el-dialog>
</div>
</template>

<style>
.el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 70px;
  }
  .el-select .el-input {
    width: 120px;
  }

  .input-with-select {
    background-color: rgb(444, 444, 444);
    background-color: #B3C0D1
  }
</style>

<script>
  export default {
    data() {
    //时间选择器
      return {
        input3:'',
        title:'',
        value1:'',
        type:'',
        index:'',
        course_name:'',
        formLabelAlign:{},
        dialogFormVisible:false,
         pickerOptions: {
          disabledDate(time) {
            return time.getTime() > Date.now();
          }
         },
     // 添加
        dialogTableVisible: false,
        dialogFormVisible: false,
        form: {
          name: '王小虎',
          college: '',
          class: '',
          kaoqin:'',
          date: '',
          course_name:''
        },
        formLabelWidth: '80px',
        //数据
        tableData: [{
          date: '4019-04-04',
          name: '王小虎',
          college: '信息工程',
          class: '软件2班',
          kaoqin: '缺勤',
          course_name:'数据结构'
        }, {
          date: '4019-01-43',
          name: '胡三',
          college: '信息工程',
          class: '软件1班',
          kaoqin: '出勤',
          course_name:'数据结构'
        },{
          date: '4019-04-04',
          name: '章虎',
          college: '信息工程',
          class: '软件2班',
          kaoqin: '出勤',
          course_name:'数据结构'
        },{
          date: '4019-03-04',
          name: '李四',
          college: '信息工程',
          class: '软件1班',
          kaoqin: '请假',
          course_name:'数据结构'
        },{
          date: '4019-04-04',
          name: '苏菲',
          college: '信息工程',
          class: '计科1班',
          kaoqin: '缺勤',
          course_name:'数据结构'
        },]
      }
    },
    methods: {
      //修改
       handleClick(row,index) {
         this.title = '修改信息'
         this.type = 'edit'
        // deleteRow.log(row);
        this.dialogFormVisible = true
        this.formLabelAlign = row
        this.index = index
      },
      //添加
      addStudent(){
        this.title = '添加信息'
        this.type = 'add'
        this.formLabelAlign = {}
        this.dialogFormVisible = true
      },
      //保存
      save(){
        this.dialogFormVisible = false
        if(this.type=='add'){
          this.tableData.splice(this.tableData.length, 0,{
            date: this.formLabelAlign.date,
            name: this.formLabelAlign.name,
            college: this.formLabelAlign.college,
            class: this.formLabelAlign.class,
            kaoqin: this.formLabelAlign.kaoqin
          });
        }else if(this.type=='edit'){
          this.tableData[this.index] = {
            date: this.formLabelAlign.date,
            name: this.formLabelAlign.name,
            college: this.formLabelAlign.college,
            class: this.formLabelAlign.class,
            kaoqin: this.formLabelAlign.kaoqin
          };
        }
        
      },
      //提示是否确认删除
       deleteRow(index, rows) {
        this.$confirm('此操作将永久删除, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
          center: true
        }).then(() => {
          rows.splice(index, 1);
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
      }
    },
  }
</script>