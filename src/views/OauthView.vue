<template>
<div>
    <h1>oauth</h1>
    <button class="btn btn-primary" @click="getKakaoToken(authCode)">Get access Token  </button>
    <p>authorization code :{{authCode}}</p>
    <br>
    <p>access Token: {{info}}</p>
    <p>stored Token: {{savedToken}}</p>
</div>    
</template>
<script>

//import { ref } from 'vue'
import qs from 'qs'
import axios from 'axios'
const authCode = location.search.substring(6)


export default {     
    data() {
        return{
           authCode,
           info: null,
           savedToken: null             
        }
    },
    methods: {
        getKakaoToken(authCode) {                     
            console.log('authCode: ', authCode)
            console.log('requesting user access Token from Kakao')
            axios({
                method: 'POST',
                url: 'https://kauth.kakao.com/oauth/token',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
                },
                data: qs.stringify({
                    'grant_type': 'authorization_code',
                    'client_id': '3c4ba9cc89263b9e66bca4c176a4eaf3',
                    'client_secret': '8orFiiKOUqaaP5N1fbwfARNMmIuPpJCG',
                    'code': authCode,
                    'redirect_uri': 'http://localhost:5173/callback'
                })
            })
            .then((response) => {
                console.log(response.data)
                this.info = response.data.access_token

                console.log('saving access token')
                Kakao.Auth.setAccessToken(this.info)
                this.savedToken = Kakao.Auth.getAccessToken()
                console.log('saved access token: ', this.savedToken)
                
            })
            .catch((error) => {
                console.log(error)
            })                     
        }
               

    }
}
    
</script>