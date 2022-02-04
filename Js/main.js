document.getElementById('darkSite') .addEventListener('click' ,function () {
    document.body.classList.toggle('dark'); 
})

let elMenuBtn = document.getElementById('menuBtn');
let elNav= document.getElementById('headerNav');
let elClose= document.getElementById('closeBtn');
let logo= document.getElementById('logo');

elMenuBtn.addEventListener('click', function(){

    elMenuBtn.classList.add('test');
    elNav.classList.add('show');
    logo.classList.add('none');
});


elClose.addEventListener('click', function(){

    elMenuBtn.classList.remove('test');
    elNav.classList.remove('show');
    logo.classList.remove('none');

});