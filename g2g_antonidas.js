// ==UserScript==
// @name         G2G_Antonidas
// @namespace    http://g2g.com/
// @version      0.21
// @author       Finegorko
// @include      https://www.g2g.com/sell/manage?region=41709&service=1&game=2299&type=0&sorting=title%40asc
// @include      https://www.g2g.com/offer/Antonidas--DE*
// @grant        GM_setValue
// @grant        GM_getValue
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
  function AntonidasTable() {
    let priceListing = document.querySelectorAll('.g2g_products_price.editable.editable-click')[0].textContent;
    let priceLocal = localStorage.Antonidas_Price;
    if (priceLocal == priceListing) {
    } else {
      document.getElementById('c2c_8412134').querySelector('.g2g_products_price.editable.editable-click').click();
    }
  }
  // таймер на выставление
  window.onload = function Post() {
    setTimeout(AntonidasTable, 1000);
    setTimeout(AntonidasInput, 1500);
  }
  setInterval(function () {
    location.reload();
  }, 325000);
})();