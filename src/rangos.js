function rango(altura) {
    let factor = 0;
    if (altura >= 1000 && altura <= 1041) {
        factor = 0.1;
    } else if (altura >= 1042 && altura <= 1265) {
        factor = 0.2;
    } else if (altura >= 1266 && altura <= 1448) {
        factor = 0.3;
    } else if (altura >= 1449 && altura <= 1608) {
        factor = 0.4;
    } else if (altura >= 1609 && altura <= 1751) {
        factor = 0.5;
    } else if (altura >= 1752 && altura <= 1882) {
        factor = 0.6;
    } else if (altura >= 1883 && altura <= 2003) {
        factor = 0.7;
    } else if (altura >= 2004 && altura <= 2116) {
        factor = 0.8;
    } else if (altura >= 2117 && altura <= 2223) {
        factor = 0.9;
    } else if (altura >= 2224 && altura <= 2325) {
        factor = 1;
    } else if (altura >= 2326 && altura <= 2422) {
        factor = 1.1;
    } else if (altura >= 2423 && altura <= 2515) {
        factor = 1.2;
    } else if (altura >= 2516 && altura <= 2604) {
        factor = 1.3;
    } else if (altura >= 2605 && altura <= 2690) {
        factor = 1.4;
    } else if (altura >= 2691 && altura <= 2773) {
        factor = 1.5;
    } else if (altura >= 2774 && altura <= 2853) {
        factor = 1.6;
    } else if (altura >= 2854 && altura <= 2932) {
        factor = 1.7;
    } else if (altura >= 2933 && altura <= 3007) {
        factor = 1.8;
    } else if (altura >= 3008 && altura <= 3081) {
        factor = 1.9;
    } else if (altura >= 3082 && altura <= 3153) {
        factor = 2;
    } else if (altura >= 3154 && altura <= 3224) {
        factor = 2.1;
    } else if (altura >= 3225 && altura <= 3292) {
        factor = 2.2;
    } else if (altura >= 3293 && altura <= 3360) {
        factor = 2.3;
    } else if (altura >= 3361 && altura <= 3425) {
        factor = 2.4;
    } else if (altura >= 3426 && altura <= 3490) {
        factor = 2.5;
    } else if (altura >= 3491 && altura <= 3553) {
        factor = 2.6;
    } else if (altura >= 3554 && altura <= 3615) {
        factor = 2.7;
    } else if (altura >= 3616 && altura <= 3676) {
        factor = 2.8;
    } else if (altura >= 3677 && altura <= 3736) {
        factor = 2.9;
    } else if (altura >= 3737 && altura <= 3795) {
        factor = 3;
    } else if (altura >= 3796 && altura <= 3853) {
        factor = 3.1;
    } else if (altura >= 3854 && altura <= 3910) {
        factor = 3.2;
    } else if (altura >= 3911 && altura <= 3966) {
        factor = 3.3;
    } else if (altura >= 3967 && altura <= 4021) {
        factor = 3.4;
    } else if (altura >= 4022 && altura <= 4076) {
        factor = 3.5;
    } else if (altura >= 4077 && altura <= 4129) {
        factor = 3.6;
    } else if (altura >= 4130 && altura <= 4182) {
        factor = 3.7;
    } else if (altura >= 4183 && altura <= 4235) {
        factor = 3.8;
    } else if (altura >= 4236 && altura <= 4286) {
        factor = 3.9;
    } else if (altura >= 4287 && altura <= 4337) {
        factor = 4;
    } else if (altura >= 4338 && altura <= 4388) {
        factor = 4.1;
    } else if (altura >= 4389 && altura <= 4437) {
        factor = 4.2;
    } else if (altura >= 4438 && altura <= 4487) {
        factor = 4.3;
    } else if (altura >= 4488 && altura <= 4535) {
        factor = 4.4;
    } else if (altura >= 4536 && altura <= 4583) {
        factor = 4.5;
    } else if (altura >= 4584 && altura <= 4631) {
        factor = 4.6;
    } else if (altura >= 4632 && altura <= 4678) {
        factor = 4.7;
    } else if (altura >= 4679 && altura <= 4725) {
        factor = 4.8;
    } else if (altura >= 4726 && altura <= 4771) {
        factor = 4.9;
    } else if (altura >= 4772 && altura <= 4816) {
        factor = 5;
    } else if (altura >= 4817 && altura <= 4861) {
        factor = 5.1;
    } else if (altura >= 4862 && altura <= 4906) {
        factor = 5.2;
    } else if (altura >= 4907 && altura <= 4951) {
        factor = 5.3;
    } else if (altura >= 4952 && altura <= 4994) {
        factor = 5.4;
    } else if (altura >= 4995 && altura <= 5000) {
        factor = 5.5;
    } 

    return factor;

}

export default rango;