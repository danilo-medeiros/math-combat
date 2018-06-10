export default class PlaneSelection {

    constructor(...planeOptions) {
        this.planeOptions = planeOptions;

        this.planeOptions.forEach(e => {
            e.addEventListener("click", () => {
                localStorage.setItem("plane", e.id);
            });
        });

    }

}