import { MissionUtils } from '@woowacourse/mission-utils';
import OUTPUT_MESSAGES from '../constants/outputMessages.js';

const OutputView = {
  async printPurchaseNumber(purchasQuantity) {
    MissionUtils.Console.print(`${purchasQuantity}${OUTPUT_MESSAGES.purchaseNumber}`);
  },

  async printWinningMessage() {
    MissionUtils.Console.print(OUTPUT_MESSAGES.winningStatistics);
  },

  async printWinningStatistics(three, four, five, fiveAndBonus, six) {
    MissionUtils.Console.print(`${OUTPUT_MESSAGES.matchedThree}${three}${OUTPUT_MESSAGES.printQuantity}`);
    MissionUtils.Console.print(`${OUTPUT_MESSAGES.matchedFour}${four}${OUTPUT_MESSAGES.printQuantity}`);
    MissionUtils.Console.print(`${OUTPUT_MESSAGES.matchedFive}${five}${OUTPUT_MESSAGES.printQuantity}`);
    MissionUtils.Console.print(`${OUTPUT_MESSAGES.matchedFiveBonus}${fiveAndBonus}${OUTPUT_MESSAGES.printQuantity}`);
    MissionUtils.Console.print(`${OUTPUT_MESSAGES.matchedSix}${six}${OUTPUT_MESSAGES.printQuantity}`);
  },

  async printTotalReturn(percentage) {
    MissionUtils.Console.print(`${OUTPUT_MESSAGES.totalReturn}${percentage}${OUTPUT_MESSAGES.totalReturnPercentage}`);
  },

  async printLottoNumber(value) {
    MissionUtils.Console.print(value);
  },

  async printError(error) {
    MissionUtils.Console.print(error);
  },

  async printSpace() {
    MissionUtils.Console.print('');
  },
};

export default OutputView;
