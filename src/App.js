import LottoController from './controller/LottoController.js';

class App {
  async run() {
    await new LottoController().runLotto();
  }
}

export default App;
