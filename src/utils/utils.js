const resEquation = (resA, resB, sizeA, sizeB) => {
  const det = resA-resB;
  const shift = (resA  * sizeB - resB * sizeA) / det;
  const factor = (sizeA - sizeB) / det;
  return({shift, factor});
}

export {resEquation};

// resA*x + y = sizeA
// resB*x + y = sizeB
// a1*x + b1*y = c1
// a2*x + b2*y = c2
// double det=a1*b2-a2*b1;
// double y=(a1*c2-a2*c1)/det;
// double x=(c1*b2-c2*b1)/det;
