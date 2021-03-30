import Vue from 'vue';
import { registerMicroApps, start, setDefaultMountApp } from 'qiankun';

import qiankunLoader from './qiankun';
import microApps from './qiankun/micro-apps';
import App from './App.vue';

Vue.config.productionTip = false;

const loader = qiankunLoader({ Vue, component: App });
const apps = microApps.map((item) => ({
  ...item,
  loader,
}));

registerMicroApps(apps);

setDefaultMountApp('/sub-vue');

start();
