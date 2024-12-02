import InputPurchaseModule from '../modules/InputPurchaseModule.js';
import InputWinningModule from '../modules/InputWinningModule.js';
import InputBonusModule from '../modules/InputBonusModule.js';
import PrintWinningDetails from '../modules/printWinningDetails.js';
import PrintRandomNumber from '../modules/PrintRandomNumber.js';

class LottoController {
  constructor() {
    this.inputPurchaseModule = new InputPurchaseModule();
    this.inputWinningModule = new InputWinningModule();
    this.printRandomNumber = new PrintRandomNumber();
  }

  async runLotto() {
    const purchasPrice = await this.inputPurchaseModule.inputPurchaseAmount();
    const purchasQuantity = purchasPrice / 1000;
    const lottoNumber = this.printRandomNumber.printRandomNumber(purchasQuantity);
    const winningNumber = await this.inputWinningModule.inputWinningNumber();
    const inputBonusModule = new InputBonusModule(winningNumber);
    const bonusNumber = await inputBonusModule.inputBonusNumber();
    const printWinningDetails = new PrintWinningDetails(purchasPrice);
    printWinningDetails.winningDetails(lottoNumber, winningNumber, bonusNumber);
  }
}

export default LottoController;
