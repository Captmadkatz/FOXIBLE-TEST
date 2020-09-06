gdjs.Inside_32house_321_32big_32lv1Code = {};
gdjs.Inside_32house_321_32big_32lv1Code.GDFoxObjects1= [];
gdjs.Inside_32house_321_32big_32lv1Code.GDFoxObjects2= [];
gdjs.Inside_32house_321_32big_32lv1Code.GDBushObjects1= [];
gdjs.Inside_32house_321_32big_32lv1Code.GDBushObjects2= [];
gdjs.Inside_32house_321_32big_32lv1Code.GDtreeObjects1= [];
gdjs.Inside_32house_321_32big_32lv1Code.GDtreeObjects2= [];
gdjs.Inside_32house_321_32big_32lv1Code.GDDIRTObjects1= [];
gdjs.Inside_32house_321_32big_32lv1Code.GDDIRTObjects2= [];
gdjs.Inside_32house_321_32big_32lv1Code.GDGrassObjects1= [];
gdjs.Inside_32house_321_32big_32lv1Code.GDGrassObjects2= [];
gdjs.Inside_32house_321_32big_32lv1Code.GDCAMERARIGObjects1= [];
gdjs.Inside_32house_321_32big_32lv1Code.GDCAMERARIGObjects2= [];
gdjs.Inside_32house_321_32big_32lv1Code.GDTorchObjects1= [];
gdjs.Inside_32house_321_32big_32lv1Code.GDTorchObjects2= [];
gdjs.Inside_32house_321_32big_32lv1Code.GDFireObjects1= [];
gdjs.Inside_32house_321_32big_32lv1Code.GDFireObjects2= [];
gdjs.Inside_32house_321_32big_32lv1Code.GDJET_95WATERObjects1= [];
gdjs.Inside_32house_321_32big_32lv1Code.GDJET_95WATERObjects2= [];
gdjs.Inside_32house_321_32big_32lv1Code.GDMISTObjects1= [];
gdjs.Inside_32house_321_32big_32lv1Code.GDMISTObjects2= [];
gdjs.Inside_32house_321_32big_32lv1Code.GDWaterObjects1= [];
gdjs.Inside_32house_321_32big_32lv1Code.GDWaterObjects2= [];
gdjs.Inside_32house_321_32big_32lv1Code.GDNewObjectObjects1= [];
gdjs.Inside_32house_321_32big_32lv1Code.GDNewObjectObjects2= [];
gdjs.Inside_32house_321_32big_32lv1Code.GDwoodtextObjects1= [];
gdjs.Inside_32house_321_32big_32lv1Code.GDwoodtextObjects2= [];
gdjs.Inside_32house_321_32big_32lv1Code.GDPC1Objects1= [];
gdjs.Inside_32house_321_32big_32lv1Code.GDPC1Objects2= [];
gdjs.Inside_32house_321_32big_32lv1Code.GDtv1vidObjects1= [];
gdjs.Inside_32house_321_32big_32lv1Code.GDtv1vidObjects2= [];
gdjs.Inside_32house_321_32big_32lv1Code.GDTV1Objects1= [];
gdjs.Inside_32house_321_32big_32lv1Code.GDTV1Objects2= [];
gdjs.Inside_32house_321_32big_32lv1Code.GDhObjects1= [];
gdjs.Inside_32house_321_32big_32lv1Code.GDhObjects2= [];
gdjs.Inside_32house_321_32big_32lv1Code.GDtv2movObjects1= [];
gdjs.Inside_32house_321_32big_32lv1Code.GDtv2movObjects2= [];
gdjs.Inside_32house_321_32big_32lv1Code.GDNewObject2Objects1= [];
gdjs.Inside_32house_321_32big_32lv1Code.GDNewObject2Objects2= [];

gdjs.Inside_32house_321_32big_32lv1Code.conditionTrue_0 = {val:false};
gdjs.Inside_32house_321_32big_32lv1Code.condition0IsTrue_0 = {val:false};
gdjs.Inside_32house_321_32big_32lv1Code.condition1IsTrue_0 = {val:false};


gdjs.Inside_32house_321_32big_32lv1Code.eventsList0 = function(runtimeScene) {

{


gdjs.Inside_32house_321_32big_32lv1Code.condition0IsTrue_0.val = false;
{
gdjs.Inside_32house_321_32big_32lv1Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Inside_32house_321_32big_32lv1Code.condition0IsTrue_0.val) {
gdjs.Inside_32house_321_32big_32lv1Code.GDtv1vidObjects1.createFrom(runtimeScene.getObjects("tv1vid"));
{for(var i = 0, len = gdjs.Inside_32house_321_32big_32lv1Code.GDtv1vidObjects1.length ;i < len;++i) {
    gdjs.Inside_32house_321_32big_32lv1Code.GDtv1vidObjects1[i].play();
}
}}

}


{


gdjs.Inside_32house_321_32big_32lv1Code.condition0IsTrue_0.val = false;
{
gdjs.Inside_32house_321_32big_32lv1Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Escape");
}if (gdjs.Inside_32house_321_32big_32lv1Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level 1", false);
}}

}


};

