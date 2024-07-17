import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import missgo from "../assets/Image/missgo.png";
import criminalIP from "../assets/Image/criminalIp.png";
import wetoyou from "../assets/Image/wetoyou.png";
import wetoyouPartner from "../assets/Image/wetoyouPartners.png";
import weconec from "../assets/Image/weconec.png";
import ProjectLayout from "../components/main/ProjectLayout";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const Project = () => {
  const to1Ref = useRef();
  const to2Ref = useRef();
  const to3Ref = useRef();
  const to4Ref = useRef();
  const to5Ref = useRef();
  const to6Ref = useRef();

  const itemList = [
    {
      no: 1,
      ref: to1Ref,
      imgSrc: missgo,
      title: "Missgo - WEBAPP",
      type: "app",
      link: "https://apps.apple.com/kr/app/%EB%AF%B8%EC%8A%A4%EA%B3%A0%EB%B6%80%EB%8F%99%EC%82%B0-%EB%B2%95%EC%9B%90%EA%B2%BD%EB%A7%A4-%EC%A0%95%EB%B3%B4-%EB%B6%80%EB%8F%99%EC%82%B0%EA%B2%BD%EB%A7%A4-%EC%A7%80%EB%8F%84/id1637542873",
      skill: [
        {
          no: 1,
          title: "기능 제목입니다",
          desc: "기능설명입니다. \n 기능설명입니다. \n 기능설명입니다.",
        },
        {
          no: 2,
          title: "기능 제목입니다",
          desc: "기능설명입니다. \n 기능설명입니다. \n 기능설명입니다.",
        },
        {
          no: 3,
          title: "기능 제목입니다",
          desc: "기능설명입니다. \n 기능설명입니다. \n 기능설명입니다.",
        },
      ],
    },
    {
      no: 2,
      ref: to2Ref,
      imgSrc: missgo,
      title: "Missgo - Landing",
      type: "web",
      link: "https://landing.missgorealty.com/",
      skill: [
        {
          no: 1,
          title: "기능 제목입니다",
          desc: "기능설명입니다. \n 기능설명입니다. \n 기능설명입니다.",
        },
        {
          no: 2,
          title: "기능 제목입니다",
          desc: "기능설명입니다. \n 기능설명입니다. \n 기능설명입니다.",
        },
        {
          no: 3,
          title: "기능 제목입니다",
          desc: "기능설명입니다. \n 기능설명입니다. \n 기능설명입니다.",
        },
      ],
    },
    {
      no: 3,
      ref: to3Ref,
      imgSrc: criminalIP,
      title: "criminalIP - WEB",
      type: "web",
      link: "https://www.criminalip.io/",
      skill: [
        {
          no: 1,
          title: "기능 제목입니다",
          desc: "기능설명입니다. \n 기능설명입니다. \n 기능설명입니다.",
        },
        {
          no: 2,
          title: "기능 제목입니다",
          desc: "기능설명입니다. \n 기능설명입니다. \n 기능설명입니다.",
        },
        {
          no: 3,
          title: "기능 제목입니다",
          desc: "기능설명입니다. \n 기능설명입니다. \n 기능설명입니다.",
        },
      ],
    },
    {
      no: 4,
      ref: to4Ref,
      imgSrc: weconec,
      title: "WECONEC - WEB",
      type: "web",
      link: "https://weconec.co.kr/",
      skill: [
        {
          no: 1,
          title: "기능 제목입니다",
          desc: "기능설명입니다. \n 기능설명입니다. \n 기능설명입니다.",
        },
        {
          no: 2,
          title: "기능 제목입니다",
          desc: "기능설명입니다. \n 기능설명입니다. \n 기능설명입니다.",
        },
        {
          no: 3,
          title: "기능 제목입니다",
          desc: "기능설명입니다. \n 기능설명입니다. \n 기능설명입니다.",
        },
      ],
    },
    {
      no: 5,
      ref: to5Ref,
      imgSrc: wetoyouPartner,
      title: "wetoyou partners - APP",
      type: "web",
      link: "https://wetoyou.kr/partner",
      skill: [
        {
          no: 1,
          title: "기능 제목입니다",
          desc: "기능설명입니다. \n 기능설명입니다. \n 기능설명입니다.",
        },
        {
          no: 2,
          title: "기능 제목입니다",
          desc: "기능설명입니다. \n 기능설명입니다. \n 기능설명입니다.",
        },
        {
          no: 3,
          title: "기능 제목입니다",
          desc: "기능설명입니다. \n 기능설명입니다. \n 기능설명입니다.",
        },
      ],
    },
    {
      no: 6,
      ref: to6Ref,
      imgSrc: wetoyou,
      title: "WETOYOU - landing",
      type: "web",
      link: "https://wetoyou.kr/",
      skill: [
        {
          no: 1,
          title: "기능 제목입니다",
          desc: "기능설명입니다. \n 기능설명입니다. \n 기능설명입니다.",
        },
        {
          no: 2,
          title: "기능 제목입니다",
          desc: "기능설명입니다. \n 기능설명입니다. \n 기능설명입니다.",
        },
        {
          no: 3,
          title: "기능 제목입니다",
          desc: "기능설명입니다. \n 기능설명입니다. \n 기능설명입니다.",
        },
      ],
    },
  ];

  useGSAP(() => {
    let panels = gsap.utils.toArray(".project-page");
    panels.forEach((panel, i) => {
      ScrollTrigger.create({
        trigger: panel,
        start: "top top",
        pin: true,
        pinSpacing: false,
      });
    });
  }, []);

  return (
    <>
      {itemList.map((item, idx) => {
        return (
          <section key={item.no} className="project-page">
            <ProjectLayout item={item} isFirst={idx === 0} />
          </section>
        );
      })}
    </>
  );
};

export default Project;
