import Mock from 'mockjs'
import navlist from './navlist'

let data = [].concat(navlist)

data.forEach(function(res){
    Mock.mock(res.path, res.data)
})

export default Mock