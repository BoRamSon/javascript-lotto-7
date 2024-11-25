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
      OutputView.printLottoNumber(lottoNumber);
      lottoNumberArrayss = [...lottoNumberArrayss, lottoNumber];
    }
    return lottoNumberArrayss;
  }
}

export default LottoController;
