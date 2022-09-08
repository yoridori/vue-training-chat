<template>
  <v-app>
    <div class="login-box">
      <v-card
        elevation="24"
        class="login-form"
      >
        <v-card-title class="login-title">Login</v-card-title>
        <v-card-subtitle class="login-subtitle">ユーザー情報をご入力ください</v-card-subtitle>
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
          >
            LOGIN
          </v-btn>

          <v-btn
            @click="clear">
            CLEAR
          </v-btn>

        </v-form>
      </v-card>
    </div>
  </v-app>
</template>

<script>
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
    ]
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
</style>