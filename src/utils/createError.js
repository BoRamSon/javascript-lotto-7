import { MissionUtils } from '@woowacourse/mission-utils';
import { ERROR_PREFIX } from '../constants/errorMessages.js';

const createThrowError = (message) => {
  MissionUtils.Console.print(ERROR_PREFIX);
  throw new Error(message);
};

export default createThrowError;
