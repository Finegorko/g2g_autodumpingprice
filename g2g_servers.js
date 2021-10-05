// ==UserScript==
// @name         G2G Auto Dump Prices: Antonidas, Argent Dawn, Ravencrest
// @namespace    http://g2g.com/
// @version      0.75
// @author       Finegorko
// @include      https://www.g2g.com/sell/manage?region=41709&service=1&game=2299&type=0&sorting=title%40asc
// @include      https://www.g2g.com/offer/Antonidas*
// @include      https://www.g2g.com/offer/Ravencrest*
// @include      https://www.g2g.com/offer/Argent-Dawn*
// ==/UserScript==

(function () {
    "use strict";
    // pathnames
    let Antonidas_pathname = "/offer/Antonidas--DE----Alliance";
    let ArgentDawn_pathname = "/offer/Argent-Dawn--EU----Alliance"
    let Ravencrest_pathname = "/offer/Ravencrest--EU----Alliance"
    let Listing_pathname = "?region=41709&service=1&game=2299&type=0&sorting=title%40asc"
    // check prices: Antonidas - Argent Dawn - Ravencrest
    if (location.pathname == Antonidas_pathname) {
        console.log("Server: Antonidas (EU)")
        document.querySelector(
            ".title_top-offers.other_seller_header"
        ).textContent = "Server: Antonidas (EU)";
        let y = 1; // price N
        let i = 1; // stock N
        let done = 0; // while
        let s = 2; // seller name
        function Stop() {
            done = done + 1;
        }
        while (done < 1) {
            let Stock = document.querySelectorAll(
                ".offers-bottom-attributes.offer__content-lower-items"
            )[i].innerText;
            let Stock_N = Stock.replace(/[^0-9]/g, "");
            let SellerName = document.querySelectorAll(".seller__name-detail")[s]
                .textContent;
            if (SellerName == "FineGold") {
                console.log("Не могу перебить самого себя.");
                Stop();
            } else if (Stock_N < 500) {
                console.log(
                    Stock_N,
                    "тысяч",
                    "меньше чем 500 тысяч, перехожу к следующему..."
                );
                y = y + 1;
                i = i + 3;
                s = s + 1;
            } else {
                console.log(Stock_N, "тысяч", "больше чем 500 тысяч, меняю цену...");
                let lowest_price = document.querySelectorAll(".offer-price-amount")[y]
                    .textContent;
                let dumping = 0.000001;
                let Antonidas_Price = lowest_price - dumping;
                localStorage.Antonidas_Price = Antonidas_Price.toFixed(6);
                console.log("Текущая цена -", lowest_price);
                console.log("Меняю цену на -", Antonidas_Price.toFixed(6));
                Stop();
            }
        }
    }
    if (location.pathname == ArgentDawn_pathname) {
        console.log("Server: Argent Dawn (EU)")
        document.querySelector('.title_top-offers.other_seller_header').textContent = "Server: Argent Dawn (EU)";
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
                let ArgentDawn_Price = lowest_price - dumping;
                localStorage.ArgentDawn_Price = ArgentDawn_Price.toFixed(6);
                console.log("Текущая цена -", lowest_price);
                console.log("Меняю цену на -", ArgentDawn_Price.toFixed(6));
                Stop();
            }
        }
    }
    if (location.pathname == Ravencrest_pathname) {
        console.log("Server: Ravencrest (EU)")
        document.querySelector('.title_top-offers.other_seller_header').textContent = "Server: Ravencrest (EU)";
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
                let Ravencrest_Price = lowest_price - dumping;
                localStorage.Ravencrest_Price = Ravencrest_Price.toFixed(6);
                console.log("Текущая цена -", lowest_price);
                console.log("Меняю цену на -", Ravencrest_Price.toFixed(6));
                Stop();
            }
        }
    }
    // update prices
    if (location.pathname == Listing_pathname) {
        clearTimeout()
        console.log("Обнаружен Manage Listing, начинаю обновлять цены...")
        function UpdatePrices() {
            function AntonidasInput() {
                let priceListing = document.querySelectorAll('.g2g_products_price.editable.editable-click')[0].textContent;
                let priceLocal = localStorage.Antonidas_Price;
                let status = document.querySelectorAll('.products__description')[0].childNodes[3].innerText
                let deactivated = "Status:\nDeactivated"
                if (status == deactivated) {
                    console.log("Antonidas: Пропускаю, лот деактивирован.")
                } else if (priceLocal == priceListing) {
                    console.log("Antonidas: Вы уже перебили лот.")
                } else {
                    console.log("Antonidas: Меняю цену на", priceLocal)
                    document.querySelector('.input-large').value = priceLocal;
                    document.querySelector('.btn.btn--green.editable-submit').click();
                }
            }
            function ArgentDawnInput() {
                let priceListing = document.querySelectorAll('.g2g_products_price.editable.editable-click')[1].textContent;
                let priceLocal = localStorage.ArgentDawn_Price;
                let status = document.querySelectorAll('.products__description')[1].childNodes[3].innerText
                let deactivated = "Status:\nDeactivated"
                if (status == deactivated) {
                    console.log("Argent Dawn: Пропускаю, лот деактиврован.")
                } else if (priceLocal == priceListing) {
                    console.log("Argent Dawn: Вы уже перебили лот.")
                } else {
                    console.log("Argent Dawn: Меняю цену на", priceLocal)
                    document.querySelector('.input-large').value = priceLocal;
                    document.querySelector('.btn.btn--green.editable-submit').click();
                }
            }
            function RavencrestInput() {
                let priceListing = document.querySelectorAll('.g2g_products_price.editable.editable-click')[2].textContent;
                let priceLocal = localStorage.Ravencrest_Price;
                let status = document.querySelectorAll('.products__description')[2].childNodes[3].innerText
                let deactivated = "Status:\nDeactivated"
                if (status == deactivated) {
                    console.log("Ravencrest: Пропускаю, лот деактиврован.")
                } else if (priceLocal == priceListing) {
                    console.log("Ravencrest: Вы уже перебили лот.")
                } else {
                    console.log("Ravencrest: Меняю цену на", priceLocal)
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
        }
        // таймер на выставление
        function UpdateListings() {
            setTimeout(AntonidasTable, 7000);
            setTimeout(AntonidasInput, 7500);
            setTimeout(ArgentDawnTable, 9000);
            setTimeout(ArgentDawnInput, 9500);
            setTimeout(RavencrestTable, 10000);
            setTimeout(RavencrestInput, 10500);
        }
        window.onload = UpdateListings()
        setTimeout(UpdateListings, 300000);
    }
// reload pages
function ReloadPages() {
    if (location.pathname == Antonidas_pathname) {
        console.log("Antonidas: перезагружаю страницу спустя 5 минут...")
        location.reload();
    } else if (location.pathname == ArgentDawn_pathname) {
        console.log("Argent Dawn: перезагружаю страницу спустя 5 минут...")
        location.reload();
    } else if (location.pathname == Ravencrest_pathname) {
        console.log("Ravencrest: перезагружаю страницу спустя 5 минут...")
        location.reload();
    } 
}
setTimeout(ReloadPages, 300000);
}) ();