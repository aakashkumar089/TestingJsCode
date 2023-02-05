const prices = [10, 8, 7, 5, 3, 2.3];

const tax = 0.19;

const taxAdjustedPrices = [];

for (const price of prices) {
  taxAdjustedPrices.push(price * (1 + tax));
}

console.log(taxAdjustedPrices);

const newTaxAdjusted = [];
prices.forEach((price, idx, prices) => {
  priceObj = { inde: idx, taxAdjPrice: price * (1 + tax) };
  newTaxAdjusted.push(priceObj);
});

console.log(newTaxAdjusted);
///////////////////////////////////////////
const prices2 = [100, 20.99, 22.98, 40, 50, 60];

const taxValue = 0.2;

const taxAdjustedPrice = prices2.map((price, indexVal, prices) => {
  const priceObj = {
    index: indexVal,
    price: price * (1 * taxValue),
  };
  return priceObj;
});

console.log(prices2, taxAdjustedPrice);

/////////////Sorting Methods ///////////////

const prices4 = [10.99, 5.98, 30.99, 40.2, 50.65, 60.78];

const sortedPrices = prices4.sort((a, b) => {
  if (a > b) {
    return 1;
  } else if (a === b) {
    return 0;
  } else {
    return -1;
  }
});

console.log(sortedPrices);
/////////////Filter Method /////////////////

const filteredData = prices4.filter((price, index, prices) => {
  return price >= 10;
});

console.log("filteredData", filteredData);

/////////////Reduce Methods //////////////

const reduceData = prices4.reduce((prevValue, currValue, idx, originalArr) => {
  return prevValue + currValue;
}, 0);

console.log("reduceData", reduceData);

//////////Example 1 ////////////////

const originalArr = [{ price: 10.99 }, { price: 20.98 }, { price: 5.59 }];

const transformedArr = originalArr.map((obj) => {
  return obj.price; //[10.99, 20.98, 5.59]
});

console.log("transformedArr", transformedArr);

const addingTransformedArr = transformedArr.reduce(
  (prevValue, currValue, idx, originalArr) => {
    return prevValue + currValue;
  },
  0
);

console.log("addingTransformedArr", addingTransformedArr);
////////Sum it without using map function/ without converting it into array ////////////

const sumWithReduce = originalArr.reduce(
  (sumVal, currValue, idx, originalArr) => {
    return sumVal + currValue.price;
  },
  0
);

console.log("sumWithReduce", sumWithReduce);

///////////////We can do this with method chaining also//////////

const methodChaining = originalArr
  .map((obj) => obj.price)
  .reduce((sumVal, currValue, idx, originalArr) => sumVal + currValue, 0);

console.log("methodChaining", methodChaining);
