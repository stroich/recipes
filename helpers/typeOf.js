export const checkObjectDataTypes = (obj) => {
  if (typeof obj !== 'object' || obj === null) {
    throw new TypeError('Argument must be an object');
  }

  for (const key in obj) {
    if (typeof obj[key] === 'object') {
      if (Array.isArray(obj[key])) {
        console.log(`Property "${key}" is an array`);
      } else {
        console.log(`Property "${key}" is an object`);
      }
    } else {
      console.log(`Property "${key}" has data type "${typeof obj[key]}"`);
    }
  }
};
