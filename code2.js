gdjs.MenuCode = {};
gdjs.MenuCode.GDFoxObjects1= [];
gdjs.MenuCode.GDFoxObjects2= [];
gdjs.MenuCode.GDBushObjects1= [];
gdjs.MenuCode.GDBushObjects2= [];
gdjs.MenuCode.GDtreeObjects1= [];
gdjs.MenuCode.GDtreeObjects2= [];
gdjs.MenuCode.GDDIRTObjects1= [];
gdjs.MenuCode.GDDIRTObjects2= [];
gdjs.MenuCode.GDGrassObjects1= [];
gdjs.MenuCode.GDGrassObjects2= [];
gdjs.MenuCode.GDCAMERARIGObjects1= [];
gdjs.MenuCode.GDCAMERARIGObjects2= [];
gdjs.MenuCode.GDTorchObjects1= [];
gdjs.MenuCode.GDTorchObjects2= [];
gdjs.MenuCode.GDFireObjects1= [];
gdjs.MenuCode.GDFireObjects2= [];
gdjs.MenuCode.GDJET_95WATERObjects1= [];
gdjs.MenuCode.GDJET_95WATERObjects2= [];
gdjs.MenuCode.GDMISTObjects1= [];
gdjs.MenuCode.GDMISTObjects2= [];
gdjs.MenuCode.GDWaterObjects1= [];
gdjs.MenuCode.GDWaterObjects2= [];
gdjs.MenuCode.GDlogoObjects1= [];
gdjs.MenuCode.GDlogoObjects2= [];
gdjs.MenuCode.GDGREYObjects1= [];
gdjs.MenuCode.GDGREYObjects2= [];
gdjs.MenuCode.GDtestObjects1= [];
gdjs.MenuCode.GDtestObjects2= [];
gdjs.MenuCode.GDNewObjectObjects1= [];
gdjs.MenuCode.GDNewObjectObjects2= [];
gdjs.MenuCode.GDNewObject2Objects1= [];
gdjs.MenuCode.GDNewObject2Objects2= [];
gdjs.MenuCode.GDNewObject3Objects1= [];
gdjs.MenuCode.GDNewObject3Objects2= [];
gdjs.MenuCode.GDSPEECHObjects1= [];
gdjs.MenuCode.GDSPEECHObjects2= [];
gdjs.MenuCode.GDWHATObjects1= [];
gdjs.MenuCode.GDWHATObjects2= [];
gdjs.MenuCode.GDSTARTObjects1= [];
gdjs.MenuCode.GDSTARTObjects2= [];
gdjs.MenuCode.GDEXITObjects1= [];
gdjs.MenuCode.GDEXITObjects2= [];
gdjs.MenuCode.GDbugObjects1= [];
gdjs.MenuCode.GDbugObjects2= [];
gdjs.MenuCode.GDupdatesObjects1= [];
gdjs.MenuCode.GDupdatesObjects2= [];

gdjs.MenuCode.conditionTrue_0 = {val:false};
gdjs.MenuCode.condition0IsTrue_0 = {val:false};
gdjs.MenuCode.condition1IsTrue_0 = {val:false};
gdjs.MenuCode.condition2IsTrue_0 = {val:false};
gdjs.MenuCode.condition3IsTrue_0 = {val:false};
gdjs.MenuCode.condition4IsTrue_0 = {val:false};
gdjs.MenuCode.condition5IsTrue_0 = {val:false};
gdjs.MenuCode.condition6IsTrue_0 = {val:false};
gdjs.MenuCode.condition7IsTrue_0 = {val:false};


gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDEXITObjects1Objects = Hashtable.newFrom({"EXIT": gdjs.MenuCode.GDEXITObjects1});gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDSTARTObjects1Objects = Hashtable.newFrom({"START": gdjs.MenuCode.GDSTARTObjects1});gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDbugObjects1Objects = Hashtable.newFrom({"bug": gdjs.MenuCode.GDbugObjects1});gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDupdatesObjects1Objects = Hashtable.newFrom({"updates": gdjs.MenuCode.GDupdatesObjects1});gdjs.MenuCode.eventsList0 = function(runtimeScene) {

{


gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "Greg forest theme.mp3", true, 100, 1);
}}

}


{

gdjs.MenuCode.GDEXITObjects1.createFrom(runtimeScene.getObjects("EXIT"));

gdjs.MenuCode.condition0IsTrue_0.val = false;
gdjs.MenuCode.condition1IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDEXITObjects1Objects, runtimeScene, true, false);
}if ( gdjs.MenuCode.condition0IsTrue_0.val ) {
{
gdjs.MenuCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.MenuCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


{

gdjs.MenuCode.GDSTARTObjects1.createFrom(runtimeScene.getObjects("START"));

gdjs.MenuCode.condition0IsTrue_0.val = false;
gdjs.MenuCode.condition1IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDSTARTObjects1Objects, runtimeScene, true, false);
}if ( gdjs.MenuCode.condition0IsTrue_0.val ) {
{
gdjs.MenuCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.MenuCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Tutorial", false);
}}

}


