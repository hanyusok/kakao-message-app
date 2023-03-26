<template>
  <div>
    <h1>KAKAO LOGIN page</h1>
    <a id="kakao-login-btn" @click="kakaoLogin">
      <img src="../assets/kakao_login_medium_narrow.png" />      
    </a>
    
    
  </div>

</template>

<script>
export default {   
  methods: {
    kakaoLogin() {    
      const redirUri = 'http://127.0.0.1:5173/callback'
        Kakao.Auth.authorize({ 
          redirectUri: redirUri,
          throughTalk: true
        })
    }           
  }   
}


</script>

<style>

</style>