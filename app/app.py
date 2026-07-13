# Imports
from shiny import App, ui
from mods.page1 import page1_ui, page1_module

app_ui = ui.page_navbar(

    # Push the navbar items to the right
    ui.nav_spacer(),

    # UI modules
    ui.nav_panel("Page 1", page1_ui("page1")),

    # App title and ID
    title="App title",
    id="app_id"
)


def server(input, output, session):

    # App state
    state = {
        "page": input.app_id
    }

    # Server modules
    page1_module("page1", state)


app = App(app_ui, server)