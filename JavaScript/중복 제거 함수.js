let unique = (array) => {
  // * for loop
  let result = [];
  for (let i = 0; i < array.length; i++) {
    if (!result.includes(array[i])) {
      result.push(array[i]);
    }
  }
  return result;
  
  // * forEach
  // let result = [];
  // array.forEach((item) => {
  //   if (!result.includes(item)) {
  //     result.push(item);
  //   }
  // });
  // return result;

  // * filter
  // return array.filter((item, index) => {
  //   return array.indexOf(item) === index;
  // });

  // * Set
  return Array.from(new Set(array));
  // return [...new Set(array)];
}