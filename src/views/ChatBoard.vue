<template>
  <v-app id="inspire">
    <MainSidebar/>
    <v-main>
      <h1>{{ room ? room.name : "" }}</h1>
      <v-container
          class="py-8 px-6"
          fluid
      >
        <v-row>
          <v-col
              v-for="card in cards"
              :key="card"
              cols="12"
          >
            <v-card>
              <v-subheader>{{ card }}</v-subheader>

              <v-list two-line>
                <template v-for="(data, index) in messages">
                  <v-list-item

                      :key="index"
                  >
                    <v-list-item-avatar color="grey darken-1">
                      <v-img :src="data.photoUrl"></v-img>
                    </v-list-item-avatar>

                    <v-list-item-content>
                      <!--                      <v-list-item-title>Message {{ n }}</v-list-item-title>-->

                      <v-list-item-subtitle class="message">
                        {{ data.message }}
                      </v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>

                  <v-divider
                      v-if="index !== 6"
                      :key="`divider-${index}`"
                      inset
                  ></v-divider>
                </template>
              </v-list>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
      <v-textarea
          v-model="body"
          append-icon="mdi-comment"
          class="mx-2"
          label="メッセージを送信する"
          auto-grow
          rows="3"
      ></v-textarea>
      <v-btn
          class="mr-4"
          type="submit"
          :disabled="invalid"
          @click="submit"
      >
        submit
      </v-btn>
      <v-btn @click="clear">
        clear
      </v-btn>
    </v-main>
  </v-app>
</template>

<script>
import {db} from "@/firebase/Db";
import MainSidebar from "@/components/layouts/MainSidebar";
import {collection, doc, getDoc, getDocs, orderBy, query, Timestamp} from "firebase/firestore";

export default {
  components: {
    MainSidebar,
  },
  async created() {
    this.room_id = this.$route.query.room_id
    console.log("room_id: " + this.room_id)

    const roomRef = doc(db, 'rooms', this.room_id)
    const roomDoc = await getDoc(roomRef)

    if (!roomDoc.exists()) {
      console.log("No such document!");
      await this.$router.push('/')
    }
    this.room = roomDoc.data()
    console.log("Document data:", this.room);

    // メッセージを取得
    const messagesRef = collection(roomRef, 'messages')
    const snapshot = await getDocs(query(messagesRef, orderBy('createdAt')))
    // snapshot.forEach(doc => {
    //   console.log(doc)
    // })
    snapshot.docs.map(doc => {
      console.log(doc.data())
      this.messages.push(doc.data())
    })
  },
  mounted() {
    this.auth = JSON.parse(sessionStorage.getItem('user'))
    console.log(`auth: ${this.auth}`)
  },
  data: () => ({
    messages: [],
    body: '',
    room_id: '',
    room: null,
    cards: ['Today'],
    drawer: null,
    links: [
      ['mdi-inbox-arrow-down', 'Inbox'],
      ['mdi-send', 'Send'],
      ['mdi-delete', 'Trash'],
      ['mdi-alert-octagon', 'Spam'],
    ],
    auth: null,
  }),
  computed: {
    invalid() {
      console.log('computed, invalid')
      if (!this.body) {
        return true
      }
      return false
    }
  },
  methods: {
    clear() {
      console.log("clear call")
      this.body = ""
    },
    submit() {
      console.log("submit call", this.body)
      this.messages.unshift({
        message: this.body,
        name: this.auth.displayName,
        photoUrl: this.auth.photoURL,
        createdAt: Timestamp.now(),
      })
      this.body = ""
    }
  },
}
</script>

<style scoped>
.message {
  text-align: left;
}

</style>