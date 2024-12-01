import InputPurchaseModule from '../src/modules/InputPurchaseModule';

describe('로또 구입 금액 검증', () => {
  // given
  const purchaseAmount = new InputPurchaseModule();

  // 실패하는 코드
  test('1,000원으로 나누어 떨어지지 않으면 에러', () => {
    // when
    const testInput = '1500';

    // then
    expect(() => {
      purchaseAmount.validatatePrice(testInput);
    }).toThrow('[ERROR]');
  });

  // 성공하는 코드
  test('1,000원 단위로 입력 가능해야 한다', () => {
    // when
    const testInput = '10000';

    // then
    expect(() => {
      purchaseAmount.validatatePrice(testInput);
    }).toBeTruthy();
  });

  // (추가적인 테스트 코드)
  test('입력값이 빈값이면 ERROR가 발생한다.', () => {
    // when
    const testInput = '';

    // then
    expect(() => {
      purchaseAmount.validatatePrice(testInput);
    }).toThrow('[ERROR]');
  });
});
