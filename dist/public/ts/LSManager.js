export class LSManager {
    setToStrage(name, data) {
        localStorage.setItem(name, JSON.stringify(data));
    }
    getStrage(name) {
        JSON.parse(localStorage.getItem(name) || "[]");
    }
}
//# sourceMappingURL=LSManager.js.map