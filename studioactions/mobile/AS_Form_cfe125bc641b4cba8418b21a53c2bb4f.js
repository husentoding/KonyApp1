function AS_Form_cfe125bc641b4cba8418b21a53c2bb4f(eventobject) {
    function MOVE_ACTION____i2534ffdede342fea88e44059725dac4_Callback() {
        login.show();
    }
    start.FlexLogoImg.animate(kony.ui.createAnimation({
        "100": {
            "bottom": "60%",
            "stepConfig": {
                "timingFunction": kony.anim.EASE
            }
        }
    }), {
        "delay": 0.5,
        "iterationCount": 1,
        "fillMode": kony.anim.FILL_MODE_FORWARDS,
        "duration": 1
    }, {
        "animationEnd": MOVE_ACTION____i2534ffdede342fea88e44059725dac4_Callback
    });
}