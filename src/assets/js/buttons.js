const { remote, ipcRenderer: ipc } = require( 'electron' );
const cwindow = remote.getCurrentWindow();

var webview = document.getElementById('webview');
var iframe;

document.getElementById( 'btn-minimize' ).addEventListener( 'click', function() {
    cwindow.minimize();
});
    
document.getElementById( 'btn-maximize' ).addEventListener( 'click', function() {
    if ( !cwindow.isMaximized() ) {
        cwindow.maximize();
    } else {
        cwindow.unmaximize();
    }
} );

document.getElementById( 'btn-refresh' ).addEventListener( 'click', function() {
    location.reload(true);
} );

document.getElementById( 'btn-back' ).addEventListener( 'click', function() {
    history.go(-1)
} );

document.getElementById( 'btn-home' ).addEventListener( 'click', function() {
	console.log(document.getElementsByTagName("iframe"));
	if (iframe == null) iframe = webview.childNodes[0].childNodes[0];

	iframe.contentWindow.location.reload(true);
} );
        
document.getElementById( 'btn-close' ).addEventListener( 'click', function() {
    ipc.send( 'will-close-mainwindow' )
} );