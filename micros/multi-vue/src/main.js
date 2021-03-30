import './public-path';

import Vue from 'vue';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;
let instance = null;

function render(props = {}) {
  const { microAppRouterBase } = props;
  instance = new Vue({
    router: router({ microAppRouterBase }),
    render: (h) => h(App),
  }).$mount('#app');
}

// eslint-disable-next-line no-underscore-dangle
if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

export async function bootstrap() {
  console.log('[vue] vue app bootstraped');
}

export async function mount(props) {
  render(props);
}

export async function unmount() {
  instance.$destroy();
  instance.$el.innerHTML = '';
  instance = null;
}
