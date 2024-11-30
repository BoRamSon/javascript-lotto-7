import { ERROR_MESSAGES } from './constants/errorMessages.js';
import createThrowError from './utils/createError.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.isDuplicatedInLottoNumbers(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }
  }

  // TODO: 추가 기능 구현
  // test코드를 확인해보니, 중복 값을 검증하는 코드가 필요합니다.
  isDuplicatedInLottoNumbers(number) {
    const removeDuplicated = new Set(number); // 🔥 출력이 배열로 나오지 않습니다.
    // 🔥 Set은 배열과 다른 특별한 객체 타입입니다.
    // 배열로 변환하려면 간단히 스프레드 연산자(...)나 Array.from()을 사용하면 됩니다.
    const uniqueArray = [...removeDuplicated]; // 배열로 변환
    if (number.length !== uniqueArray.length)
      createThrowError(ERROR_MESSAGES.isDuplicatedInLottoNumbers);
  }
}

export default Lotto;
