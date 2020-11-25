// Selectors

var ventBox = document.getElementById("ventBox");
var wiresBox = document.getElementById("wiresBox");
var commonBox = document.getElementById("commonBox");
var camsBox = document.getElementById("camsBox");

ventBox.addEventListener('change', function () {
    if (this.checked) {
        vent = 1;
        $('.' + imgMap + '-vent').css('display','block');
    } else {
        vent = 0;
        $('.' + imgMap + '-vent').css('display','none');
    }
    checks()
});

wiresBox.addEventListener('change', function () {
    if (this.checked) {
        wires = 1;
        $('.' + imgMap + '-wires').css('display','block');
    } else {
        wires = 0;
        $('.' + imgMap + '-wires').css('display','none');
    }
    checks()
});

commonBox.addEventListener('change', function () {
    if (this.checked) {
        common = 1;
        $('.' + imgMap + '-common').css('display','block');
    } else {
        common = 0;
        $('.' + imgMap + '-common').css('display','none');
    }
    checks()
});

camsBox.addEventListener('change', function () {
    if (this.checked) {
        cams = 1;
        $('.' + imgMap + '-cams').css('display','block');
    } else {
        cams = 0;
        $('.' + imgMap + '-cams').css('display','none');
    }
    checks()
});

function checkAll() {
    ventBox.checked = true;
    wiresBox.checked = true;
    commonBox.checked = true;
    camsBox.checked = true;
}

// Image Processor

var vent = 1;
var wires = 1;
var common = 1;
var cams = 1;

var imgMap = "skeld";
var label = document.getElementById("mapLabel");

function mapSelect(map) {
    if (map === "skeld") {
        imgMap = "skeld";
        checkAll();
        label.innerHTML = "Current: The Skeld";
        $('.skeld').css('display','block');
        $('.mira').css('display','none');
        $('.polus').css('display','none');
    } else if (map === "mira") {
        imgMap = "mira";
        checkAll();
        label.innerHTML = "Current: Mira HQ";
        $('.skeld').css('display','none');
        $('.mira').css('display','block');
        $('.polus').css('display','none');
    } else if (map === "polus") {
        imgMap = "polus";
        checkAll();
        label.innerHTML = "Current: Polus";
        $('.skeld').css('display','none');
        $('.mira').css('display','none');
        $('.polus').css('display','block');
    } else {
        mapSelect("skeld")
    }
}

function checks() {
    console.log(vent);
    console.log(wires);
    console.log(common);
    console.log(cams);
    console.log("---");
}