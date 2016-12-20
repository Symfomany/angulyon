## Minimum compatibility Android

API > 17 < 25
Android 4.2 and Android 7.1 => 95% Android 


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

## Export Android
export ANDROID_HOME=/home/boyer/Documents/android-sdk-linux
export PATH=$PATH:$ANDROID_HOME/tools

## Webpack