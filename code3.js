gdjs.rulesCode = {};
gdjs.rulesCode.localVariables = [];
gdjs.rulesCode.GDNewBBTextObjects1= [];
gdjs.rulesCode.GDNewBBTextObjects2= [];
gdjs.rulesCode.GDNewTextObjects1= [];
gdjs.rulesCode.GDNewTextObjects2= [];
gdjs.rulesCode.GDBackgroundObjects1= [];
gdjs.rulesCode.GDBackgroundObjects2= [];
gdjs.rulesCode.GDTelegramObjects1= [];
gdjs.rulesCode.GDTelegramObjects2= [];
gdjs.rulesCode.GDTwitterObjects1= [];
gdjs.rulesCode.GDTwitterObjects2= [];
gdjs.rulesCode.GDGoogleChromeObjects1= [];
gdjs.rulesCode.GDGoogleChromeObjects2= [];
gdjs.rulesCode.GDBlackDecoratedButtonObjects1= [];
gdjs.rulesCode.GDBlackDecoratedButtonObjects2= [];


gdjs.rulesCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Telegram"), gdjs.rulesCode.GDTelegramObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.rulesCode.GDTelegramObjects1.length;i<l;++i) {
    if ( gdjs.rulesCode.GDTelegramObjects1[i].getBehavior("ButtonFSM").IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.rulesCode.GDTelegramObjects1[k] = gdjs.rulesCode.GDTelegramObjects1[i];
        ++k;
    }
}
gdjs.rulesCode.GDTelegramObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.window.openURL("https://t.me/cryptoxxlovers", runtimeScene);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Twitter"), gdjs.rulesCode.GDTwitterObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.rulesCode.GDTwitterObjects1.length;i<l;++i) {
    if ( gdjs.rulesCode.GDTwitterObjects1[i].getBehavior("ButtonFSM").IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.rulesCode.GDTwitterObjects1[k] = gdjs.rulesCode.GDTwitterObjects1[i];
        ++k;
    }
}
gdjs.rulesCode.GDTwitterObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.window.openURL("https://x.com/cryptoxlovers", runtimeScene);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("GoogleChrome"), gdjs.rulesCode.GDGoogleChromeObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.rulesCode.GDGoogleChromeObjects1.length;i<l;++i) {
    if ( gdjs.rulesCode.GDGoogleChromeObjects1[i].getBehavior("ButtonFSM").IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.rulesCode.GDGoogleChromeObjects1[k] = gdjs.rulesCode.GDGoogleChromeObjects1[i];
        ++k;
    }
}
gdjs.rulesCode.GDGoogleChromeObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.window.openURL("https://cryptolovers.eu", runtimeScene);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BlackDecoratedButton"), gdjs.rulesCode.GDBlackDecoratedButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.rulesCode.GDBlackDecoratedButtonObjects1.length;i<l;++i) {
    if ( gdjs.rulesCode.GDBlackDecoratedButtonObjects1[i].IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.rulesCode.GDBlackDecoratedButtonObjects1[k] = gdjs.rulesCode.GDBlackDecoratedButtonObjects1[i];
        ++k;
    }
}
gdjs.rulesCode.GDBlackDecoratedButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Menu", false);
}}

}


};

gdjs.rulesCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.rulesCode.GDNewBBTextObjects1.length = 0;
gdjs.rulesCode.GDNewBBTextObjects2.length = 0;
gdjs.rulesCode.GDNewTextObjects1.length = 0;
gdjs.rulesCode.GDNewTextObjects2.length = 0;
gdjs.rulesCode.GDBackgroundObjects1.length = 0;
gdjs.rulesCode.GDBackgroundObjects2.length = 0;
gdjs.rulesCode.GDTelegramObjects1.length = 0;
gdjs.rulesCode.GDTelegramObjects2.length = 0;
gdjs.rulesCode.GDTwitterObjects1.length = 0;
gdjs.rulesCode.GDTwitterObjects2.length = 0;
gdjs.rulesCode.GDGoogleChromeObjects1.length = 0;
gdjs.rulesCode.GDGoogleChromeObjects2.length = 0;
gdjs.rulesCode.GDBlackDecoratedButtonObjects1.length = 0;
gdjs.rulesCode.GDBlackDecoratedButtonObjects2.length = 0;

gdjs.rulesCode.eventsList0(runtimeScene);
gdjs.rulesCode.GDNewBBTextObjects1.length = 0;
gdjs.rulesCode.GDNewBBTextObjects2.length = 0;
gdjs.rulesCode.GDNewTextObjects1.length = 0;
gdjs.rulesCode.GDNewTextObjects2.length = 0;
gdjs.rulesCode.GDBackgroundObjects1.length = 0;
gdjs.rulesCode.GDBackgroundObjects2.length = 0;
gdjs.rulesCode.GDTelegramObjects1.length = 0;
gdjs.rulesCode.GDTelegramObjects2.length = 0;
gdjs.rulesCode.GDTwitterObjects1.length = 0;
gdjs.rulesCode.GDTwitterObjects2.length = 0;
gdjs.rulesCode.GDGoogleChromeObjects1.length = 0;
gdjs.rulesCode.GDGoogleChromeObjects2.length = 0;
gdjs.rulesCode.GDBlackDecoratedButtonObjects1.length = 0;
gdjs.rulesCode.GDBlackDecoratedButtonObjects2.length = 0;


return;

}

gdjs['rulesCode'] = gdjs.rulesCode;
