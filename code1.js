gdjs.GameCode = {};
gdjs.GameCode.localVariables = [];
gdjs.GameCode.GDLeaderboardDialogObjects1= [];
gdjs.GameCode.GDLeaderboardDialogObjects2= [];
gdjs.GameCode.GDLeaderboardDialogObjects3= [];
gdjs.GameCode.GDLeaderboardDialogObjects4= [];
gdjs.GameCode.GDTopPillarObjects1= [];
gdjs.GameCode.GDTopPillarObjects2= [];
gdjs.GameCode.GDTopPillarObjects3= [];
gdjs.GameCode.GDTopPillarObjects4= [];
gdjs.GameCode.GDBottomPillarObjects1= [];
gdjs.GameCode.GDBottomPillarObjects2= [];
gdjs.GameCode.GDBottomPillarObjects3= [];
gdjs.GameCode.GDBottomPillarObjects4= [];
gdjs.GameCode.GDCurrentScoreObjects1= [];
gdjs.GameCode.GDCurrentScoreObjects2= [];
gdjs.GameCode.GDCurrentScoreObjects3= [];
gdjs.GameCode.GDCurrentScoreObjects4= [];
gdjs.GameCode.GDFlashObjects1= [];
gdjs.GameCode.GDFlashObjects2= [];
gdjs.GameCode.GDFlashObjects3= [];
gdjs.GameCode.GDFlashObjects4= [];
gdjs.GameCode.GDInstructionsObjects1= [];
gdjs.GameCode.GDInstructionsObjects2= [];
gdjs.GameCode.GDInstructionsObjects3= [];
gdjs.GameCode.GDInstructionsObjects4= [];
gdjs.GameCode.GDBackgroundObjects1= [];
gdjs.GameCode.GDBackgroundObjects2= [];
gdjs.GameCode.GDBackgroundObjects3= [];
gdjs.GameCode.GDBackgroundObjects4= [];
gdjs.GameCode.GDGroundObjects1= [];
gdjs.GameCode.GDGroundObjects2= [];
gdjs.GameCode.GDGroundObjects3= [];
gdjs.GameCode.GDGroundObjects4= [];
gdjs.GameCode.GDCeilingObjects1= [];
gdjs.GameCode.GDCeilingObjects2= [];
gdjs.GameCode.GDCeilingObjects3= [];
gdjs.GameCode.GDCeilingObjects4= [];
gdjs.GameCode.GDBlackRectObjects1= [];
gdjs.GameCode.GDBlackRectObjects2= [];
gdjs.GameCode.GDBlackRectObjects3= [];
gdjs.GameCode.GDBlackRectObjects4= [];
gdjs.GameCode.GDGameOverObjects1= [];
gdjs.GameCode.GDGameOverObjects2= [];
gdjs.GameCode.GDGameOverObjects3= [];
gdjs.GameCode.GDGameOverObjects4= [];
gdjs.GameCode.GDTappyPlaneObjects1= [];
gdjs.GameCode.GDTappyPlaneObjects2= [];
gdjs.GameCode.GDTappyPlaneObjects3= [];
gdjs.GameCode.GDTappyPlaneObjects4= [];
gdjs.GameCode.GDNewSpriteObjects1= [];
gdjs.GameCode.GDNewSpriteObjects2= [];
gdjs.GameCode.GDNewSpriteObjects3= [];
gdjs.GameCode.GDNewSpriteObjects4= [];
gdjs.GameCode.GDDebrisPapers3Objects1= [];
gdjs.GameCode.GDDebrisPapers3Objects2= [];
gdjs.GameCode.GDDebrisPapers3Objects3= [];
gdjs.GameCode.GDDebrisPapers3Objects4= [];
gdjs.GameCode.GDNewTiledSpriteObjects1= [];
gdjs.GameCode.GDNewTiledSpriteObjects2= [];
gdjs.GameCode.GDNewTiledSpriteObjects3= [];
gdjs.GameCode.GDNewTiledSpriteObjects4= [];
gdjs.GameCode.GDNewSprite2Objects1= [];
gdjs.GameCode.GDNewSprite2Objects2= [];
gdjs.GameCode.GDNewSprite2Objects3= [];
gdjs.GameCode.GDNewSprite2Objects4= [];
gdjs.GameCode.GDDebrisPapers4Objects1= [];
gdjs.GameCode.GDDebrisPapers4Objects2= [];
gdjs.GameCode.GDDebrisPapers4Objects3= [];
gdjs.GameCode.GDDebrisPapers4Objects4= [];
gdjs.GameCode.GDNewSprite3Objects1= [];
gdjs.GameCode.GDNewSprite3Objects2= [];
gdjs.GameCode.GDNewSprite3Objects3= [];
gdjs.GameCode.GDNewSprite3Objects4= [];
gdjs.GameCode.GDDinoDouxObjects1= [];
gdjs.GameCode.GDDinoDouxObjects2= [];
gdjs.GameCode.GDDinoDouxObjects3= [];
gdjs.GameCode.GDDinoDouxObjects4= [];
gdjs.GameCode.GDHearthObjects1= [];
gdjs.GameCode.GDHearthObjects2= [];
gdjs.GameCode.GDHearthObjects3= [];
gdjs.GameCode.GDHearthObjects4= [];
gdjs.GameCode.GDScoreCounterObjects1= [];
gdjs.GameCode.GDScoreCounterObjects2= [];
gdjs.GameCode.GDScoreCounterObjects3= [];
gdjs.GameCode.GDScoreCounterObjects4= [];
gdjs.GameCode.GDTappyPlane2Objects1= [];
gdjs.GameCode.GDTappyPlane2Objects2= [];
gdjs.GameCode.GDTappyPlane2Objects3= [];
gdjs.GameCode.GDTappyPlane2Objects4= [];


