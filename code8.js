gdjs.debugCode = {};
gdjs.debugCode.GDFoxObjects1= [];
gdjs.debugCode.GDFoxObjects2= [];
gdjs.debugCode.GDBushObjects1= [];
gdjs.debugCode.GDBushObjects2= [];
gdjs.debugCode.GDtreeObjects1= [];
gdjs.debugCode.GDtreeObjects2= [];
gdjs.debugCode.GDDIRTObjects1= [];
gdjs.debugCode.GDDIRTObjects2= [];
gdjs.debugCode.GDGrassObjects1= [];
gdjs.debugCode.GDGrassObjects2= [];
gdjs.debugCode.GDCAMERARIGObjects1= [];
gdjs.debugCode.GDCAMERARIGObjects2= [];
gdjs.debugCode.GDTorchObjects1= [];
gdjs.debugCode.GDTorchObjects2= [];
gdjs.debugCode.GDFireObjects1= [];
gdjs.debugCode.GDFireObjects2= [];
gdjs.debugCode.GDJET_95WATERObjects1= [];
gdjs.debugCode.GDJET_95WATERObjects2= [];
gdjs.debugCode.GDMISTObjects1= [];
gdjs.debugCode.GDMISTObjects2= [];
gdjs.debugCode.GDWaterObjects1= [];
gdjs.debugCode.GDWaterObjects2= [];
gdjs.debugCode.GDcolision475743Objects1= [];
gdjs.debugCode.GDcolision475743Objects2= [];

gdjs.debugCode.conditionTrue_0 = {val:false};
gdjs.debugCode.condition0IsTrue_0 = {val:false};
gdjs.debugCode.condition1IsTrue_0 = {val:false};


gdjs.debugCode.eventsList0 = function(runtimeScene) {

{


{
gdjs.debugCode.GDTorchObjects1.createFrom(runtimeScene.getObjects("Torch"));
{for(var i = 0, len = gdjs.debugCode.GDTorchObjects1.length ;i < len;++i) {
    gdjs.debugCode.GDTorchObjects1[i].setPosition(gdjs.evtTools.input.getMouseX(runtimeScene, "", 0),gdjs.evtTools.input.getMouseY(runtimeScene, "", 0));
}
}}

}


{


gdjs.debugCode.condition0IsTrue_0.val = false;
{
gdjs.debugCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.debugCode.condition0IsTrue_0.val) {
{gdjs.evtTools.input.hideCursor(runtimeScene);
}}

}


{


gdjs.debugCode.condition0IsTrue_0.val = false;
{
gdjs.debugCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.debugCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "Foxible- cave theme.wav", true, 100, 1);
}}

}


};

gdjs.debugCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.debugCode.GDFoxObjects1.length = 0;
gdjs.debugCode.GDFoxObjects2.length = 0;
gdjs.debugCode.GDBushObjects1.length = 0;
gdjs.debugCode.GDBushObjects2.length = 0;
gdjs.debugCode.GDtreeObjects1.length = 0;
gdjs.debugCode.GDtreeObjects2.length = 0;
gdjs.debugCode.GDDIRTObjects1.length = 0;
gdjs.debugCode.GDDIRTObjects2.length = 0;
gdjs.debugCode.GDGrassObjects1.length = 0;
gdjs.debugCode.GDGrassObjects2.length = 0;
gdjs.debugCode.GDCAMERARIGObjects1.length = 0;
gdjs.debugCode.GDCAMERARIGObjects2.length = 0;
gdjs.debugCode.GDTorchObjects1.length = 0;
gdjs.debugCode.GDTorchObjects2.length = 0;
gdjs.debugCode.GDFireObjects1.length = 0;
gdjs.debugCode.GDFireObjects2.length = 0;
gdjs.debugCode.GDJET_95WATERObjects1.length = 0;
gdjs.debugCode.GDJET_95WATERObjects2.length = 0;
gdjs.debugCode.GDMISTObjects1.length = 0;
gdjs.debugCode.GDMISTObjects2.length = 0;
gdjs.debugCode.GDWaterObjects1.length = 0;
gdjs.debugCode.GDWaterObjects2.length = 0;
gdjs.debugCode.GDcolision475743Objects1.length = 0;
gdjs.debugCode.GDcolision475743Objects2.length = 0;

gdjs.debugCode.eventsList0(runtimeScene);
return;

}

gdjs['debugCode'] = gdjs.debugCode;
