<template>
  <div class="container chat">
    <h2 class="text-primary text-center mb-2">Real Time Chat</h2>
    <h5 class="text-secondary text-center">
      Powered by <img src="@/assets/vue_logo.png" alt="Vue logo" /> and
      <img src="@/assets/firebase_logo.png" alt="Firebase logo" />
    </h5>
    <div class="card">
      <div class="card-body">
        <p v-if="!messages.length" class="text-secondary no_messages">
          [No messages yet!]
        </p>
        <div class="messages" v-chat-scroll="{ always: false, smooth: true }">
          <div v-for="message in messages" :key="message.id">
            <span :class="message.colour">[{{ message.name }}]: </span>
            <span>{{ message.message }}</span>
            <span class="text-secondary time">{{ message.timestamp }}</span>
          </div>
        </div>
      </div>
      <div class="card-action">
        <CreateMessage :name="name" :colour="colour"></CreateMessage>
      </div>
    </div>
  </div>
</template>

<script>
import CreateMessage from "@/components/CreateMessage.vue";
import fb from "@/firebase/init";
import moment from "moment";

export default {
  name: "Chat",
  props: ["name", "colour"],
  components: {
    CreateMessage
  },
  data() {
    return {
      messages: []
    };
  },
  created() {
    let ref = fb.collection("messages").orderBy("timestamp");

    ref.onSnapshot(snapshot => {
      snapshot.docChanges().forEach(change => {
        if (change.type == "added") {
          let doc = change.doc;
          this.messages.push({
            id: doc.id,
            name: doc.data().name,
            message: doc.data().message,
            colour: doc.data().colour,
            timestamp: moment(doc.data().timestamp).format("LTS")
          });
        }
      });
    });
  }
};
</script>

<style>
.chat h2 {
  font-size: 2.6em;
  margin-bottom: 0px;
}

.chat h5 {
  margin-top: 0px;
  margin-bottom: 40px;
}

.chat span {
  font-size: 1.2em;
}

.chat .time {
  display: block;
  font-size: 0.7em;
}

.messages {
  max-height: 300px;
  overflow: auto;
}
.container img {
  width: 32px;
  height: auto;
}
</style>
