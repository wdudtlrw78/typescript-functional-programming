import "./index.css";
import {cart} from "./cart";

const list = () => {
    let html = "<ul>";

    for (let i = 0; i < cart.length; i++) {
        if (cart[i].outOfStock) {
            html += "<li class='gray'>";
            html += `<h2>${cart[i].name} (품절)</h2>`
            html += `<div class="strike">가격: ${cart[i].price}원</div>`
            html += `<div class="strike">수량: ${cart[i].quantity}개</div>`
            html += "</li>"
        } else {
            html += "<li>";
            html += `<h2>${cart[i].name}</h2>`
            html += `<div>가격: ${cart[i].price}원</div>`
            html += `<div>수량: ${cart[i].quantity}개</div>`
            html += "</li>"
        }
    }

    html += "</ul>";

    let totalCount = 0;
    for (let i = 0; i < cart.length; i++) {
        if (!cart[i].outOfStock) {
            totalCount += cart[i].quantity;
        }
    }
    html += `<h2>전체 수량: ${totalCount}상자</h2>`

    let totalPrice = 0;
    for (let i = 0; i < cart.length; i++) {
        if (!cart[i].outOfStock) {
            totalPrice += cart[i].quantity * cart[i].price;
        }
    }
    html += `<h1>전체 가격: ${totalPrice}원</h1>`

    return `
        ${html}
    `;
}

const app = document.getElementById("app");

if (app !== null) {
    app.innerHTML = `
        <h1>장바구니</h1>
        ${list()}
    `;
}