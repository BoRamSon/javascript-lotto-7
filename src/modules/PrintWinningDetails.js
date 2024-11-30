import OutputView from '../view/OutputView.js';

class PrintWinningDetails {
  constructor(purchasePrice) {
    this.purchasePrice = purchasePrice;
  }

  winningDetails(lottoNumber, winningNumber, bonusNumber) {
    const commonNumbers = this.checkMatchedNumber(lottoNumber, winningNumber, bonusNumber);
    // console.log(commonNumbers);
    const winningStatistics = this.getWinningStatistics(commonNumbers);
    this.printWinningStatistics(winningStatistics);
    const winningAmount = this.getWinningAmount(winningStatistics);
    const purchasePrice = this.purchasePrice;
    this.printProfitRate(purchasePrice, winningAmount);
  }

  // service logic
  checkMatchedNumber(lottoNumber, winningNumber, bonusNumber) {
    let commonNumbers = [];
    lottoNumber.map((lottoArray) => {
      const matchedNumbers = lottoArray.filter((array) => winningNumber.includes(array)).length;
      const matchedBonus = lottoArray.filter((array) => [bonusNumber].includes(array)).length;
      const commonResult = { matchNum: matchedNumbers, matchBonus: matchedBonus };
      return (commonNumbers = [...commonNumbers, commonResult]);
    });
    return commonNumbers;
  }

  getWinningStatistics(commonNumbers) {
    const winningStatistics = [
      { matchThree: commonNumbers.filter((o) => o.matchNum === 3).length },
      { matchFour: commonNumbers.filter((o) => o.matchNum === 4).length },
      { matchFive: commonNumbers.filter((o) => o.matchNum === 5 && o.matchBonus === 0).length },
      { matchFiveAndBonus: commonNumbers.filter((o) => o.matchNum === 5 && o.matchBonus === 1).length },
      { matchSix: commonNumbers.filter((o) => o.matchNum === 6).length },
    ];
    return winningStatistics;
  }

  printWinningStatistics(winningStatistics) {
    OutputView.printWinningMessage();
    OutputView.printWinningStatistics(
      winningStatistics[0].matchThree,
      winningStatistics[1].matchFour,
      winningStatistics[2].matchFive,
      winningStatistics[3].matchFiveAndBonus,
      winningStatistics[4].matchSix
    );
  }

  getWinningAmount(winningStatistics) {
    const calculThree = winningStatistics[0].matchThree * 5000;
    const calculFour = winningStatistics[1].matchFour * 50000;
    const calculFive = winningStatistics[2].matchFive * 1500000;
    const calculFiveAndBonus = winningStatistics[3].matchFiveAndBonus * 30000000;
    const calculSix = winningStatistics[4].matchSix * 2000000000;
    const sum = calculThree + calculFour + calculFive + calculFiveAndBonus + calculSix;
    return sum;
  }

  printProfitRate(purchasePrice, getWinningAmount) {
    const profitRateCalcul = (((getWinningAmount - purchasePrice) / purchasePrice) * 100).toFixed(2);
    OutputView.printTotalReturn(profitRateCalcul);
  }
}

export default PrintWinningDetails;

//=====================================
// test

// const lottoNumber = [
//   [2, 10, 20, 29, 43, 44],
//   [(7, 15, 16, 20, 28, 40)],
//   [(25, 31, 34, 35, 40, 44)],
//   [(1, 2, 10, 24, 25, 26)],
//   [(2, 4, 11, 27, 32, 37)],
// ];

// const winningNumber = [20, 29, 40, 25, 2, 4];

// const bonusNumber = 2;

// const test = new PrintWinningDetails();
// test.winningDetails(lottoNumber, winningNumber, bonusNumber);

// const commonNumbers = [
//   { matchNum: 3, matchBonus: 1 },
//   { matchNum: 1, matchBonus: 0 },
//   { matchNum: 0, matchBonus: 0 },
//   { matchNum: 0, matchBonus: 0 },
//   { matchNum: 0, matchBonus: 0 },
// ];

// const