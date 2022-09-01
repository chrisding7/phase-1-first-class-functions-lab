// Code your solution in this file!
const returnFirstTwoDrivers = function (array) {
    return array.slice(0, 2);
}

const returnLastTwoDrivers = function (array) {
    return array.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(n) {
    return function (fare) {
        return fare * n;
    }
}

const fareDoubler = createFareMultiplier(2);
//console.log(fareDouble(4)); -> 8
const fareTripler = createFareMultiplier(3);
//console.log(fareTripler(4)); -> 12

function selectDifferentDrivers(driverArray, fn) {
    return fn(driverArray);
}