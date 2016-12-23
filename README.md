# Apps  Web / Mobile AngularLyon

WalkinDead App To handle All people in WalkinDead Serie


+ Username et Photo de la personne qui entre dans l'App


+ Ajout
+ Suppression
+ Note
+ Commentaires par utilisateur
+ Trie, Filtre
+ Affiche le flux de personne qui on commenter


1. Version Web 
2. Version Mobile (Hybride iOS / Android)



# Project Demonstration NT + TS2 + NG2 +WEBPACK


![enter image description here](https://docs.nativescript.org/img/cli-getting-started/angular/chapter0/NativeScript_Angular_logo.png)


![enter image description here](https://daveceddia.com/images/angular2_es6.png)


![enter image description here](https://camo.githubusercontent.com/6effdb8103365043944db7a341e91ffe2fc234e5/68747470733a2f2f63646e2e7261776769742e636f6d2f706564726f6d616c74657a2f747970657363726970742d6c6f676f2d72656372656174696f6e2f6d61737465722f6c6f676f732f747970657363726970742d636f6c6f722d6c6f676f2e737667)


![enter image description here](https://camo.githubusercontent.com/c6ddd9ff94ce584804e95bb55b3f2416dd553843/68747470733a2f2f662e636c6f75642e6769746875622e636f6d2f6173736574732f313336353838312f313931383337372f34383062326664362d376462632d313165332d386261302d3733346661663331353962382e706e67)
## Minimum compatibility Android

API > 17 < 25
Android 4.2 and Android 7.1 => 95% Android 

![enter image description here](http://thierryvanoffe.com/wp-content/uploads/2016/07/Android-logo-png.png)

## Run with device only

```
tns livesync android --watch
```

## Run with Webpack

```
    npm run start-android-bundle
```


## Troubleshooting

+ No entry point: use Webpack please

# FAQ here

https://www.nativescript.org/faq




### Why Nativescript

NativeScript is a different technology - it is a runtime, not a web technology. 
Your app will not run like a mini website in a WebView; and therefore it will be more performant. 
Don’t believe us? Take our sample app for a spin! 
And if you’re coming from a hybrid background, test out this guide that compares how to accomplish common tasks with both hybrid and NativeScript approaches. 

### Is it kind of like React Native?

NativeScript and React Native, as well as Xamarin and Titanium, are all trying to solve the same problem: the ability to build high-quality native applications from a single codebase. 

NativeScript is delivered by Telerik ( a Progress company) - a very well known developer company and NativeScript framework is part of their core business. ReactNative is built from Facebook, which as we all know is not a developer tools company.

Telerik you have the option to get support (developer or production) which is a requirement for most of the serious software shops out there. Also if you work on the enterprises you expect a certain stack of tools, services and solutions. Code encryption and security for example. You get all of this with Telerik/NativeScript, but this is not a priority for Facebook/React.


### Is it kind of like Xamarin?
NativeScript and Xamarin have similarities, and also important differences. Xamarin is a good fit for organizations and developers who prefer to write their code using the C# language. For developers who prefer JavaScript, TypeScript or Angular 2, 

### Support of Communauty

What is the preferred community support?

For issues with the NativeScript framework, please use the NativeScript GitHub. For support from the community, please use Slack Overflow and tag your question with NativeScript. To chat with the NativeScript community, join our Slack NativeScript Community channel.

### What sort of code can I reuse?
Because NativeScript runs JavaScript code, you have the potential to reuse JavaScript and TypeScript code that you run in your web apps. Not all JavaScript will run, as NativeScript does not use HTML or the DOM; therefore libraries such as jQuery do not work.

### Showcase

https://www.nativescript.org/showcases


### Open Source

NativeScript is open source and contributions to all parts of the framework are welcome. Contributions can range in complexity and effort. The simplest way to help is to fix a documentation article. You could fix a typo, add a new example, or write an entire new guide from scratch. The NativeScript docs are in GitHub and we appreciate pull requests.



 https://www.quora.com/What-are-the-key-difference-between-ReactNative-and-NativeScript/answer/Valentin-Stoychev



### Add a plateform

```
tns platform add android
```

### Emulate on Android

```
tns livesync android --watch
```

### Genereate a key for Android APK Certification

keytool -genkey -v -keystore mykey.keystore -alias Angu
larLyon -keyalg RSA -keysize 2048 -validity 10000

### Build APK for Android in Production

```
npm run build-android-bundle -- --release --for-device
gedit android.pub

tns build android [--compileSdk <API Level>] [--key-store-path <File Path> - │
│         │ -key-store-password <Password> --key-store-alias <Name> --key-store-alias      │
│         │ -password <Password>] [--release] [--static-bindings] [--copy-to <File Path>]

ex:
tns build android --release --key-store-path /home/boyer/angulyon/angulyon/mykey.keystore --key-store-password djscrave --key-store-alias AngularLyon --key-store-alias-password djscrave

```


https://docs.nativescript.org/publishing/publishing-android-apps


## All tasks

Launch with npm run

```
    "clean-android": "tns clean-app android",
    "clean-ios": "tns clean-app ios",
    "prewebpack-android": "npm run clean-android",
    "prewebpack-ios": "npm run clean-ios",
    "webpack-android": "webpack --config=webpack.android.js --progress",
    "webpack-ios": "webpack --config=webpack.ios.js --progress",
    "prestart-android-bundle": "npm run webpack-android",
    "prestart-ios-bundle": "npm run webpack-ios",
    "start-android-bundle": "tns run android --bundle --disable-npm-install",
    "start-ios-bundle": "tns run ios --bundle --disable-npm-install",
    "prebuild-android-bundle": "npm run webpack-android",
    "prebuild-ios-bundle": "npm run webpack-ios",
    "build-android-bundle": "tns build android --bundle --disable-npm-install",
    "build-ios-bundle": "tns build ios --bundle --disable-npm-install"
```

## Mise a jour réguliere
npm update

## Theme

Module installé: nativescript-theme-core

# Troubleshooting

## Export Android

The ANDROID_HOME environment variable is not set or it points to a non-existent directory. You
will not be able to perform any build-related operations for Android.

export ANDROID_HOME=/home/boyer/Documents/android-sdk-linux
export PATH=$PATH:$ANDROID_HOME/tools
. ~/.profile
or nano .bash_profile

### Webpack with Nativescript Architecture
* devDependencies settings that will contain the most popular webpack package and several loaders and plugins.
* webpack.android.js and webpack.ios.js configuration files for the Android and iOS platforms respectively.
* webpack.common.js -- this is the main configuration file that is shared for both the Android and iOS platform. It contains sensible defaults, but it is designed to be as readable and easy to modify as possible.


Application source files configuring bundle chunks:
* app/vendor. Defines vendor modules which get bundled separately from application code.
* app/vendor-platform.android and app/vendor-platform.ios. Define platform-specific vendor modules.


## Webpack

Update NPM :

```
npm install npm@latest -g
npm uninstall -g angular-cli
npm cache clean
npm install -g angular-cli@latest
 pre:
    - npm install -g angular-cli
    - npm install @angular/tsc-wrapped autoprefixer
```

### Clean cache
```
npm cache clean
npm run clean-android
```
