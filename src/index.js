import $ from "jquery";
import MainController from "./main.controller";
import("./styles.css");

const $container = $("#root");

new MainController($container);
