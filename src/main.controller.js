import $ from "jquery";
import login from "./features/login/login.controller";
import layout from "./core/layout/layout.controller";
import menu from "./core/header/menu/menu.controller";

export default class MainController {
  constructor($el) {
    this.$root = $el;
    this.loginController = new login(this.$root, {
      onLogin: () => this.userLogon(),
    });
    this.layoutController = new layout(this.$root);
    this.useLogin();
  }

  useLogin() {
    this.loginController.init();
  }

  userLogon() {
    this.clearRoot();
    this.layoutController.init();
    this.userMenu();
  }

  userMenu() {
    const headerEl = $('#header-container');
    this.menuController = new menu(headerEl);
    this.menuController.init();
  }

  clearRoot() {
    this.$root.empty();
  }
  
  useLayout() {}
}
