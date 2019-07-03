## React Study 
-------------

- React Project 에서 변경한 파일만 src에 업로드 

(순서)
1. App.js전체를 라우팅으로 사용할 것이기 때문에, App.js 컴포넌트 전부를 브라우저 라우터로 한번 감싸줌 
2. src 폴더에 router-wrapper.js파일을 생성 (깔끔한 코드를 쓰기 위해서 다른 파일을 하나 더 만들어 감싸줌)
3. router-wrapper.js 에서 App.js 감싸줌 
4. index.js (실제로 브라우저에 렌더링 되는 부분은 index.js에서 렌더해주고 있는 <App /> 컴포넌트)에서 <App />컴포넌트 부르는 부분을 router-warpper 컴포넌트로 변경
