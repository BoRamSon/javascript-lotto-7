import { MissionUtils } from '@woowacourse/mission-utils';
import PrintRandomNumber from '../src/modules/PrintRandomNumber';
import OutputView from '../src/view/OutputView';

jest.mock('../src/view/OutputView');
jest.mock('@woowacourse/mission-utils', () => ({
  MissionUtils: {
    Random: {
      pickUniqueNumbersInRange: jest.fn(),
    },
  },
}));

describe('PrintRandomNumber', () => {
  // given
  beforeEach(() => {
    OutputView.printPurchaseNumber.mockClear();
    OutputView.printLottoNumber.mockClear();
    OutputView.printSpace.mockClear();
    MissionUtils.Random.pickUniqueNumbersInRange.mockClear();
  });

  const printRandomNumber = new PrintRandomNumber();
  const mockPurchaseQuantity = 3;
  const mockLottoNumbers = [
    [1, 2, 3, 4, 5, 6],
    [7, 8, 9, 10, 11, 12],
    [13, 14, 15, 16, 17, 18],
  ];

  test('로또 번호 생성 및 출력 검증', () => {
    // when
    MissionUtils.Random.pickUniqueNumbersInRange
      .mockReturnValueOnce(mockLottoNumbers[0])
      .mockReturnValueOnce(mockLottoNumbers[1])
      .mockReturnValueOnce(mockLottoNumbers[2]);

    // then
    expect(printRandomNumber.printRandomNumber(mockPurchaseQuantity)).toEqual([
      [1, 2, 3, 4, 5, 6],
      [7, 8, 9, 10, 11, 12],
      [13, 14, 15, 16, 17, 18],
    ]);

    expect(OutputView.printPurchaseNumber).toHaveBeenCalledWith(mockPurchaseQuantity);
    expect(OutputView.printLottoNumber).toHaveBeenCalledTimes(mockPurchaseQuantity);
    expect(OutputView.printSpace).toHaveBeenCalledTimes(1);

    expect(MissionUtils.Random.pickUniqueNumbersInRange).toHaveBeenCalledTimes(
      mockPurchaseQuantity
    );
    expect(MissionUtils.Random.pickUniqueNumbersInRange).toHaveBeenCalledWith(1, 45, 6);
  });
});
