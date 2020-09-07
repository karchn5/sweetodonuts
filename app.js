
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
          <img class="menu__item--img" src="${donuts.photo}" alt="yummy donut">
          <div class="menu__item--text">
              <p class="">${donuts.name}</p>
              <p class="">$${donuts.price}</p>
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
          <img class="menu__item--img" src="${croissants.photo}" alt="yummy donut">
          <div class="menu__item--text">
              <p class="">${croissants.name}</p>
              <p class="">$${croissants.price}</p>
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
          <img class="menu__item--img" src="${muffins.photo}" alt="yummy donut">
          <div class="menu__item--text">
              <p class="">${muffins.name}</p>
              <p class="">$${muffins.price}</p>
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
          <img class="menu__item--img" src="${drinks.photo}" alt="yummy donut">
          <div class="menu__item--text">
              <p class="">${drinks.name}</p>
              <p class="">$${drinks.price}</p>
          </div>
      </div>`;
        });
        document.querySelector('.drinks').innerHTML += output;
      })
      .catch(function(err){
        console.log(err);
      });
  }

getDonuts();
getPastries();
getMuffins();
getDrinks();

const tabs = document.querySelectorAll('[data-tab-target]');
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
    
    tab.classList.add('active')
    target.classList.add('active')
  })
})


const allTabs = document.getElementById('allTabs');

allTabs.addEventListener('click', function(){
    allTabs.classList.add('active')

    tabs.forEach(tab => {
        const target = document.querySelector(tab.dataset.tabTarget)
        tabs.forEach(tab => {
            tab.classList.remove('active')
          })
        target.classList.add('active')
    })

});




