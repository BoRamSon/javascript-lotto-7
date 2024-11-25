import { MissionUtils } from '@woowacourse/mission-utils';
import OUTPUT_MESSAGES from '../constants/outputMessages.js';

const OutputView = {
  async printPurchaseNumber(purchasQuantity) {
    return MissionUtils.Console.print(`${purchasQuantity}${OUTPUT_MESSAGES.PURCHASE_NUMBER}`);
  },

  async printWinningStatistics() {
    return MissionUtils.Console.print(OUTPUT_MESSAGES.WINNING_STATISTICS);
  },

  async printTotalReturn() {
    return MissionUtils.Console.print(OUTPUT_MESSAGES.TOTAL_RETURN);
  },

  async printLottoNumber(value) {
    return MissionUtils.Console.print(value);
  },

  async printError(error) {
    return MissionUtils.Console.print(error);
  },

  async printSpace() {
    return MissionUtils.Console.print('');
  },
};

export default OutputView;
