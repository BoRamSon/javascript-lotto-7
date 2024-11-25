import ERROR_MESSAGES from '../constants/errorMessages.js';

class validation {
  empty(value) {
    if (value === '') throw new Error(ERROR_MESSAGES.EMPTY_VALUE);
    return true;
  }

  regularExpression(value, regExp) {
    const regExpTest = regExp.test(value);
    if (!regExpTest) throw new Error(ERROR_MESSAGES.REGEXP_TEST);
    return true;
  }

  startedComma(value) {
    const regExp = /^,/;
    const regExpTest = regExp.test(value);
    if (regExpTest) throw new Error(ERROR_MESSAGES.START_COMMA);
    return true;
  }

  endedComma(value) {
    const regExp = /,$/;
    const regExpTest = regExp.test(value);
    if (regExpTest) throw new Error(ERROR_MESSAGES.END_COMMA);
    return true;
  }

  nagativeNumber(value) {
    const changeTypeNumber = Number(value);
    if (0 > changeTypeNumber) throw new Error(ERROR_MESSAGES.NAGATIVE_NUMBER);
    return true;
  }

  limitDigits(value) {
    const regExp = /\d{4,6}$/;
    const regExpTest = regExp.test(value);
    if (!regExpTest) throw new Error(ERROR_MESSAGES.LIMIT_DIGITS);
    return true;
  }

  thousandUnit(value) {
    const changeTypeNumber = Number(value);
    const target = changeTypeNumber / 1000;
    const isInteger = Number.isInteger(target);
    if (!isInteger) throw new Error(ERROR_MESSAGES.THOUSAND_UNIT);
    if (0 < target && target > 101) throw new Error(ERROR_MESSAGES.THOUSAND_UNIT);
    return true;
  }
}

export default validation;
