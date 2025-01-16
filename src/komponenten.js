class BasisElement extends HTMLElement {
    constructor() {
        super();
        this.schatten = this.attachShadow({mode: 'open'});
        this.ladeStile();
    }

    ladeStile() {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = '../stile/komponenten.css';
        this.schatten.appendChild(link);
    }
}

export class EingabeElement extends BasisElement {
    constructor() {
        super();
        const eingabe = document.createElement('input');
        eingabe.type = 'text';
        eingabe.setAttribute('EingabeElement', '');
        eingabe.placeholder = this.getAttribute('platzhalter') || 'Eingabe';
        this.schatten.appendChild(eingabe);
    }
}

export class KnopfElement extends BasisElement {
    constructor() {
        super();
        const knopf = document.createElement('button');
        knopf.setAttribute('KnopfElement', this.getAttribute('variante') || '');
        knopf.textContent = this.getAttribute('text') || 'Klick mich';
        this.schatten.appendChild(knopf);
    }
}

export class KontrollkästchenElement extends BasisElement {
    constructor() {
        super();
        const etikett = document.createElement('label');
        const kontrollkästchen = document.createElement('input');
        kontrollkästchen.type = 'checkbox';
        kontrollkästchen.setAttribute('KontrollkästchenElement', '');
        etikett.textContent = this.getAttribute('text') || 'Akzeptieren';
        etikett.insertBefore(kontrollkästchen, etikett.firstChild);
        this.schatten.appendChild(etikett);
    }
}

export class HerunterfallendesElement extends BasisElement {
    constructor() {
        super();
        const auswahl = document.createElement('select');
        auswahl.setAttribute('HerunterfallendesElement', '');
        
        const optionen = this.getAttribute('optionen')?.split(',') || [];
        optionen.forEach(option => {
            const optElement = document.createElement('option');
            optElement.value = option.trim();
            optElement.textContent = option.trim();
            auswahl.appendChild(optElement);
        });
        
        this.schatten.appendChild(auswahl);
    }
}

const komponenten = {
    'eng-eingabe': EingabeElement,
    'eng-knopf': KnopfElement,
    'eng-kontrollkästchen': KontrollkästchenElement,
    'eng-herunterfallendes-element': HerunterfallendesElement
};

Object.entries(komponenten).forEach(([name, component]) => {
    if (!customElements.get(name)) {
        customElements.define(name, component);
    }
});

export default komponenten;