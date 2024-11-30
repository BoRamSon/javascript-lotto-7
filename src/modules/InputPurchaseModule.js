import { ERROR_MESSAGES } from '../constants/errorMessages.js';
import validation from '../validation/validation.js';
import InputView from '../view/InputView.js';
import OutputView from '../view/OutputView.js';

class InputPurchaseModule {
  constructor() {
    this.validation = new validation();
  }

  async inputPurchaseAmount() {
    const validatedPurchaseAmount = await this.repeatInput();
    const changgeTypeNumber = Number(validatedPurchaseAmount);
    OutputView.printSpace();
    return changgeTypeNumber;
  }

  async inputAndValidation() {
    const input = await InputView.readPurchaseAmount();
    this.validatatePrice(input);
    return input;
  }

  validatatePrice(value) {
    this.validation.empty(value);
    const regExpPattern = /\d/;
    this.validation.regularExpression(value, regExpPattern);
    this.validation.nagativeNumber(value);
    this.validation.limitDigits(value);
    this.validation.thousandUnit(value);
  }

  async errorCatch() {
    try {
      const validatedInput = await this.inputAndValidation();
      return validatedInput;
    } catch (error) {
      OutputView.printError(error);
      return false;
    }
  }

  async repeatInput() {
    for (let i = 0; i < 10; i++) {
      const vlaidatedInput = await this.errorCatch();
      if (vlaidatedInput) return vlaidatedInput;
      if (i === 5) throw new Error(ERROR_MESSAGES.enteredMoreFiveTimes);
    }
  }
}

export default InputPurchaseModule;
