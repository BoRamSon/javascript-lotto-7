const ERROR_MESSAGES = {
  EMPTY_VALUE: '[ERROR] 값이 존재하지 않습니다. 다시 입력해주세요.',
  REGEXP_TEST: '[ERROR] 형식이 잘 못되었습니다. 다시 입력해주세요.',
  START_COMMA: '[ERROR] 입력이 콤마(,)부터 시작할 수 없습니다. 다시 입력해주세요.',
  END_COMMA: '[ERROR] 입력 끝에 콤마(,)로 끝날 수 없습니다. 다시 입력해주세요.',
  ENTERED_MORE_FIVE_TIMES: '[ERROR] 5회 이상 잘못 입력하여 종료되없습니다. 다시 실행해주세요.',
  LIMIT_DIGITS: '[ERROR] 최소 4자리 숫자부터 6자리 숫자까지 입력 가능합니다. 다시 입력해주세요.',
  THOUSAND_UNIT:
    '[ERROR] 로또 금액인 1000원 단위로만 입력 가능하며, 최대 10만원까지 입력 가능합니다. 다시 입력해주세요.',
  NAGATIVE_NUMBER: '[ERROR] 음수가 입력될 수 없습니다. 다시 입력해주세요.',
};

export default ERROR_MESSAGES;
