sidebar.innerHTML += `
    <li class="nav-item">
        <a href="#code-section" class="nav-link">
            <i class="nav-icon bi bi-code"></i>
            <p>Code Conventions</p>
        </a>
    </li>
`;

class CodeSection extends HTMLElement {
    constructor(){
        super();
        this.conventions = {
            "Top-level Nav Panels": "Add the <em>ui</em> suffix to the page name using snake_case (<code>my_ui</code>)",
            "Top-level Page Modules": "Add the <em>module</em> suffix to the module name using snake_case (<code>my_module</code>)",
            "Global state object": "Name the state object <code>state</code> in both the module function call and body",
            "Optional module state": "Name the module state object <code>module</code>"
        };
    };
    connectedCallback(){
        console.log(this.constructor.name + " connected to DOM");

        const template = document.getElementById("code-template");
        const templateClone = template.content.cloneNode(true);

        this.append(templateClone);

        this.querySelector("ul").innerHTML = Object
            .entries(this.conventions)
            .map(([label, convention]) => `<li><strong>${label}:</strong> ${convention}</li>`)
            .join("");
    };
};

customElements.define("code-section", CodeSection);
const codeSection = document.createElement("code-section");

codeSection.id = "code-section";
sections.append(codeSection);