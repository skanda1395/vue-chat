<template>
  <div class="container">
    <div class="card login">
      <div class="card-body">
        <h2 class="card-title text-center">Login</h2>
        <form @submit.prevent="login" class="text-center">
          <div class="form-group">
            <input
              type="text"
              class="form-control"
              placeholder="Please enter your name"
              name="name"
              v-model="name"
            />
            <p v-if="errorText" class="text-danger">{{ errorText }}</p>
          </div>
          <button type="submit" class="btn btn-primary">Enter Chat</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      name: "",
      errorText: null,
      colour: [
        "text-success",
        "text-danger",
        "text-warning",
        "text-info",
        "text-dark"
      ]
    };
  },
  methods: {
    login() {
      if (this.name) {
        this.$router.push({
          name: "Chat",
          params: { name: this.name, colour: this.randomColour() }
        });
      } else {
        this.errorText = "Please enter a name first!";
      }
    },
    randomColour() {
      let randomIndex = Math.floor(Math.random() * this.colour.length);
      return this.colour[randomIndex];
    }
  }
};
</script>

<style>
.login {
  max-width: 450px;
  display: block;
  margin: 50px auto;
}
</style>
