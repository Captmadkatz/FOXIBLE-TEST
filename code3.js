gdjs.TutorialCode = {};
gdjs.TutorialCode.GDFoxObjects1= [];
gdjs.TutorialCode.GDFoxObjects2= [];
gdjs.TutorialCode.GDBushObjects1= [];
gdjs.TutorialCode.GDBushObjects2= [];
gdjs.TutorialCode.GDtreeObjects1= [];
gdjs.TutorialCode.GDtreeObjects2= [];
gdjs.TutorialCode.GDDIRTObjects1= [];
gdjs.TutorialCode.GDDIRTObjects2= [];
gdjs.TutorialCode.GDGrassObjects1= [];
gdjs.TutorialCode.GDGrassObjects2= [];
gdjs.TutorialCode.GDCAMERARIGObjects1= [];
gdjs.TutorialCode.GDCAMERARIGObjects2= [];
gdjs.TutorialCode.GDTorchObjects1= [];
gdjs.TutorialCode.GDTorchObjects2= [];
gdjs.TutorialCode.GDFireObjects1= [];
gdjs.TutorialCode.GDFireObjects2= [];
gdjs.TutorialCode.GDJET_95WATERObjects1= [];
gdjs.TutorialCode.GDJET_95WATERObjects2= [];
gdjs.TutorialCode.GDMISTObjects1= [];
gdjs.TutorialCode.GDMISTObjects2= [];
gdjs.TutorialCode.GDWaterObjects1= [];
gdjs.TutorialCode.GDWaterObjects2= [];
gdjs.TutorialCode.GDGRoundObjects1= [];
gdjs.TutorialCode.GDGRoundObjects2= [];
gdjs.TutorialCode.GDLavaObjects1= [];
gdjs.TutorialCode.GDLavaObjects2= [];
gdjs.TutorialCode.GDFoxObjects1= [];
gdjs.TutorialCode.GDFoxObjects2= [];
gdjs.TutorialCode.GDNewObjectObjects1= [];
gdjs.TutorialCode.GDNewObjectObjects2= [];
gdjs.TutorialCode.GDNewObject2Objects1= [];
gdjs.TutorialCode.GDNewObject2Objects2= [];
gdjs.TutorialCode.GDNewObject3Objects1= [];
gdjs.TutorialCode.GDNewObject3Objects2= [];
gdjs.TutorialCode.GDGEMObjects1= [];
gdjs.TutorialCode.GDGEMObjects2= [];
gdjs.TutorialCode.GDskullObjects1= [];
gdjs.TutorialCode.GDskullObjects2= [];

gdjs.TutorialCode.conditionTrue_0 = {val:false};
gdjs.TutorialCode.condition0IsTrue_0 = {val:false};
gdjs.TutorialCode.condition1IsTrue_0 = {val:false};
gdjs.TutorialCode.condition2IsTrue_0 = {val:false};
gdjs.TutorialCode.condition3IsTrue_0 = {val:false};


