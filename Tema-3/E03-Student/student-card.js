class StudentCard extends HTMLElement {
  constructor() {
    super();

    // Obtén la plantilla importada por su id
    const template = document.querySelector('#student-card-template');

    // Agrega el contenido al Shadow DOM
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    // Configura elementos específicos dentro de tu componente
    this.nameElement = this.shadowRoot.querySelector('.student-name');
    this.idElement = this.shadowRoot.querySelector('.student-id');
    this.gpaElement = this.shadowRoot.querySelector('.student-gpa');
  }

  connectedCallback() {
    // Lógica para configurar los elementos dentro del componente
  }
}

customElements.define('student-card', StudentCard);
