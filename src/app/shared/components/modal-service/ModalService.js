const ModalService = {
  on(event, callback) {
    document.addEventListener(event, (e) => callback(e.detail));
  },
  open(
    { component, props, title, size } = {
      component: "",
      props: {},
      title: "",
      size: "",
    }
  ) {
    document.dispatchEvent(
      new CustomEvent("open", { detail: { component, props, title, size } })
    );
  },
};

export default ModalService;
