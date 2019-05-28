import Axios from "axios";

const contentNode = document.querySelector('#j-content')
contentNode.innerHTML = 'hello world,brizer'

Axios.get('/api/get').then(data=>{
    console.warn(data.data)
})