gdjs.TutorialCode.mapOfGDgdjs_46TutorialCode_46GDFoxObjects1Objects = Hashtable.newFrom({"Fox": gdjs.TutorialCode.GDFoxObjects1});gdjs.TutorialCode.mapOfGDgdjs_46TutorialCode_46GDGRoundObjects1Objects = Hashtable.newFrom({"GRound": gdjs.TutorialCode.GDGRoundObjects1});gdjs.TutorialCode.mapOfGDgdjs_46TutorialCode_46GDLavaObjects1Objects = Hashtable.newFrom({"Lava": gdjs.TutorialCode.GDLavaObjects1});gdjs.TutorialCode.mapOfGDgdjs_46TutorialCode_46GDFoxObjects1Objects = Hashtable.newFrom({"Fox": gdjs.TutorialCode.GDFoxObjects1});gdjs.TutorialCode.mapOfGDgdjs_46TutorialCode_46GDGEMObjects1Objects = Hashtable.newFrom({"GEM": gdjs.TutorialCode.GDGEMObjects1});gdjs.TutorialCode.mapOfGDgdjs_46TutorialCode_46GDFoxObjects1Objects = Hashtable.newFrom({"Fox": gdjs.TutorialCode.GDFoxObjects1});gdjs.TutorialCode.eventsList0 = function(runtimeScene) {

{

gdjs.TutorialCode.GDFoxObjects1.createFrom(runtimeScene.getObjects("Fox"));
gdjs.TutorialCode.GDGRoundObjects1.createFrom(runtimeScene.getObjects("GRound"));

gdjs.TutorialCode.condition0IsTrue_0.val = false;
gdjs.TutorialCode.condition1IsTrue_0.val = false;
gdjs.TutorialCode.condition2IsTrue_0.val = false;
{
gdjs.TutorialCode.condition0IsTrue_0.val = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right"));
}if ( gdjs.TutorialCode.condition0IsTrue_0.val ) {
{
gdjs.TutorialCode.condition1IsTrue_0.val = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left"));
}if ( gdjs.TutorialCode.condition1IsTrue_0.val ) {
{
gdjs.TutorialCode.condition2IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.TutorialCode.mapOfGDgdjs_46TutorialCode_46GDFoxObjects1Objects, gdjs.TutorialCode.mapOfGDgdjs_46TutorialCode_46GDGRoundObjects1Objects, false, runtimeScene, false);
}}
}
if (gdjs.TutorialCode.condition2IsTrue_0.val) {
/* Reuse gdjs.TutorialCode.GDFoxObjects1 */
{for(var i = 0, len = gdjs.TutorialCode.GDFoxObjects1.length ;i < len;++i) {
    gdjs.TutorialCode.GDFoxObjects1[i].setAnimation(0);
}
}}

}


{


gdjs.TutorialCode.condition0IsTrue_0.val = false;
{
gdjs.TutorialCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
}if (gdjs.TutorialCode.condition0IsTrue_0.val) {
gdjs.TutorialCode.GDFoxObjects1.createFrom(runtimeScene.getObjects("Fox"));
{for(var i = 0, len = gdjs.TutorialCode.GDFoxObjects1.length ;i < len;++i) {
    gdjs.TutorialCode.GDFoxObjects1[i].setAnimation(1);
}
}{for(var i = 0, len = gdjs.TutorialCode.GDFoxObjects1.length ;i < len;++i) {
    gdjs.TutorialCode.GDFoxObjects1[i].flipX(false);
}
}}

}


{


gdjs.TutorialCode.condition0IsTrue_0.val = false;
{
gdjs.TutorialCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
}if (gdjs.TutorialCode.condition0IsTrue_0.val) {
gdjs.TutorialCode.GDFoxObjects1.createFrom(runtimeScene.getObjects("Fox"));
{for(var i = 0, len = gdjs.TutorialCode.GDFoxObjects1.length ;i < len;++i) {
    gdjs.TutorialCode.GDFoxObjects1[i].setAnimation(1);
}
}{for(var i = 0, len = gdjs.TutorialCode.GDFoxObjects1.length ;i < len;++i) {
    gdjs.TutorialCode.GDFoxObjects1[i].flipX(true);
}
}}

}


{


gdjs.TutorialCode.condition0IsTrue_0.val = false;
{
gdjs.TutorialCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
}if (gdjs.TutorialCode.condition0IsTrue_0.val) {
gdjs.TutorialCode.GDFoxObjects1.createFrom(runtimeScene.getObjects("Fox"));
{for(var i = 0, len = gdjs.TutorialCode.GDFoxObjects1.length ;i < len;++i) {
    gdjs.TutorialCode.GDFoxObjects1[i].setAnimation(2);
}
}}

}


{


{
gdjs.TutorialCode.GDFoxObjects1.createFrom(runtimeScene.getObjects("Fox"));
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.TutorialCode.GDFoxObjects1.length !== 0 ? gdjs.TutorialCode.GDFoxObjects1[0] : null), true, "", 0);
}}

}


