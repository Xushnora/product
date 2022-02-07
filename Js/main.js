document.getElementById('darkSite') .addEventListener('click' ,function () {
    document.body.classList.toggle('dark'); 
})

let elMenuBtn = document.getElementById('menuBtn');
let elNav= document.getElementById('headerNav');
let elClose= document.getElementById('closeBtn');
let logo= document.getElementById('logo');
let darkRemov= document.getElementById('darkSite');
let elPlusBtn = document.getElementById('plusModal');
let elOpenPlus = document.getElementById('modalText');
let elPlusBtn2 = document.getElementById('plusModal2');
let elOpenPlus2 = document.getElementById('modalText2');
let elPlusBtn3 = document.getElementById('plusModal3');
let elOpenPlus3 = document.getElementById('modalText3');
let elPlusBtn4 = document.getElementById('plusModal4');
let elOpenPlus4 = document.getElementById('modalText4');
let elIcon = document.getElementById('icon');
let elIcon2 = document.getElementById('icon2');
let elIcon3 = document.getElementById('icon3');
let elIcon4 = document.getElementById('icon4');


elMenuBtn.addEventListener('click', function(){

    elMenuBtn.classList.add('test');
    elNav.classList.add('show');
    logo.classList.add('none');
    darkRemov.classList.add('none');

});

elClose.addEventListener('click', function(){

    elMenuBtn.classList.remove('test');
    elNav.classList.remove('show');
    logo.classList.remove('none');
    darkRemov.classList.remove('none');

});

let count = 0;
elPlusBtn.addEventListener('click', function(){
    elOpenPlus.classList.toggle('mode');
   if (count == 0) {
       elIcon.className = "bx bx-minus";
       count ++;
   } else {
       elIcon.className = "bx bx-plus";
       count = 0;
   }
});

let count2 = 0;
elPlusBtn2.addEventListener('click', function(){
    elOpenPlus2.classList.toggle('mode');

    if (count2 == 0) {
        elIcon2.className = "bx bx-minus";
        count2 ++;
    } else {
        elIcon2.className = "bx bx-plus";
        count2 = 0;
    }
});

let count3 = 0;
elPlusBtn3.addEventListener('click', function(){
    elOpenPlus3.classList.toggle('mode');

    if (count3 == 0) {
        elIcon3.className = "bx bx-minus";
        count3 ++;
    } else {
        elIcon3.className = "bx bx-plus";
        count3 = 0;
    }
});

let count4 = 0;
elPlusBtn4.addEventListener('click', function(){
    elOpenPlus4.classList.toggle('mode');

    if (count4 == 0) {
        elIcon4.className = "bx bx-minus";
        count4 ++;
    } else {
        elIcon4.className = "bx bx-plus";
        count4 = 0;
    }
});