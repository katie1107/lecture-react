const tag = "[Controller]";

export default class Controller {
  constructor(store, {searchFormView}) {
    console.log(tag, "constructor");

    this.store = store;
    this.searchFormView = searchFormView;
    this.subscribeViewEvents();
  }

  // TODO
  subscribeViewEvents() {
    this.searchFormView.on("@submit", (event) => this.search(event));
  }

  search(keyword) {
    console.log(tag,keyword);
  }
}
