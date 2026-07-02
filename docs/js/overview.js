const sidebar = document.querySelector(".sidebar-menu");

sidebar.innerHTML += `
    <li class="nav-item">
        <a href="#overview" class="nav-link active">
            <p>Overview</p>
        </a>
    </li>
`;

class OverviewSection extends HTMLElement {
    constructor(){
        super();
    };
    connectedCallback(){
        console.log(this.constructor.name + " connected to DOM");

        const template = document.getElementById("overview-template");
        const templateClone = template.content.cloneNode(true);
        this.append(templateClone);
    };
};

customElements.define("overview-section", OverviewSection);
const overview = document.createElement("overview-section");

const sections = document.getElementById("sections");
sections.append(overview);