{


gdjs.MenuCode.condition0IsTrue_0.val = false;
gdjs.MenuCode.condition1IsTrue_0.val = false;
gdjs.MenuCode.condition2IsTrue_0.val = false;
gdjs.MenuCode.condition3IsTrue_0.val = false;
gdjs.MenuCode.condition4IsTrue_0.val = false;
gdjs.MenuCode.condition5IsTrue_0.val = false;
gdjs.MenuCode.condition6IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "F12");
}if ( gdjs.MenuCode.condition0IsTrue_0.val ) {
{
gdjs.MenuCode.condition1IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "f");
}if ( gdjs.MenuCode.condition1IsTrue_0.val ) {
{
gdjs.MenuCode.condition2IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Num1");
}if ( gdjs.MenuCode.condition2IsTrue_0.val ) {
{
gdjs.MenuCode.condition3IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Num2");
}if ( gdjs.MenuCode.condition3IsTrue_0.val ) {
{
gdjs.MenuCode.condition4IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "F2");
}if ( gdjs.MenuCode.condition4IsTrue_0.val ) {
{
gdjs.MenuCode.condition5IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Delete");
}if ( gdjs.MenuCode.condition5IsTrue_0.val ) {
{
gdjs.MenuCode.condition6IsTrue_0.val = gdjs.evtTools.input.isScrollingDown(runtimeScene);
}}
}
}
}
}
}
if (gdjs.MenuCode.condition6IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "debug", false);
}}

}


{

gdjs.MenuCode.GDbugObjects1.createFrom(runtimeScene.getObjects("bug"));

gdjs.MenuCode.condition0IsTrue_0.val = false;
gdjs.MenuCode.condition1IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDbugObjects1Objects, runtimeScene, true, false);
}if ( gdjs.MenuCode.condition0IsTrue_0.val ) {
{
gdjs.MenuCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.MenuCode.condition1IsTrue_0.val) {
{gdjs.evtTools.window.openURL("https://foxible.catto.uk/report-a-bug", runtimeScene);
}}

}


{

gdjs.MenuCode.GDupdatesObjects1.createFrom(runtimeScene.getObjects("updates"));

gdjs.MenuCode.condition0IsTrue_0.val = false;
gdjs.MenuCode.condition1IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDupdatesObjects1Objects, runtimeScene, true, false);
}if ( gdjs.MenuCode.condition0IsTrue_0.val ) {
{
gdjs.MenuCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.MenuCode.condition1IsTrue_0.val) {
{gdjs.evtTools.window.openURL("https://foxible.catto.uk/update-log", runtimeScene);
}}

}


};

gdjs.MenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MenuCode.GDFoxObjects1.length = 0;
gdjs.MenuCode.GDFoxObjects2.length = 0;
gdjs.MenuCode.GDBushObjects1.length = 0;
gdjs.MenuCode.GDBushObjects2.length = 0;
gdjs.MenuCode.GDtreeObjects1.length = 0;
gdjs.MenuCode.GDtreeObjects2.length = 0;
gdjs.MenuCode.GDDIRTObjects1.length = 0;
gdjs.MenuCode.GDDIRTObjects2.length = 0;
gdjs.MenuCode.GDGrassObjects1.length = 0;
gdjs.MenuCode.GDGrassObjects2.length = 0;
gdjs.MenuCode.GDCAMERARIGObjects1.length = 0;
gdjs.MenuCode.GDCAMERARIGObjects2.length = 0;
gdjs.MenuCode.GDTorchObjects1.length = 0;
gdjs.MenuCode.GDTorchObjects2.length = 0;
gdjs.MenuCode.GDFireObjects1.length = 0;
gdjs.MenuCode.GDFireObjects2.length = 0;
gdjs.MenuCode.GDJET_95WATERObjects1.length = 0;
gdjs.MenuCode.GDJET_95WATERObjects2.length = 0;
gdjs.MenuCode.GDMISTObjects1.length = 0;
gdjs.MenuCode.GDMISTObjects2.length = 0;
gdjs.MenuCode.GDWaterObjects1.length = 0;
gdjs.MenuCode.GDWaterObjects2.length = 0;
gdjs.MenuCode.GDlogoObjects1.length = 0;
gdjs.MenuCode.GDlogoObjects2.length = 0;
gdjs.MenuCode.GDGREYObjects1.length = 0;
gdjs.MenuCode.GDGREYObjects2.length = 0;
gdjs.MenuCode.GDtestObjects1.length = 0;
gdjs.MenuCode.GDtestObjects2.length = 0;
gdjs.MenuCode.GDNewObjectObjects1.length = 0;
gdjs.MenuCode.GDNewObjectObjects2.length = 0;
gdjs.MenuCode.GDNewObject2Objects1.length = 0;
gdjs.MenuCode.GDNewObject2Objects2.length = 0;
gdjs.MenuCode.GDNewObject3Objects1.length = 0;
gdjs.MenuCode.GDNewObject3Objects2.length = 0;
gdjs.MenuCode.GDSPEECHObjects1.length = 0;
gdjs.MenuCode.GDSPEECHObjects2.length = 0;
gdjs.MenuCode.GDWHATObjects1.length = 0;
gdjs.MenuCode.GDWHATObjects2.length = 0;
gdjs.MenuCode.GDSTARTObjects1.length = 0;
gdjs.MenuCode.GDSTARTObjects2.length = 0;
gdjs.MenuCode.GDEXITObjects1.length = 0;
gdjs.MenuCode.GDEXITObjects2.length = 0;
gdjs.MenuCode.GDbugObjects1.length = 0;
gdjs.MenuCode.GDbugObjects2.length = 0;
gdjs.MenuCode.GDupdatesObjects1.length = 0;
gdjs.MenuCode.GDupdatesObjects2.length = 0;

gdjs.MenuCode.eventsList0(runtimeScene);
return;

}

gdjs['MenuCode'] = gdjs.MenuCode;
