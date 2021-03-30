function generateActiveRule(name) {
  return `/${name}`;
}

const microApps = [
  {
    name: 'sub-vue',
    entry: '//localhost:7777/subapp/sub-vue/',
  },
  {
    name: 'multi-vue',
    entry: '//localhost:8888/subapp/multi-vue/',
  },
];

const apps = microApps.map((x) => ({
  ...x,
  activeRule: generateActiveRule(x.name),
  container: '#subapp-viewport',
  props: {
    microAppRouterBase: generateActiveRule(x.name),
  },
}));

export default apps;
