<template>
  <v-app>
    <div class="sign-up-box">
      <v-card
        elevation="24"
        class="sign-up-form"
      >
        <v-card-title class="sign-up-title">SignUp</v-card-title>
        <v-card-subtitle class="sign-up-subtitle">ユーザー情報をご入力ください</v-card-subtitle>
        <v-btn text color="light-blue" to="login">ログインはこちら</v-btn>
        <v-form
          ref="form"
          v-model="valid"
          lazy-validation
        >
          <v-text-field
            v-model="name"
            :rules="nameRules"
            label="UserName"
            required
          ></v-text-field>

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
            class="sign-up-btn"
            @click="submit"
            :disabled="isValid"
          >
            SIGN UP
          </v-btn>

          <v-btn
            @click="clear">
            CLEAR
          </v-btn>

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
import {signUp} from "@/firebase/UserCreate";
export default {
  data: () => ({
    valid: true,
    name: '',
    nameRules: [
      v => !!v || 'ユーザー名を入力してください',
      v => (v && v.length <= 10) || 'ユーザー名は10文字以内で入力してください',
    ],
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
    isError: false,
    errorMessage: '',
  }),
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
      if (!signUp(this.name, this.email, this.password)) {
        this.errorMessage = 'ユーザーの新規登録に失敗しました'
      }
    },
    clear() {
      this.name = ''
      this.email = ''
      this.password = ''
      this.errorMessage = ''
    },
  },
}
</script>

<style scoped>
.sign-up-form {
  margin: 150px;
  padding: 30px;
}

.sign-up-box {
  width: 75%;
  margin: 0px auto;
  padding: 30px;
}

.sign-up-title {
  display: inline-block;
}

.sign-up-btn {
  margin-right: 20px;
}

.error-message {
  margin-top: 20px;
}
</style>