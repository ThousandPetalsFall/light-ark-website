const projects = [
  {
    name: "partnerhub",
    tag: "社交与陪伴",
    tech: "uni-app + Vue 3 / 支付宝云",
    category: "social",
    description: "找搭子平台，覆盖通勤、游戏、活动、饭搭子和旅行伙伴等场景。",
  },
  {
    name: "follow-im",
    tag: "社交与陪伴",
    tech: "AI + IM",
    category: "social",
    description: "AI 客服系统，支持多客服、多用户和知识库优化。",
  },
  {
    name: "treehole",
    tag: "社交与陪伴",
    tech: "uni-app + Vue 3 / FastAPI",
    category: "social",
    description: "匿名树洞社交，给情绪一个安全出口。",
  },
  {
    name: "checkin-circle",
    tag: "习惯与生活",
    tech: "uni-app + Vue 3 / FastAPI",
    category: "habit",
    description: "面向多人共同打卡的习惯养成社区。",
  },
  {
    name: "daily-checkin",
    tag: "习惯与生活",
    tech: "uni-app + Vue 3 / FastAPI",
    category: "habit",
    description: "每日打卡与习惯培养工具。",
  },
  {
    name: "today-plan",
    tag: "习惯与生活",
    tech: "uni-app + Vue 3 / FastAPI",
    category: "habit",
    description: "今日计划管理与公开分享。",
  },
  {
    name: "todo-list",
    tag: "习惯与生活",
    tech: "uni-app + Vue 3 / FastAPI",
    category: "habit",
    description: "简洁的待办事项管理与分享功能。",
  },
  {
    name: "mood-diary",
    tag: "习惯与生活",
    tech: "uni-app + Vue 3 / FastAPI",
    category: "habit",
    description: "每日心情记录与公开社区分享。",
  },
  {
    name: "emotion-analysis",
    tag: "习惯与生活",
    tech: "问答引导 + AI",
    category: "habit",
    description: "通过对话帮助用户理解情绪背后的原因。",
  },
  {
    name: "water-reminder",
    tag: "习惯与生活",
    tech: "uni-app + Vue 3 / FastAPI",
    category: "habit",
    description: "喝水提醒与健康饮水习惯培养。",
  },
  {
    name: "packing-list",
    tag: "出行与效率",
    tech: "uni-app + Vue 3 / FastAPI",
    category: "travel",
    description: "旅行行李清单管理和协作。",
  },
  {
    name: "travel-footprint",
    tag: "出行与效率",
    tech: "uni-app + Vue 3 / FastAPI",
    category: "travel",
    description: "记录旅行足迹、地图展示、相册管理和团队协作。",
  },
  {
    name: "currency-exchange",
    tag: "出行与效率",
    tech: "uni-app + Vue 3 / FastAPI",
    category: "travel",
    description: "实时汇率查询与换算。",
  },
  {
    name: "aa-accounting",
    tag: "出行与效率",
    tech: "uni-app + Vue 3 / FastAPI",
    category: "travel",
    description: "朋友聚餐、旅行等场景的 AA 制记账分摊工具。",
  },
  {
    name: "photo-tools",
    tag: "出行与效率",
    tech: "uni-app + Vue 3 / FastAPI",
    category: "travel",
    description: "证件照与图片处理工具合集。",
  },
  {
    name: "item-storage",
    tag: "记录与表达",
    tech: "uni-app + Vue 3 / FastAPI",
    category: "record",
    description: "拍照记录物品位置，支持分类管理和分享。",
  },
  {
    name: "book-notes",
    tag: "记录与表达",
    tech: "uni-app + Vue 3 / FastAPI",
    category: "record",
    description: "记录读过的书和感想，支持社区分享。",
  },
  {
    name: "urban-notes",
    tag: "记录与表达",
    tech: "内容创作",
    category: "record",
    description: "面向城市、资源与社会问题的深度思考文章集合。",
  },
  {
    name: "astrology",
    tag: "灵感与探索",
    tech: "uni-app + Vue 3 / FastAPI",
    category: "inspire",
    description: "星座运势与 MBTI 内容工具。",
  },
  {
    name: "cyrus-jesus",
    tag: "灵感与探索",
    tech: "uni-app + Vue 3 / FastAPI",
    category: "inspire",
    description: "基于 AI 的圣经经文推荐与灵修内容生成。",
  },
  {
    name: "tarot",
    tag: "灵感与探索",
    tech: "uni-app + Vue 3 / FastAPI",
    category: "inspire",
    description: "塔罗牌占卜小程序。",
  },
  {
    name: "draw-lots",
    tag: "灵感与探索",
    tech: "uni-app + Vue 3",
    category: "inspire",
    description: "轻量抽签与决策辅助工具。",
  },
  {
    name: "resource-hub",
    tag: "基础能力",
    tech: "uni-app + Vue 3 / 支付宝云",
    category: "core",
    description: "资源共享小程序，支持微信小程序端。",
  },
  {
    name: "unified-backend",
    tag: "基础能力",
    tech: "FastAPI",
    category: "core",
    description: "ThousandPetalsFall 组织内项目统一后端 API 服务。",
  },
];

const projectGrid = document.getElementById("projectGrid");
const filterButtons = document.querySelectorAll(".filter-chip");

function renderProjects(filter = "all") {
  const visible = projects.filter((project) => filter === "all" || project.category === filter);

  projectGrid.innerHTML = visible
    .map(
      (project) => `
        <article class="project-card">
          <div class="project-top">
            <span class="project-tag">${project.tag}</span>
            <span class="project-tech">${project.tech}</span>
          </div>
          <h3>${project.name}</h3>
          <p>${project.description}</p>
          <a class="project-link" href="https://github.com/ThousandPetalsFall/${project.name}" target="_blank" rel="noreferrer">查看项目</a>
        </article>
      `
    )
    .join("");
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    renderProjects(button.dataset.filter || "all");
  });
});

renderProjects();
