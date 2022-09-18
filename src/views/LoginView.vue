<template>
  <v-app>
    <div class="login-box">
      <v-card
        elevation="24"
        class="login-form"
      >
        <v-card-title class="login-title">Login</v-card-title>
        <v-card-subtitle class="login-subtitle">ユーザー情報をご入力ください</v-card-subtitle>
        <v-btn text color="light-blue" to="signup">新規登録はこちら</v-btn>
        <v-form
          ref="form"
          v-model="valid"
          lazy-validation
        >
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            required
          ></v-text-field>

          <v-text-field
            v-model="password"
            type="password"
            :rules="passwordRules"
            label="Password"
            required
          ></v-text-field>

          <v-btn
            color="success"
            class="login-btn"
            :disabled="isValid"
            @click="submit"
          >
            LOGIN
          </v-btn>

          <v-btn
            @click="clear">
            CLEAR
          </v-btn>

          <v-alert
            dense
            text
            type="success"
            class="success-message"
            v-if="message"
          >
            {{ message }}
          </v-alert>

          <v-alert
            dense
            outlined
            type="error"
            class="error-message"
            v-if="errorMessage"
          >
            {{ errorMessage }}
          </v-alert>

        </v-form>
      </v-card>
    </div>
  </v-app>
</template>

<script>
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default {
  data: () => ({
    valid: true,
    email: '',
    emailRules: [
      v => !!v || 'メールアドレスを入力してください',
      v => /.+@.+\..+/.test(v) || '不正なメールアドレスです',
    ],
    password: '',
    passwordRules: [
      // 二重否定は正確にbooleanの型にする
      v => !!v || 'パスワードを入力してください',
    ],
    message: '',
    errorMessage: '',
  }),
  mounted() {
    if(localStorage.message){
      this.message = localStorage.message
      localStorage.message = ''
    }
  },
  computed: {
    isValid() {
      return !this.valid
    },
  },
  methods: {
    validate() {
      this.$refs.form.validate()
    },
    reset() {
      this.$refs.form.reset()
    },
    resetValidation() {
      this.$refs.form.resetValidation()
    },
    submit() {
      const auth = getAuth();
      signInWithEmailAndPassword(auth, this.email, this.password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log("user", user)
          const auth = {
            displayName: user.displayName,
            email: user.email,
            uid: user.uid,
            refreshToken: user.refreshToken
          }

          sessionStorage.setItem('user', JSON.stringify(auth))

          this.$router.push("/")
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log("Error!: ", errorCode)
          console.log("ErrorMessage: ", errorMessage)
          this.errorMessage = "ログインに失敗しました"
        });

    },
    clear() {
      this.email = ''
      this.password = ''
    },
  },
}
</script>

<style scoped>
.login-form {
  margin: 150px;
  padding: 30px;
}

.login-box {
  width: 75%;
  margin: 0px auto;
  padding: 30px;
}

.login-title {
  display: inline-block;
}

.login-btn {
  margin-right: 20px;
}

.success-message {
  margin-top: 20px;
}

.error-message {
  margin-top: 20px;
}
</style>