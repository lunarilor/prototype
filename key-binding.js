bindKeyToBtn("a", byid("isabstract"));
bindKeyToBtn("s", bycss("#editor > div:last-child > button:first-of-type"));
bindKeyToBtn("d", bycss("#editor > div:last-child > button:last-child"));
bindKeyToInp("f", bycss("#search input"));
bindKeyToInp(" ", bycss("textarea"));

// visit behind, edit behind, write behind
const behindDivCSS = "#editor > div:first-child > div:last-child";
// bindKeyToInp("v", bycss(behindDivCSS + "> div input"))
bindKeyToBtn("e", bycss(behindDivCSS + "> div button"));
bindKeyToInp("w", bycss(behindDivCSS + "> input"));
// - - - -

bindKeyToBtn("h", bycss(".labeled"));

bindKeyToBtn(
    "r",
    bycss("#editor > div:last-child > div:first-child > button:last-child")
); // reading mode
bindKeyToBtn(
    "m",
    bycss("#editor > div:last-child > div:first-child > button:first-child")
); // map toggle btn
bindKeyToBtn("c", byid("ischild"));
