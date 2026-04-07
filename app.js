const projects = [
  {
    name: "partnerhub",
    tag: "社交与陪伴",
    tech: "uni-app + Vue 3 / 支付宝云",
    category: "social",
    description: "面向通勤、活动、游戏、饭搭子和旅行等场景的搭子匹配平台。",
  },
  {
    name: "follow-im",
    tag: "社交与陪伴",
    tech: "AI + IM",
    category: "social",
    description: "面向多客服协同的 AI 客服系统，支持问答、评分与知识库优化。",
  },
  {
    name: "treehole",
    tag: "社交与陪伴",
    tech: "uni-app + Vue 3 / FastAPI",
    category: "social",
    description: "匿名树洞社交平台，为情绪表达提供一个更安全的出口。",
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
    description: "用于每日记录与习惯培养的轻量工具。",
  },
  {
    name: "today-plan",
    tag: "习惯与生活",
    tech: "uni-app + Vue 3 / FastAPI",
    category: "habit",
    description: "用于日程梳理、任务规划与公开分享的计划工具。",
  },
  {
    name: "todo-list",
    tag: "习惯与生活",
    tech: "uni-app + Vue 3 / FastAPI",
    category: "habit",
    description: "简洁的待办事项管理工具，支持高频使用场景。",
  },
  {
    name: "mood-diary",
    tag: "习惯与生活",
    tech: "uni-app + Vue 3 / FastAPI",
    category: "habit",
    description: "用于日常情绪记录与公开分享的心情日记产品。",
  },
  {
    name: "emotion-analysis",
    tag: "习惯与生活",
    tech: "GPT-5.4 + 问答引导",
    category: "habit",
    description: "通过对话引导帮助用户理解情绪背后的原因。",
  },
  {
    name: "water-reminder",
    tag: "习惯与生活",
    tech: "uni-app + Vue 3 / FastAPI",
    category: "habit",
    description: "喝水提醒与健康饮水习惯培养工具。",
  },
  {
    name: "packing-list",
    tag: "出行与效率",
    tech: "uni-app + Vue 3 / FastAPI",
    category: "travel",
    description: "用于旅行准备、行李整理和协作分工的清单工具。",
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
    description: "实时汇率查询与换算工具。",
  },
  {
    name: "aa-accounting",
    tag: "出行与效率",
    tech: "uni-app + Vue 3 / FastAPI",
    category: "travel",
    description: "适用于聚餐、旅行等场景的 AA 制记账分摊工具。",
  },
  {
    name: "photo-tools",
    tag: "出行与效率",
    tech: "uni-app + Vue 3 / FastAPI",
    category: "travel",
    description: "面向证件照与图片处理的轻量工具合集。",
  },
  {
    name: "item-storage",
    tag: "记录与表达",
    tech: "uni-app + Vue 3 / FastAPI",
    category: "record",
    description: "通过拍照记录物品位置，支持分类管理和分享。",
  },
  {
    name: "book-notes",
    tag: "记录与表达",
    tech: "uni-app + Vue 3 / FastAPI",
    category: "record",
    description: "用于记录读书内容、感想和分享的笔记产品。",
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
    description: "提供星座运势与 MBTI 内容体验的轻量工具。",
  },
  {
    name: "cyrus-jesus",
    tag: "灵感与探索",
    tech: "uni-app + Vue 3 / FastAPI",
    category: "inspire",
    description: "基于 AI 的圣经经文推荐与灵修内容生成工具。",
  },
  {
    name: "tarot",
    tag: "灵感与探索",
    tech: "uni-app + Vue 3 / FastAPI",
    category: "inspire",
    description: "面向塔罗牌占卜场景的小程序产品。",
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
    description: "面向资源共享与分发的轻量平台，支持微信小程序端。",
  },
  {
    name: "unified-backend",
    tag: "基础能力",
    tech: "FastAPI",
    category: "core",
    description: "为组织内多个项目提供统一 API 与公共能力支撑。",
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
