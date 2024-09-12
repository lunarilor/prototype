function habitHTM(name, color, icon, phases, start, end, tag, counter) {
    return `
        <div class='habit' style="border-color:${color}">
            <div>
                <div class="title">
                    <img src='svg/${icon}.svg'>
                    <span style="color:${color}">
                        ${name}
                    </span>
                </div>
                <span class='phases'>
                    ${phases.join(", ")}
                </span>
                <div>
                    <div class='time-block'>
                    ${
                        start || end
                            ? `
                        <img src='svg/schedule.svg'>
                        <span>${start} - ${end}</span>`
                            : ""
                    }
                    </div>
                    ${tag ? `<span class='tag'>${tag}</span>` : ""}
                </div>
            </div>
            <div>
                ${counter > 1 ? `<span>${counter}</span>` : ""}
                <button>
                    <img src='svg/check.svg'>
                </button>
            </div>
        </div>`;
}
