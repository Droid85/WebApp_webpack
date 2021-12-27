import MenuView from "./menu.view";
import("./menu.css");

export default class MenuController {
    constructor($el) {
        this.$container = $el;
        this.view = new MenuView();
    }

    init() {
        this.view.renderMenu(this.$container)
    }
}
