class EingabeElement extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });

        const eingabe = document.createElement('input');
        eingabe.type = 'text';
        eingabe.placeholder = this.getAttribute('platzhalter') || 'Eingabe';

        shadow.appendChild(eingabe);
    }
}

customElements.define('eng-eingabe', EingabeElement);

class KnopfElement extends HTMLElement {
    constructor() {
        super();
        const schatten = this.attachShadow({ mode: 'open' });

        const knopf = document.createElement('button');
        knopf.textContent = this.getAttribute('platzhalter') || 'Klick mich';

        schatten.appendChild(knopf);
    }
}

customElements.define('eng-knopf', KnopfElement);

class KontrollkästchenElement extends HTMLElement {
    constructor() {
        super();
        const schatten = this.attachShadow({ mode: 'open' });

        const etikett = document.createElement('label');
        const kontrollkästchen = document.createElement('input');
        kontrollkästchen.type = 'checkbox';
        etikett.textContent = this.getAttribute('platzhalter') || 'Akzeptieren';
        etikett.appendChild(kontrollkästchen);

        schatten.appendChild(etikett);
    }
}

customElements.define('eng-kontrollkästchen', KontrollkästchenElement);