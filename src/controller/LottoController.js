import { MissionUtils } from '@woowacourse/mission-utils';
import OutputView from '../view/OutputView.js';
import InputPurchaseModule from '../modules/InputPurchaseModule.js';
import InputWinningModule from '../modules/InputWinningModule.js';
import InputBonusModule from '../modules/InputBonusModule.js';
import PrintWinningDetails from '../modules/printWinningDetails.js';

class LottoController {
  constructor() {
    this.inputPurchaseModule = new InputPurchaseModule();
    this.inputWinningModule = new InputWinningModule();
  }

  async runLotto() {
    // [module] [입력] 로또 구매 금액 입력 +validation
    const purchasPrice = await this.inputPurchaseModule.inputPurchaseAmount();
    const purchasQuantity = purchasPrice / 1000;
    // [출력] 발행한 로또 수량 및 번호를 출력한다. 로또 번호는 오름차순으로 정렬하여 보여준다.
    const lottoNumber = this.printRandomNumber(purchasQuantity);
    // [module] [입력] 당첨번호를 입력 받는다. 번호는 쉼표(,)를 기준으로 구분한다. + validation
    const winningNumber = await this.inputWinningModule.inputWinningNumber();
    // [module] [입력] 보너스 번호를 입력 받는다.
    const inputBonusModule = new InputBonusModule(winningNumber);
    const bonusNumber = await inputBonusModule.inputBonusNumber();
    // [module] [출력] 당첨 내역을 출력한다.
    // [module] [출력] 총 수익률을 출력한다.
    const printWinningDetails = new PrintWinningDetails(purchasPrice);
    printWinningDetails.winningDetails(lottoNumber, winningNumber, bonusNumber);
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
