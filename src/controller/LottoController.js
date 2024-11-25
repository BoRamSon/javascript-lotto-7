import { MissionUtils } from '@woowacourse/mission-utils';
import OutputView from '../view/OutputView.js';
import InputPurchaseModule from '../modules/InputPurchaseModule.js';
import InputWinningModule from '../modules/InputWinningModule.js';
import InputBonusModule from '../modules/InputBonusModule.js';

class LottoController {
  constructor() {
    this.inputPurchaseModule = new InputPurchaseModule();
    this.inputWinningModule = new InputWinningModule();
    this.inputBonusModule = new InputBonusModule();
  }

  async runLotto() {
    const purchasQuantity = await this.inputPurchaseModule.inputPurchaseAmount();
    const lottoNumber = this.printRandomNumber(purchasQuantity);
    const winningNumber = await this.inputWinningModule.inputWinningNumber();
    const bonusNumber = await this.inputBonusModule.inputBonusNumber();
    console.log(bonusNumber);
  }

  printRandomNumber(purchasQuantity) {
    OutputView.printPurchaseNumber(purchasQuantity);
    let lottoNumberArrayss = [];
    for (let i = 0; i < purchasQuantity; i++) {
      const lottoNumber = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
      const ascendingOrder = lottoNumber.sort((a, b) => a - b);
      OutputView.printLottoNumber(ascendingOrder);
      lottoNumberArrayss = [...lottoNumberArrayss, ascendingOrder];
    }
    OutputView.printSpace();
    return lottoNumberArrayss;
  }
}

export default LottoController;
