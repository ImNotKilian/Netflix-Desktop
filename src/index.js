const { app, BrowserWindow, BrowserView, globalShortcut, Menu, ipcMain, systemPreferences } = require( 'electron' );
const remote = require('electron').remote;
const wvcdm = require('../electron-widevine-cdm')

var path = require('path');

let mainWindow;
let initPath;

wvcdm.inject(app);

// app.commandLine.appendSwitch('widevine-cdm-path', path.join(__dirname, '..', 'plugins'));
// The version of plugin can be got from `chrome://components` page in Chrome.
// app.commandLine.appendSwitch('widevine-cdm-version', '4.10.1503.4')

app.on('ready', function() {
	mainWindow = new BrowserWindow({
	    width: 1280,
	    height: 768,
	    icon: path.join(__dirname, 'assets/icons/png/64x64.png'),
	    modal: true, 
        frame: false, 
        center: true, 
        resizable: true, 
	    backgroundColor: '#111',
	    webPreferences: {
	      	nodeIntegration: true
	    }
  	});

  	mainWindow.loadURL('file://' + __dirname + '/index.html');
});

app.on('window-all-closed', function () {
  var data = {
    bounds: mainWindow.getBounds()
  };
  app.quit();
});