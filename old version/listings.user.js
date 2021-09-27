// ==UserScript==
// @name         G2G Autodumping Price
// @namespace    http://g2g.com/
// @version      0.5
// @author       Finegorko
// @match        https://www.g2g.com/sell/manage?region=41709&service=1&game=2299&type=0&sorting=title%40asc
// ==/UserScript==

(function () {
  'use strict';
  function AntonidasInput() {
    let priceListing = document.querySelectorAll('.g2g_products_price.editable.editable-click')[0].textContent;
    let priceLocal = localStorage.Antonidas_Price;
    if (priceLocal == priceListing) {
      console.log("Вы уже перебили лот.")
    } else {
      console.log("Меняю цену на", priceLocal)
      document.querySelector('.input-large').value = priceLocal;
      document.querySelector('.btn.btn--green.editable-submit').click();
    }
  }
  function ArgentDawnInput() {
    let priceListing = document.querySelectorAll('.g2g_products_price.editable.editable-click')[1].textContent;
    let priceLocal = localStorage.ArgentDawn_Price;
    if (priceLocal == priceListing) {
      console.log("Вы уже перебили лот.")
    } else {
      console.log("Меняю цену на", priceLocal)
      document.querySelector('.input-large').value = priceLocal;
      document.querySelector('.btn.btn--green.editable-submit').click();
    }
  }
  function RavencrestInput() {
    let priceListing = document.querySelectorAll('.g2g_products_price.editable.editable-click')[2].textContent;
    let priceLocal = localStorage.Ravencrest_Price;
    if (priceLocal == priceListing) {
      console.log("Вы уже перебили лот.")
    } else {
      console.log("Меняю цену на", priceLocal)
      document.querySelector('.input-large').value = priceLocal;
      document.querySelector('.btn.btn--green.editable-submit').click();
    }
  }
  function AntonidasTable() {
    let priceListing = document.querySelectorAll('.g2g_products_price.editable.editable-click')[0].textContent;
    let priceLocal = localStorage.Antonidas_Price;
    if (priceLocal == priceListing) {
    } else {
      document.getElementById('c2c_8412134').querySelector('.g2g_products_price.editable.editable-click').click();
    }
  }
  function ArgentDawnTable() {
    let priceListing = document.querySelectorAll('.g2g_products_price.editable.editable-click')[1].textContent;
    let priceLocal = localStorage.ArgentDawn_Price;
    if (priceLocal == priceListing) {
    } else {
      document.getElementById('c2c_9014204').querySelector('.g2g_products_price.editable.editable-click').click();
    }
  }
  function RavencrestTable() {
    let priceListing = document.querySelectorAll('.g2g_products_price.editable.editable-click')[2].textContent;
    let priceLocal = localStorage.Ravencrest_Price;
    if (priceLocal == priceListing) {
    } else {
      document.getElementById('c2c_9003201').querySelector('.g2g_products_price.editable.editable-click').click();
    }
  }
  // таймер на выставление
  window.onload = function Post() {
    setTimeout(AntonidasTable, 1000);
    setTimeout(AntonidasInput, 1500);
    setTimeout(ArgentDawnTable, 2000);
    setTimeout(ArgentDawnInput, 2500);
    setTimeout(RavencrestTable, 3000);
    setTimeout(RavencrestInput, 3500);
  }
  setInterval(function () {
    location.reload();
  }, 325000);
})();