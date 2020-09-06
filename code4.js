gdjs.Level_321_58_32storyCode = {};
gdjs.Level_321_58_32storyCode.GDFoxObjects1= [];
gdjs.Level_321_58_32storyCode.GDFoxObjects2= [];
gdjs.Level_321_58_32storyCode.GDBushObjects1= [];
gdjs.Level_321_58_32storyCode.GDBushObjects2= [];
gdjs.Level_321_58_32storyCode.GDtreeObjects1= [];
gdjs.Level_321_58_32storyCode.GDtreeObjects2= [];
gdjs.Level_321_58_32storyCode.GDDIRTObjects1= [];
gdjs.Level_321_58_32storyCode.GDDIRTObjects2= [];
gdjs.Level_321_58_32storyCode.GDGrassObjects1= [];
gdjs.Level_321_58_32storyCode.GDGrassObjects2= [];
gdjs.Level_321_58_32storyCode.GDCAMERARIGObjects1= [];
gdjs.Level_321_58_32storyCode.GDCAMERARIGObjects2= [];
gdjs.Level_321_58_32storyCode.GDTorchObjects1= [];
gdjs.Level_321_58_32storyCode.GDTorchObjects2= [];
gdjs.Level_321_58_32storyCode.GDFireObjects1= [];
gdjs.Level_321_58_32storyCode.GDFireObjects2= [];
gdjs.Level_321_58_32storyCode.GDJET_95WATERObjects1= [];
gdjs.Level_321_58_32storyCode.GDJET_95WATERObjects2= [];
gdjs.Level_321_58_32storyCode.GDMISTObjects1= [];
gdjs.Level_321_58_32storyCode.GDMISTObjects2= [];
gdjs.Level_321_58_32storyCode.GDWaterObjects1= [];
gdjs.Level_321_58_32storyCode.GDWaterObjects2= [];
gdjs.Level_321_58_32storyCode.GDtableObjects1= [];
gdjs.Level_321_58_32storyCode.GDtableObjects2= [];
gdjs.Level_321_58_32storyCode.GDtextObjects1= [];
gdjs.Level_321_58_32storyCode.GDtextObjects2= [];
gdjs.Level_321_58_32storyCode.GDcontinueObjects1= [];
gdjs.Level_321_58_32storyCode.GDcontinueObjects2= [];
gdjs.Level_321_58_32storyCode.GDblackObjects1= [];
gdjs.Level_321_58_32storyCode.GDblackObjects2= [];

gdjs.Level_321_58_32storyCode.conditionTrue_0 = {val:false};
gdjs.Level_321_58_32storyCode.condition0IsTrue_0 = {val:false};
gdjs.Level_321_58_32storyCode.condition1IsTrue_0 = {val:false};
gdjs.Level_321_58_32storyCode.condition2IsTrue_0 = {val:false};
gdjs.Level_321_58_32storyCode.condition3IsTrue_0 = {val:false};


gdjs.Level_321_58_32storyCode.mapOfGDgdjs_46Level_95321_9558_9532storyCode_46GDcontinueObjects1Objects = Hashtable.newFrom({"continue": gdjs.Level_321_58_32storyCode.GDcontinueObjects1});gdjs.Level_321_58_32storyCode.eventsList0 = function(runtimeScene) {

{


gdjs.Level_321_58_32storyCode.condition0IsTrue_0.val = false;
{
gdjs.Level_321_58_32storyCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Level_321_58_32storyCode.condition0IsTrue_0.val) {
{gdjs.evtTools.window.setFullScreen(runtimeScene, true, true);
}}

}


{

gdjs.Level_321_58_32storyCode.GDcontinueObjects1.createFrom(runtimeScene.getObjects("continue"));

gdjs.Level_321_58_32storyCode.condition0IsTrue_0.val = false;
gdjs.Level_321_58_32storyCode.condition1IsTrue_0.val = false;
{
gdjs.Level_321_58_32storyCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.Level_321_58_32storyCode.condition0IsTrue_0.val ) {
{
gdjs.Level_321_58_32storyCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Level_321_58_32storyCode.mapOfGDgdjs_46Level_95321_9558_9532storyCode_46GDcontinueObjects1Objects, runtimeScene, true, false);
}}
if (gdjs.Level_321_58_32storyCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level 1", false);
}}

}


