var score = 0;
var i = 5, j = 1;
var num = 0;
var fl, fs;
function deal() {
    let stand = document.getElementById('slot2');
    if (stand.innerHTML == 'deal') {
        if (score == 0) {
            alert("minimum bet should be greater than 10");
            return 0;
        }
        var p = document.getElementById("p")
        var oriImage1 = document.getElementById("image1")
        var oriImage4 = document.getElementById("image4")
        var oriImage3 = document.getElementById("image3")
        oriImage1.src = create();
        oriImage3.src = create();
        p.innerHTML = count(fl);
        oriImage4.src = create();
        p.innerHTML = count(fl);
        let slot1 = document.getElementById("slot1");
        slot1.innerHTML = "Hit";
        let slot2 = document.getElementById("slot2");
        slot2.innerHTML = "stand";
    }
    else
        check();
}
function check() {
    var first = document.getElementById("first");
    while(fs<=num)
    {
        let imag = document.createElement('img');
        imag.className = "image";
        imag.src = create();
        if (fl == "Q" || fl == "J" || fl == "K") {
                        fs = fs + 10;
        }
        else if (fl == "A") {
            fs = fs + 11;
        }
        else {
            fs = fs + fl;
        }
        Pa.innerHTML=fs;
        first.appendChild(imag);
    }
    if (fs == 21) {
        let win = document.createElement('div');
        win.id = 'win';
        win.innerHTML = "you lose";
        document.body.appendChild(win);
        return -1;
    }
    else if (fs > 21) {
        let win = document.createElement('div');
        win.id = 'win';
        win.innerHTML = "you win";
        document.body.appendChild(win);
        return -1;
    }
    else if(fs>num && fs<=21){
        let win = document.createElement('div');
        win.id = 'win';
        win.innerHTML = "you loose";
        document.body.appendChild(win);
        return -1;
    }
}
function create() {
    if (j == 1) {
        let FL = new Array(2, 3, 4, 5, 6, 7, 8, 9, 10, "A", "J", "Q", "K");
        let SL = new Array("C", "S", "D", "H");
        let imgDir = "images/card images/";
        imgFL = Math.floor(Math.random() * FL.length);
        imgSL = Math.floor(Math.random() * SL.length);
        fs = FL[imgFL];
        j++;
        return imgDir + FL[imgFL] + SL[imgSL] + ".jpg";
    }
    else {
        let FL = new Array(2, 3, 4, 5, 6, 7, 8, 9, 10, "A", "J", "Q", "K");
        let SL = new Array("C", "S", "D", "H");
        let imgDir = "images/card images/";
        imgFL = Math.floor(Math.random() * FL.length);
        imgSL = Math.floor(Math.random() * SL.length);
        fl = FL[imgFL];
        return imgDir + FL[imgFL] + SL[imgSL] + ".jpg";
    }
}
function count(FL) {
    if (FL == "Q" || FL == "J" || FL == "K") {
        num = num + 10;
        return num;
    }
    else if (FL == "A") {
        num = num + 11;
        return num;
    }
    else {
        num = num + FL;
        return num;
    }

}
function winner() {
    if (num < 21) {
    }
    if (num == 21) {
        let win = document.createElement('div');
        win.id = 'win';
        win.innerHTML = "congratulations";
        document.body.appendChild(win);
        return -1;
    }
    else if (num > 21) {
        let win = document.createElement('div');
        win.id = 'win';
        win.innerHTML = "you lose";
        document.body.appendChild(win);
        return -1;
    }
}
function hit() {
    let slot1 = document.getElementById("slot1");
    let second = document.getElementById("second");
    if (slot1.innerHTML == 'double') {
        score = score * 2;
        bet.innerText = score;
    }
    else {
        let imag = document.createElement('img');
        imag.className = "image";
        imag.src = create();
        p.innerHTML = count(fl);
        second.appendChild(imag);
        winner();
    }

}
function sub(val) {
    if (slot2.innerHTML == 'deal') {
        var bet = document.getElementById("bet");
        if (val == `+`)
            score = score + 10;
        else if (val == `-`)
            score = score - 10;
        if (score < 0 || score > 1600) { }
        else
            bet.innerText = score
    }
    else
        alert("you cant change the bet once the deal is done")
}