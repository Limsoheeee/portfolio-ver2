import missgo from "../assets/Image/missgo.png";
import criminalIP from "../assets/Image/criminalIp.png";
import wetoyou from "../assets/Image/wetoyou.png";
import wetoyouPartner from "../assets/Image/wetoyouPartners.png";
import weconec from "../assets/Image/weconec.png";

export const historyData = [
  {
    no: 0,
    imgSrc: missgo,
    title: "Missgo - PC.ver",
    type: "web",
    link: "https://www.missgorealty.com/?main=home&screen=wide",
    skill: [
      {
        no: 1,
        title: "자사 사이트 진입 시 가이드 튜토리얼 기능 개발",
        desc: "recoil persist를 활용하여 \n 튜토리얼 단계를 카운팅하여 \n localStorage에 완료여부 저장하여 기능구현 ",
      },
      {
        no: 2,
        title: "홈 와이드 기능 개발",
        desc: "nextJs router push와 param을  \n 활용하여 와이드 버튼 클릭 시  \n param push하여 와이드 기능구현",
      },
      {
        no: 3,
        title: "react-query와 전역관리를 활용한  공매 상세 필터 기능 개발",
        desc: "recoil을 활용해 다중필터 정보를 \n 저장하여 공통으로 필터 검색\n 하고 react-query로 데이터 통신되도록 기능구현",
      },
    ],
  },
  {
    no: 1,
    imgSrc: missgo,
    title: "Missgo - WEBAPP",
    type: "app",
    link: "https://apps.apple.com/kr/app/%EB%AF%B8%EC%8A%A4%EA%B3%A0%EB%B6%80%EB%8F%99%EC%82%B0-%EB%B2%95%EC%9B%90%EA%B2%BD%EB%A7%A4-%EC%A0%95%EB%B3%B4-%EB%B6%80%EB%8F%99%EC%82%B0%EA%B2%BD%EB%A7%A4-%EC%A7%80%EB%8F%84/id1637542873",
    skill: [
      {
        no: 1,
        title: "예정매물 마커 해당 pnu에 노출되도록 기능 개발",
        desc: "naver데이터맵을 활용하여 \n 웹뷰에서 해당 pnu정보로  \n 마커를 노출되도록 기능구현",
      },
      {
        no: 2,
        title: "국공유지 폴리곤 필터 기능 개발",
        desc: " 구매지역 분기처리하여 \n 국공유지 필터 설정 및 폴리곤 노출 \n 비 구매지역 딤처리 예외처리 기능구현",
      },
      {
        no: 3,
        title:
          "부동산 매물 관련 고(go)스톱(stop) 정보제공 유료 페이지 기능 개발",
        desc: "recoil을 활용해 \n 유료 회원 분기처리 및 필터를 생성하여 \n 고(go)스톱(stop) 정보제공페이지 개발 ",
      },
    ],
  },
  {
    no: 2,
    imgSrc: missgo,
    title: "Missgo - Landing",
    type: "web",
    link: "https://landing.missgorealty.com/",
    skill: [
      {
        no: 1,
        title: "인터랙티브 ui 적용",
        desc: "scss와 observer를 활용해 \n 인터랙티브 ui 페이지 구현",
      },
      {
        no: 2,
        title: "그 외 전면 리뉴얼 작업",
        desc: "메뉴바 반응형 개선 \n 비디오태그 미디어 쿼리를 활요해 반응형 구현 등",
      },
    ],
  },
  {
    no: 3,
    imgSrc: criminalIP,
    title: "criminalIP - WEB",
    type: "web",
    link: "https://www.criminalip.io/",
    skill: [
      {
        no: 1,
        title: "OSINT 기업페이지 기능 개발",
        desc: "next.js의 query router를 \n 활용한 검색어, 셀렉트박스 복합 \n  검색기능 개발",
      },
      {
        no: 2,
        title:
          "express로 프록시 서버의 s3버킷을 프론트에서 접근해 저장로직 구현",
        desc: " 서버호출 최소화 , \n 미들웨어 관리로 접근 권한 설정 \n (유료사용자 접근 권한 미들웨어 설정)",
      },
      {
        no: 3,
        title: " 그래프 기능 구현",
        desc: "사용자의 데이터내역을 \n chart.js를 활용하여 \n 그래프 기능 구현",
      },
    ],
  },
  {
    no: 4,
    imgSrc: weconec,
    title: "WECONEC - WEB",
    type: "web",
    link: "https://weconec.co.kr/",
    skill: [
      {
        no: 1,
        title: "공통 컴포넌트 설정 및 초기설정",
        desc: " 랜딩페이지 Next.Js14, emotion , Mui로 \n 초기설정 진행 \n topButton, Header, Footer 등 공통 컴포넌트 개발 및 설정",
      },
      {
        no: 2,
        title: "keyframe을 활용한 애니메이션 적용",
        desc: "메이페이지의 인터렉티브 ui \n keyframe으로  \n 애니메이션 개발하여 적용",
      },
      {
        no: 3,
        title: "Netlify배포 후 도메인 적용",
        desc: "meta tag, og tag, og image, favicon 작업 \n Netlify배포 및 \n 도메인 적용",
      },
    ],
  },
  {
    no: 5,

    imgSrc: wetoyouPartner,
    title: "wetoyou partners - APP",
    type: "app",
    link: "https://play.google.com/store/apps/details?id=com.weconec.wetoyoupartners&hl=ln",
    skill: [
      {
        no: 1,
        title: "회원가입 시 필수정보 입력 기능 개발",
        desc: "공급자 필수정보 및 서류 이미지 업로드 기능,\n S3업로드 후 경로 return받아 \n 최종가입 완료 기능 구현",
      },
      {
        no: 2,
        title: "회원가입 후 시큐어 스토리지에 유저 정보 업데이트",
        desc: "모바일 기기 특성 상 회원가입 시 받은 데이터 \n 시큐어 스토리지 저장하여 유저정보 서버 호출 최소화",
      },
      {
        no: 3,
        title: "정산 기능 개발",
        desc: "탁송 완료 후 정산내역 페이지 리액트쿼리를 활용해 기능 개발, \n[정산전/정산중/정산완료] 데이터 전부 패칭받아 필터로 타입별 분기처리 \n 정산신청 시 해당 항목을 다중선택하여 합산금액 노출 및 정산 요청 할 수있도록 기능개발 ",
      },
    ],
  },
  {
    no: 6,
    imgSrc: wetoyou,
    title: "WETOYOU - landing",
    type: "web",
    link: "https://wetoyou.kr/",
    skill: [
      {
        no: 1,
        title: "keyframe을 활용한 애니메이션 적용",
        desc: "기능별 이미지로 \n  keyframe을 활용해 \n 애니메이션 생성 후 적용",
      },
      {
        no: 2,
        title: "mui활용해 모달기능 추가",
        desc: "메인페이지 모달 고정처리 \n 앱다운로드 시 window에서 ios, aos구분하여 \n  다운로드 구현",
      },
      {
        no: 3,
        title: "slick으로 캐러셀 구현",
        desc: "react-slick으로 세로 캐러셀, \n 무한 캐러셀 \n 기능 구현",
      },
    ],
  },
];
