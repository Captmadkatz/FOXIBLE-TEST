gdjs.Splash_32BCode = {};
gdjs.Splash_32BCode.GDFoxObjects1= [];
gdjs.Splash_32BCode.GDFoxObjects2= [];
gdjs.Splash_32BCode.GDBushObjects1= [];
gdjs.Splash_32BCode.GDBushObjects2= [];
gdjs.Splash_32BCode.GDtreeObjects1= [];
gdjs.Splash_32BCode.GDtreeObjects2= [];
gdjs.Splash_32BCode.GDDIRTObjects1= [];
gdjs.Splash_32BCode.GDDIRTObjects2= [];
gdjs.Splash_32BCode.GDGrassObjects1= [];
gdjs.Splash_32BCode.GDGrassObjects2= [];
gdjs.Splash_32BCode.GDCAMERARIGObjects1= [];
gdjs.Splash_32BCode.GDCAMERARIGObjects2= [];
gdjs.Splash_32BCode.GDTorchObjects1= [];
gdjs.Splash_32BCode.GDTorchObjects2= [];
gdjs.Splash_32BCode.GDFireObjects1= [];
gdjs.Splash_32BCode.GDFireObjects2= [];
gdjs.Splash_32BCode.GDJET_95WATERObjects1= [];
gdjs.Splash_32BCode.GDJET_95WATERObjects2= [];
gdjs.Splash_32BCode.GDMISTObjects1= [];
gdjs.Splash_32BCode.GDMISTObjects2= [];
gdjs.Splash_32BCode.GDWaterObjects1= [];
gdjs.Splash_32BCode.GDWaterObjects2= [];
gdjs.Splash_32BCode.GDNewObjectObjects1= [];
gdjs.Splash_32BCode.GDNewObjectObjects2= [];
gdjs.Splash_32BCode.GDtext1Objects1= [];
gdjs.Splash_32BCode.GDtext1Objects2= [];
gdjs.Splash_32BCode.GDworldromerObjects1= [];
gdjs.Splash_32BCode.GDworldromerObjects2= [];
gdjs.Splash_32BCode.GDFROGLOGOObjects1= [];
gdjs.Splash_32BCode.GDFROGLOGOObjects2= [];

gdjs.Splash_32BCode.conditionTrue_0 = {val:false};
gdjs.Splash_32BCode.condition0IsTrue_0 = {val:false};
gdjs.Splash_32BCode.condition1IsTrue_0 = {val:false};


gdjs.Splash_32BCode.eventsList0 = function(runtimeScene) {

{


gdjs.Splash_32BCode.condition0IsTrue_0.val = false;
{
gdjs.Splash_32BCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Splash_32BCode.condition0IsTrue_0.val) {
gdjs.Splash_32BCode.GDtext1Objects1.createFrom(runtimeScene.getObjects("text1"));
{for(var i = 0, len = gdjs.Splash_32BCode.GDtext1Objects1.length ;i < len;++i) {
    gdjs.Splash_32BCode.GDtext1Objects1[i].setOpacity(0);
}
}}

}


{


{
gdjs.Splash_32BCode.GDtext1Objects1.createFrom(runtimeScene.getObjects("text1"));
{for(var i = 0, len = gdjs.Splash_32BCode.GDtext1Objects1.length ;i < len;++i) {
    gdjs.Splash_32BCode.GDtext1Objects1[i].setOpacity(gdjs.Splash_32BCode.GDtext1Objects1[i].getOpacity() + (gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene) * 15));
}
}}

}


{

gdjs.Splash_32BCode.GDtext1Objects1.createFrom(runtimeScene.getObjects("text1"));

gdjs.Splash_32BCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Splash_32BCode.GDtext1Objects1.length;i<l;++i) {
    if ( gdjs.Splash_32BCode.GDtext1Objects1[i].getOpacity() > 90 ) {
        gdjs.Splash_32BCode.condition0IsTrue_0.val = true;
        gdjs.Splash_32BCode.GDtext1Objects1[k] = gdjs.Splash_32BCode.GDtext1Objects1[i];
        ++k;
    }
}
gdjs.Splash_32BCode.GDtext1Objects1.length = k;}if (gdjs.Splash_32BCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Menu", false);
}}

}


};

gdjs.Splash_32BCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Splash_32BCode.GDFoxObjects1.length = 0;
gdjs.Splash_32BCode.GDFoxObjects2.length = 0;
gdjs.Splash_32BCode.GDBushObjects1.length = 0;
gdjs.Splash_32BCode.GDBushObjects2.length = 0;
gdjs.Splash_32BCode.GDtreeObjects1.length = 0;
gdjs.Splash_32BCode.GDtreeObjects2.length = 0;
gdjs.Splash_32BCode.GDDIRTObjects1.length = 0;
gdjs.Splash_32BCode.GDDIRTObjects2.length = 0;
gdjs.Splash_32BCode.GDGrassObjects1.length = 0;
gdjs.Splash_32BCode.GDGrassObjects2.length = 0;
gdjs.Splash_32BCode.GDCAMERARIGObjects1.length = 0;
gdjs.Splash_32BCode.GDCAMERARIGObjects2.length = 0;
gdjs.Splash_32BCode.GDTorchObjects1.length = 0;
gdjs.Splash_32BCode.GDTorchObjects2.length = 0;
gdjs.Splash_32BCode.GDFireObjects1.length = 0;
gdjs.Splash_32BCode.GDFireObjects2.length = 0;
gdjs.Splash_32BCode.GDJET_95WATERObjects1.length = 0;
gdjs.Splash_32BCode.GDJET_95WATERObjects2.length = 0;
gdjs.Splash_32BCode.GDMISTObjects1.length = 0;
gdjs.Splash_32BCode.GDMISTObjects2.length = 0;
gdjs.Splash_32BCode.GDWaterObjects1.length = 0;
gdjs.Splash_32BCode.GDWaterObjects2.length = 0;
gdjs.Splash_32BCode.GDNewObjectObjects1.length = 0;
gdjs.Splash_32BCode.GDNewObjectObjects2.length = 0;
gdjs.Splash_32BCode.GDtext1Objects1.length = 0;
gdjs.Splash_32BCode.GDtext1Objects2.length = 0;
gdjs.Splash_32BCode.GDworldromerObjects1.length = 0;
gdjs.Splash_32BCode.GDworldromerObjects2.length = 0;
gdjs.Splash_32BCode.GDFROGLOGOObjects1.length = 0;
gdjs.Splash_32BCode.GDFROGLOGOObjects2.length = 0;

gdjs.Splash_32BCode.eventsList0(runtimeScene);
return;

}

gdjs['Splash_32BCode'] = gdjs.Splash_32BCode;
