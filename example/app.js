// This is a test harness for your module
// You should do something interesting in this harness 
// to test out the module and to provide instructions 
// to users on how to use it by example.


// open a single window
var win = Ti.UI.createWindow({
	backgroundColor:'white'
});
var label = Ti.UI.createLabel();
win.add(label);
win.open();

// TODO: write your module tests here
var packageinfo = require('com.obscure.packageinfo');
Ti.API.info("module is => " + packageinfo);

label.text = String.format("packageName: %s, versionCode: %d, versionName: %s", packageinfo.packageName, packageinfo.versionCode, packageinfo.versionName);
