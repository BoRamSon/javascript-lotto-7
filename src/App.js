import LottoController from './controller/LottoController.js';

class App {
  constructor() {
    this.lottoController = new LottoController();
  }
  async run() {
    this.lottoController.runLotto();
  }
}

export default App;
