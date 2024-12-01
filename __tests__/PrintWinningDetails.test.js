import OutputView from '../src/view/OutputView';
import PrintWinningDetails from '../src/modules/printWinningDetails';

jest.mock('../src/view/OutputView');

describe('당첨 내역 출력하기', () => {
  // given
  beforeEach(() => {
    OutputView.printWinningMessage.mockClear();
    OutputView.printWinningStatistics.mockClear();
    OutputView.printTotalReturn.mockClear();
  });

  const printWinningDsetails = new PrintWinningDetails();
  const mockLottoNumbers = [
    [1, 2, 3, 4, 5, 6],
    [7, 8, 9, 10, 11, 12],
    [13, 14, 15, 16, 17, 18],
  ];
  const mockWinningNumber = [13, 14, 15, 16, 17, 18];
  const mockBonusNumber = 12;

  test('당첨 내역 출력이 되었는가?', () => {
    // when
    printWinningDsetails.winningDetails(mockLottoNumbers, mockWinningNumber, mockBonusNumber);

    // then
    expect(OutputView.printWinningMessage).toHaveBeenCalledTimes(1);
    expect(OutputView.printWinningStatistics).toHaveBeenCalledTimes(1);
    expect(OutputView.printTotalReturn).toHaveBeenCalledTimes(1);
  });

  test('당첨번호 매칭이 잘 되었는가?', () => {
    // when
    const result = printWinningDsetails.checkMatchedNumber(
      mockLottoNumbers,
      mockWinningNumber,
      mockBonusNumber
    );

    // then
    expect(result).toEqual([
      { matchNum: 0, matchBonus: 0 },
      { matchNum: 0, matchBonus: 1 },
      { matchNum: 6, matchBonus: 0 },
    ]);
  });
});
