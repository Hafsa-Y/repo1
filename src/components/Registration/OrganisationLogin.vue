<template>
  <form @submit="submitInfo">
      <div class='form-group'>
        <label for="name">Name of Organisation</label>
        <input type="text" id="name" class='form-control' v-model='name' />
      </div>
      <div class='form-group'>
        <label for="email">Organisation Email</label>
        <input type="text" id="email" class='form-control' v-model='email'/>
      </div>
      <div class='form-group'>
        <label for="country">Country</label>
        <input
          type="text"
          id="country"
          class='form-control'
          v-model='country'/>
      </div>
      <div class='form-group'>
        <label for="year">Year of Establishment</label>
        <input type="date" id="year" class='form-control' v-model='year' />
      </div>
      <div class='form-group'>
        <label for="phone">Telephone Number</label>
        <input type="text" id="phone" class='form-control' v-model='phone'/>
      </div>
      <div class='form-group'>
        <label for="background">Organisation Background</label>
        <textarea
          type="text"
          id="background"
          class='form-control'
          v-model='background'/>
      </div>
      <button class="btn btn-primary btn-block">Submit</button>
  </form>
</template>

<script>
export default {
  name: 'OrganisationRegistration',
  data() {
    return {
      status: 'accept',
      name: '',
      email: '',
      country: '',
      phone: '',
      year: '',
      background: '',
      orgInfo: {},
    };
  },
  methods: {
    submitInfo(e) {
      e.preventDefault();
      this.orgInfo = {
        name: this.name,
        email: this.email,
        country: this.country,
        phone: this.phone,
        year: this.year,
        background: this.background,
      };
      console.log(this.orgInfo);
    },
  },
};
</script>
