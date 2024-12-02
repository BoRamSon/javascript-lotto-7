import { MissionUtils } from '@woowacourse/mission-utils';
import INPUT_MESSAGES from '../constants/inputMessages.js';

const InputView = {
  async readPurchaseAmount() {
    return await MissionUtils.Console.readLineAsync(INPUT_MESSAGES.whatPurchaseAmount);
  },

  async readWinningNumber() {
    return await MissionUtils.Console.readLineAsync(INPUT_MESSAGES.winningNumber);
  },

  async readBonusNumber() {
    return await MissionUtils.Console.readLineAsync(INPUT_MESSAGES.bonusNumber);
  },
};

export default InputView;
