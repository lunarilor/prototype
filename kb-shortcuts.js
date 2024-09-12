// SHORTCUT: input focus, button click, function execution
// ESC blurs
let boundInputs = [],
    boundBtns = [],
    boundCallbacks = [];
document.body.addEventListener("keydown", (event) => {
    const key = event.key;

    if (document.activeElement.tagName != "BODY") {
        if (key == "Escape") {
            document.activeElement.blur();
        }
        return;
    }

    for (let [k, v] of boundInputs) {
        if (key == k) {
            // to prevent inserting keys into inputs
            event.preventDefault();
            v.focus();
            return;
        }
    }
    for (let [k, v] of boundBtns) {
        if (key == k) {
            v.click();
            return;
        }
    }
    for (let [k, v] of boundCallbacks) {
        if (key == k) {
            v();
            return;
        }
    }
});
function bindKeyToInp(key, input) {
    boundInputs.push([key, input]);
}
function bindKeyToBtn(key, btn) {
    boundBtns.push([key, btn]);
}
function bindKeyToFnc(key, callback) {
    boundCallbacks.push([key, callback]);
}
