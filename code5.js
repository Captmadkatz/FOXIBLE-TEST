gdjs.HIDDENHOUSECode = {};
gdjs.HIDDENHOUSECode.GDFoxObjects1= [];
gdjs.HIDDENHOUSECode.GDFoxObjects2= [];
gdjs.HIDDENHOUSECode.GDBushObjects1= [];
gdjs.HIDDENHOUSECode.GDBushObjects2= [];
gdjs.HIDDENHOUSECode.GDtreeObjects1= [];
gdjs.HIDDENHOUSECode.GDtreeObjects2= [];
gdjs.HIDDENHOUSECode.GDDIRTObjects1= [];
gdjs.HIDDENHOUSECode.GDDIRTObjects2= [];
gdjs.HIDDENHOUSECode.GDGrassObjects1= [];
gdjs.HIDDENHOUSECode.GDGrassObjects2= [];
gdjs.HIDDENHOUSECode.GDCAMERARIGObjects1= [];
gdjs.HIDDENHOUSECode.GDCAMERARIGObjects2= [];
gdjs.HIDDENHOUSECode.GDTorchObjects1= [];
gdjs.HIDDENHOUSECode.GDTorchObjects2= [];
gdjs.HIDDENHOUSECode.GDFireObjects1= [];
gdjs.HIDDENHOUSECode.GDFireObjects2= [];
gdjs.HIDDENHOUSECode.GDJET_95WATERObjects1= [];
gdjs.HIDDENHOUSECode.GDJET_95WATERObjects2= [];
gdjs.HIDDENHOUSECode.GDMISTObjects1= [];
gdjs.HIDDENHOUSECode.GDMISTObjects2= [];
gdjs.HIDDENHOUSECode.GDWaterObjects1= [];
gdjs.HIDDENHOUSECode.GDWaterObjects2= [];
gdjs.HIDDENHOUSECode.GDHouseObjects1= [];
gdjs.HIDDENHOUSECode.GDHouseObjects2= [];
gdjs.HIDDENHOUSECode.GDDoorObjects1= [];
gdjs.HIDDENHOUSECode.GDDoorObjects2= [];
gdjs.HIDDENHOUSECode.GDFoxObjects1= [];
gdjs.HIDDENHOUSECode.GDFoxObjects2= [];
gdjs.HIDDENHOUSECode.GDCrateObjects1= [];
gdjs.HIDDENHOUSECode.GDCrateObjects2= [];
gdjs.HIDDENHOUSECode.GDBLOCKObjects1= [];
gdjs.HIDDENHOUSECode.GDBLOCKObjects2= [];
gdjs.HIDDENHOUSECode.GDTILEDBLOCKObjects1= [];
gdjs.HIDDENHOUSECode.GDTILEDBLOCKObjects2= [];
gdjs.HIDDENHOUSECode.GDtreeObjects1= [];
gdjs.HIDDENHOUSECode.GDtreeObjects2= [];
gdjs.HIDDENHOUSECode.GDNIGHTENTITYObjects1= [];
gdjs.HIDDENHOUSECode.GDNIGHTENTITYObjects2= [];
gdjs.HIDDENHOUSECode.GDNewObjectObjects1= [];
gdjs.HIDDENHOUSECode.GDNewObjectObjects2= [];
gdjs.HIDDENHOUSECode.GDNewObject2Objects1= [];
gdjs.HIDDENHOUSECode.GDNewObject2Objects2= [];

gdjs.HIDDENHOUSECode.conditionTrue_0 = {val:false};
gdjs.HIDDENHOUSECode.condition0IsTrue_0 = {val:false};
gdjs.HIDDENHOUSECode.condition1IsTrue_0 = {val:false};
gdjs.HIDDENHOUSECode.condition2IsTrue_0 = {val:false};
gdjs.HIDDENHOUSECode.condition3IsTrue_0 = {val:false};
gdjs.HIDDENHOUSECode.conditionTrue_1 = {val:false};
gdjs.HIDDENHOUSECode.condition0IsTrue_1 = {val:false};
gdjs.HIDDENHOUSECode.condition1IsTrue_1 = {val:false};
gdjs.HIDDENHOUSECode.condition2IsTrue_1 = {val:false};
gdjs.HIDDENHOUSECode.condition3IsTrue_1 = {val:false};


