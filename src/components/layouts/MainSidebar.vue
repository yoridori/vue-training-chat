<template>
  <v-navigation-drawer
      v-model="drawer"
      app
  >
    <v-sheet
        color="grey lighten-4"
        class="pa-4"
    >
      <v-avatar
          class="mb-4"
          color="grey darken-1"
          size="64"
      ></v-avatar>

      <div class="username">john@vuetifyjs.com</div>
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
import { getAuth, signOut } from "firebase/auth";

export default {
  name: 'MainSidebar',
  data: () => ({
    drawer: null,
    links: [
      ['mdi-inbox-arrow-down', 'Inbox', '/'],
      ['mdi-send', 'Send', 'about'],
      ['mdi-delete', 'Trash', 'about'],
      ['mdi-alert-octagon', 'Spam', 'about'],
    ],
  }),
  methods: {
    logout () {
      const auth = getAuth();
      signOut(auth).then(() => {
        // Sign-out successful.
        localStorage.message = "ログアウトに成功しました"
        this.$router.push('/login')
      }).catch((error) => {
        // An error happened.
        console.log(error)
      });

    }
  }
}
</script>

<style scoped>

</style>