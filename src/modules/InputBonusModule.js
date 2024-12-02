import { ERROR_MESSAGES } from '../constants/errorMessages.js';
import validation from '../validation/validation.js';
import InputView from '../view/InputView.js';
import OutputView from '../view/OutputView.js';

class InputBonusModule {
  constructor(winningNumber) {
    this.validation = new validation();
    this.winningNumber = winningNumber;
  }

  async inputBonusNumber() {
    const validatedBonusNumber = await this.repeatInput();
    const changeTypeNumber = Number(validatedBonusNumber);
    OutputView.printSpace();
    return changeTypeNumber;
  }

  async inputAndValidation() {
    const input = await InputView.readBonusNumber();
    const winningNumber = this.winningNumber;
    this.validateBonusNumber(input, winningNumber);
    return input;
  }

  validateBonusNumber(value, winningNumber) {
    this.validation.empty(value);
    const regExpPattern = /\d{1,2}/;
    this.validation.regularExpression(value, regExpPattern);
    this.validation.isDuplicatedInWinningNumber(value, winningNumber);
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

export default InputBonusModule;
