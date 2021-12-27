import $ from "jquery";
export default class LoginView {
  constructor(options) {
    this.options = options;
  }

  renderLoginForm($contrainer) {
    const $form = this.createForm();
    $contrainer.append($form);
    this.initListeners();
  }

  initListeners() {
    $("#login-btn").on("click", this.onClick);
  }

  onClick = () => {
    this.options.login();
  };
  
  createForm() {
    return $(
      `<div>
        <h1>Loging</h1>
        <input type="text" class = "login-input" placeholder="enter login"/>
        <input type="password" class = "login-input" placeholder="enter password"/>
        <button id="login-btn" class = "login-btn"> login </button>
        </div>`
    );
  }
}
