/*
* 토마토 7,000원
* 오렌지 15,000원
* 사과: 10,000원
* */

export let totalPrice = 0;

// 문제: 휴먼 실수
// totalPrice += 7000;
// totalPrice += 15000;
// totalPrice += 10000;
// totalPrice += 30000;


// 해결 1. 명령어 프로그래밍 -> 부수효과 문제
function addTomato() {
    totalPrice += 7000;
}

function addOrange() {
    totalPrice += 15000;
}

function addApple() {
    totalPrice += 10000;
}

function list1() {
    // 토마토, 오렌지, 사과 한 상자
    addApple();
    addOrange();
    addTomato();
}

function list2() {
    // 토마토 2상자
    addTomato();
    addTomato();
}

function list3() {
    // 오렌지 100상자
    for (let i = 0; i < 100; i++) {
        addOrange();
    }
}

function main() {
    list3();
}