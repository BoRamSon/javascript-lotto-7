import { MissionUtils } from '@woowacourse/mission-utils';
import InputPurchaseModule from '../modules/InputPurchaseModule.js';
import OutputView from '../view/OutputView.js';

class LottoController {
  constructor() {
    this.inputPurchaseModule = new InputPurchaseModule();
  }
  async runLotto() {
    const purchasQuantity = await this.inputPurchaseModule.inputPurchaseAmount();
    const lottoNumber = this.printRandomNumber(purchasQuantity);
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
    return lottoNumberArrayss;
  }
}

export default LottoController;