{


gdjs.Level_321_58_32storyCode.condition0IsTrue_0.val = false;
gdjs.Level_321_58_32storyCode.condition1IsTrue_0.val = false;
gdjs.Level_321_58_32storyCode.condition2IsTrue_0.val = false;
{
gdjs.Level_321_58_32storyCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "c");
}if ( gdjs.Level_321_58_32storyCode.condition0IsTrue_0.val ) {
{
gdjs.Level_321_58_32storyCode.condition1IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
}if ( gdjs.Level_321_58_32storyCode.condition1IsTrue_0.val ) {
{
gdjs.Level_321_58_32storyCode.condition2IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "w");
}}
}
if (gdjs.Level_321_58_32storyCode.condition2IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "HIDDENHOUSE", false);
}}

}


};

gdjs.Level_321_58_32storyCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Level_321_58_32storyCode.GDFoxObjects1.length = 0;
gdjs.Level_321_58_32storyCode.GDFoxObjects2.length = 0;
gdjs.Level_321_58_32storyCode.GDBushObjects1.length = 0;
gdjs.Level_321_58_32storyCode.GDBushObjects2.length = 0;
gdjs.Level_321_58_32storyCode.GDtreeObjects1.length = 0;
gdjs.Level_321_58_32storyCode.GDtreeObjects2.length = 0;
gdjs.Level_321_58_32storyCode.GDDIRTObjects1.length = 0;
gdjs.Level_321_58_32storyCode.GDDIRTObjects2.length = 0;
gdjs.Level_321_58_32storyCode.GDGrassObjects1.length = 0;
gdjs.Level_321_58_32storyCode.GDGrassObjects2.length = 0;
gdjs.Level_321_58_32storyCode.GDCAMERARIGObjects1.length = 0;
gdjs.Level_321_58_32storyCode.GDCAMERARIGObjects2.length = 0;
gdjs.Level_321_58_32storyCode.GDTorchObjects1.length = 0;
gdjs.Level_321_58_32storyCode.GDTorchObjects2.length = 0;
gdjs.Level_321_58_32storyCode.GDFireObjects1.length = 0;
gdjs.Level_321_58_32storyCode.GDFireObjects2.length = 0;
gdjs.Level_321_58_32storyCode.GDJET_95WATERObjects1.length = 0;
gdjs.Level_321_58_32storyCode.GDJET_95WATERObjects2.length = 0;
gdjs.Level_321_58_32storyCode.GDMISTObjects1.length = 0;
gdjs.Level_321_58_32storyCode.GDMISTObjects2.length = 0;
gdjs.Level_321_58_32storyCode.GDWaterObjects1.length = 0;
gdjs.Level_321_58_32storyCode.GDWaterObjects2.length = 0;
gdjs.Level_321_58_32storyCode.GDtableObjects1.length = 0;
gdjs.Level_321_58_32storyCode.GDtableObjects2.length = 0;
gdjs.Level_321_58_32storyCode.GDtextObjects1.length = 0;
gdjs.Level_321_58_32storyCode.GDtextObjects2.length = 0;
gdjs.Level_321_58_32storyCode.GDcontinueObjects1.length = 0;
gdjs.Level_321_58_32storyCode.GDcontinueObjects2.length = 0;
gdjs.Level_321_58_32storyCode.GDblackObjects1.length = 0;
gdjs.Level_321_58_32storyCode.GDblackObjects2.length = 0;

gdjs.Level_321_58_32storyCode.eventsList0(runtimeScene);
return;

}

gdjs['Level_321_58_32storyCode'] = gdjs.Level_321_58_32storyCode;
