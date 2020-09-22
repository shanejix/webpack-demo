function getComponent() {
  return import(/* webpackChunkName: "lodash" */ "lodash")
    .then((_) => {
      var element = document.createElement("div");

      // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
      element.innerHTML = _.join(["Hello", "webpack"], " ");

      return element;
    })
    .catch((error) => "An error occurred while loading the component");
}

getComponent().then((component) => {
  setTimeout(() => {
    document.body.appendChild(component);
  }, 3000);
});
