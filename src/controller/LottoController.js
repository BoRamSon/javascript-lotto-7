import InputPurchaseModule from '../modules/InputPurchaseModule.js';

class LottoController {
  constructor() {
    this.inputPurchaseModule = new InputPurchaseModule();
  }
  async runLotto() {
    const input = await this.inputPurchaseModule.inputPurchaseAmount();
  }
}

export default LottoController;
