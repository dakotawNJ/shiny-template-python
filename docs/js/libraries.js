sidebar.innerHTML += `
    <li class="nav-item">
        <a href="#libraries-section" class="nav-link">
            <i class="nav-icon bi bi-book"></i>
            <p>Libraries</p>
        </a>
    </li>
`;

class LibrariesSection extends HTMLElement {
    constructor(){
        super();
        this.frontEnd = {
            "shiny": "https://shiny.posit.co/py/",
            "shinyswatch": "https://posit-dev.github.io/py-shinyswatch/",
            "plotly": "https://plotly.com/python/"
        };
        this.backEnd = {
            "pandas": "https://pandas.pydata.org/",
            "pyodbc": "https://github.com/mkleehammer/pyodbc",
            "dataretrieval": "https://doi-usgs.github.io/dataretrieval-python/"
        };
    };
    connectedCallback(){
        console.log(this.constructor.name + " connected to DOM");

        const template = document.getElementById("libraries-template");
        const templateClone = template.content.cloneNode(true);

        this.append(templateClone);

        const pyLibraries = this.querySelectorAll("ul");

        pyLibraries[0].innerHTML = Object
            .entries(this.frontEnd)
            .map(([library, url]) => `<li><a href="${url}" target="_blank">${library}</a></li>`)
            .join("");
        
        pyLibraries[1].innerHTML = Object
            .entries(this.backEnd)
            .map(([library, url]) => `<li><a href="${url}" target="_blank">${library}</a></li>`)
            .join("");
    };
};

customElements.define("libraries-section", LibrariesSection);
const librariesSection = document.createElement("libraries-section");

librariesSection.id = "libraries-section";
sections.append(librariesSection);