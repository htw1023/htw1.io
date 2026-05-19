const skills = [
  {
    title: "前端开发入门",
    description: "HTML、CSS 和 JavaScript 基础，以及页面布局与交互最优实践。",
    url: "https://www.bilibili.com/video/BV1eA4y1E7Re"
  },
  {
    title: "React 框架实战",
    description: "React 组件开发、状态管理和数据驱动页面构建。",
    url: "https://www.bilibili.com/video/BV1h34y1c7UD"
  },
  {
    title: "Python 自动化运维",
    description: "使用 Python 自动化脚本处理文件、爬虫、数据分析等任务。",
    url: "https://www.bilibili.com/video/BV1fK4y1d7Ce"
  },
  {
    title: "UI 设计与原型制作",
    description: "掌握设计工具与界面视觉规范，提高页面体验与可用性。",
    url: "https://www.bilibili.com/video/BV1t5411W7C4"
  },
  {
    title: "人工智能基础",
    description: "了解 AI、机器学习、深度学习的核心概念和应用场景。",
    url: "https://www.bilibili.com/video/BV1XK4y1s7kR"
  },
  {
    title: "产品经理技能",
    description: "需求分析、用户体验、产品规划与项目沟通方法。",
    url: "https://www.bilibili.com/video/BV1xT4y1p7Fn"
  }
];

const skillsGrid = document.getElementById("skillsGrid");

skills.forEach((skill) => {
  const card = document.createElement("article");
  card.className = "skill-card";
  card.innerHTML = `
    <h3>${skill.title}</h3>
    <p>${skill.description}</p>
    <a href="${skill.url}" target="_blank" rel="noreferrer">前往哔哩哔哩学习</a>
  `;
  skillsGrid.appendChild(card);
});
