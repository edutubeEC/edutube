export class NavCard {
    constructor(data = {}) { this.data = data; }

    cardUI() {
        const card = document.createElement("div");
        card.className = this.data.className || "";

        if (this.data.onClick) {
            card.addEventListener("click", (e) => {
                this.data.onClick(e);
            });
        }

        if (this.data.href) {
            card.addEventListener("click", () => {
                window.location.href = this.data.href;
            });
        }

        const label = document.createElement("div");
        label.className = "card-label";
        label.innerHTML = `<h5>${this.data.label}</h5>`;

        const color = this.data.color;
        if (color) {
            card.style.borderColor = color;
            card.style.borderLeft = `5px solid ${color}`;
            card.style.backgroundColor = `color-mix(in srgb, ${color} 10%, #fff)`;
        }

        card.appendChild(label);

        return card;
    }
}

export class SyllabusCard extends NavCard {
    constructor(data = {}) { super(data); }

    cardUI() {
        const card = super.cardUI();

        const textContainer = document.createElement("div");
        textContainer.className = "card-text-container";

        if (this.data.code) {
            const code = document.createElement("div");
            code.className = "subject-code";
            code.innerHTML = `<h6>[${this.data.code}]</h6>`;
            card.appendChild(code);
        }

        const label = card.querySelector(".card-label");
        if (label) textContainer.appendChild(label);
        card.prepend(textContainer);

        const actions = document.createElement("div");
        actions.className = "card-actions";

        if (Array.isArray(this.data.navigation)) {
            this.data.navigation.forEach(nav => {
                const btn = document.createElement("a");
                btn.href = nav.href;
                btn.className = "nav-btn";
                btn.textContent = nav.label; // Use the label from your object
                btn.addEventListener("click", (e) => e.stopPropagation());
                actions.appendChild(btn);
            });
        }

        card.appendChild(actions);
        return card;
    }
}

export class ChapterCard extends NavCard {
    constructor(data = {}) { super(data); }

    cardUI() {
        const card = super.cardUI();

        const num = document.createElement("div");
        num.className = "chapter-number";
        num.innerHTML = `<h6>Chapter ${this.data.num}</h6>`;
        card.insertBefore(num, card.firstChild);

        if (!this.data.notes || this.data.notes.length === 0) { card.classList.add("disabled"); }

        return card;
    }
}

export class NoteCard {
    constructor(item) { this.item = item; }

    cardUI() {
        const card = document.createElement("div");
        card.className = "note-card";

        switch (this.item.type) {
            case "title":
                card.appendChild(this.createTitle());
                break;

            case "text":
                if (this.item.label && this.item.type != "title") { card.appendChild(this.createSubtitle()); }
                card.appendChild(this.createText());
                break;

            case "list":
                if (this.item.label && this.item.type != "title") { card.appendChild(this.createSubtitle()); }
                card.appendChild(this.createList());
                break;

            case "table":
                if (this.item.label && this.item.type != "title") { card.appendChild(this.createSubtitle()); }
                card.appendChild(this.createTable());
                break;

            case "image":
                if (this.item.label && this.item.type != "title") { card.appendChild(this.createSubtitle()); }
                break;

            default:
                console.warn("Unknown type:", this.item.type);
                break;
        }

        return card;
    }

    createTitle() {
        const h2 = document.createElement("h2");
        h2.textContent = this.item.label;

        return h2;
    }

    createSubtitle() {
        const h3 = document.createElement("h3");
        h3.textContent = this.item.label;

        return h3;
    }

    createText() {
        const p = document.createElement("p");

        const lines = this.item.description.split("\n");
        lines.forEach((line, i) => {
            p.appendChild(document.createTextNode(line));
            if (i < lines.length - 1) {
                p.appendChild(document.createElement("br"));
            }
        });

        return p;
    }

    createList() {
        const ul = document.createElement("ul");

        this.item.description.split("\n").forEach(line => {
            if (!line.trim()) return;

            const li = document.createElement("li");
            li.textContent = line;
            ul.appendChild(li);
        });

        return ul;
    }

    createTable() {
        const table = document.createElement("table");
        table.className = "table";

        const rows = this.item.description.split("\n");

        rows.forEach((row, rowIndex) => {
            const tr = document.createElement("tr");

            row.split("|").forEach(col => {
                const cell = document.createElement(rowIndex === 0 ? "th" : "td");
                cell.textContent = col.trim();
                tr.appendChild(cell);
            });

            table.appendChild(tr);
        });

        return table;
    }
}