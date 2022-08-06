const numericConverter = (num10) => {
  const bin = num10.toString(2);
  const oct = num10.toString(8);
  const hex = num10.toString(16);

  return {
    binary: bin,
    octal: oct,
    hexa: hex,
  };
};

export default numericConverter;
