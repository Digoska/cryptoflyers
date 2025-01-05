gdjs.MenuCode = {};
gdjs.MenuCode.localVariables = [];
gdjs.MenuCode.GDBlackRectangleObjects1= [];
gdjs.MenuCode.GDBlackRectangleObjects2= [];
gdjs.MenuCode.GDBlackRectangleObjects3= [];
gdjs.MenuCode.GDGroundObjects1= [];
gdjs.MenuCode.GDGroundObjects2= [];
gdjs.MenuCode.GDGroundObjects3= [];
gdjs.MenuCode.GDBackgroundObjects1= [];
gdjs.MenuCode.GDBackgroundObjects2= [];
gdjs.MenuCode.GDBackgroundObjects3= [];
gdjs.MenuCode.GDAuthorLinkObjects1= [];
gdjs.MenuCode.GDAuthorLinkObjects2= [];
gdjs.MenuCode.GDAuthorLinkObjects3= [];
gdjs.MenuCode.GDstartObjects1= [];
gdjs.MenuCode.GDstartObjects2= [];
gdjs.MenuCode.GDstartObjects3= [];
gdjs.MenuCode.GDTitleObjects1= [];
gdjs.MenuCode.GDTitleObjects2= [];
gdjs.MenuCode.GDTitleObjects3= [];
gdjs.MenuCode.GDDinoDouxObjects1= [];
gdjs.MenuCode.GDDinoDouxObjects2= [];
gdjs.MenuCode.GDDinoDouxObjects3= [];
gdjs.MenuCode.GDleaderbObjects1= [];
gdjs.MenuCode.GDleaderbObjects2= [];
gdjs.MenuCode.GDleaderbObjects3= [];
gdjs.MenuCode.GDstart2Objects1= [];
gdjs.MenuCode.GDstart2Objects2= [];
gdjs.MenuCode.GDstart2Objects3= [];
gdjs.MenuCode.GDRedButtonWithShadowObjects1= [];
gdjs.MenuCode.GDRedButtonWithShadowObjects2= [];
gdjs.MenuCode.GDRedButtonWithShadowObjects3= [];


gdjs.MenuCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BlackRectangle"), gdjs.MenuCode.GDBlackRectangleObjects2);
{gdjs.evtTools.camera.showLayer(runtimeScene, "Transition");
}{for(var i = 0, len = gdjs.MenuCode.GDBlackRectangleObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDBlackRectangleObjects2[i].getBehavior("Opacity").setOpacity(0);
}
}{gdjs.evtTools.sound.playMusic(runtimeScene, "spotifydown.com - Winners Circle2.mp3", true, 35, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("start"), gdjs.MenuCode.GDstartObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDstartObjects2.length;i<l;++i) {
    if ( gdjs.MenuCode.GDstartObjects2[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDstartObjects2[k] = gdjs.MenuCode.GDstartObjects2[i];
        ++k;
    }
}
gdjs.MenuCode.GDstartObjects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BlackRectangle"), gdjs.MenuCode.GDBlackRectangleObjects2);
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "assets\\sfx_swooshing.wav", 1, false, 80, 0.9);
}{for(var i = 0, len = gdjs.MenuCode.GDBlackRectangleObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDBlackRectangleObjects2[i].getBehavior("Tween").addObjectOpacityTween2("FadeOut", 255, "easeInQuad", 1, false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BlackRectangle"), gdjs.MenuCode.GDBlackRectangleObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDBlackRectangleObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDBlackRectangleObjects1[i].getBehavior("Tween").hasFinished("FadeOut") ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDBlackRectangleObjects1[k] = gdjs.MenuCode.GDBlackRectangleObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDBlackRectangleObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", false);
}}

}


};gdjs.MenuCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Ground"), gdjs.MenuCode.GDGroundObjects1);
{for(var i = 0, len = gdjs.MenuCode.GDGroundObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDGroundObjects1[i].setXOffset(gdjs.MenuCode.GDGroundObjects1[i].getXOffset() + (100 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}}

}


};gdjs.MenuCode.mapOfGDgdjs_9546MenuCode_9546GDAuthorLinkObjects1Objects = Hashtable.newFrom({"AuthorLink": gdjs.MenuCode.GDAuthorLinkObjects1});
gdjs.MenuCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13707580);
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.MenuCode.GDAuthorLinkObjects1, gdjs.MenuCode.GDAuthorLinkObjects2);

{for(var i = 0, len = gdjs.MenuCode.GDAuthorLinkObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDAuthorLinkObjects2[i].setOutline("0;0;255", 3);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
{gdjs.evtTools.window.openURL("https://www.youtube.com/channel/UCsZ4Ue8c94YLJDbGRafCI5Q", runtimeScene);
}}

}


};gdjs.MenuCode.eventsList3 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("AuthorLink"), gdjs.MenuCode.GDAuthorLinkObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_9546MenuCode_9546GDAuthorLinkObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {

{ //Subevents
gdjs.MenuCode.eventsList2(runtimeScene);} //End of subevents
}

}


};gdjs.MenuCode.eventsList4 = function(runtimeScene) {

{


gdjs.MenuCode.eventsList0(runtimeScene);
}


{


gdjs.MenuCode.eventsList1(runtimeScene);
}


{


gdjs.MenuCode.eventsList3(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("leaderb"), gdjs.MenuCode.GDleaderbObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDleaderbObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDleaderbObjects1[i].IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDleaderbObjects1[k] = gdjs.MenuCode.GDleaderbObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDleaderbObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "surshcill", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("RedButtonWithShadow"), gdjs.MenuCode.GDRedButtonWithShadowObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDRedButtonWithShadowObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDRedButtonWithShadowObjects1[i].IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDRedButtonWithShadowObjects1[k] = gdjs.MenuCode.GDRedButtonWithShadowObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDRedButtonWithShadowObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "rules", false);
}}

}


};

