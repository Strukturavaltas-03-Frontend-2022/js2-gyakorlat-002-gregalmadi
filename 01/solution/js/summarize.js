const summerize = (...numbers) => {
  const intArray = [...numbers].filter((number) => Number.isInteger(number));
  let fixedArray;

  if (intArray.some((number) => number > Number.MAX_SAFE_INTEGER) === true) {
    fixedArray = intArray.map((number) => BigInt(number));
  } else {
    fixedArray = intArray.map((number) => Number(number));
  }

  return fixedArray.reduce((acc, cur) => (acc += cur));
};

export default summerize;
