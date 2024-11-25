import ERROR_MESSAGES from '../constants/errorMessages.js';
import validation from '../validation/validation.js';
import InputView from '../view/InputView.js';
import OutputView from '../view/OutputView.js';

class InputWinningModule {
  constructor() {
    this.validation = new validation();
  }
  async inputWinningNumber() {
    const validatedLottoNumber = await this.repeatInput();
    const changgeTypeArray = validatedLottoNumber.split(',').map((string) => Number(string));
    OutputView.printSpace();
    return changgeTypeArray;
  }

  async inputAndValidation() {
    const input = await InputView.readWinningNumber();
    this.validateWinningNumber(input);
    return input;
  }

  validateWinningNumber(value) {
    this.validation.empty(value);
    this.validation.startedComma(value);
    this.validation.endedComma(value);
    const regExpPattern = /^\d(,\s?\d)*/;
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

export default InputWinningModule;
