class EingabeElement extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });

        const style = document.createElement('style');
        style.textContent = `
            input {
                padding: 8px;
                border: 1px solid #ccc;
                border-radius: 4px;
                font-size: 14px;
            }
        `;

        const eingabe = document.createElement('input');
        eingabe.type = 'text';
        eingabe.placeholder = this.getAttribute('platzhalter') || 'Eingabe';

        shadow.appendChild(style);
        shadow.appendChild(eingabe);
    }
}

customElements.define('eng-eingabe', EingabeElement);

class KnopfElement extends HTMLElement {
    constructor() {
        super();
        const schatten = this.attachShadow({ mode: 'open' });

        const stillblatt = document.createElement('style');
        stillblatt.textContent = `
            button {
                padding: 10px 20px;
                background-color: #007BFF;
                color: white;
                border: none;
                border-radius: 4px;
                cursor: pointer;
                font-size: 14px;
            }
            button:hover {
                background-color: #0056b3;
            }
        `;

        const knopf = document.createElement('button');
        knopf.textContent = this.getAttribute('platzhalter') || 'Klick mich';

        schatten.appendChild(stillblatt);
        schatten.appendChild(knopf);
    }
}

customElements.define('eng-knopf', KnopfElement);

class KontrollkästchenElement extends HTMLElement {
    constructor() {
        super();
        const schatten = this.attachShadow({ mode: 'open' });

        const stillblatt = document.createElement('style');
        stillblatt.textContent = `
            label {
                display: flex;
                align-items: center;
                font-size: 14px;
            }
            input[type="checkbox"] {
                margin-right: 8px;
            }
        `;

        const etikett = document.createElement('label');
        const kontrollkästchen = document.createElement('input');
        kontrollkästchen.type = 'checkbox';
        etikett.textContent = this.getAttribute('platzhalter') || 'Akzeptieren';
        etikett.appendChild(kontrollkästchen);

        schatten.appendChild(stillblatt);
        schatten.appendChild(etikett);
    }
}

customElements.define('eng-kontrollkästchen', KontrollkästchenElement);

class AuswahllisteElement extends HTMLElement {
    constructor() {
        super();
        const schatten = this.attachShadow({ mode: 'open' });

        const stillblatt = document.createElement('style');
        stillblatt.textContent = `
            select {
                padding: 8px;
                border: 1px solid #ccc;
                border-radius: 4px;
                font-size: 14px;
                width: 100%;
            }
        `;

        const auswahlliste = document.createElement('select');
        const options = this.getAttribute('optionen').split(',');
        options.forEach(optionText => {
            const option = document.createElement('option');
            option.value = optionText.trim();
            option.textContent = optionText.trim();
            auswahlliste.appendChild(option);
        });

        auswahlliste.addEventListener('change', () => {
            console.log(`Dropdown value changed to: ${auswahlliste.value}`);
        });

        schatten.appendChild(stillblatt);
        schatten.appendChild(auswahlliste);
    }
}

customElements.define('eng-auswahlliste', AuswahllisteElement);