gdjs.HIDDENHOUSECode.mapOfGDgdjs_46HIDDENHOUSECode_46GDFoxObjects1Objects = Hashtable.newFrom({"Fox": gdjs.HIDDENHOUSECode.GDFoxObjects1});gdjs.HIDDENHOUSECode.mapOfGDgdjs_46HIDDENHOUSECode_46GDTILEDBLOCKObjects1Objects = Hashtable.newFrom({"TILEDBLOCK": gdjs.HIDDENHOUSECode.GDTILEDBLOCKObjects1});gdjs.HIDDENHOUSECode.mapOfGDgdjs_46HIDDENHOUSECode_46GDDoorObjects1Objects = Hashtable.newFrom({"Door": gdjs.HIDDENHOUSECode.GDDoorObjects1});gdjs.HIDDENHOUSECode.mapOfGDgdjs_46HIDDENHOUSECode_46GDFoxObjects1Objects = Hashtable.newFrom({"Fox": gdjs.HIDDENHOUSECode.GDFoxObjects1});gdjs.HIDDENHOUSECode.eventsList0 = function(runtimeScene) {

{

gdjs.HIDDENHOUSECode.GDFoxObjects1.createFrom(runtimeScene.getObjects("Fox"));
gdjs.HIDDENHOUSECode.GDTILEDBLOCKObjects1.createFrom(runtimeScene.getObjects("TILEDBLOCK"));

gdjs.HIDDENHOUSECode.condition0IsTrue_0.val = false;
gdjs.HIDDENHOUSECode.condition1IsTrue_0.val = false;
gdjs.HIDDENHOUSECode.condition2IsTrue_0.val = false;
{
gdjs.HIDDENHOUSECode.condition0IsTrue_0.val = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left"));
}if ( gdjs.HIDDENHOUSECode.condition0IsTrue_0.val ) {
{
gdjs.HIDDENHOUSECode.condition1IsTrue_0.val = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right"));
}if ( gdjs.HIDDENHOUSECode.condition1IsTrue_0.val ) {
{
gdjs.HIDDENHOUSECode.condition2IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.HIDDENHOUSECode.mapOfGDgdjs_46HIDDENHOUSECode_46GDFoxObjects1Objects, gdjs.HIDDENHOUSECode.mapOfGDgdjs_46HIDDENHOUSECode_46GDTILEDBLOCKObjects1Objects, false, runtimeScene, false);
}}
}
if (gdjs.HIDDENHOUSECode.condition2IsTrue_0.val) {
/* Reuse gdjs.HIDDENHOUSECode.GDFoxObjects1 */
{for(var i = 0, len = gdjs.HIDDENHOUSECode.GDFoxObjects1.length ;i < len;++i) {
    gdjs.HIDDENHOUSECode.GDFoxObjects1[i].setAnimation(0);
}
}}

}


{


gdjs.HIDDENHOUSECode.condition0IsTrue_0.val = false;
{
gdjs.HIDDENHOUSECode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
}if (gdjs.HIDDENHOUSECode.condition0IsTrue_0.val) {
gdjs.HIDDENHOUSECode.GDFoxObjects1.createFrom(runtimeScene.getObjects("Fox"));
{for(var i = 0, len = gdjs.HIDDENHOUSECode.GDFoxObjects1.length ;i < len;++i) {
    gdjs.HIDDENHOUSECode.GDFoxObjects1[i].setAnimation(2);
}
}}

}


{


gdjs.HIDDENHOUSECode.condition0IsTrue_0.val = false;
{
gdjs.HIDDENHOUSECode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
}if (gdjs.HIDDENHOUSECode.condition0IsTrue_0.val) {
gdjs.HIDDENHOUSECode.GDFoxObjects1.createFrom(runtimeScene.getObjects("Fox"));
{for(var i = 0, len = gdjs.HIDDENHOUSECode.GDFoxObjects1.length ;i < len;++i) {
    gdjs.HIDDENHOUSECode.GDFoxObjects1[i].flipX(true);
}
}{for(var i = 0, len = gdjs.HIDDENHOUSECode.GDFoxObjects1.length ;i < len;++i) {
    gdjs.HIDDENHOUSECode.GDFoxObjects1[i].setAnimation(1);
}
}}

}


{


gdjs.HIDDENHOUSECode.condition0IsTrue_0.val = false;
{
gdjs.HIDDENHOUSECode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
}if (gdjs.HIDDENHOUSECode.condition0IsTrue_0.val) {
gdjs.HIDDENHOUSECode.GDFoxObjects1.createFrom(runtimeScene.getObjects("Fox"));
{for(var i = 0, len = gdjs.HIDDENHOUSECode.GDFoxObjects1.length ;i < len;++i) {
    gdjs.HIDDENHOUSECode.GDFoxObjects1[i].setAnimation(1);
}
}{for(var i = 0, len = gdjs.HIDDENHOUSECode.GDFoxObjects1.length ;i < len;++i) {
    gdjs.HIDDENHOUSECode.GDFoxObjects1[i].flipX(false);
}
}}

}


