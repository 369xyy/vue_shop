<template>
    <div >主页
    <el-button @click="Dle_token" type="success">退出</el-button>
    </div>
</template>
<script>

export default {
    methods:{
        Dle_token(){
            window.sessionStorage.clear();
            this.$router.push("/login");
            this.$message.success("退出登录成功")
        }
    }
}
</script>
<style scoped>

</style>