gdjs.MenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MenuCode.GDBlackRectangleObjects1.length = 0;
gdjs.MenuCode.GDBlackRectangleObjects2.length = 0;
gdjs.MenuCode.GDBlackRectangleObjects3.length = 0;
gdjs.MenuCode.GDGroundObjects1.length = 0;
gdjs.MenuCode.GDGroundObjects2.length = 0;
gdjs.MenuCode.GDGroundObjects3.length = 0;
gdjs.MenuCode.GDBackgroundObjects1.length = 0;
gdjs.MenuCode.GDBackgroundObjects2.length = 0;
gdjs.MenuCode.GDBackgroundObjects3.length = 0;
gdjs.MenuCode.GDAuthorLinkObjects1.length = 0;
gdjs.MenuCode.GDAuthorLinkObjects2.length = 0;
gdjs.MenuCode.GDAuthorLinkObjects3.length = 0;
gdjs.MenuCode.GDstartObjects1.length = 0;
gdjs.MenuCode.GDstartObjects2.length = 0;
gdjs.MenuCode.GDstartObjects3.length = 0;
gdjs.MenuCode.GDTitleObjects1.length = 0;
gdjs.MenuCode.GDTitleObjects2.length = 0;
gdjs.MenuCode.GDTitleObjects3.length = 0;
gdjs.MenuCode.GDDinoDouxObjects1.length = 0;
gdjs.MenuCode.GDDinoDouxObjects2.length = 0;
gdjs.MenuCode.GDDinoDouxObjects3.length = 0;
gdjs.MenuCode.GDleaderbObjects1.length = 0;
gdjs.MenuCode.GDleaderbObjects2.length = 0;
gdjs.MenuCode.GDleaderbObjects3.length = 0;
gdjs.MenuCode.GDstart2Objects1.length = 0;
gdjs.MenuCode.GDstart2Objects2.length = 0;
gdjs.MenuCode.GDstart2Objects3.length = 0;
gdjs.MenuCode.GDRedButtonWithShadowObjects1.length = 0;
gdjs.MenuCode.GDRedButtonWithShadowObjects2.length = 0;
gdjs.MenuCode.GDRedButtonWithShadowObjects3.length = 0;

gdjs.MenuCode.eventsList4(runtimeScene);
gdjs.MenuCode.GDBlackRectangleObjects1.length = 0;
gdjs.MenuCode.GDBlackRectangleObjects2.length = 0;
gdjs.MenuCode.GDBlackRectangleObjects3.length = 0;
gdjs.MenuCode.GDGroundObjects1.length = 0;
gdjs.MenuCode.GDGroundObjects2.length = 0;
gdjs.MenuCode.GDGroundObjects3.length = 0;
gdjs.MenuCode.GDBackgroundObjects1.length = 0;
gdjs.MenuCode.GDBackgroundObjects2.length = 0;
gdjs.MenuCode.GDBackgroundObjects3.length = 0;
gdjs.MenuCode.GDAuthorLinkObjects1.length = 0;
gdjs.MenuCode.GDAuthorLinkObjects2.length = 0;
gdjs.MenuCode.GDAuthorLinkObjects3.length = 0;
gdjs.MenuCode.GDstartObjects1.length = 0;
gdjs.MenuCode.GDstartObjects2.length = 0;
gdjs.MenuCode.GDstartObjects3.length = 0;
gdjs.MenuCode.GDTitleObjects1.length = 0;
gdjs.MenuCode.GDTitleObjects2.length = 0;
gdjs.MenuCode.GDTitleObjects3.length = 0;
gdjs.MenuCode.GDDinoDouxObjects1.length = 0;
gdjs.MenuCode.GDDinoDouxObjects2.length = 0;
gdjs.MenuCode.GDDinoDouxObjects3.length = 0;
gdjs.MenuCode.GDleaderbObjects1.length = 0;
gdjs.MenuCode.GDleaderbObjects2.length = 0;
gdjs.MenuCode.GDleaderbObjects3.length = 0;
gdjs.MenuCode.GDstart2Objects1.length = 0;
gdjs.MenuCode.GDstart2Objects2.length = 0;
gdjs.MenuCode.GDstart2Objects3.length = 0;
gdjs.MenuCode.GDRedButtonWithShadowObjects1.length = 0;
gdjs.MenuCode.GDRedButtonWithShadowObjects2.length = 0;
gdjs.MenuCode.GDRedButtonWithShadowObjects3.length = 0;


return;

}

gdjs['MenuCode'] = gdjs.MenuCode;
