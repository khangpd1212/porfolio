import BgBCycle from "../assets/images/bg-b-cycle.png";
import BgTreeWorld from "../assets/images/bg-treeworld.png";
import projectTemplate from "../sections/partials/project-template.hbs";
import loadSwiper from "./utils/slide";

const listProject = [
  {
    title: "TreeWorld Project",
    img: { src: BgTreeWorld, alt: "bg-treeworld" },
    subtitle: "Web selling plants and flowers using ReactJS and NodeJS",
    listSkill: ["HTML", "CSS", "TS", "ReactJS", "Antd", "Redux Toolkit"],
    urlDemo: "https://treeworld.vercel.app",
    urlSourceCode: "https://github.com/khangpd1212/Tree-World",
  },
  {
    img: {
      src: BgBCycle,
      alt: "b-cycle",
    },
    title: "B Cycle Landing Page",
    subtitle: "Web introduce NFT using ReactJS and TailwindCSS",
    listSkill: ["HTML", "JS", "ReactJS", "TailwindCSS", "CSS", "CRA"],
    urlDemo: "https://b-cycle.netlify.app",
    urlSourceCode: "https://github.com/khangpd1212/b-cycle",
  },
];

export default function renderListProject() {
  loadSwiper()
  const elContainerSwiper = document.getElementById("container-swiper");
  elContainerSwiper.innerHTML = projectTemplate(listProject)
}
