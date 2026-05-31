// loadTopbar is a function that initializes the top navigation bar of the application.
// It checks if the DOM element for the topbar exists, and if it does, it clears its content and creates two new elements:
// a toggle button for the menu and a title for the application. The toggle button is represented by the "≡" symbol, and
// the title is set to "EDUTUBE". Both elements are then appended to the topbar in the DOM.
export function loadTopbar() {
    const topbar = document.getElementById("topbar");

    if (!topbar) return;
    topbar.innerHTML = "";

    const toggleBtn = document.createElement("span");
    toggleBtn.id = "toggleBtn";
    toggleBtn.className = "menu-icon";
    toggleBtn.textContent = "≡";

    const title = document.createElement("h2");
    title.textContent = "EDUTUBE";

    topbar.appendChild(toggleBtn);
    topbar.appendChild(title);
}

export function getYears(list) {
    return [...new Set(
        list.map(i => i.year?.trim()).filter(Boolean)
    )].sort((a, b) => b - a);
}

export function groupByYear(list) {
    return list.reduce((acc, item) => {
        const year = item.year?.trim();
        if (!year) return acc;

        if (!acc[year]) acc[year] = [];
        acc[year].push(item);

        return acc;
    }, {});
}

export function addAllClassesProperty(parameters, property) {
    document.querySelectorAll(parameters)
        .forEach(el => el.classList.add(property));
}

export function addIdProperty(parameter, property) {
    document.getElementById(parameter)
        ?.classList.add(property);
}

export function removeIdProperty(parameter, property) {
    document.getElementById(parameter)
        ?.classList.remove(property);
}

function createYearHeader(year) {
    const div = document.createElement("div");
    div.className = "year-header";
    div.dataset.year = year;
    div.textContent = year;
    return div;
}

function createPaperSelector(item) {
    const paperSelector = document.createElement("label");
    paperSelector.className = "paper-selector";

    const input = document.createElement("input");
    input.type = "radio";
    input.name = "paper";
    input.value = item.id;

    paperSelector.appendChild(input);
    paperSelector.append(" " + item.desc);

    return paperSelector;
}

export function createYearWrapper(year, items) {
    const yearWrapper = document.createElement("div");
    yearWrapper.className = "year-wrapper";

    const header = createYearHeader(year);

    const yearContent = document.createElement("div");
    yearContent.className = "year-content";
    yearContent.id = `year-${year}`;

    items.forEach(item => {
        yearContent.appendChild(createPaperSelector(item));
    });

    yearWrapper.appendChild(header);
    yearWrapper.appendChild(yearContent);

    return yearWrapper;
}

// fetchJson is an async function that dynamically imports a JavaScript module and retrieves a specified object from it.
export async function fetchJson(path, object) {
    const module = await import(path);
    return module[object];
}

// renderImage is a function that generates HTML for displaying an image, given its source URL.
// It returns a string containing a div wrapper with an img element inside, styled with the "mcq-img" class.
export function renderImage(src) {
    if (!src) return "";

    return `
        <div class="img-wrapper">
            <img src="${src}" class="mcq-img">
        </div>
    `;
}

// convertToTable is a function that converts a raw string representation of a table into HTML.
// It returns a string containing the HTML for the table.
export function convertToTable(raw) {
    if (!raw) return "";

    const rows = raw.trim().split("\n");

    let html = "<table class='mcq-table'>";

    rows.forEach((row, rowIndex) => {
        const cells = row.split("|").map(c => c.trim());

        html += "<tr>";

        cells.forEach(cell => {
            // COLSPAN: *n text
            if (cell.startsWith("*")) {
                const match = cell.match(/\*(\d+)\s*(.*)/);
                const span = match?.[1] || 1;
                const text = match?.[2] || "";
                html += `<td colspan="${span}">${text}</td>`;
                return;
            }

            // ROWSPAN: #n text
            if (cell.startsWith("#")) {
                const match = cell.match(/#(\d+)\s*(.*)/);
                const span = match?.[1] || 1;
                const text = match?.[2] || "";
                html += `<td rowspan="${span}">${text}</td>`;
                return;
            }

            // HEADER ROW
            const isHeader = rowIndex === 0;
            html += isHeader
                ? `<th>${cell}</th>`
                : `<td>${cell}</td>`;
        });

        html += "</tr>";
    });

    html += "</table>";

    return html;
}