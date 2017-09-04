function AS_Form_dbac2f20b6ee4c479284c3185f5cd90d(eventobject) {
    function MOVE_ACTION____je4674a850624f6695772e81402f841c_Callback() {}

    function MOVE_ACTION____ea60d295db734a0390b62e23f7e142d3_Callback() {
        login.FlexLoginMain.animate(kony.ui.createAnimation({
            "100": {
                "centerY": "48%",
                "stepConfig": {
                    "timingFunction": kony.anim.EASE
                }
            }
        }), {
            "delay": 1,
            "iterationCount": 1,
            "fillMode": kony.anim.FILL_MODE_FORWARDS,
            "duration": 0.5
        }, {
            "animationEnd": MOVE_ACTION____je4674a850624f6695772e81402f841c_Callback
        });
    }
    login.FlexLogoImg.animate(kony.ui.createAnimation({
        "100": {
            "top": "4%",
            "stepConfig": {
                "timingFunction": kony.anim.EASE
            }
        }
    }), {
        "delay": 1,
        "iterationCount": 1,
        "fillMode": kony.anim.FILL_MODE_FORWARDS,
        "duration": 0.5
    }, {
        "animationEnd": MOVE_ACTION____ea60d295db734a0390b62e23f7e142d3_Callback
    });
}