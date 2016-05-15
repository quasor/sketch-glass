import Component from "../lib/ui/Component";
import MountPoint from "../lib/ui/MountPoint";
import Color from "../lib/geometry/Color";
import * as Rx from "rx";

export default
class ColorDialog extends Component {
    static template = `
        <div class='sg-color-dialog'>
            <div class='arrow'></div>
        </div>
    `;

    colorSelected = new Rx.Subject<Color>();

    constructor(mountPoint: MountPoint) {
        super(mountPoint);

        const colors = [0,1,2,3,4,5,6,7].map(x => 45 * x + 10).map(hue => Color.fromHSV(hue, 85, 75));
        colors.unshift(Color.black);

        for (let y = 0; y < 3; ++y) {
            const row = document.createElement("div");
            row.className = "row";
            for (let x = 0; x < 3; ++x) {
                const cell = document.createElement("div");
                cell.className = "cell";
                const color = colors[y * 3 + x];
                cell.style.backgroundColor = color.toString();
                cell.addEventListener("click", () => {
                    this.colorSelected.onNext(color);
                });
                row.appendChild(cell);
            }
            this.element.appendChild(row);
        }
    }
}
