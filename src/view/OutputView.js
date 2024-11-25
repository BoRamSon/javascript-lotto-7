import { MissionUtils } from '@woowacourse/mission-utils';
import OUTPUT_MESSAGES from '../constants/outputMessages.js';

const OutputView = {
  async printPurchaseNumber(purchasQuantity) {
    return MissionUtils.Console.print(`${purchasQuantity}${OUTPUT_MESSAGES.PURCHASE_NUMBER}`);
  },

  async printWinningStatistics(three, four, five, fiveAndBonus, six) {
    MissionUtils.Console.print(
      `${OUTPUT_MESSAGES.MATCHED_THREE}${three}${OUTPUT_MESSAGES.PRINT_QUANTITY}`
    );
    MissionUtils.Console.print(
      `${OUTPUT_MESSAGES.MATCHED_FOUR}${four}${OUTPUT_MESSAGES.PRINT_QUANTITY}`
    );
    MissionUtils.Console.print(
      `${OUTPUT_MESSAGES.MATCHED_FIVE}${five}${OUTPUT_MESSAGES.PRINT_QUANTITY}`
    );
    MissionUtils.Console.print(
      `${OUTPUT_MESSAGES.MATCHED_FIVE_BONUS}${fiveAndBonus}${OUTPUT_MESSAGES.PRINT_QUANTITY}`
    );
    MissionUtils.Console.print(
      `${OUTPUT_MESSAGES.MATCHED_SIX}${six}${OUTPUT_MESSAGES.PRINT_QUANTITY}`
    );
  },

  async printTotalReturn(percentage) {
    return MissionUtils.Console.print(
      `${OUTPUT_MESSAGES.TOTAL_RETURN}${percentage}${OUTPUT_MESSAGES.TOTAL_RETURN_PERCENTAGE}`
    );
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