{

gdjs.TutorialCode.GDFoxObjects1.createFrom(runtimeScene.getObjects("Fox"));
gdjs.TutorialCode.GDLavaObjects1.createFrom(runtimeScene.getObjects("Lava"));

gdjs.TutorialCode.condition0IsTrue_0.val = false;
{
gdjs.TutorialCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.TutorialCode.mapOfGDgdjs_46TutorialCode_46GDLavaObjects1Objects, gdjs.TutorialCode.mapOfGDgdjs_46TutorialCode_46GDFoxObjects1Objects, false, runtimeScene, false);
}if (gdjs.TutorialCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Tutorial", false);
}}

}


{

gdjs.TutorialCode.GDFoxObjects1.createFrom(runtimeScene.getObjects("Fox"));
gdjs.TutorialCode.GDGEMObjects1.createFrom(runtimeScene.getObjects("GEM"));

gdjs.TutorialCode.condition0IsTrue_0.val = false;
{
gdjs.TutorialCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.TutorialCode.mapOfGDgdjs_46TutorialCode_46GDGEMObjects1Objects, gdjs.TutorialCode.mapOfGDgdjs_46TutorialCode_46GDFoxObjects1Objects, false, runtimeScene, false);
}if (gdjs.TutorialCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Collect.wav", false, 100, 1);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level 1: story", false);
}}

}


};

gdjs.TutorialCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.TutorialCode.GDFoxObjects1.length = 0;
gdjs.TutorialCode.GDFoxObjects2.length = 0;
gdjs.TutorialCode.GDBushObjects1.length = 0;
gdjs.TutorialCode.GDBushObjects2.length = 0;
gdjs.TutorialCode.GDtreeObjects1.length = 0;
gdjs.TutorialCode.GDtreeObjects2.length = 0;
gdjs.TutorialCode.GDDIRTObjects1.length = 0;
gdjs.TutorialCode.GDDIRTObjects2.length = 0;
gdjs.TutorialCode.GDGrassObjects1.length = 0;
gdjs.TutorialCode.GDGrassObjects2.length = 0;
gdjs.TutorialCode.GDCAMERARIGObjects1.length = 0;
gdjs.TutorialCode.GDCAMERARIGObjects2.length = 0;
gdjs.TutorialCode.GDTorchObjects1.length = 0;
gdjs.TutorialCode.GDTorchObjects2.length = 0;
gdjs.TutorialCode.GDFireObjects1.length = 0;
gdjs.TutorialCode.GDFireObjects2.length = 0;
gdjs.TutorialCode.GDJET_95WATERObjects1.length = 0;
gdjs.TutorialCode.GDJET_95WATERObjects2.length = 0;
gdjs.TutorialCode.GDMISTObjects1.length = 0;
gdjs.TutorialCode.GDMISTObjects2.length = 0;
gdjs.TutorialCode.GDWaterObjects1.length = 0;
gdjs.TutorialCode.GDWaterObjects2.length = 0;
gdjs.TutorialCode.GDGRoundObjects1.length = 0;
gdjs.TutorialCode.GDGRoundObjects2.length = 0;
gdjs.TutorialCode.GDLavaObjects1.length = 0;
gdjs.TutorialCode.GDLavaObjects2.length = 0;
gdjs.TutorialCode.GDFoxObjects1.length = 0;
gdjs.TutorialCode.GDFoxObjects2.length = 0;
gdjs.TutorialCode.GDNewObjectObjects1.length = 0;
gdjs.TutorialCode.GDNewObjectObjects2.length = 0;
gdjs.TutorialCode.GDNewObject2Objects1.length = 0;
gdjs.TutorialCode.GDNewObject2Objects2.length = 0;
gdjs.TutorialCode.GDNewObject3Objects1.length = 0;
gdjs.TutorialCode.GDNewObject3Objects2.length = 0;
gdjs.TutorialCode.GDGEMObjects1.length = 0;
gdjs.TutorialCode.GDGEMObjects2.length = 0;
gdjs.TutorialCode.GDskullObjects1.length = 0;
gdjs.TutorialCode.GDskullObjects2.length = 0;

gdjs.TutorialCode.eventsList0(runtimeScene);
return;

}

gdjs['TutorialCode'] = gdjs.TutorialCode;
