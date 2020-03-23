<template>
  <form @submit="submitAdmin">
    <div class='form-group'>
      <label for="Email">Email of Organisation</label>
      <input type="text" id="Email" class='form-control' v-model="email"/>
    </div>
    <div class='form-group'>
      <label for="password">Password</label>
      <input type="password" id="password" class='form-control' v-model="password"/>
    </div>
    <button class="btn btn-primary btn-block">Login</button>
  </form>
</template>

<script>
export default {
  name: 'AdminSignin',
  data() {
    return {
      status: 'accept',
      email: '',
      password: '',
      adminInfo: {},
    };
  },
  methods: {
    submitAdmin(e) {
      e.preventDefault();
      this.adminInfo = {
        email: this.email,
        password: this.password,
      };
      console.log(this.adminInfo);
    },
  },
};
</script>
