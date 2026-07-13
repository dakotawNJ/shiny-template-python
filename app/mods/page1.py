from shiny import ui, module

@module.ui
def page1_ui():
    return ui.page_fluid()

@module.server
def page1_module(input, output, session, state):
    pass