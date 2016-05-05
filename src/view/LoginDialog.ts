import Component from "../lib/ui/Component";
import * as Rx from "rx";
import {appViewModel} from "../viewmodel/AppViewModel";

export default
class LoginDialog extends Component {
  static template = `
    <div class='sg-login-dialog'>
      <section class='dialog'>
        <h1>Sign in</h1>
        <button class='login-google'>Continue with Google</button>
      </section>
    </div>
  `;

  clicked = Rx.Observable.fromEvent(this.elementFor(".login-google"), 'click');

  constructor(mountPoint: Element) {
    super(mountPoint);
    this.disposables.add(
      appViewModel.isLoginNeeded.observable.map(x => !x).subscribe(this.slot.isHidden()),
      this.clicked.subscribe(() => this.auth())
    );
  }

  auth() {
    appViewModel.logIn();
  }
}
