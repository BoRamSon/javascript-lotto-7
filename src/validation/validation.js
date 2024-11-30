import { ERROR_MESSAGES } from '../constants/errorMessages.js';
import createThrowError from '../utils/createError.js';

class validation {
  empty(value) {
    if (value === '') createThrowError(ERROR_MESSAGES.emptyValue);
    return true;
  }

  regularExpression(value, regExp) {
    const regExpTest = regExp.test(value);
    if (!regExpTest) createThrowError(ERROR_MESSAGES.regexpTest);
    return true;
  }

  startedComma(value) {
    const regExp = /^,/;
    const regExpTest = regExp.test(value);
    if (regExpTest) createThrowError(ERROR_MESSAGES.startComma);
    return true;
  }

  endedComma(value) {
    const regExp = /,$/;
    const regExpTest = regExp.test(value);
    if (regExpTest) createThrowError(ERROR_MESSAGES.endComma);
    return true;
  }

  nagativeNumber(value) {
    const changeTypeNumber = Number(value);
    if (0 > changeTypeNumber) createThrowError(ERROR_MESSAGES.negativeNumber);
    return true;
  }

  limitDigits(value) {
    const regExp = /\d{4,6}$/;
    const regExpTest = regExp.test(value);
    if (!regExpTest) createThrowError(ERROR_MESSAGES.limitDigits);
    return true;
  }

  thousandUnit(value) {
    const changeTypeNumber = Number(value);
    const target = changeTypeNumber / 1000;
    const isInteger = Number.isInteger(target);
    if (!isInteger) createThrowError(ERROR_MESSAGES.thousandUnit);
    if (0 < target && target > 101) createThrowError(ERROR_MESSAGES.THOUSAND_UNIT);
    return true;
  }
}

export default validation;
