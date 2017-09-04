function AS_FlexContainer_fa45a45750ea4f4daca3f307709d3ebc(eventobject) {
    function MOVE_ACTION____d55b4c0ee2bb4849be95999e2fc24b4b_Callback() {}

    function MOVE_ACTION____a62ec55df93b481a82a4fbcc4ab25f00_Callback() {}
    home.FlexMenu.animate(kony.ui.createAnimation({
        "100": {
            "left": "80%",
            "stepConfig": {
                "timingFunction": kony.anim.EASE
            }
        }
    }), {
        "delay": 0,
        "iterationCount": 1,
        "fillMode": kony.anim.FILL_MODE_FORWARDS,
        "duration": 0.25
    }, {
        "animationEnd": MOVE_ACTION____a62ec55df93b481a82a4fbcc4ab25f00_Callback
    });
    home.FlexMenu.animate(kony.ui.createAnimation({
        "100": {
            "left": "0%",
            "stepConfig": {
                "timingFunction": kony.anim.EASE
            }
        }
    }), {
        "delay": 0.1,
        "iterationCount": 1,
        "fillMode": kony.anim.FILL_MODE_FORWARDS,
        "duration": 0.25
    }, {
        "animationEnd": MOVE_ACTION____d55b4c0ee2bb4849be95999e2fc24b4b_Callback
    });
}