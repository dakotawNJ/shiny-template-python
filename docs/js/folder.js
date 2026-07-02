sidebar.innerHTML += `
    <li class="nav-item">
        <a href="#folder-section" class="nav-link">
            <i class="nav-icon bi bi-folder"></i>
            <p>Folder Structure</p>
        </a>
    </li>
`;

class FolderSection extends HTMLElement {
    constructor(){
        super();
    };
    connectedCallback(){
        console.log(this.constructor.name + " connected to DOM");

        const template = document.getElementById("folder-template");
        const templateClone = template.content.cloneNode(true);

        this.append(templateClone);
    };
};

customElements.define("folder-section", FolderSection);
const folderSection = document.createElement("folder-section");

folderSection.id = "folder-section";
sections.append(folderSection);