import fs from 'fs';

const home_page_template = { template: fs.readFileSync(__dirname + '/templates/home.html', 'utf8') };
const start_page_template = { template: fs.readFileSync(__dirname + '/templates/start.html', 'utf8') };

const routes = [
  { path: '/', component: home_page_template },
  { path: '/start', component: start_page_template }
];
