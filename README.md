## 집 소개 페이지 제작 (개인 과제)

### 배포 주소 : https://home-introduction.netlify.app/

### 설치 및 시작 방법

    npm install
    npm start

### 프로젝트 구조

src  
 ┣ components  
 ┃ ┣ ProductImage.js  
 ┃ ┣ Tooltip.js  
 ┃ ┗ TooltipInfo.js  
 ┣ hooks  
 ┃ ┗ useFetch.js  
 ┣ pages  
 ┃ ┗ contents  
 ┃ ┃ ┗ HomeIntroduction.js  
 ┣ styles  
 ┃ ┣ GlobalStyle.scss  
 ┃ ┣ HomeIntroduction.scss  
 ┃ ┣ ProductImage.scss  
 ┃ ┣ Tooltip.scss  
 ┃ ┗ TooltipInfo.scss  
 ┣ App.js  
 ┗ index.js

### 기능

- 필요한 사진과 가구에 대한 정보는 API를 통해 데이터를 받아서 사용하였다.
- 집 내부 이미지에서 각각의 가구의 위치에 맞게 돋보기 버튼이 이미지 위에 위치되어 있어야 한다.
- 돋보기 버튼을 클릭하면 가구의 정보에 대한 tooltip이 보여진다.
- tooltip이 하나 보여지고 있는 상태에서 다른 가구의 돋보기 버튼을 클릭하면 기존에 보여지고 있던 tooltip은 닫히고, 새로 클릭한 가구의 tooltip을 보여준다.
- 하단에는 상품 목록을 구현했으며, 하단의 가구가 클릭되어 선택되었으면 이미지에서 해당 가구의 tooltip을 보여주어야한다.
- 가구의 정보에서 할인율이 존재하는 경우에는 할인율도 표시해주어야한다. (입점된 가구는 할인율을 포함해서, 비입점 가구는 예상가를 표기)

### custom hook (useFetch)

    API fetch의 경우는 custom hook으로 따로 만들어 hook을 이용하여 데이터를 가져올 수 있도록 하였다.
