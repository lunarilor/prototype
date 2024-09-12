toggleSidebar(byid("sidebar-btn"), byid("sidebar"));
toggleSidebar(byid("close-sidebar-btn"), byid("sidebar"));

openCalendar();
function openCalendar() {
    hide(byid("routine"));
    show(byid("calendar"));
    bycss("#bottom-nav button:first-child").classList.add("current");
    bycss("#bottom-nav button:nth-child(2)").classList.remove("current");
}
function openRoutine() {
    hide(byid("calendar"));
    show(byid("routine"));
    bycss("#bottom-nav button:first-child").classList.remove("current");
    bycss("#bottom-nav button:nth-child(2)").classList.add("current");
}

bycss("#bottom-nav button:last-child").addEventListener("click", (event) => {
    if (byid("calendar").classList.contains("hidden")){
        byid("habit-form").classList.toggle("hidden");
    }else{
        byid("symptom-form").classList.toggle("hidden")
    }
});
