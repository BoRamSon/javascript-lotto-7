import InputWinningModule from '../src/modules/InputWinningModule';

describe('로또 구입 금액 검증', () => {
  // given
  const winningNumber = new InputWinningModule();

  // 실패하는 코드
  test('당첨번호는 6자리를 입력해야한다.', () => {
    // when
    const testInput = '1,2,3,4,5,6,7';

    // then
    expect(() => {
      winningNumber.validateWinningNumber(testInput);
    }).toThrow('[ERROR]');
  });

  // 성공하는 코드
  test('당첨번호는 6자리를 입력해야한다.', () => {
    // when
    const testInput = '1,2,3,4,5,6';

    // then
    expect(() => {
      winningNumber.validateWinningNumber(testInput);
    }).toBeTruthy();
  });

  // 실패하는 코드
  test('6자리 중 중복값은 없어야 한다.', () => {
    // when
    const testInput = '1,2,3,4,5,5';

    // then
    expect(() => {
      winningNumber.validateWinningNumber(testInput);
    }).toThrow('[ERROR]');
  });

  // 성공하는 코드
  test('6자리 중 중복값은 없어야 한다.', () => {
    // when
    const testInput = '1,2,3,4,5,6';

    // then
    expect(() => {
      winningNumber.validateWinningNumber(testInput);
    }).toBeTruthy();
  });

  // (추가적인 테스트 코드)
  test('입력값이 빈값이면 ERROR가 발생한다.', () => {
    // when
    const testInput = '';

    // then
    expect(() => {
      winningNumber.validateWinningNumber(testInput);
    }).toThrow('[ERROR]');
  });
});
