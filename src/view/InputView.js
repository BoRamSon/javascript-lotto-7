import { MissionUtils } from '@woowacourse/mission-utils';
import INPUT_MESSAGES from '../constants/inputMessages.js';

const InputView = {
  async readPurchaseAmount() {
    return await MissionUtils.Console.readLineAsync(INPUT_MESSAGES.WHAT_PURCHASE_AMOUNT);
  },

  async readWinningNumber() {
    return await MissionUtils.Console.readLineAsync(INPUT_MESSAGES.WINNING_NUMBER);
  },

  async readBonusNumber() {
    return await MissionUtils.Console.readLineAsync(INPUT_MESSAGES.BONUS_NUMBER);
  },
};

export default InputView;
