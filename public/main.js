// All the variables are here

const moveLeft = document.getElementById('buttonLeft');
const moveRight = document.getElementById('buttonRight');
const itemForSale = document.getElementById('switchProduct');
const themButton = document.getElementById('them');
const poorTrees = document.getElementsByClassName('treeKiller');
const usButton = document.getElementById('us');
const contact = document.getElementById('contactUs');


//Forest rules

themButton.addEventListener('click', function() {
  poorTrees[0].classList.add('onceler1');
  poorTrees[1].classList.add('onceler2');
  poorTrees[2].classList.add('onceler3');
  poorTrees[3].classList.add('onceler4');
  poorTrees[4].classList.add('onceler5');
});
usButton.addEventListener('click', function() {
  poorTrees[0].classList.remove('onceler1');
  poorTrees[1].classList.remove('onceler2');
  poorTrees[2].classList.remove('onceler3');
  poorTrees[3].classList.remove('onceler4');
  poorTrees[4].classList.remove('onceler5');
});

//Product rules
moveLeft.addEventListener('click', function(e) {
  if (itemForSale.classList.contains('productOne')) {
    itemForSale.classList.add('productTwo');
    itemForSale.classList.remove('productOne');
    itemForSale.innerHTML ="<img src='images/notebooks.jpeg' class='productTwo product comeFromRight'>";
  } else if (itemForSale.classList.contains('productTwo')) {
    itemForSale.classList.add('productThree');
    itemForSale.classList.remove('productTwo');
    itemForSale.innerHTML ="<img src='images/envelopes.jpeg' class='productThree product comeFromRight'>";
  } else {
    itemForSale.classList.add('productOne');
    itemForSale.classList.remove('productThree');
    itemForSale.innerHTML ="<img src='images/paper1.jpeg' class='productOne product comeFromRight'>";
  }
});
moveRight.addEventListener('click', function(e) {
  if (itemForSale.classList.contains('productOne')) {
    itemForSale.classList.add('productThree');
    itemForSale.classList.remove('productOne');
    itemForSale.innerHTML ="<img src='images/envelopes.jpeg' class='productThree product comeFromLeft'>";
  } else if (itemForSale.classList.contains('productTwo')) {
    itemForSale.classList.add('productOne');
    itemForSale.classList.remove('productTwo');
    itemForSale.innerHTML ="<img src='images/paper1.jpeg' class='productOne product comeFromLeft'>";
  } else {
    itemForSale.classList.add('productTwo');
    itemForSale.classList.remove('productThree');
    itemForSale.innerHTML ="<img src='images/notebooks.jpeg' class='productTwo product comeFromLeft'>";
  }
});

//Contact functions at bottom of page

let info = (str) => {
  alert(str);
}

contact.addEventListener('click', function(d) {
  info("Our email is info@munderdifflin.com and our phone number is 555-555-5555");
});
twitter.addEventListener('click', function(d) {
  info("Our twitter handle is @munderdifflinpaper");
});
facebook.addEventListener('click', function(d) {
  info("Please like our page at munderdifflinpaper");
});
instagram.addEventListener('click', function(d) {
  info("Our instagram handle is @munderdifflinpaper");
});
