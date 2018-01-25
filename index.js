// import routes from './routes';
import fs from 'fs';

const home_page_template = { template: fs.readFileSync(__dirname + '/templates/home.html', 'utf8') };
const start_page_template = { template: fs.readFileSync(__dirname + '/templates/start.html', 'utf8') };
const deposit_page_template = { template: fs.readFileSync(__dirname + '/templates/deposit.html', 'utf8') };
const credit_page_template = { template: fs.readFileSync(__dirname + '/templates/credit.html', 'utf8') };
const flat_page_template = { template: fs.readFileSync(__dirname + '/templates/flat.html', 'utf8') };
const result_page_template = { template: fs.readFileSync(__dirname + '/templates/result.html', 'utf8') };

const routes = [
  { path: '/', component: home_page_template },
  { path: '/start', component: start_page_template },
  { path: '/deposit', component: deposit_page_template },
  { path: '/credit', component: credit_page_template },
  { path: '/flat', component: flat_page_template },
  { path: '/result', component: result_page_template },
];

// init app
const app = new Vue({
  el: '#app',
  router: new VueRouter({routes}),
});
