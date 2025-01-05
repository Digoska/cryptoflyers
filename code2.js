gdjs.surshcillCode = {};
gdjs.surshcillCode.localVariables = [];
gdjs.surshcillCode.GDNewTextObjects1= [];
gdjs.surshcillCode.GDNewTextObjects2= [];
gdjs.surshcillCode.GDRedButtonWithShadowObjects1= [];
gdjs.surshcillCode.GDRedButtonWithShadowObjects2= [];


gdjs.surshcillCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("RedButtonWithShadow"), gdjs.surshcillCode.GDRedButtonWithShadowObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.surshcillCode.GDRedButtonWithShadowObjects1.length;i<l;++i) {
    if ( gdjs.surshcillCode.GDRedButtonWithShadowObjects1[i].IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.surshcillCode.GDRedButtonWithShadowObjects1[k] = gdjs.surshcillCode.GDRedButtonWithShadowObjects1[i];
        ++k;
    }
}
gdjs.surshcillCode.GDRedButtonWithShadowObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Menu", false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
}

}


};

gdjs.surshcillCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.surshcillCode.GDNewTextObjects1.length = 0;
gdjs.surshcillCode.GDNewTextObjects2.length = 0;
gdjs.surshcillCode.GDRedButtonWithShadowObjects1.length = 0;
gdjs.surshcillCode.GDRedButtonWithShadowObjects2.length = 0;

gdjs.surshcillCode.eventsList0(runtimeScene);
gdjs.surshcillCode.GDNewTextObjects1.length = 0;
gdjs.surshcillCode.GDNewTextObjects2.length = 0;
gdjs.surshcillCode.GDRedButtonWithShadowObjects1.length = 0;
gdjs.surshcillCode.GDRedButtonWithShadowObjects2.length = 0;


return;

}

gdjs['surshcillCode'] = gdjs.surshcillCode;
