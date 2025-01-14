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