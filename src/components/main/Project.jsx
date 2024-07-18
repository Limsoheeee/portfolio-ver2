import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ProjectLayout from "./ProjectLayout";
import { historyData } from "../../utils/useData";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const Project = () => {
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
      {historyData.slice(1).map((item, idx) => {
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
