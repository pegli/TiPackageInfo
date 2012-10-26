TiPackageInfo
=============

Titanium module for getting PackageInfo fields in Android.

Installation
------------

1. Download the module ZIP file from the [downloads section](https://github.com/pegli/TiPackageInfo/downloads)
and save it to either your project's root directory (the same directory as the 
`Resources` folder) or your Titanium SDK installation directory.
1. Edit `tiapp.xml` and add the following line to the `<modules>` section, using the version number 
specified in the ZIP file name:
```
<module version="0.1" platform="android">com.obscure.packageinfo</module>
```
1. Clean and rebuild your project.

Detailed instructions for installing modules can be found on the
[Appcelerator documentation site](http://docs.appcelerator.com/titanium/latest/#!/guide/Using_a_Module).

Usage Example
-------------

```javascript
var packageinfo = require('com.obscure.packageinfo');
Ti.API.info(packageinfo.packageName);
Ti.API.info(packageinfo.versionCode);
Ti.API.info(packageinfo.versionName);
```