{

gdjs.HIDDENHOUSECode.GDDoorObjects1.createFrom(runtimeScene.getObjects("Door"));
gdjs.HIDDENHOUSECode.GDFoxObjects1.createFrom(runtimeScene.getObjects("Fox"));

gdjs.HIDDENHOUSECode.condition0IsTrue_0.val = false;
gdjs.HIDDENHOUSECode.condition1IsTrue_0.val = false;
gdjs.HIDDENHOUSECode.condition2IsTrue_0.val = false;
{
gdjs.HIDDENHOUSECode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.HIDDENHOUSECode.mapOfGDgdjs_46HIDDENHOUSECode_46GDDoorObjects1Objects, gdjs.HIDDENHOUSECode.mapOfGDgdjs_46HIDDENHOUSECode_46GDFoxObjects1Objects, false, runtimeScene, false);
}if ( gdjs.HIDDENHOUSECode.condition0IsTrue_0.val ) {
{
gdjs.HIDDENHOUSECode.condition1IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
}if ( gdjs.HIDDENHOUSECode.condition1IsTrue_0.val ) {
{
{gdjs.HIDDENHOUSECode.conditionTrue_1 = gdjs.HIDDENHOUSECode.condition2IsTrue_0;
gdjs.HIDDENHOUSECode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8750508);
}
}}
}
if (gdjs.HIDDENHOUSECode.condition2IsTrue_0.val) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "Door Closing.mp3", false, 100, 1);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "InsideHIDDENHOUSE", false);
}}

}


{


gdjs.HIDDENHOUSECode.condition0IsTrue_0.val = false;
{
gdjs.HIDDENHOUSECode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.HIDDENHOUSECode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Foxible_ Night theme.mp3", true, 100, 1);
}}

}


};

gdjs.HIDDENHOUSECode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.HIDDENHOUSECode.GDFoxObjects1.length = 0;
gdjs.HIDDENHOUSECode.GDFoxObjects2.length = 0;
gdjs.HIDDENHOUSECode.GDBushObjects1.length = 0;
gdjs.HIDDENHOUSECode.GDBushObjects2.length = 0;
gdjs.HIDDENHOUSECode.GDtreeObjects1.length = 0;
gdjs.HIDDENHOUSECode.GDtreeObjects2.length = 0;
gdjs.HIDDENHOUSECode.GDDIRTObjects1.length = 0;
gdjs.HIDDENHOUSECode.GDDIRTObjects2.length = 0;
gdjs.HIDDENHOUSECode.GDGrassObjects1.length = 0;
gdjs.HIDDENHOUSECode.GDGrassObjects2.length = 0;
gdjs.HIDDENHOUSECode.GDCAMERARIGObjects1.length = 0;
gdjs.HIDDENHOUSECode.GDCAMERARIGObjects2.length = 0;
gdjs.HIDDENHOUSECode.GDTorchObjects1.length = 0;
gdjs.HIDDENHOUSECode.GDTorchObjects2.length = 0;
gdjs.HIDDENHOUSECode.GDFireObjects1.length = 0;
gdjs.HIDDENHOUSECode.GDFireObjects2.length = 0;
gdjs.HIDDENHOUSECode.GDJET_95WATERObjects1.length = 0;
gdjs.HIDDENHOUSECode.GDJET_95WATERObjects2.length = 0;
gdjs.HIDDENHOUSECode.GDMISTObjects1.length = 0;
gdjs.HIDDENHOUSECode.GDMISTObjects2.length = 0;
gdjs.HIDDENHOUSECode.GDWaterObjects1.length = 0;
gdjs.HIDDENHOUSECode.GDWaterObjects2.length = 0;
gdjs.HIDDENHOUSECode.GDHouseObjects1.length = 0;
gdjs.HIDDENHOUSECode.GDHouseObjects2.length = 0;
gdjs.HIDDENHOUSECode.GDDoorObjects1.length = 0;
gdjs.HIDDENHOUSECode.GDDoorObjects2.length = 0;
gdjs.HIDDENHOUSECode.GDFoxObjects1.length = 0;
gdjs.HIDDENHOUSECode.GDFoxObjects2.length = 0;
gdjs.HIDDENHOUSECode.GDCrateObjects1.length = 0;
gdjs.HIDDENHOUSECode.GDCrateObjects2.length = 0;
gdjs.HIDDENHOUSECode.GDBLOCKObjects1.length = 0;
gdjs.HIDDENHOUSECode.GDBLOCKObjects2.length = 0;
gdjs.HIDDENHOUSECode.GDTILEDBLOCKObjects1.length = 0;
gdjs.HIDDENHOUSECode.GDTILEDBLOCKObjects2.length = 0;
gdjs.HIDDENHOUSECode.GDtreeObjects1.length = 0;
gdjs.HIDDENHOUSECode.GDtreeObjects2.length = 0;
gdjs.HIDDENHOUSECode.GDNIGHTENTITYObjects1.length = 0;
gdjs.HIDDENHOUSECode.GDNIGHTENTITYObjects2.length = 0;
gdjs.HIDDENHOUSECode.GDNewObjectObjects1.length = 0;
gdjs.HIDDENHOUSECode.GDNewObjectObjects2.length = 0;
gdjs.HIDDENHOUSECode.GDNewObject2Objects1.length = 0;
gdjs.HIDDENHOUSECode.GDNewObject2Objects2.length = 0;

gdjs.HIDDENHOUSECode.eventsList0(runtimeScene);
return;

}

gdjs['HIDDENHOUSECode'] = gdjs.HIDDENHOUSECode;
