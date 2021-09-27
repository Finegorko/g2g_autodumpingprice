// ==UserScript==
// @name         Antonidas Price
// @namespace    http://g2g.com/
// @version      0.1
// @author       Finegorko
// @match        https://www.g2g.com/offer/Antonidas--DE* 
// ==/UserScript==

(function () {
  'use strict';
  window.onload = function checkPrice() {
    document.querySelector('.title_top-offers.other_seller_header').textContent = "Server: Antonidas (EU)";
    let y = 1; // price N
    let i = 1; // stock N
    let done = 0 // while
    let s = 2; // seller name
    function Stop() {
      done = done + 1;
    }
    while (done < 1) {
      let Stock = document.querySelectorAll('.offers-bottom-attributes.offer__content-lower-items')[i].innerText;
      let Stock_N = Stock.replace(/[^0-9]/g, "");
      let SellerName = document.querySelectorAll('.seller__name-detail')[s].textContent;
      if (SellerName == "FineGold") {
        console.log("Не могу перебить самого себя.")
        Stop();
      } else if (Stock_N < 500) {
        console.log(Stock_N, "тысяч", 'меньше чем 500 тысяч, перехожу к следующему...')
        y = y + 1;
        i = i + 3;
        s = s + 1;
      } else {
        console.log(Stock_N, "тысяч", 'больше чем 500 тысяч, меняю цену...')
        let lowest_price = document.querySelectorAll('.offer-price-amount')[y].textContent;
        let dumping = 0.000001;
        let Antonidas_Price = lowest_price - dumping;
        localStorage.Antonidas_Price = Antonidas_Price.toFixed(6);
        console.log("Текущая цена -", lowest_price);
        console.log("Меняю цену на -", Antonidas_Price.toFixed(6));
        Stop();
      }
    }
  }
  setInterval(function () {
    location.reload();
  }, 60000);
})();