gdjs.GameCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BlackRect"), gdjs.GameCode.GDBlackRectObjects1);
gdjs.copyArray(runtimeScene.getObjects("TappyPlane"), gdjs.GameCode.GDTappyPlaneObjects1);
{for(var i = 0, len = gdjs.GameCode.GDTappyPlaneObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDTappyPlaneObjects1[i].activateBehavior("PlatformerObject", false);
}
}{gdjs.evtTools.camera.showLayer(runtimeScene, "Transition");
}{for(var i = 0, len = gdjs.GameCode.GDBlackRectObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDBlackRectObjects1[i].getBehavior("Tween").addObjectOpacityTween2("FadeIn", 0, "linear", 0.25, true);
}
}}

}


};gdjs.GameCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13775148);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Instructions"), gdjs.GameCode.GDInstructionsObjects1);
gdjs.copyArray(runtimeScene.getObjects("TappyPlane"), gdjs.GameCode.GDTappyPlaneObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(0).setString("GamePlaying");
}{for(var i = 0, len = gdjs.GameCode.GDTappyPlaneObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDTappyPlaneObjects1[i].activateBehavior("EllipseMovement", false);
}
}{for(var i = 0, len = gdjs.GameCode.GDTappyPlaneObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDTappyPlaneObjects1[i].activateBehavior("PlatformerObject", true);
}
}{for(var i = 0, len = gdjs.GameCode.GDInstructionsObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDInstructionsObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.GameCode.GDTappyPlaneObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDTappyPlaneObjects1[i].getBehavior("Resizable").setSize(35, 35);
}
}}

}


};gdjs.GameCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(0)) == "NotStarted";
if (isConditionTrue_0) {

{ //Subevents
gdjs.GameCode.eventsList1(runtimeScene);} //End of subevents
}

}


};gdjs.GameCode.eventsList3 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Ceiling"), gdjs.GameCode.GDCeilingObjects1);
gdjs.copyArray(runtimeScene.getObjects("Ground"), gdjs.GameCode.GDGroundObjects1);
{for(var i = 0, len = gdjs.GameCode.GDGroundObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDGroundObjects1[i].setXOffset(gdjs.GameCode.GDGroundObjects1[i].getXOffset() + (100 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}{for(var i = 0, len = gdjs.GameCode.GDCeilingObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDCeilingObjects1[i].setXOffset(gdjs.GameCode.GDCeilingObjects1[i].getXOffset() - (100 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}}

}


};gdjs.GameCode.eventsList4 = function(runtimeScene) {

{


gdjs.GameCode.eventsList3(runtimeScene);
}


};gdjs.GameCode.eventsList5 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(0)) == "NotStarted";
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(0)) == "GamePlaying";
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.GameCode.eventsList4(runtimeScene);} //End of subevents
}

}


};gdjs.GameCode.eventsList6 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("TappyPlane"), gdjs.GameCode.GDTappyPlaneObjects3);
{for(var i = 0, len = gdjs.GameCode.GDTappyPlaneObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDTappyPlaneObjects3[i].rotateTowardAngle(gdjs.randomFloatInRange(-(90), 90), 50, runtimeScene);
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("TappyPlane"), gdjs.GameCode.GDTappyPlaneObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDTappyPlaneObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDTappyPlaneObjects3[i].getBehavior("PlatformerObject").isFalling() ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDTappyPlaneObjects3[k] = gdjs.GameCode.GDTappyPlaneObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDTappyPlaneObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDTappyPlaneObjects3 */
{for(var i = 0, len = gdjs.GameCode.GDTappyPlaneObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDTappyPlaneObjects3[i].rotateTowardAngle(90, 150, runtimeScene);
}
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Space");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TappyPlane"), gdjs.GameCode.GDTappyPlaneObjects2);
{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\sfx_wing.wav", false, 70, gdjs.randomFloatInRange(1.1, 1.3));
}{for(var i = 0, len = gdjs.GameCode.GDTappyPlaneObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDTappyPlaneObjects2[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}{for(var i = 0, len = gdjs.GameCode.GDTappyPlaneObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDTappyPlaneObjects2[i].getBehavior("PlatformerObject").setCanJump();
}
}{for(var i = 0, len = gdjs.GameCode.GDTappyPlaneObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDTappyPlaneObjects2[i].setAngle(320);
}
}}

}


};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDTopPillarObjects3Objects = Hashtable.newFrom({"TopPillar": gdjs.GameCode.GDTopPillarObjects3});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDBottomPillarObjects3Objects = Hashtable.newFrom({"BottomPillar": gdjs.GameCode.GDBottomPillarObjects3});
gdjs.GameCode.eventsList7 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "pipe_spawn") > 2.5;
if (isConditionTrue_0) {
gdjs.GameCode.GDBottomPillarObjects3.length = 0;

gdjs.GameCode.GDTopPillarObjects3.length = 0;

{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "pipe_spawn");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDTopPillarObjects3Objects, 450, gdjs.randomInRange(30, 110), "");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDBottomPillarObjects3Objects, 450, (( gdjs.GameCode.GDTopPillarObjects3.length === 0 ) ? 0 :gdjs.GameCode.GDTopPillarObjects3[0].getPointY("")) + 350, "");
}{for(var i = 0, len = gdjs.GameCode.GDBottomPillarObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDBottomPillarObjects3[i].setZOrder(1);
}
for(var i = 0, len = gdjs.GameCode.GDTopPillarObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDTopPillarObjects3[i].setZOrder(1);
}
}{for(var i = 0, len = gdjs.GameCode.GDBottomPillarObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDBottomPillarObjects3[i].getBehavior("Animation").setAnimationIndex(gdjs.random(1));
}
}{for(var i = 0, len = gdjs.GameCode.GDTopPillarObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDTopPillarObjects3[i].getBehavior("Animation").setAnimationIndex(gdjs.random(1));
}
}}

}


