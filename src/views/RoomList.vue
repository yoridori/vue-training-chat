<template>
  <v-app id="inspire">
    <MainSidebar/>
    <v-app-bar
        app
        shrink-on-scroll
    >
      <v-toolbar-title>ルーム一覧</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <v-container>
        <v-row>
          <v-col
              v-for="n in 24"
              :key="n"
              cols="4"
          >
            <router-link :to="{ path: '/chat', query: { user_id: n }}">
              <v-avatar
                  color="grey lighten-2"
                  size="128"
              ></v-avatar>
            </router-link>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import MainSidebar from "@/components/layouts/MainSidebar";
import {collection, getDocs} from "firebase/firestore";
import {db} from "@/firebase/Db";

export default {
  name: 'RoomList',
  components: {
    MainSidebar,
  },
  mounted() {
    this.getRooms()
  },
  methods: {
    async getRooms() {
      console.log("getRooms call")

      const querySnapshot = await getDocs(collection(db, "rooms"));
      querySnapshot.forEach(doc => {
        console.log(doc.id, " => ", doc.data().name);
      });
    },
  },
}
</script>
