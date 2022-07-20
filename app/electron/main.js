const {
    app,
    BrowserWindow
} = require("electron");

// This method is called when Electron
// has finished initializing
app.whenReady().then(() => {

    // Create a new window
    const window = new BrowserWindow({
        width: 800,
        height: 600,
        show: false
    });
    window.webContents.on("did-finish-load", () => {
        window.show();
        window.focus();
    });
    // Load our HTML file
    // window.loadFile("index.html");
    window.loadFile("app/dist/index.html");
});

// This method is called when Electron
// has finished initializing
app.whenReady().then(() => {
    createWindow();

    app.on("activate", () => {
        // On macOS it's common to re-create a window in the app when the
        // dock icon is clicked and there are no other windows open.
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow();
        }
    });
});

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on("window-all-closed", function () {
    if (process.platform !== "darwin") {
        app.quit();
    }
});