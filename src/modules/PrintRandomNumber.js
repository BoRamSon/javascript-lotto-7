import { MissionUtils } from '@woowacourse/mission-utils';
import OutputView from '../view/OutputView.js';

class PrintRandomNumber {
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

export default PrintRandomNumber;
