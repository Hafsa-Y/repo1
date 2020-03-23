import Vue from 'vue';
import VueRouter from 'vue-router';
import SignUp from '../components/Registration/signup.vue';
import Questionnaire from '../components/Questionnaire/Questionnaire.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'SignUp',
    component: SignUp,
  },
  {
    path: '/questionnaire',
    name: 'Questionnaire',
    component: Questionnaire,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
