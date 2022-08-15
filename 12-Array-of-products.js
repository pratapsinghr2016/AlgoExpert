function arrayOfProducts(array) {
  // Write your code here.
  let leftArr = new Array(array.length);
  let rightArr = new Array(array.length);
  let product = 1;
  let rProduct = 1;
  let result = [];

  for (let index = 0; index < array.length; index++) {
    leftArr[index] = 1;
    rightArr[index] = 1;
  }

  for (
    let index = 0, rindex = array.length - 1;
    index < array.length && rindex >= 0;
    index++, rindex--
  ) {
    // left array
    leftArr[index] = product;
    product = product * array[index];

    // right array
    rightArr[rindex] = rProduct;
    rProduct = rProduct * array[rindex];
  }

  for (let index = 0; index < array.length; index++) {
    array[index] = leftArr[index] * rightArr[index];
  }

  return array;
}

// Do not edit the line below.
exports.arrayOfProducts = arrayOfProducts;
