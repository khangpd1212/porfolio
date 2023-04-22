const listProject = [
  {
    img: { src: "./assets/images/bg-treeworld.png", alt: "bg-treeworld" },
    title: "TreeWorld Project",
    subtitle: "Web selling plants and flowers using ReactJS and NodeJS",
    listSkill: ["HTML", "CSS", "JS", "ReactJS", "Antd", "Redux Toolkit"],
    urlDemo: "https://treeworld.vercel.app",
    urlSourceCode: "https://github.com/khangpd1212/Tree-World",
  },
//   {
//     img: {
//       src: "./assets/images/bg-manager-task.png",
//       alt: "bg-manager-task",
//     },
//     title: "Manager Task Project",
//     subtitle: "Web manager task using ReactJS and Vite",
//     listSkill: ["HTML", "Typescript", "ReactJS", "TailwindCSS", "CSS", "Vite"],
//     urlDemo: "https://khangpd-task-manager.netlify.app",
//     urlSourceCode: "https://github.com/khangpd1212/reactjs-manager-task",
//   },
  {
    img: {
      src: "./assets/images/bg-b-cycle.png",
      alt: "b-cycle",
    },
    title: "B Cycle Landing Page",
    subtitle: "Web introduce NFT using ReactJS and TailwindCSS",
    listSkill: ["HTML", "JS", "ReactJS", "TailwindCSS", "CSS", "CRA"],
    urlDemo: "https://b-cycle.netlify.app",
    urlSourceCode: "https://github.com/khangpd1212/b-cycle",
  },
];

(function renderListProject() {
  const elContainerSwiper = document.getElementById("container-swiper");
  const elContainerImg =
    elContainerSwiper.getElementsByClassName("project-image");
  const elProjectRight =
    elContainerSwiper.getElementsByClassName("project-right");
  const elContainerSkill = elContainerSwiper.getElementsByClassName(
    "container-skill-project"
  );
  const nodeBtnDemo = elContainerSwiper.getElementsByClassName("btn-demo");
  const nodeBtnSourceCode =
    elContainerSwiper.getElementsByClassName("btn-source-code");
  listProject.forEach((item, index) => {
    const nodeImg = document.createElement("img");
    nodeImg.src = item.img.src;
    nodeImg.alt = item.img.alt;
    elContainerImg[index].appendChild(nodeImg);

    const nodeTitle = document.createElement("h3");
    nodeTitle.innerText = item.title;

    const nodeSubtitle = document.createElement("h4");
    nodeSubtitle.innerText = item.subtitle;

    elProjectRight[index].insertBefore(
      nodeSubtitle,
      elProjectRight[index].firstChild
    );
    elProjectRight[index].insertBefore(
      nodeTitle,
      elProjectRight[index].firstChild
    );

    item.listSkill.forEach((skill) => {
      const nodeContentSkill = document.createElement("div");
      nodeContentSkill.className = "content-skill";

      const nodeTextSkill = document.createElement("p");
      nodeTextSkill.className = "text";
      nodeTextSkill.innerText = skill;

      nodeContentSkill.appendChild(nodeTextSkill);
      elContainerSkill[index].appendChild(nodeContentSkill);

      nodeBtnDemo[index].setAttribute("href", item.urlDemo);
      nodeBtnSourceCode[index].setAttribute("href", item.urlSourceCode);
    });
  });
})();
