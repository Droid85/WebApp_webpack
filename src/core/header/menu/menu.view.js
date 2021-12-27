import $ from "jquery";

export default class MenuView {
    constructor() {}
    renderMenu($container) {
      const $menu = this.creatMenu();
      $container.append($menu);
    }

    creatMenu() {
      return $(`
      <div class="menu-list">
      <a class="menu-link">Create user</a>
      <a class="menu-link">Chat</a>
      </div>
      `)
    }
}
