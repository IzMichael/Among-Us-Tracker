// Selectors

var ventBox = document.getElementById("ventBox");
var commonBox = document.getElementById("commonBox");
var camsBox = document.getElementById("camsBox");
var labelBox = document.getElementById("labelBox");

ventBox.addEventListener('change', function () {
    if (this.checked) {
        vent = 1;
        $('.' + imgMap + '-vent').css('display', 'block');
    } else {
        vent = 0;
        $('.' + imgMap + '-vent').css('display', 'none');
    }
    checks()
});

commonBox.addEventListener('change', function () {
    if (this.checked) {
        common = 1;
        $('.' + imgMap + '-common').css('display', 'block');
    } else {
        common = 0;
        $('.' + imgMap + '-common').css('display', 'none');
    }
    checks()
});

camsBox.addEventListener('change', function () {
    if (this.checked) {
        cams = 1;
        $('.' + imgMap + '-cams').css('display', 'block');
    } else {
        cams = 0;
        $('.' + imgMap + '-cams').css('display', 'none');
    }
    checks()
});

labelBox.addEventListener('change', function () {
    if (this.checked) {
        label = 1;
        $('.' + imgMap + '-label').css('display', 'block');
    } else {
        label = 0;
        $('.' + imgMap + '-label').css('display', 'none');
    }
    checks()
});

function checkAll() {
    ventBox.checked = true;
    commonBox.checked = true;
    camsBox.checked = true;
    labelBox.checked = true;
}

// Image Processor

var vent = 1;
var common = 1;
var cams = 1;
var label = 1;

var imgMap = "skeld";
var mapLabel = document.getElementById("mapLabel");
var camsLabel = document.getElementById("camsLabel");

function mapSelect(map) {
    if (map === "skeld") {
        imgMap = "skeld";
        checkAll();
        mapLabel.innerHTML = "Current: The Skeld";
        camsLabel.innerHTML = "Cameras";
        $('.skeld').css('display', 'block');
        $('.mira').css('display', 'none');
        $('.polus').css('display', 'none');
    } else if (map === "mira") {
        imgMap = "mira";
        checkAll();
        mapLabel.innerHTML = "Current: Mira HQ";
        camsLabel.innerHTML = "Door Log";
        $('.skeld').css('display', 'none');
        $('.mira').css('display', 'block');
        $('.polus').css('display', 'none');
    } else if (map === "polus") {
        imgMap = "polus";
        checkAll();
        mapLabel.innerHTML = "Current: Polus";
        camsLabel.innerHTML = "Cameras";
        $('.skeld').css('display', 'none');
        $('.mira').css('display', 'none');
        $('.polus').css('display', 'block');
    } else {
        mapSelect("skeld")
    }
}

function checks() {
    console.log(vent);
    console.log(common);
    console.log(cams);
    console.log(label);
    console.log("---");
}

function clearNotes() {
    var notes = document.getElementById("notes");
    notes.value = "";
}

// Sus

var options = {
    group: 'share',
    animation: 100
};

events = [
    'onChoose',
    'onStart',
    'onEnd',
    'onAdd',
    'onUpdate',
    'onSort',
    'onRemove',
    'onChange',
    'onUnchoose'
].forEach(function (name) {
    options[name] = function (evt) {
        console.log({
            'event': name,
            'this': this,
            'item': evt.item,
            'from': evt.from,
            'to': evt.to,
            'oldIndex': evt.oldIndex,
            'newIndex': evt.newIndex
        });
    };
});

Sortable.create(foo, options);
Sortable.create(bar, options);
Sortable.create(erm, options);
Sortable.create(shm, options);
Sortable.create(shw, options);