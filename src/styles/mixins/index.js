const { resEquation } = require('../../utils/utils');

const mixins = {
  responsiveValue(mixin, param, resA, resB, sizeA, sizeB) {
    const resANum = resA * 1;
    const resBNum = resB * 1;
    const { shift, factor } = resEquation(resA, resB, sizeA, sizeB);
    return {
      [`${param}`]: `calc(${shift}px + 100vw * ${factor})`,
    };
  },
};
module.exports = mixins;
