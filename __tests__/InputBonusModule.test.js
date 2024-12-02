import InputBonusModule from '../src/modules/InputBonusModule';

describe('로또 구입 금액 검증', () => {
  // given
  const bonusNumber = new InputBonusModule();

  // 실패하는 코드
  test('당첨번호에 있는 값이 보너스번호로 입력되면 ERROR가 발생한다.', () => {
    // when
    const testBonusNumber = '1';
    const winningNumber = [1, 2, 3, 4, 5, 6];

    // then
    expect(() => {
      bonusNumber.validateBonusNumber(testBonusNumber, winningNumber);
    }).toThrow('[ERROR]');
  });

  // 성공하는 코드
  test('당첨번호에 있는 값이 보너스번호로 입력될 수 없다.', () => {
    // when
    const testBonusNumber = '7';
    const winningNumber = [1, 2, 3, 4, 5, 6];

    // then
    expect(() => {
      bonusNumber.validateBonusNumber(testBonusNumber, winningNumber);
    }).toBeTruthy();
  });

  // (추가적인 테스트 코드)
  test('입력값이 빈값이면 ERROR가 발생한다.', () => {
    // when
    const testBonusNumber = '';

    // then
    expect(() => {
      bonusNumber.validateBonusNumber(testBonusNumber);
    }).toThrow('[ERROR]');
  });
});
