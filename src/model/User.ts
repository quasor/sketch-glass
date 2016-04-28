import * as Rx from "rx";
import Variable from "../lib/rx/Variable";
import TreeDisposable from "../lib/TreeDisposable";

export default
class User extends TreeDisposable {
  name = new Variable("");
  emailMD5 = new Variable("");
  saveRequested = new Rx.Subject<void>();

  constructor(public id: string) {
    super();
  }

  requestSave() {
    this.saveRequested.onNext(null);
  }
}
