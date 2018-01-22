import routes from './routes';

// 4. Create and mount the root instance.
const app = new Vue({
  el: '#app',
  router: new VueRouter({routes: routes}),
});
