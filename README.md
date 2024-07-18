# Portfolio ver2.0

![main](https://github.com/user-attachments/assets/9d38a105-a07b-4b67-bef1-5c6b30ca670c)


<br>

## 👉 웹사이트 

>  [https://portfolio-ver2-sohee.vercel.app/]([https://ca-nya.com/](https://portfolio-ver2-sohee.vercel.app/))

<br>

## 🍀 서비스 아키텍쳐
![service](https://github.com/user-attachments/assets/8df40606-78de-4e4e-9a66-d9cfcd61ec74)


<br>

## 🍬 프로젝트 실행

```js
$ npm run dev
```
<br>

## 👉🏻 프로젝트 소개

>  react vite, gasp scrollTrigger를 활용하여 패럴렉스 스크롤 이벤트를 적용한<br>
>  포트폴리오 웹사이트 <br>
<br>

## 📅 프로젝트 기간

기간 : 2024년 07월 16일 ~ 2024년 07월 18일

<br>

## 🚀 트러블 슈팅

<details>
 <summary>cra로 react 개발환경 설정 vite로 마이그레이션</summary>
 <div markdown="1">       

  <br>
  
cra로 react 개발 진행, 초기 세팅 할 때 라이브러리 설치 후 .barbelrc 설정을 일일이 진행해야하는 불편함을 겪음
vite 설치 후 마이그레이션 진행
cra로 emotion진행 시 보일러플레이트 내역 제거 
 
 </div>
 </details>
 <details>
 <summary>gsap 핀 고정이벤트</summary>
 <div markdown="1">       

  <br>
  
gsap의 ScrollTrigger로 기능 구현 중 페이지가 전체화면에 고정되는 이벤트 구현 시 
부모컴포넌트에서 바로 맵으로 기능구현 하였으나 이벤트가 적용되지않아 라우팅설정하여 페이지의 마지막 부분에서
scrollTrigger에 옵션에서 함수적용하도록 하는 onLeave추가하여 자동으로 페이지 이동하도록 처리, 
이렇게되면 화면이 자연스럽게 구현되지만 페이지를 이동하는 것이므로 위 로 스크롤 시 페이지를 이동하게 되어야해서
버그로 보일 수 있다고 판단되었다.
그래서 컴포넌트를 따로 만들어서 import하여 처리 진행
 
 </div>
 </details>
