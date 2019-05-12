import Vue from 'vue'

// const baseUrlApi = 'http://127.0.0.1:7002/
// const baseUrlApi = '/'
const baseUrlApi = 'http://127.0.0.1:7002/'
// Vue.http.headers.common['token'] = localStorage.getItem('token');
const api = {
    //登录
    login(params) {
        return Vue.http.post(baseUrlApi + 'api/user/login', params).then();
    },
    //用户列表
    userlist(params) {
        return Vue.http.post(baseUrlApi + 'api/user/list', params).then();
    },
    //班级
    list(params) {
        return Vue.http.post(baseUrlApi + 'api/class/list', params).then();
    },
    //请假审批
    apply(params) {
        
        return Vue.http.post(baseUrlApi + 'api/leave/apply', params).then();
    },
    // list(params) {
    //     
    //     return Vue.http.post(baseUrlApi + 'api/leave/approval', params).then();
    // },
    // list(params) {
    //     
    //     return Vue.http.post(baseUrlApi + 'api/leave/list', params).then();
    // },
    // //考勤
    // list(params) {
    //     
    //     return Vue.http.post(baseUrlApi + 'api/assess/add', params).then();
    // },
    // list(params) {
    //     
    //     return Vue.http.post(baseUrlApi + 'api/assess/query', params).then();
    // },
    // //留言
    // list(params) {
    //     
    //     return Vue.http.post(baseUrlApi + 'api/massage/add', params).then();
    // },
    // list(params) {
    //     
    //     return Vue.http.post(baseUrlApi + 'api/massage/query', params).then();
    // },
}
export default api