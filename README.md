# javascript-lotto-precourse

&nbsp;

&nbsp; 
# ✅ 구현할 기능 목록

&nbsp; 
## 1. 구입금액 입력값 받기 


    [입력]  
    구입금액을 입력해 주세요.
    8000


&nbsp;

&nbsp;
## 2. 입력된 구입금액에 대한 validate


&nbsp;

&nbsp;
## 3. 입력한 구입금액이 문제가 없다면, 
구입금액에 따라 랜덤숫자 6자리 출력해주기
(1개당 1,000원 계산)

<조건>
- 로또 번호의 숫자 범위는 1~45까지이다.  

- 1개의 로또를 발행할 때 중복되지 않는 6개의 숫자를 뽑는다.  

(만약에 8천원이라면)

    [출력]  
    8개를 구매했습니다.
    [8, 21, 23, 41, 42, 43]  
    [3, 5, 11, 16, 32, 38]  
    [7, 11, 16, 35, 36, 44]  
    [1, 8, 11, 31, 41, 42]  
    [13, 14, 16, 38, 42, 45]  
    [7, 11, 30, 40, 42, 43]  
    [2, 13, 22, 32, 38, 45]  
    [1, 3, 5, 14, 22, 45]  


&nbsp;

&nbsp;
## 4. 당첨 번호 추첨 시 중복되지 않는 숫자 6개와 

    [입력]  
    당첨 번호를 입력해 주세요.  
    1,2,3,4,5,6  


&nbsp;

&nbsp;
## 5. 보너스 번호 1개를 뽑는다.  

    [입력]  
    보너스 번호를 입력해 주세요.  
    7


&nbsp;

&nbsp;
## 6. 당첨은 1등부터 5등까지 있다. 당첨 기준과 금액은 아래와 같다.

1등: 6개 번호 일치 / 2,000,000,000원  
2등: 5개 번호 + 보너스 번호 일치 / 30,000,000원  
3등: 5개 번호 일치 / 1,500,000원  
4등: 4개 번호 일치 / 50,000원  
5등: 3개 번호 일치 / 5,000원  


    [출력]  
    당첨 통계
    ---
    3개 일치 (5,000원) - 1개
    4개 일치 (50,000원) - 0개
    5개 일치 (1,500,000원) - 0개
    5개 일치, 보너스 볼 일치 (30,000,000원) - 0개
    6개 일치 (2,000,000,000원) - 0개
    총 수익률은 62.5%입니다.
