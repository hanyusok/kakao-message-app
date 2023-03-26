<template>
  <div class="home">
    <i>{{quote}}</i>
    <p>- Kanye West -</p>
  </div>
  <p>
    <button @click="createPost">Create Post</button>
  </p>
</template>


<script>
import axios from 'axios'
import  {ref}  from 'vue'
import KanyeAPI from '../services/KanyeAPI'

export default {
  setup(){
    const quote = ref('')

    const loadQuote = async () => { 
      try{
      //const response = await axios.get('http://api.kanye.rest')
      const response = await KanyeAPI.getQuote()
      quote.value = response.data.quote
      } catch (err) { console.log(err) }      
      }
    
    loadQuote()

    const createPost = async () => {
      const response = await KanyeAPI.createPost(JSON.stringify({
          title: 'hanyusok',
          body: 'heis doing well',
          userId: 15
        }))
      // axios.post('https://jsonplaceholder.typicode.com/posts',
      //   JSON.stringify({
      //     title: 'hanyusok',
      //     body: 'heis doing well',
      //     userId: 15
      //   })).then(response => {
      //     console.log(response)
      //   })
      console.log(response)
    } 

    return { quote, createPost }
  }
}

</script>

<style>

@media (min-width: 1024px) {
  .home {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
  .button {
margin-top: 50px;
}
}
</style>