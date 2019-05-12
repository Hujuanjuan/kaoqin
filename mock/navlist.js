var data = [
    {
        path: '/dashboard',
        name: '首页'
    },
    {
        name: '完整示例',
        child: [
            {
                path: '/table',
                name: '列表页面',
                permission: ['edit']
            },
            // {
            //     path: '/tree',
            //     name: '属性页面'
            // },
        ]
    },
    {
        path: '/form',
        name: '表单'
    }
]

export default [{
    path: '/user/navlist',
    data: data
}]