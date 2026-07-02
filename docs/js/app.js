sidebar.innerHTML += `
    <li class="nav-item">
        <a href="#app-section" class="nav-link">
            <i class="nav-icon bi bi-braces"></i>
            <p>App Structure</p>
        </a>
    </li>
`;

class AppSection extends HTMLElement {
    constructor(){
        super();
        this.code = `
            app_ui = ui.page_navbar(
                # Call UI modules in each nav panel
                ui.nav_panel("Page 1", page1_ui("page_1")),
                ui.nav_panel("Page 2", page2_ui("page_2")),
                ui.nav_panel("Page 3", page3_ui("page_3")),

                title="Shiny for Python",
                id="app_id"
            )

            def server(input, output, session):
                # Initialize global state object
                state = {
                    "reactive_value_1": reactive.value(),
                    "reactive_value_2": reactive.value()
                }

                # Pass state to each module
                page1_module("page_1", state)
                page2_module("page_2", state)
                page3_module("page_3", state)
        `;
    };
    connectedCallback(){
        console.log(this.constructor.name + " connected to DOM");

        const template = document.getElementById("app-template");
        const templateClone = template.content.cloneNode(true);
        this.append(templateClone);

        this.querySelector(".language-python").textContent = this.code;
    };
};

customElements.define("app-section", AppSection);
const appSection = document.createElement("app-section");

appSection.id = "app-section";
sections.append(appSection);