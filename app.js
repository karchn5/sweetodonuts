
function getDonuts() {
    fetch('donuts.json')
      .then(function(res){
        return res.json();
      })
      .then(function(data) {
        console.log(data);
        let output = '';
        data.donuts.forEach(function(donuts) {
          output += `<div class="menu__item">
          
          <div class="menu__img">
            <img class="menu__item--img" src="${donuts.photo}" alt="yummy donut">
          
            <div class="menu__overlay">
            <p class="menu__item--descript">${donuts.descript}</p>
            <p class="menu__item--price">$${donuts.price}</p>
            </div>
          </div>

          <div class="menu__item--text">
          <p class="">${donuts.name}</p>
          </div>
        
      </div>`;
        });
        document.querySelector('.donuts').innerHTML = output;
      })
      .catch(function(err){
        console.log(err);
      });
  }


  function getPastries() {
    fetch('donuts.json')
      .then(function(res){
        return res.json();
      })
      .then(function(data) {
        console.log(data);
        let output = '';
        data.croissants.forEach(function(croissants) {
          output += `<div class="menu__item">
          <div class="menu__img">
            <img class="menu__item--img" src="${croissants.photo}" alt="yummy donut">
          
            <div class="menu__overlay">
            <p class="menu__item--descript">${croissants.descript}</p>
            <p class="menu__item--price">$${croissants.price}</p>
            </div>
          </div>

          <div class="menu__item--text">
          <p class="">${croissants.name}</p>
          </div>
      </div>`;
        });
        document.querySelector('.croissants').innerHTML = output;
      })
      .catch(function(err){
        console.log(err);
      });
  }
  function getMuffins() {
    fetch('donuts.json')
      .then(function(res){
        return res.json();
      })
      .then(function(data) {
        console.log(data);
        let output = '';
        data.muffins.forEach(function(muffins) {
          output += `<div class="menu__item">
          <div class="menu__img">
            <img class="menu__item--img" src="${muffins.photo}" alt="yummy donut">
          
            <div class="menu__overlay">
            <p class="menu__item--descript">${muffins.descript}</p>
            <p class="menu__item--price">$${muffins.price}</p>
            </div>
          </div>

          <div class="menu__item--text">
          <p class="">${muffins.name}</p>
          </div>
      </div>`;
        });
        document.querySelector('.muffins').innerHTML += output;
      })
      .catch(function(err){
        console.log(err);
      });
  }

  function getDrinks() {
    fetch('donuts.json')
      .then(function(res){
        return res.json();
      })
      .then(function(data) {
        console.log(data);
        let output = '';
        data.drinks.forEach(function(drinks) {
          output += `<div class="menu__item">
          <div class="menu__img">
            <img class="menu__item--img" src="${drinks.photo}" alt="yummy donut">
          
            <div class="menu__overlay">
            <p class="menu__item--descript">${drinks.descript}</p>
            <p class="menu__item--price">$${drinks.price}</p>
            </div>
          </div>

          <div class="menu__item--text">
          <p class="">${drinks.name}</p>
          </div>
      </div>`;
        });
        document.querySelector('.drinks').innerHTML += output;
      })
      .catch(function(err){
        console.log(err);
      });
  }

  // <p class="">$${drinks.price}</p>

getDonuts();
getPastries();
getMuffins();
getDrinks();

const tabs = document.querySelectorAll('[data-tab-target]');
const lines = document.querySelectorAll('.line');
const tabContents = document.querySelectorAll('[data-tab-content]');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    allTabs.classList.remove('active')
    const target = document.querySelector(tab.dataset.tabTarget)
    tabContents.forEach(tabContent => {
      tabContent.classList.remove('active')
    })
    tabs.forEach(tab => {
      tab.classList.remove('active')
    })
    lines.forEach(line => {
        line.classList.remove('menu__category--line')
    })

    tab.classList.add('active')
    target.classList.add('active')
  })
})


const allTabs = document.getElementById('allTabs');

allTabs.addEventListener('click', function(){
    allTabs.classList.add('active')

    lines.forEach(line => {
        line.classList.add('menu__category--line')
    })

    tabs.forEach(tab => {
        const target = document.querySelector(tab.dataset.tabTarget)
        tabs.forEach(tab => {
            tab.classList.remove('active')
          })
        target.classList.add('active')
    })

});


// document.querySelectorAll('.menu__items').forEach(item => {
//   item.addEventListener('click', function(e){
//     if(e.target.classList.contains('menu__item--img')){
//       generateOverlay();
//     }
//   })
// })


// function generateOverlay(){
//   document.querySelector(".overlay").style.display = "flex";
// }

// document.querySelector(".overlay").addEventListener('click', function(e){
//   if((e.target.classList.contains('overlay__box'))||(e.target.classList.contains('overlay__box--content--img'))){
//     generateOverlay();
//   } else {
//     off();
//   }
// }
// )

// function off() {
//   document.querySelector(".overlay").style.display = "none";
// }