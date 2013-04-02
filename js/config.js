var GOOGLE_SCOPES = [ 'https://www.googleapis.com/auth/drive.install',
    'https://www.googleapis.com/auth/drive' ];
var DEFAULT_FILE_TITLE = "Title";
var GDRIVE_DEFAULT_FILE_TITLE = "New Markdown document";
var CHECK_ONLINE_PERIOD = 60000;
var AJAX_TIMEOUT = 5000;
var ASYNC_TASK_DEFAULT_TIMEOUT = 30000;
var AUTH_POPUP_TIMEOUT = 90000;
var SYNC_PERIOD = 60000;
var SYNC_PROVIDER_GDRIVE = "sync.gdrive.";

// Use by Google's client.js
var delayedFunction = undefined;
function runDelayedFunction() {
    if (delayedFunction !== undefined) {
        delayedFunction();
    }
}
