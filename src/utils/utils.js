const resEquation = (resA, resB, sizeA, sizeB) => {
  const det = resB - resA;
  const shift = (resB * sizeA - resA * sizeB) / det;
  const factor = (sizeB - sizeA) / det;
  return { shift, factor };
};

export function handleResponse(res) {
  if (!res.ok) {
    return Promise.reject(`Ошибка ${res}`);
  } else {
    return res.json();
  }
}

module.exports = { resEquation };
