toggleVisOfWindowByBtn(byid("menu-btn"), byid("menu"));

toggleVisOfWindowByBtn(byid("close-menu-btn"), byid("menu"));
toggleVisOfWindowByBtn(
    bycss("#bottom-nav button:last-child"),
    byid("symptom-selector")
);

function openCalendar() {
    hide(byid("routine"));
    show(byid("calendar"));
}
function openRoutine() {
    hide(byid("calendar"));
    show(byid("routine"));
}
