import ERROR_MESSAGES from '../constants/errorMessages.js';
import validation from '../validation/validation.js';
import InputView from '../view/InputView.js';
import OutputView from '../view/OutputView.js';

class InputBonusModule {
  constructor() {
    this.validation = new validation();
  }

  async inputBonusNumber() {
    const validatedBonusNumber = await this.repeatInput();
    const changgeTypeNumber = Number(validatedPurchaseAmount);
    OutputView.printSpace();
    return changgeTypeNumber;
  }

  async inputAndValidation() {
    const input = await InputView.readBonusNumber();
    this.validateBonusNumber(input);
    return input;
  }

  validateBonusNumber(value) {
    this.validation.empty(value);
    const regExpPattern = /\d{1,2}/;
    this.validation.regularExpression(value, regExpPattern);
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
      if (i === 5) throw new Error(ERROR_MESSAGES.ENTERED_MORE_FIVE_TIMES);
    }
  }
}

export default InputBonusModule;