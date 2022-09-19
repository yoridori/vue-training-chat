<template>
  <v-navigation-drawer
      v-model="drawer"
      app
  >
    <v-sheet
        color="grey lighten-4"
        class="pa-4"
    >
      <v-avatar color="indigo">
        <input
            type="file"
            ref="fileInput"
            accept="image/jpeg, image/jpg, image/png"
            style="display: none"
            @change="updateIcon"
        >
        <v-icon dark
                @click="changeIcon">
          mdi-account-circle
        </v-icon>
      </v-avatar>

      <div class="username">{{ auth && auth.displayName }}</div>
    </v-sheet>

    <v-divider></v-divider>

    <v-list>
      <v-list-item
          v-for="[icon, text, to] in links"
          :key="icon"
          :to="to"
          link
      >
        <v-list-item-icon>
          <v-icon>{{ icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ text }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-list-item
          @click="logout">
        <v-list-item-icon>
          <v-icon>
            mdi-logout
          </v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>Logout</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

    </v-list>
  </v-navigation-drawer>
</template>


<script>
import {getAuth, onAuthStateChanged, signOut} from "firebase/auth";
import {getStorage, ref, uploadBytes} from "firebase/storage";

export default {
  name: 'MainSidebar',
  mounted() {
    this.auth = JSON.parse(sessionStorage.getItem('user'))

  },
  data: () => ({
    drawer: null,
    links: [
      ['mdi-inbox-arrow-down', 'Inbox', '/'],
      ['mdi-send', 'Send', 'about'],
      ['mdi-delete', 'Trash', 'about'],
      ['mdi-alert-octagon', 'Spam', 'about'],
    ],
    auth: null,
  }),
  methods: {
    logout() {
      const auth = getAuth();
      signOut(auth).then(() => {
        // Sign-out successful.
        localStorage.message = "ログアウトに成功しました"
        sessionStorage.setItem('user', '')
        this.$router.push('/login')
      }).catch((error) => {
        // An error happened.
        console.log(error)
      });

    },
    changeIcon() {
      this.$refs.fileInput.click()
    },
    updateIcon() {
      const user = this.getAuth()
      console.log(user)
      if (!user) {
        console.log("logout?")
        sessionStorage.removeItem('user')
        this.$router.push('/login')
      }

      const file = this.$refs.fileInput.files[0]
      const filePath = `/user/${file.name}`
      console.log(file)
      console.log(filePath)

      const storage = getStorage();
      console.log(storage)
      const storageRef = ref(storage, filePath);
      console.log(storageRef)

      uploadBytes(storageRef, file).then((snapshot) => {
        console.log('Uploaded a blob or file!');
        console.log(snapshot);
      });


    },
    getAuth() {
      const auth = getAuth();
      console.log(auth)
      return onAuthStateChanged(auth, (user) => {
        return user
      })
    }
  }
}
</script>

<style scoped>

</style>