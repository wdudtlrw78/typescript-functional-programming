"use strict";
/*
토마토: 7000원
오렌지: 15000원
사과: 10000원
*/
exports.__esModule = true;
exports.main = exports.list3 = exports.list2 = exports.list1 = exports.addApple = exports.addOrange = exports.addTomato = exports.totalPrice = void 0;
// 전역 변수라는 부수효과를 사용
// 예측하기 어려운 오류의 발생 가능성이 있음
exports.totalPrice = 0;
function addTomato() {
    exports.totalPrice += 7000;
}
exports.addTomato = addTomato;
function addOrange() {
    exports.totalPrice += 15000;
}
exports.addOrange = addOrange;
function addApple() {
    exports.totalPrice += 10000;
}
exports.addApple = addApple;
function list1() {
    // 토마토, 오렌지, 사과 한 상자
    addTomato();
    addOrange();
    addApple();
}
exports.list1 = list1;
function list2() {
    // 토마토 2상자
    addTomato();
    addTomato();
}
exports.list2 = list2;
function list3() {
    // addOrange 함수를 직접 100번 호출 하는 대신
    // 함수를 100번 호출 하도록 명령하는 코드를 작성
    // 오렌지 100상자
    for (var i = 0; i < 100; i++) {
        addOrange();
    }
}
exports.list3 = list3;
function main() {
    list3();
}
exports.main = main;
//# sourceMappingURL=clip3-2.js.map