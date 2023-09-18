
<template>
    <div class="login_class">
    <div class="login_box">
    <div class="avatart_box">
      <img  src="../assets/logo.png">
    </div>
    <div class="TianKo">
<el-form ref="LoginFromRef" :model="LoginFrom" :rules="rules" label-width="80px">
  <el-form-item prop="username" label="登录账号">
    <el-input  v-model="LoginFrom.username"></el-input>
  </el-form-item>
  <el-form-item prop="password" label="密码">
    <el-input type="password" v-model="LoginFrom.password"></el-input>
  </el-form-item>
  <!-- 按钮 -->
     <el-button  @click="login" type="primary" round>登录</el-button>
  <el-button round @click="resetLoginForm">清空</el-button>
   
    </el-form>
    <div class="login_button">
    </div>
    </div>
    </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      LoginFrom:{
        username:'admin',
        password:'123456',
      },
       rules: {
          username: [
            { required: true, message: '账号名称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
           password: [
            { required: true, message: '密码', trigger: 'blur' },
            { min: 6, max: 15, message: '长度在 6 到 15 个字符', trigger: 'blur' }
          ],
          },
    };
  },
  methods:{//函数区块
  //重置登录表单
    resetLoginForm(){
      this.$refs.LoginFromRef.resetFields();
    },
    login(){
      this.$refs.LoginFromRef.validate(async valid=>{
        if(!valid)return;
       const {data:res} = await this.$axios.post('login',this.LoginFrom);
        if(res.meta.status!==200)return this.$message.error("登录失败");
        this.$message.success('登录成功');
        window.sessionStorage.setItem("token",res.data.token);
        this.$router.push("/home");
      })
    }
  }
};
</script>
<style lang="less" scoped>
.login_class{
    background-color: aquamarine;
    height: 100%;
}
.login_box{
  width: 450px;
  height: 300px;
  background-color: aliceblue;
  border-radius: 5px;
  position: absolute;
  left: 50%;
   margin-left: -250px;
  top: 50%;
  margin-top: -200px;
   transition: all 0.5s ease;
   /* 延迟动画&*/
}
.login_box:hover{
  border-radius: 50px;

}
.avatart_box{
   position: absolute;
  left: 50%;
   margin-left: -50px;
  top: 50%;
  margin-top: -200px;
  height: 100px;
  width: 100px;
  img{
    width: 100%;
    height: 100%;
  }
}
.TianKo{
  background-color: aliceblue;
  border-radius: 5px;
  position: absolute;
  left: 50%;
   margin-left: -160px;
  top: 50%;
  margin-top: -120px;
}
.login_button{
  position: absolute;
  left: 50%;
  margin-left: -5W0px;
  top: 50%;
  margin-top: 100px;
}
</style>