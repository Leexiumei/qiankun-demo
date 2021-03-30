function render({
  isLoading, Vue, component,
}) {
  return new Vue({
    el: '#app',
    data() {
      return {
        isLoading,
      };
    },
    render: (h) => h(component),
  });
}

let instance = null;

function loader({ Vue, component }) {
  return ({ loading: isLoading }) => {
    if (!instance) {
      instance = render({
        isLoading, Vue, component,
      });
    } else {
      instance.isLoading = isLoading;
    }

    return instance;
  };
}

export default loader;
