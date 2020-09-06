gdjs.InsideHIDDENHOUSECode = {};
gdjs.InsideHIDDENHOUSECode.GDFoxObjects1= [];
gdjs.InsideHIDDENHOUSECode.GDFoxObjects2= [];
gdjs.InsideHIDDENHOUSECode.GDBushObjects1= [];
gdjs.InsideHIDDENHOUSECode.GDBushObjects2= [];
gdjs.InsideHIDDENHOUSECode.GDtreeObjects1= [];
gdjs.InsideHIDDENHOUSECode.GDtreeObjects2= [];
gdjs.InsideHIDDENHOUSECode.GDDIRTObjects1= [];
gdjs.InsideHIDDENHOUSECode.GDDIRTObjects2= [];
gdjs.InsideHIDDENHOUSECode.GDGrassObjects1= [];
gdjs.InsideHIDDENHOUSECode.GDGrassObjects2= [];
gdjs.InsideHIDDENHOUSECode.GDCAMERARIGObjects1= [];
gdjs.InsideHIDDENHOUSECode.GDCAMERARIGObjects2= [];
gdjs.InsideHIDDENHOUSECode.GDTorchObjects1= [];
gdjs.InsideHIDDENHOUSECode.GDTorchObjects2= [];
gdjs.InsideHIDDENHOUSECode.GDFireObjects1= [];
gdjs.InsideHIDDENHOUSECode.GDFireObjects2= [];
gdjs.InsideHIDDENHOUSECode.GDJET_95WATERObjects1= [];
gdjs.InsideHIDDENHOUSECode.GDJET_95WATERObjects2= [];
gdjs.InsideHIDDENHOUSECode.GDMISTObjects1= [];
gdjs.InsideHIDDENHOUSECode.GDMISTObjects2= [];
gdjs.InsideHIDDENHOUSECode.GDWaterObjects1= [];
gdjs.InsideHIDDENHOUSECode.GDWaterObjects2= [];
gdjs.InsideHIDDENHOUSECode.GDNewObjectObjects1= [];
gdjs.InsideHIDDENHOUSECode.GDNewObjectObjects2= [];
gdjs.InsideHIDDENHOUSECode.GDWINObjects1= [];
gdjs.InsideHIDDENHOUSECode.GDWINObjects2= [];

gdjs.InsideHIDDENHOUSECode.conditionTrue_0 = {val:false};
gdjs.InsideHIDDENHOUSECode.condition0IsTrue_0 = {val:false};
gdjs.InsideHIDDENHOUSECode.condition1IsTrue_0 = {val:false};
gdjs.InsideHIDDENHOUSECode.condition2IsTrue_0 = {val:false};
gdjs.InsideHIDDENHOUSECode.condition3IsTrue_0 = {val:false};


gdjs.InsideHIDDENHOUSECode.mapOfGDgdjs_46InsideHIDDENHOUSECode_46GDWINObjects1Objects = Hashtable.newFrom({"WIN": gdjs.InsideHIDDENHOUSECode.GDWINObjects1});gdjs.InsideHIDDENHOUSECode.eventsList0 = function(runtimeScene) {

{


gdjs.InsideHIDDENHOUSECode.condition0IsTrue_0.val = false;
gdjs.InsideHIDDENHOUSECode.condition1IsTrue_0.val = false;
gdjs.InsideHIDDENHOUSECode.condition2IsTrue_0.val = false;
{
gdjs.InsideHIDDENHOUSECode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "w");
}if ( gdjs.InsideHIDDENHOUSECode.condition0IsTrue_0.val ) {
{
gdjs.InsideHIDDENHOUSECode.condition1IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "i");
}if ( gdjs.InsideHIDDENHOUSECode.condition1IsTrue_0.val ) {
{
gdjs.InsideHIDDENHOUSECode.condition2IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "n");
}}
}
if (gdjs.InsideHIDDENHOUSECode.condition2IsTrue_0.val) {
gdjs.InsideHIDDENHOUSECode.GDWINObjects1.createFrom(runtimeScene.getObjects("WIN"));
{for(var i = 0, len = gdjs.InsideHIDDENHOUSECode.GDWINObjects1.length ;i < len;++i) {
    gdjs.InsideHIDDENHOUSECode.GDWINObjects1[i].setX(gdjs.InsideHIDDENHOUSECode.GDWINObjects1[i].getX() + (3));
}
}}

}


