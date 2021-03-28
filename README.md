# Reaction Speed Test Game

### 목적
- 반응속도를 테스트할 수 있는 2개의 게임 구현
- 리액트를 공부하면서 배운 다양한 기능을 실습


### 미리보기
- Desktop size

![desktop](https://user-images.githubusercontent.com/71266602/107910787-6f6f1980-6f9e-11eb-9cb3-1e0741db2ac5.gif)

- Mobile size

![mobile](https://user-images.githubusercontent.com/71266602/107910794-7433cd80-6f9e-11eb-891c-a2a3d255c8d7.gif)

- [바로가기](https://harryproject03.netlify.app/#/)

### 상세내용

1. 반응속도를 테스트할 수 있는 두개의 게임과 설명서페이지를 제작
    - Lucky Seven : 슬롯머신을 7 7 7로 만드는 게임
    - Catch Mole : 랜덤한 위치에서 뜨는 두더지를 잡는 게임
2. 웹팩을 사용해서 모듈 번들링 진행
    - dist폴더 내 app.js로 모든 jsx 소스 번들링
    - babel-loader로 바벨 적용
3. 바벨을 사용해서 소스코드를 컴파일링
    - preset-env에서 브라우저 타겟을 한국 10%이상 점유율로 설정
    - preset-react로 리액트에 적용가능하도록 설정
4. 리액트의 최대한 많은 기능을 실습하기 위해서 다양한 방식을 사용함
    - Hooks로 대부분의 코드를 구성
    - Lucky Seven에서는 `useCallback`함수와 `useState`를 주로 사용
    - CatchMole에서는 `Reducer`와 `ContextAPI`를 주로 사용
5. HashRouter로 라우팅하여 4개의 페이지를 SPA(Single Page Application)으로 구현
    - 각 페이지의 새로고침상황의 대응을 용이하게 하기위해서 `HashRouter`사용
6. 각 게임은 동적 라우르 매칭으로 /game/ 파라미터에 할당
7. CSS의 미디어쿼리를 이용하여 반응형으로 구현
    - 태블릿, 데스크탑사이즈는 기본적으로 대응 가능
    - 658px 미만에서 깨지므로 `max-width:658px`에서부터 각 사이즈 변경
    - 크롬에서 최소 폰트 사이즈는 10px이므로 디자인유지를 위해서 링크버튼의 사이즈를 지정하고 텍스트는 일부만 보이도록 설정

### 상세내용 (Lcuky Seven)

1. 각 기호는 숫자와 대응하도록 객체로 만들어서 사용함
2. 자식컴포넌트(SlotMachine.jsx)로 슬롯머신의 한칸을 구성하도록함
    - halted, getCount, result를 `props`로 넘겨줌
3. `useEffect`로 halted가 false일 경우 `setInterval`을 이용하여 슬롯머신이 작동하도록 함.
    - Interval을 멈추거나 다시시작하는 클릭 함수를 제작함(onClickMachine)
    - 클릭 시 getCount 함수로 7인지의 여부와 다시시작의 여부를 전달함
4. getCount함수를 만들어서 각각의 자식컴포넌트에서 숫자7의 갯수와 재시작 횟수를 받아올 수 있도록 함
    - `useRef`에 각각의 카운트를 지정
    - sevenCount가 7이되면 result에 승리메시지를 담도록 함
5. 별도의 `useEffect`함수로 두번째 게임부터 새로 랜덤화된 슬롯머신에서 시작할 수 있도록 함.
6. 메인컴포넌트에 시작버튼에 초기화정보를 담은 `useCallback`함수 지정
7. result가 있을경우에만 성공 메세지를 담은 div태그가 보이도록함.

### 상세내용 (CatchMole)

1. 난이도에 따라 다른 표가 생성되도록함.
    - Easy : 2*2 , Normal : 3*3 , Hard : 5*5
    - Form컴포넌트에서 난이도를 조정하는 버튼을 만들고 `dispatch`로 level 데이터를 넘겨줌
2. 자식컴포넌트의 관리를 수월하게 하기 위해서 `ContextAPI`를 사용
    - CatchMole > Form
    - CatchMole > Table > Tr > Td
3. 메인컴포넌트에서 2차원 배열을 받아서 `map`메서드로 Td까지 연결
4. 리듀서로 대부분의 이벤트를 처리하도록 함
    - 대부분의 이벤트는 Td컴포넌트에 있음
    - `dispatch`로 type과 필요한 데이터를 넘겨주고, 각 type에 맞는 액션이 실행되도록 구성함
5. Td에서 각 칸의 경우에 따라 랜덤시간도 별도로 설정하여 dispatch
    - 빈 칸의 경우 2~12초 사이에 dispatch되어 두더지 칸으로 변경
    - 두더지 칸의 경우 0.3~1.3초 사이에 dispatch되어 빈 칸으로 변경
6. `useEffect`로 타이머를 제작
7. 성공조건이 달성되었을 경우에 타이머가 멈추고 result를 담은 div태그가 보이도록 함.

### 참고

- 바로 가기 : [https://harryproject03.netlify.app/](https://harryproject03.netlify.app/#/)
