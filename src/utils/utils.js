const resEquation = (resA, resB, sizeA, sizeB) => {
  const det = resB - resA;
  const shift = (resB * sizeA - resA * sizeB) / det;
  const factor = (sizeB - sizeA) / det;
  return { shift, factor };
};

module.exports = { resEquation };

// resA*x + y = sizeA
// resB*x + y = sizeB
// a1*x + b1*y = c1
// a2*x + b2*y = c2
// double det=a1*b2-a2*b1;
// double y=(a1*c2-a2*c1)/det;
// double x=(c1*b2-c2*b1)/det;
// a1*x + y = c1
// a2*x + y = c2
// double det=a1-a2;
// double y=(a1*c2-a2*c1)/det;
// double x=(c1-c2)/det;
