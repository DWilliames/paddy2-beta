// Setup

function onSetUp(context) {
    // Load framework
    if (NSClassFromString("PaddyManager") == null) {
        var path = context.plugin.urlForResourceNamed("PaddyFramework.framework").path().stringByDeletingLastPathComponent()
        Mocha.sharedRuntime().loadFrameworkWithName_inDirectory("PaddyFramework", path)
    }
    
    PaddyManager.updateContext(context)
}

function start(context) {
    // Stub, so that 'onSetUp' is run on plugin being enabled or Sketch starting
    print('START UP')
    PaddyManager.start()
}

function layoutSelection(context) {
    PaddyManager.layoutSelection()
}

function holdOffUntilNextSelection(context) {
    PaddyManager.holdOffUntilNextSelection()
}

function holdOffChangesFromSelection(context) {
    PaddyManager.holdOffChangesFromSelection()
}

function allActions(context) {
    print(context)
}


// Actions

function showSettings(context) {
  PaddyManager.showSettings()
}

function restart(context) {
    PaddyManager.restart()
}
