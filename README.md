# Portfolio ver2.0

![image](https://private-user-images.githubusercontent.com/113952299/349849279-c3fd3939-1c8b-4475-9087-6157dd590091.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MjEyODY2MDMsIm5iZiI6MTcyMTI4NjMwMywicGF0aCI6Ii8xMTM5NTIyOTkvMzQ5ODQ5Mjc5LWMzZmQzOTM5LTFjOGItNDQ3NS05MDg3LTYxNTdkZDU5MDA5MS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwNzE4JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDcxOFQwNzA1MDNaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0xZDg5YTgwZDRjZmY2YjZjMTJiZWU5YmNjNmE5MjBiYTYwYWE5N2FhYjFhYzY2MGRhNWI4YjlkOTMyZjYyODdkJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.9ubPValwIDmuS1hoGoai5LfZHh1rEg1DU9HnUHs-8o4)

<br>

## 👉 웹사이트 

>  [https://portfolio-ver2-sohee.vercel.app/]([https://ca-nya.com/](https://portfolio-ver2-sohee.vercel.app/))

<br>

## 🍀 서비스 아키텍쳐
![image](https://private-user-images.githubusercontent.com/113952299/349861574-61d817ab-d41e-43fc-974d-060993fa3451.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MjEyODg4NDQsIm5iZiI6MTcyMTI4ODU0NCwicGF0aCI6Ii8xMTM5NTIyOTkvMzQ5ODYxNTc0LTYxZDgxN2FiLWQ0MWUtNDNmYy05NzRkLTA2MDk5M2ZhMzQ1MS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwNzE4JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDcxOFQwNzQyMjRaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1hNjUzNzRhMTMwMGQwODI1NDhjNzlmMjRkMTYwMTJjMDM4YzZlMTdhYjU1ZTJiNDFiMTM3MTg5NzFkMjY3ODllJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.8ez_fBHTGwCpYhSaxhQtGc47-OSJ2UgwNEHl8THIzKg)

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
