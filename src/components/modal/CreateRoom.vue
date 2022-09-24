<template>
  <v-row justify="center">
    <v-dialog
        v-model="dialog"
        persistent
        max-width="600px"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
            color="primary"
            dark
            v-bind="attrs"
            v-on="on"
        >
          Create Room
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="text-h5">New Room</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field
                    v-model="name"
                    label="Room Name*"
                    required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <template>
                  <v-file-input
                      v-model="file"
                      truncate-length="15"
                      accept="image/jpeg, image/jpg, image/png"
                      label="File input"
                  ></v-file-input>
                </template>
              </v-col>
            </v-row>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
              color="blue darken-1"
              text
              @click="dialog = false"
          >
            Close
          </v-btn>
          <v-btn
              color="blue darken-1"
              text
              @click="onSubmit"
          >
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import {getDownloadURL, getStorage, ref, uploadBytes} from "firebase/storage";
import {addDoc, collection, Timestamp} from "firebase/firestore";
import {db} from "@/firebase/Db";

export default {
  data: () => ({
    dialog: false,
    name: "",
    file: null,
  }),
  methods: {
    async onSubmit() {
      console.log("onSubmit called", this.name, this.file)
      let thumbnailUrl = ''
      if (this.file) {
        const filePath = `/room/${this.file.name}`
        thumbnailUrl = await uploadBytes(ref(getStorage(), filePath), this.file).then((snapshot) => {
          console.log('Uploaded a blob or file!');
          console.log(snapshot);

          return getDownloadURL(snapshot.ref).then((url) => {
            console.log('url: ' + url)
            return url

          }).catch((error) => {
            console.log('getDownloadURL error: ' + error)
            return ""
          })
        })
      }
      console.log(`thumbnailUrl: ${thumbnailUrl}`)
      const collect = collection(db, "rooms")
      await addDoc(collect, {
        name: this.name,
        thumbnailUrl: thumbnailUrl,
        createdAt: Timestamp.now(),
      }).then(result => {
        console.log(`success to create room ${result}`)
        this.dialog = false
      })

    }
  }
}
</script>