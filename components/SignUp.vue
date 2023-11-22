<template>
    <div id="auth">
      create account
      <input id="email" v-model="email">
      <input id="password" type="password" v-model="password">
      <button id="submit" @click="signup">Sign Up</button>
    </div>
</template>

<script>
  import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
  import {app} from "../firebaseinit.ts"

    const auth = getAuth();
    
    export default {
        methods: {
            async signup() {
                createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;
                    // ...
                })
            }
            }
        }

</script>