gdjs.Inside_32house_321_32big_32lv1Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Inside_32house_321_32big_32lv1Code.GDFoxObjects1.length = 0;
gdjs.Inside_32house_321_32big_32lv1Code.GDFoxObjects2.length = 0;
gdjs.Inside_32house_321_32big_32lv1Code.GDBushObjects1.length = 0;
gdjs.Inside_32house_321_32big_32lv1Code.GDBushObjects2.length = 0;
gdjs.Inside_32house_321_32big_32lv1Code.GDtreeObjects1.length = 0;
gdjs.Inside_32house_321_32big_32lv1Code.GDtreeObjects2.length = 0;
gdjs.Inside_32house_321_32big_32lv1Code.GDDIRTObjects1.length = 0;
gdjs.Inside_32house_321_32big_32lv1Code.GDDIRTObjects2.length = 0;
gdjs.Inside_32house_321_32big_32lv1Code.GDGrassObjects1.length = 0;
gdjs.Inside_32house_321_32big_32lv1Code.GDGrassObjects2.length = 0;
gdjs.Inside_32house_321_32big_32lv1Code.GDCAMERARIGObjects1.length = 0;
gdjs.Inside_32house_321_32big_32lv1Code.GDCAMERARIGObjects2.length = 0;
gdjs.Inside_32house_321_32big_32lv1Code.GDTorchObjects1.length = 0;
gdjs.Inside_32house_321_32big_32lv1Code.GDTorchObjects2.length = 0;
gdjs.Inside_32house_321_32big_32lv1Code.GDFireObjects1.length = 0;
gdjs.Inside_32house_321_32big_32lv1Code.GDFireObjects2.length = 0;
gdjs.Inside_32house_321_32big_32lv1Code.GDJET_95WATERObjects1.length = 0;
gdjs.Inside_32house_321_32big_32lv1Code.GDJET_95WATERObjects2.length = 0;
gdjs.Inside_32house_321_32big_32lv1Code.GDMISTObjects1.length = 0;
gdjs.Inside_32house_321_32big_32lv1Code.GDMISTObjects2.length = 0;
gdjs.Inside_32house_321_32big_32lv1Code.GDWaterObjects1.length = 0;
gdjs.Inside_32house_321_32big_32lv1Code.GDWaterObjects2.length = 0;
gdjs.Inside_32house_321_32big_32lv1Code.GDNewObjectObjects1.length = 0;
gdjs.Inside_32house_321_32big_32lv1Code.GDNewObjectObjects2.length = 0;
gdjs.Inside_32house_321_32big_32lv1Code.GDwoodtextObjects1.length = 0;
gdjs.Inside_32house_321_32big_32lv1Code.GDwoodtextObjects2.length = 0;
gdjs.Inside_32house_321_32big_32lv1Code.GDPC1Objects1.length = 0;
gdjs.Inside_32house_321_32big_32lv1Code.GDPC1Objects2.length = 0;
gdjs.Inside_32house_321_32big_32lv1Code.GDtv1vidObjects1.length = 0;
gdjs.Inside_32house_321_32big_32lv1Code.GDtv1vidObjects2.length = 0;
gdjs.Inside_32house_321_32big_32lv1Code.GDTV1Objects1.length = 0;
gdjs.Inside_32house_321_32big_32lv1Code.GDTV1Objects2.length = 0;
gdjs.Inside_32house_321_32big_32lv1Code.GDhObjects1.length = 0;
gdjs.Inside_32house_321_32big_32lv1Code.GDhObjects2.length = 0;
gdjs.Inside_32house_321_32big_32lv1Code.GDtv2movObjects1.length = 0;
gdjs.Inside_32house_321_32big_32lv1Code.GDtv2movObjects2.length = 0;
gdjs.Inside_32house_321_32big_32lv1Code.GDNewObject2Objects1.length = 0;
gdjs.Inside_32house_321_32big_32lv1Code.GDNewObject2Objects2.length = 0;

gdjs.Inside_32house_321_32big_32lv1Code.eventsList0(runtimeScene);
return;

}

gdjs['Inside_32house_321_32big_32lv1Code'] = gdjs.Inside_32house_321_32big_32lv1Code;
