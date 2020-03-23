<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-6 px-8">
        <Admin/>
      </div>
      <div class="col-md-6 px-8">
        <Organisation/>
      </div>
    </div>
  </div>
</template>

<script>
import Admin from './AdminSignin.vue';
import Organisation from './OrganisationLogin.vue';

export default {
  name: 'sign up',
  data() {
    return {
      status: 'logged in',
    };
  },
  components: {
    Admin, Organisation,
  },
};
</script>