{

gdjs.InsideHIDDENHOUSECode.GDWINObjects1.createFrom(runtimeScene.getObjects("WIN"));

gdjs.InsideHIDDENHOUSECode.condition0IsTrue_0.val = false;
gdjs.InsideHIDDENHOUSECode.condition1IsTrue_0.val = false;
{
gdjs.InsideHIDDENHOUSECode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.InsideHIDDENHOUSECode.mapOfGDgdjs_46InsideHIDDENHOUSECode_46GDWINObjects1Objects, runtimeScene, true, false);
}if ( gdjs.InsideHIDDENHOUSECode.condition0IsTrue_0.val ) {
{
gdjs.InsideHIDDENHOUSECode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.InsideHIDDENHOUSECode.condition1IsTrue_0.val) {
gdjs.InsideHIDDENHOUSECode.GDNewObjectObjects1.createFrom(runtimeScene.getObjects("NewObject"));
{for(var i = 0, len = gdjs.InsideHIDDENHOUSECode.GDNewObjectObjects1.length ;i < len;++i) {
    gdjs.InsideHIDDENHOUSECode.GDNewObjectObjects1[i].setString("There is no secret LOL :) Press ESC to go back");
}
}}

}


{


gdjs.InsideHIDDENHOUSECode.condition0IsTrue_0.val = false;
{
gdjs.InsideHIDDENHOUSECode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Escape");
}if (gdjs.InsideHIDDENHOUSECode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level 1: story", false);
}}

}


};

gdjs.InsideHIDDENHOUSECode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.InsideHIDDENHOUSECode.GDFoxObjects1.length = 0;
gdjs.InsideHIDDENHOUSECode.GDFoxObjects2.length = 0;
gdjs.InsideHIDDENHOUSECode.GDBushObjects1.length = 0;
gdjs.InsideHIDDENHOUSECode.GDBushObjects2.length = 0;
gdjs.InsideHIDDENHOUSECode.GDtreeObjects1.length = 0;
gdjs.InsideHIDDENHOUSECode.GDtreeObjects2.length = 0;
gdjs.InsideHIDDENHOUSECode.GDDIRTObjects1.length = 0;
gdjs.InsideHIDDENHOUSECode.GDDIRTObjects2.length = 0;
gdjs.InsideHIDDENHOUSECode.GDGrassObjects1.length = 0;
gdjs.InsideHIDDENHOUSECode.GDGrassObjects2.length = 0;
gdjs.InsideHIDDENHOUSECode.GDCAMERARIGObjects1.length = 0;
gdjs.InsideHIDDENHOUSECode.GDCAMERARIGObjects2.length = 0;
gdjs.InsideHIDDENHOUSECode.GDTorchObjects1.length = 0;
gdjs.InsideHIDDENHOUSECode.GDTorchObjects2.length = 0;
gdjs.InsideHIDDENHOUSECode.GDFireObjects1.length = 0;
gdjs.InsideHIDDENHOUSECode.GDFireObjects2.length = 0;
gdjs.InsideHIDDENHOUSECode.GDJET_95WATERObjects1.length = 0;
gdjs.InsideHIDDENHOUSECode.GDJET_95WATERObjects2.length = 0;
gdjs.InsideHIDDENHOUSECode.GDMISTObjects1.length = 0;
gdjs.InsideHIDDENHOUSECode.GDMISTObjects2.length = 0;
gdjs.InsideHIDDENHOUSECode.GDWaterObjects1.length = 0;
gdjs.InsideHIDDENHOUSECode.GDWaterObjects2.length = 0;
gdjs.InsideHIDDENHOUSECode.GDNewObjectObjects1.length = 0;
gdjs.InsideHIDDENHOUSECode.GDNewObjectObjects2.length = 0;
gdjs.InsideHIDDENHOUSECode.GDWINObjects1.length = 0;
gdjs.InsideHIDDENHOUSECode.GDWINObjects2.length = 0;

gdjs.InsideHIDDENHOUSECode.eventsList0(runtimeScene);
return;

}

gdjs['InsideHIDDENHOUSECode'] = gdjs.InsideHIDDENHOUSECode;
