gdjs.Splash_32ACode = {};
gdjs.Splash_32ACode.GDFoxObjects1= [];
gdjs.Splash_32ACode.GDFoxObjects2= [];
gdjs.Splash_32ACode.GDBushObjects1= [];
gdjs.Splash_32ACode.GDBushObjects2= [];
gdjs.Splash_32ACode.GDtreeObjects1= [];
gdjs.Splash_32ACode.GDtreeObjects2= [];
gdjs.Splash_32ACode.GDDIRTObjects1= [];
gdjs.Splash_32ACode.GDDIRTObjects2= [];
gdjs.Splash_32ACode.GDGrassObjects1= [];
gdjs.Splash_32ACode.GDGrassObjects2= [];
gdjs.Splash_32ACode.GDCAMERARIGObjects1= [];
gdjs.Splash_32ACode.GDCAMERARIGObjects2= [];
gdjs.Splash_32ACode.GDTorchObjects1= [];
gdjs.Splash_32ACode.GDTorchObjects2= [];
gdjs.Splash_32ACode.GDFireObjects1= [];
gdjs.Splash_32ACode.GDFireObjects2= [];
gdjs.Splash_32ACode.GDJET_95WATERObjects1= [];
gdjs.Splash_32ACode.GDJET_95WATERObjects2= [];
gdjs.Splash_32ACode.GDMISTObjects1= [];
gdjs.Splash_32ACode.GDMISTObjects2= [];
gdjs.Splash_32ACode.GDWaterObjects1= [];
gdjs.Splash_32ACode.GDWaterObjects2= [];
gdjs.Splash_32ACode.GDNewObjectObjects1= [];
gdjs.Splash_32ACode.GDNewObjectObjects2= [];
gdjs.Splash_32ACode.GDtext1Objects1= [];
gdjs.Splash_32ACode.GDtext1Objects2= [];
gdjs.Splash_32ACode.GDCAPTLOGOObjects1= [];
gdjs.Splash_32ACode.GDCAPTLOGOObjects2= [];

gdjs.Splash_32ACode.conditionTrue_0 = {val:false};
gdjs.Splash_32ACode.condition0IsTrue_0 = {val:false};
gdjs.Splash_32ACode.condition1IsTrue_0 = {val:false};


gdjs.Splash_32ACode.eventsList0 = function(runtimeScene) {

{


gdjs.Splash_32ACode.condition0IsTrue_0.val = false;
{
gdjs.Splash_32ACode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Splash_32ACode.condition0IsTrue_0.val) {
gdjs.Splash_32ACode.GDtext1Objects1.createFrom(runtimeScene.getObjects("text1"));
{gdjs.evtTools.window.setFullScreen(runtimeScene, true, false);
}{for(var i = 0, len = gdjs.Splash_32ACode.GDtext1Objects1.length ;i < len;++i) {
    gdjs.Splash_32ACode.GDtext1Objects1[i].setOpacity(0);
}
}}

}


{


{
gdjs.Splash_32ACode.GDtext1Objects1.createFrom(runtimeScene.getObjects("text1"));
{for(var i = 0, len = gdjs.Splash_32ACode.GDtext1Objects1.length ;i < len;++i) {
    gdjs.Splash_32ACode.GDtext1Objects1[i].setOpacity(gdjs.Splash_32ACode.GDtext1Objects1[i].getOpacity() + (gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene) * 15));
}
}}

}


{

gdjs.Splash_32ACode.GDtext1Objects1.createFrom(runtimeScene.getObjects("text1"));

gdjs.Splash_32ACode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Splash_32ACode.GDtext1Objects1.length;i<l;++i) {
    if ( gdjs.Splash_32ACode.GDtext1Objects1[i].getOpacity() > 90 ) {
        gdjs.Splash_32ACode.condition0IsTrue_0.val = true;
        gdjs.Splash_32ACode.GDtext1Objects1[k] = gdjs.Splash_32ACode.GDtext1Objects1[i];
        ++k;
    }
}
gdjs.Splash_32ACode.GDtext1Objects1.length = k;}if (gdjs.Splash_32ACode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Splash B", false);
}}

}


};

gdjs.Splash_32ACode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Splash_32ACode.GDFoxObjects1.length = 0;
gdjs.Splash_32ACode.GDFoxObjects2.length = 0;
gdjs.Splash_32ACode.GDBushObjects1.length = 0;
gdjs.Splash_32ACode.GDBushObjects2.length = 0;
gdjs.Splash_32ACode.GDtreeObjects1.length = 0;
gdjs.Splash_32ACode.GDtreeObjects2.length = 0;
gdjs.Splash_32ACode.GDDIRTObjects1.length = 0;
gdjs.Splash_32ACode.GDDIRTObjects2.length = 0;
gdjs.Splash_32ACode.GDGrassObjects1.length = 0;
gdjs.Splash_32ACode.GDGrassObjects2.length = 0;
gdjs.Splash_32ACode.GDCAMERARIGObjects1.length = 0;
gdjs.Splash_32ACode.GDCAMERARIGObjects2.length = 0;
gdjs.Splash_32ACode.GDTorchObjects1.length = 0;
gdjs.Splash_32ACode.GDTorchObjects2.length = 0;
gdjs.Splash_32ACode.GDFireObjects1.length = 0;
gdjs.Splash_32ACode.GDFireObjects2.length = 0;
gdjs.Splash_32ACode.GDJET_95WATERObjects1.length = 0;
gdjs.Splash_32ACode.GDJET_95WATERObjects2.length = 0;
gdjs.Splash_32ACode.GDMISTObjects1.length = 0;
gdjs.Splash_32ACode.GDMISTObjects2.length = 0;
gdjs.Splash_32ACode.GDWaterObjects1.length = 0;
gdjs.Splash_32ACode.GDWaterObjects2.length = 0;
gdjs.Splash_32ACode.GDNewObjectObjects1.length = 0;
gdjs.Splash_32ACode.GDNewObjectObjects2.length = 0;
gdjs.Splash_32ACode.GDtext1Objects1.length = 0;
gdjs.Splash_32ACode.GDtext1Objects2.length = 0;
gdjs.Splash_32ACode.GDCAPTLOGOObjects1.length = 0;
gdjs.Splash_32ACode.GDCAPTLOGOObjects2.length = 0;

gdjs.Splash_32ACode.eventsList0(runtimeScene);
return;

}

gdjs['Splash_32ACode'] = gdjs.Splash_32ACode;
