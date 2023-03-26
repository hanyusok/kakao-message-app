import API from "./API";

export default {
    getQuote(){
        return API().get('/')
    },
    createPost(data){
        return API('http://jsonplaceholder.typicode.com')
                .post('/posts', data)
    }
}