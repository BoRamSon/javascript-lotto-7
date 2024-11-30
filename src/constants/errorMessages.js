const ERROR_PREFIX = '[ERROR]';

const createMsg = (msg) => `${ERROR_PREFIX} ${msg} ${'다시 입력해주세요.'}\n`;

const ERROR_MESSAGES = {
  emptyValue: createMsg('값이 존재하지 않습니다.'),
  regexpTest: createMsg('형식이 잘 못되었습니다.'),
  startComma: createMsg('입력이 콤마(,)부터 시작할 수 없습니다.'),
  endComma: createMsg('입력 끝에 콤마(,)로 끝날 수 없습니다.'),
  enteredMoreFiveTimes: '5회 이상 잘못 입력하여 종료되없습니다. 다시 실행해주세요.',
  limitDigits: createMsg('최소 4자리 숫자부터 6자리 숫자까지 입력 가능합니다.'),
  negativeNumber: createMsg('음수가 입력될 수 없습니다.'),
  thousandUnit: createMsg(
    '로또 금액인 1000원 단위로만 입력 가능하며, 최대 10만원까지 입력 가능합니다.'
  ),
};

export { ERROR_PREFIX, ERROR_MESSAGES };
