<template>
  <div id="auth">
    login
    <input id="email" v-model="email">
    <input id="password" type="password" v-model="password">
    <button id="submit" @click="login">Login</button>
  </div>
</template>
  
<script>
  import { getAuth, signInWithEmailAndPassword} from "firebase/auth";
  import {app} from "../firebaseinit.ts"

  const auth = getAuth(app);
  console.log(auth)
  export default {
    methods: {
      async login() {
        signInWithEmailAndPassword(auth, "test@gmail.com", "test123").then((userCredential) => {
      console.log(userCredential)
      // Signed up 
        const user = userCredential.user;
      //   // ...
    })
      }
    }
  }
</script>

<style>
  #auth {
    display: flex;
    flex-direction: column;
    max-width: 10%;
    justify-self: center;
    align-self: center;
  }
</style>