{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("BottomPillar"), gdjs.GameCode.GDBottomPillarObjects2);
gdjs.copyArray(runtimeScene.getObjects("TopPillar"), gdjs.GameCode.GDTopPillarObjects2);
{for(var i = 0, len = gdjs.GameCode.GDBottomPillarObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDBottomPillarObjects2[i].addForce(-(100), 0, 0);
}
for(var i = 0, len = gdjs.GameCode.GDTopPillarObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDTopPillarObjects2[i].addForce(-(100), 0, 0);
}
}}

}


};gdjs.GameCode.asyncCallback13790156 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.GameCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("CurrentScore"), gdjs.GameCode.GDCurrentScoreObjects3);

{for(var i = 0, len = gdjs.GameCode.GDCurrentScoreObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDCurrentScoreObjects3[i].setOutlineThickness(gdjs.GameCode.GDCurrentScoreObjects3[i].getOutlineThickness() - (5));
}
}{for(var i = 0, len = gdjs.GameCode.GDCurrentScoreObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDCurrentScoreObjects3[i].setY(gdjs.GameCode.GDCurrentScoreObjects3[i].getY() + (5));
}
}gdjs.GameCode.localVariables.length = 0;
}
gdjs.GameCode.eventsList8 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.GameCode.localVariables);
for (const obj of gdjs.GameCode.GDCurrentScoreObjects2) asyncObjectsList.addObject("CurrentScore", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.GameCode.asyncCallback13790156(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.GameCode.eventsList9 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
{
/* Reuse gdjs.GameCode.GDCurrentScoreObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDCurrentScoreObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDCurrentScoreObjects2[i].setOutlineThickness(gdjs.GameCode.GDCurrentScoreObjects2[i].getOutlineThickness() + (5));
}
}{for(var i = 0, len = gdjs.GameCode.GDCurrentScoreObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDCurrentScoreObjects2[i].setY(gdjs.GameCode.GDCurrentScoreObjects2[i].getY() - (5));
}
}
{ //Subevents
gdjs.GameCode.eventsList8(runtimeScene);} //End of subevents
}

}


};gdjs.GameCode.eventsList10 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("BottomPillar"), gdjs.GameCode.GDBottomPillarObjects2);
gdjs.copyArray(runtimeScene.getObjects("TappyPlane"), gdjs.GameCode.GDTappyPlaneObjects2);
gdjs.copyArray(runtimeScene.getObjects("TopPillar"), gdjs.GameCode.GDTopPillarObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDBottomPillarObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDBottomPillarObjects2[i].getX() < (( gdjs.GameCode.GDTappyPlaneObjects2.length === 0 ) ? 0 :gdjs.GameCode.GDTappyPlaneObjects2[0].getPointX("Centre")) ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDBottomPillarObjects2[k] = gdjs.GameCode.GDBottomPillarObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDBottomPillarObjects2.length = k;
for (var i = 0, k = 0, l = gdjs.GameCode.GDTopPillarObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDTopPillarObjects2[i].getX() < (( gdjs.GameCode.GDTappyPlaneObjects2.length === 0 ) ? 0 :gdjs.GameCode.GDTappyPlaneObjects2[0].getPointX("Centre")) ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDTopPillarObjects2[k] = gdjs.GameCode.GDTopPillarObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDTopPillarObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDBottomPillarObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDBottomPillarObjects2[i].getX() > (( gdjs.GameCode.GDTappyPlaneObjects2.length === 0 ) ? 0 :gdjs.GameCode.GDTappyPlaneObjects2[0].getPointX("Centre")) - 60 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDBottomPillarObjects2[k] = gdjs.GameCode.GDBottomPillarObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDBottomPillarObjects2.length = k;
for (var i = 0, k = 0, l = gdjs.GameCode.GDTopPillarObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDTopPillarObjects2[i].getX() > (( gdjs.GameCode.GDTappyPlaneObjects2.length === 0 ) ? 0 :gdjs.GameCode.GDTappyPlaneObjects2[0].getPointX("Centre")) - 60 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDTopPillarObjects2[k] = gdjs.GameCode.GDTopPillarObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDTopPillarObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13788084);
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("CurrentScore"), gdjs.GameCode.GDCurrentScoreObjects2);
{runtimeScene.getScene().getVariables().getFromIndex(1).add(1);
}{for(var i = 0, len = gdjs.GameCode.GDCurrentScoreObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDCurrentScoreObjects2[i].getBehavior("Text").setText(runtimeScene.getScene().getVariables().getFromIndex(1).getAsString());
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\sfx_point.wav", false, 100, 1);
}
{ //Subevents
gdjs.GameCode.eventsList9(runtimeScene);} //End of subevents
}

}


};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDTappyPlaneObjects1Objects = Hashtable.newFrom({"TappyPlane": gdjs.GameCode.GDTappyPlaneObjects1});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDTopPillarObjects1ObjectsGDgdjs_9546GameCode_9546GDBottomPillarObjects1ObjectsGDgdjs_9546GameCode_9546GDCeilingObjects1ObjectsGDgdjs_9546GameCode_9546GDGroundObjects1Objects = Hashtable.newFrom({"TopPillar": gdjs.GameCode.GDTopPillarObjects1, "BottomPillar": gdjs.GameCode.GDBottomPillarObjects1, "Ceiling": gdjs.GameCode.GDCeilingObjects1, "Ground": gdjs.GameCode.GDGroundObjects1});
gdjs.GameCode.asyncCallback13792036 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.GameCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("TappyPlane"), gdjs.GameCode.GDTappyPlaneObjects2);

{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\sfx_hit.wav", false, 100, 0.8);
}{for(var i = 0, len = gdjs.GameCode.GDTappyPlaneObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDTappyPlaneObjects2[i].activateBehavior("PlatformerObject", false);
}
}gdjs.GameCode.localVariables.length = 0;
}
gdjs.GameCode.eventsList11 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.GameCode.localVariables);
for (const obj of gdjs.GameCode.GDTappyPlaneObjects1) asyncObjectsList.addObject("TappyPlane", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.GameCode.asyncCallback13792036(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.GameCode.eventsList12 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("BottomPillar"), gdjs.GameCode.GDBottomPillarObjects1);
gdjs.copyArray(runtimeScene.getObjects("Ceiling"), gdjs.GameCode.GDCeilingObjects1);
gdjs.copyArray(runtimeScene.getObjects("Ground"), gdjs.GameCode.GDGroundObjects1);
gdjs.copyArray(runtimeScene.getObjects("TappyPlane"), gdjs.GameCode.GDTappyPlaneObjects1);
gdjs.copyArray(runtimeScene.getObjects("TopPillar"), gdjs.GameCode.GDTopPillarObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDTappyPlaneObjects1Objects, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDTopPillarObjects1ObjectsGDgdjs_9546GameCode_9546GDBottomPillarObjects1ObjectsGDgdjs_9546GameCode_9546GDCeilingObjects1ObjectsGDgdjs_9546GameCode_9546GDGroundObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setString("Gameover");
}{gdjs.evtTools.sound.unloadAllAudio(runtimeScene);
}
{ //Subevents
gdjs.GameCode.eventsList11(runtimeScene);} //End of subevents
}

}


};gdjs.GameCode.eventsList13 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13779756);
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "pipe_spawn");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "xxx");
}}

}


{


gdjs.GameCode.eventsList6(runtimeScene);
}


{


gdjs.GameCode.eventsList7(runtimeScene);
}


{


gdjs.GameCode.eventsList10(runtimeScene);
}


{


gdjs.GameCode.eventsList12(runtimeScene);
}


};gdjs.GameCode.eventsList14 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(0)) == "GamePlaying";
if (isConditionTrue_0) {

{ //Subevents
gdjs.GameCode.eventsList13(runtimeScene);} //End of subevents
}

}


};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDFlashObjects2Objects = Hashtable.newFrom({"Flash": gdjs.GameCode.GDFlashObjects2});
gdjs.GameCode.eventsList15 = function(runtimeScene, asyncObjectsList) {

{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("LeaderboardDialog"), gdjs.GameCode.GDLeaderboardDialogObjects3);
{for(var i = 0, len = gdjs.GameCode.GDLeaderboardDialogObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDLeaderboardDialogObjects3[i].SetScore(runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber(), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.GameCode.GDLeaderboardDialogObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDLeaderboardDialogObjects3[i].SetDefaultPlayerName(runtimeScene.getGame().getVariables().getFromIndex(0).getAsString(), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};gdjs.GameCode.asyncCallback13793972 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.GameCode.localVariables);
gdjs.copyArray(runtimeScene.getObjects("CurrentScore"), gdjs.GameCode.GDCurrentScoreObjects3);
gdjs.copyArray(asyncObjectsList.getObjects("Flash"), gdjs.GameCode.GDFlashObjects3);

gdjs.copyArray(runtimeScene.getObjects("Hearth"), gdjs.GameCode.GDHearthObjects3);
{for(var i = 0, len = gdjs.GameCode.GDFlashObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDFlashObjects3[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.GameCode.GDCurrentScoreObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDCurrentScoreObjects3[i].hide();
}
}{gdjs.evtTools.runtimeScene.createObjectsFromExternalLayout(runtimeScene, "Gameover", 0, 0, 0);
}{gdjs.evtTools.camera.showLayer(runtimeScene, "Gameover");
}{gdjs.playerAuthentication.removeAuthenticationBanner(runtimeScene);
}{gdjs.evtTools.runtimeScene.removeTimer(runtimeScene, "xxx");
}{for(var i = 0, len = gdjs.GameCode.GDHearthObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDHearthObjects3[i].deleteFromScene(runtimeScene);
}
}
{ //Subevents
gdjs.GameCode.eventsList15(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.GameCode.localVariables.length = 0;
}
gdjs.GameCode.eventsList16 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.GameCode.localVariables);
for (const obj of gdjs.GameCode.GDFlashObjects2) asyncObjectsList.addObject("Flash", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.GameCode.asyncCallback13793972(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.GameCode.eventsList17 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13793668);
}
if (isConditionTrue_0) {
gdjs.GameCode.GDFlashObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDFlashObjects2Objects, 0, 0, "GUI");
}{for(var i = 0, len = gdjs.GameCode.GDFlashObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDFlashObjects2[i].getBehavior("Flash").Flash(0.1, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.GameCode.eventsList16(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("LeaderboardDialog"), gdjs.GameCode.GDLeaderboardDialogObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDLeaderboardDialogObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDLeaderboardDialogObjects2[i].IsRestartClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDLeaderboardDialogObjects2[k] = gdjs.GameCode.GDLeaderboardDialogObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDLeaderboardDialogObjects2.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("LeaderboardDialog"), gdjs.GameCode.GDLeaderboardDialogObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDLeaderboardDialogObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDLeaderboardDialogObjects1[i].IsScoreSubmitted((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDLeaderboardDialogObjects1[k] = gdjs.GameCode.GDLeaderboardDialogObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDLeaderboardDialogObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDLeaderboardDialogObjects1 */
{runtimeScene.getGame().getVariables().getFromIndex(0).setString((( gdjs.GameCode.GDLeaderboardDialogObjects1.length === 0 ) ? "" :gdjs.GameCode.GDLeaderboardDialogObjects1[0].PlayerName((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))));
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", false);
}}

}


};gdjs.GameCode.eventsList18 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(0)) == "Gameover";
if (isConditionTrue_0) {

{ //Subevents
gdjs.GameCode.eventsList17(runtimeScene);} //End of subevents
}

}


};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDHearthObjects1Objects = Hashtable.newFrom({"Hearth": gdjs.GameCode.GDHearthObjects1});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDTopPillarObjects1Objects = Hashtable.newFrom({"TopPillar": gdjs.GameCode.GDTopPillarObjects1});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDHearthObjects1Objects = Hashtable.newFrom({"Hearth": gdjs.GameCode.GDHearthObjects1});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDBottomPillarObjects1Objects = Hashtable.newFrom({"BottomPillar": gdjs.GameCode.GDBottomPillarObjects1});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDHearthObjects1Objects = Hashtable.newFrom({"Hearth": gdjs.GameCode.GDHearthObjects1});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDTappyPlaneObjects1Objects = Hashtable.newFrom({"TappyPlane": gdjs.GameCode.GDTappyPlaneObjects1});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDHearthObjects1Objects = Hashtable.newFrom({"Hearth": gdjs.GameCode.GDHearthObjects1});
gdjs.GameCode.eventsList19 = function(runtimeScene) {

{


gdjs.GameCode.eventsList0(runtimeScene);
}


{


gdjs.GameCode.eventsList2(runtimeScene);
}


{


gdjs.GameCode.eventsList5(runtimeScene);
}


{


gdjs.GameCode.eventsList14(runtimeScene);
}


{


gdjs.GameCode.eventsList18(runtimeScene);
}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(1)) >= 10;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Background"), gdjs.GameCode.GDBackgroundObjects1);
{for(var i = 0, len = gdjs.GameCode.GDBackgroundObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDBackgroundObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{


let isConditionTrue_0 = false;
{
}

}


{

gdjs.copyArray(runtimeScene.getObjects("LeaderboardDialog"), gdjs.GameCode.GDLeaderboardDialogObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDLeaderboardDialogObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDLeaderboardDialogObjects1[i].is_Submitclicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDLeaderboardDialogObjects1[k] = gdjs.GameCode.GDLeaderboardDialogObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDLeaderboardDialogObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDLeaderboardDialogObjects1 */
{runtimeScene.getGame().getVariables().getFromIndex(0).setString((( gdjs.GameCode.GDLeaderboardDialogObjects1.length === 0 ) ? "" :gdjs.GameCode.GDLeaderboardDialogObjects1[0].PlayerName((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))));
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(1)) >= 50;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.GameCode.GDNewSprite2Objects1);
{for(var i = 0, len = gdjs.GameCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.GameCode.GDNewSprite2Objects1[i].deleteFromScene(runtimeScene);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "b");
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(1).add(10);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "xxx") >= 18;
if (isConditionTrue_0) {
gdjs.GameCode.GDHearthObjects1.length = 0;

{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "xxx");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDHearthObjects1Objects, 450, gdjs.randomInRange(50, 380), "");
}{for(var i = 0, len = gdjs.GameCode.GDHearthObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDHearthObjects1[i].getBehavior("Resizable").setSize(50, 100);
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Hearth"), gdjs.GameCode.GDHearthObjects1);
{for(var i = 0, len = gdjs.GameCode.GDHearthObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDHearthObjects1[i].addForce(-(100), 0, 0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BottomPillar"), gdjs.GameCode.GDBottomPillarObjects1);
gdjs.copyArray(runtimeScene.getObjects("Hearth"), gdjs.GameCode.GDHearthObjects1);
gdjs.copyArray(runtimeScene.getObjects("TopPillar"), gdjs.GameCode.GDTopPillarObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDTopPillarObjects1Objects, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDHearthObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDBottomPillarObjects1Objects, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDHearthObjects1Objects, false, runtimeScene, false);
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDHearthObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDHearthObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDHearthObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Hearth"), gdjs.GameCode.GDHearthObjects1);
gdjs.copyArray(runtimeScene.getObjects("TappyPlane"), gdjs.GameCode.GDTappyPlaneObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDTappyPlaneObjects1Objects, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDHearthObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("CurrentScore"), gdjs.GameCode.GDCurrentScoreObjects1);
/* Reuse gdjs.GameCode.GDHearthObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDHearthObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDHearthObjects1[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getScene().getVariables().getFromIndex(1).add(5);
}{for(var i = 0, len = gdjs.GameCode.GDCurrentScoreObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDCurrentScoreObjects1[i].getBehavior("Text").setText(runtimeScene.getScene().getVariables().getFromIndex(1).getAsString());
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\sfx_point.wav", false, 100, 1);
}}

}


};

gdjs.GameCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GameCode.GDLeaderboardDialogObjects1.length = 0;
gdjs.GameCode.GDLeaderboardDialogObjects2.length = 0;
gdjs.GameCode.GDLeaderboardDialogObjects3.length = 0;
gdjs.GameCode.GDLeaderboardDialogObjects4.length = 0;
gdjs.GameCode.GDTopPillarObjects1.length = 0;
gdjs.GameCode.GDTopPillarObjects2.length = 0;
gdjs.GameCode.GDTopPillarObjects3.length = 0;
gdjs.GameCode.GDTopPillarObjects4.length = 0;
gdjs.GameCode.GDBottomPillarObjects1.length = 0;
gdjs.GameCode.GDBottomPillarObjects2.length = 0;
gdjs.GameCode.GDBottomPillarObjects3.length = 0;
gdjs.GameCode.GDBottomPillarObjects4.length = 0;
gdjs.GameCode.GDCurrentScoreObjects1.length = 0;
gdjs.GameCode.GDCurrentScoreObjects2.length = 0;
gdjs.GameCode.GDCurrentScoreObjects3.length = 0;
gdjs.GameCode.GDCurrentScoreObjects4.length = 0;
gdjs.GameCode.GDFlashObjects1.length = 0;
gdjs.GameCode.GDFlashObjects2.length = 0;
gdjs.GameCode.GDFlashObjects3.length = 0;
gdjs.GameCode.GDFlashObjects4.length = 0;
gdjs.GameCode.GDInstructionsObjects1.length = 0;
gdjs.GameCode.GDInstructionsObjects2.length = 0;
gdjs.GameCode.GDInstructionsObjects3.length = 0;
gdjs.GameCode.GDInstructionsObjects4.length = 0;
gdjs.GameCode.GDBackgroundObjects1.length = 0;
gdjs.GameCode.GDBackgroundObjects2.length = 0;
gdjs.GameCode.GDBackgroundObjects3.length = 0;
gdjs.GameCode.GDBackgroundObjects4.length = 0;
gdjs.GameCode.GDGroundObjects1.length = 0;
gdjs.GameCode.GDGroundObjects2.length = 0;
gdjs.GameCode.GDGroundObjects3.length = 0;
gdjs.GameCode.GDGroundObjects4.length = 0;
gdjs.GameCode.GDCeilingObjects1.length = 0;
gdjs.GameCode.GDCeilingObjects2.length = 0;
gdjs.GameCode.GDCeilingObjects3.length = 0;
gdjs.GameCode.GDCeilingObjects4.length = 0;
gdjs.GameCode.GDBlackRectObjects1.length = 0;
gdjs.GameCode.GDBlackRectObjects2.length = 0;
gdjs.GameCode.GDBlackRectObjects3.length = 0;
gdjs.GameCode.GDBlackRectObjects4.length = 0;
gdjs.GameCode.GDGameOverObjects1.length = 0;
gdjs.GameCode.GDGameOverObjects2.length = 0;
gdjs.GameCode.GDGameOverObjects3.length = 0;
gdjs.GameCode.GDGameOverObjects4.length = 0;
gdjs.GameCode.GDTappyPlaneObjects1.length = 0;
gdjs.GameCode.GDTappyPlaneObjects2.length = 0;
gdjs.GameCode.GDTappyPlaneObjects3.length = 0;
gdjs.GameCode.GDTappyPlaneObjects4.length = 0;
gdjs.GameCode.GDNewSpriteObjects1.length = 0;
gdjs.GameCode.GDNewSpriteObjects2.length = 0;
gdjs.GameCode.GDNewSpriteObjects3.length = 0;
gdjs.GameCode.GDNewSpriteObjects4.length = 0;
gdjs.GameCode.GDDebrisPapers3Objects1.length = 0;
gdjs.GameCode.GDDebrisPapers3Objects2.length = 0;
gdjs.GameCode.GDDebrisPapers3Objects3.length = 0;
gdjs.GameCode.GDDebrisPapers3Objects4.length = 0;
gdjs.GameCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.GameCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.GameCode.GDNewTiledSpriteObjects3.length = 0;
gdjs.GameCode.GDNewTiledSpriteObjects4.length = 0;
gdjs.GameCode.GDNewSprite2Objects1.length = 0;
gdjs.GameCode.GDNewSprite2Objects2.length = 0;
gdjs.GameCode.GDNewSprite2Objects3.length = 0;
gdjs.GameCode.GDNewSprite2Objects4.length = 0;
gdjs.GameCode.GDDebrisPapers4Objects1.length = 0;
gdjs.GameCode.GDDebrisPapers4Objects2.length = 0;
gdjs.GameCode.GDDebrisPapers4Objects3.length = 0;
gdjs.GameCode.GDDebrisPapers4Objects4.length = 0;
gdjs.GameCode.GDNewSprite3Objects1.length = 0;
gdjs.GameCode.GDNewSprite3Objects2.length = 0;
gdjs.GameCode.GDNewSprite3Objects3.length = 0;
gdjs.GameCode.GDNewSprite3Objects4.length = 0;
gdjs.GameCode.GDDinoDouxObjects1.length = 0;
gdjs.GameCode.GDDinoDouxObjects2.length = 0;
gdjs.GameCode.GDDinoDouxObjects3.length = 0;
gdjs.GameCode.GDDinoDouxObjects4.length = 0;
gdjs.GameCode.GDHearthObjects1.length = 0;
gdjs.GameCode.GDHearthObjects2.length = 0;
gdjs.GameCode.GDHearthObjects3.length = 0;
gdjs.GameCode.GDHearthObjects4.length = 0;
gdjs.GameCode.GDScoreCounterObjects1.length = 0;
gdjs.GameCode.GDScoreCounterObjects2.length = 0;
gdjs.GameCode.GDScoreCounterObjects3.length = 0;
gdjs.GameCode.GDScoreCounterObjects4.length = 0;
gdjs.GameCode.GDTappyPlane2Objects1.length = 0;
gdjs.GameCode.GDTappyPlane2Objects2.length = 0;
gdjs.GameCode.GDTappyPlane2Objects3.length = 0;
gdjs.GameCode.GDTappyPlane2Objects4.length = 0;

gdjs.GameCode.eventsList19(runtimeScene);
gdjs.GameCode.GDLeaderboardDialogObjects1.length = 0;
gdjs.GameCode.GDLeaderboardDialogObjects2.length = 0;
gdjs.GameCode.GDLeaderboardDialogObjects3.length = 0;
gdjs.GameCode.GDLeaderboardDialogObjects4.length = 0;
gdjs.GameCode.GDTopPillarObjects1.length = 0;
gdjs.GameCode.GDTopPillarObjects2.length = 0;
gdjs.GameCode.GDTopPillarObjects3.length = 0;
gdjs.GameCode.GDTopPillarObjects4.length = 0;
gdjs.GameCode.GDBottomPillarObjects1.length = 0;
gdjs.GameCode.GDBottomPillarObjects2.length = 0;
gdjs.GameCode.GDBottomPillarObjects3.length = 0;
gdjs.GameCode.GDBottomPillarObjects4.length = 0;
gdjs.GameCode.GDCurrentScoreObjects1.length = 0;
gdjs.GameCode.GDCurrentScoreObjects2.length = 0;
gdjs.GameCode.GDCurrentScoreObjects3.length = 0;
gdjs.GameCode.GDCurrentScoreObjects4.length = 0;
gdjs.GameCode.GDFlashObjects1.length = 0;
gdjs.GameCode.GDFlashObjects2.length = 0;
gdjs.GameCode.GDFlashObjects3.length = 0;
gdjs.GameCode.GDFlashObjects4.length = 0;
gdjs.GameCode.GDInstructionsObjects1.length = 0;
gdjs.GameCode.GDInstructionsObjects2.length = 0;
gdjs.GameCode.GDInstructionsObjects3.length = 0;
gdjs.GameCode.GDInstructionsObjects4.length = 0;
gdjs.GameCode.GDBackgroundObjects1.length = 0;
gdjs.GameCode.GDBackgroundObjects2.length = 0;
gdjs.GameCode.GDBackgroundObjects3.length = 0;
gdjs.GameCode.GDBackgroundObjects4.length = 0;
gdjs.GameCode.GDGroundObjects1.length = 0;
gdjs.GameCode.GDGroundObjects2.length = 0;
gdjs.GameCode.GDGroundObjects3.length = 0;
gdjs.GameCode.GDGroundObjects4.length = 0;
gdjs.GameCode.GDCeilingObjects1.length = 0;
gdjs.GameCode.GDCeilingObjects2.length = 0;
gdjs.GameCode.GDCeilingObjects3.length = 0;
gdjs.GameCode.GDCeilingObjects4.length = 0;
gdjs.GameCode.GDBlackRectObjects1.length = 0;
gdjs.GameCode.GDBlackRectObjects2.length = 0;
gdjs.GameCode.GDBlackRectObjects3.length = 0;
gdjs.GameCode.GDBlackRectObjects4.length = 0;
gdjs.GameCode.GDGameOverObjects1.length = 0;
gdjs.GameCode.GDGameOverObjects2.length = 0;
gdjs.GameCode.GDGameOverObjects3.length = 0;
gdjs.GameCode.GDGameOverObjects4.length = 0;
gdjs.GameCode.GDTappyPlaneObjects1.length = 0;
gdjs.GameCode.GDTappyPlaneObjects2.length = 0;
gdjs.GameCode.GDTappyPlaneObjects3.length = 0;
gdjs.GameCode.GDTappyPlaneObjects4.length = 0;
gdjs.GameCode.GDNewSpriteObjects1.length = 0;
gdjs.GameCode.GDNewSpriteObjects2.length = 0;
gdjs.GameCode.GDNewSpriteObjects3.length = 0;
gdjs.GameCode.GDNewSpriteObjects4.length = 0;
gdjs.GameCode.GDDebrisPapers3Objects1.length = 0;
gdjs.GameCode.GDDebrisPapers3Objects2.length = 0;
gdjs.GameCode.GDDebrisPapers3Objects3.length = 0;
gdjs.GameCode.GDDebrisPapers3Objects4.length = 0;
gdjs.GameCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.GameCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.GameCode.GDNewTiledSpriteObjects3.length = 0;
gdjs.GameCode.GDNewTiledSpriteObjects4.length = 0;
gdjs.GameCode.GDNewSprite2Objects1.length = 0;
gdjs.GameCode.GDNewSprite2Objects2.length = 0;
gdjs.GameCode.GDNewSprite2Objects3.length = 0;
gdjs.GameCode.GDNewSprite2Objects4.length = 0;
gdjs.GameCode.GDDebrisPapers4Objects1.length = 0;
gdjs.GameCode.GDDebrisPapers4Objects2.length = 0;
gdjs.GameCode.GDDebrisPapers4Objects3.length = 0;
gdjs.GameCode.GDDebrisPapers4Objects4.length = 0;
gdjs.GameCode.GDNewSprite3Objects1.length = 0;
gdjs.GameCode.GDNewSprite3Objects2.length = 0;
gdjs.GameCode.GDNewSprite3Objects3.length = 0;
gdjs.GameCode.GDNewSprite3Objects4.length = 0;
gdjs.GameCode.GDDinoDouxObjects1.length = 0;
gdjs.GameCode.GDDinoDouxObjects2.length = 0;
gdjs.GameCode.GDDinoDouxObjects3.length = 0;
gdjs.GameCode.GDDinoDouxObjects4.length = 0;
gdjs.GameCode.GDHearthObjects1.length = 0;
gdjs.GameCode.GDHearthObjects2.length = 0;
gdjs.GameCode.GDHearthObjects3.length = 0;
gdjs.GameCode.GDHearthObjects4.length = 0;
gdjs.GameCode.GDScoreCounterObjects1.length = 0;
gdjs.GameCode.GDScoreCounterObjects2.length = 0;
gdjs.GameCode.GDScoreCounterObjects3.length = 0;
gdjs.GameCode.GDScoreCounterObjects4.length = 0;
gdjs.GameCode.GDTappyPlane2Objects1.length = 0;
gdjs.GameCode.GDTappyPlane2Objects2.length = 0;
gdjs.GameCode.GDTappyPlane2Objects3.length = 0;
gdjs.GameCode.GDTappyPlane2Objects4.length = 0;


return;

}

gdjs['GameCode'] = gdjs.GameCode;
