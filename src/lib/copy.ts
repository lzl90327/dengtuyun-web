// =====================================================
// 登途云官网 — 全站固定文案（单一来源）
// 页面组件不得写死字符串，一律从此文件读取
// 已移除资金/授信/融资等敏感词（ICP/EDI 合规）
// =====================================================

export const COPY = {
  // ── S1 Hero ──────────────────────────────────────
  hero: {
    eyebrow: "登途云｜全国智能运力网络平台",
    title: "把运力做成网络",
    subtitle:
      "构建跨区域智能运力网络，实现可视、可控、可协同的运输基础设施。",
    capsules: ["运力网络", "透明可信", "风险可控"] as string[],
    testimonialText: "已服务多家头部物流企业",
    clientNames: ["某头部物流企业", "某制造业集团", "某供应链平台", "某产业园区"],
    ctaPrimary: "了解平台架构",
    ctaSecondary: "获取公司介绍",
    stats: [
      { value: "10,000+", label: "在网车辆", trend: "+23%", trendLabel: "年度增长" },
      { value: "50万+", label: "月度运单量", trend: "+15%", trendLabel: "季度增长" },
      { value: "99.8%", label: "过程可视覆盖", trend: "+0.5%", trendLabel: "月度提升" },
      { value: "30+", label: "重点线路覆盖", trend: "+5", trendLabel: "新增线路" },
    ] as { value: string; label: string; trend: string; trendLabel: string }[],
  },

  // ── S2 核心能力 ───────────────────────────────────
  capability: {
    sectionTitle: "核心能力",
    eyebrow: "MEASURE TWICE. CUT ONCE.",
    title: "为现代物流打造智能基础设施",
    subtitle:
      "登途云构建跨区域运力资源网络，实现透明可视与智能风控，支持业务与运力协同。",
    cards: [
      {
        title: "运力网络与调度",
        desc: "跨区域运力资源网络化组织与智能调度。",
        bullets: ["资源池与线路沉淀", "策略匹配与路由", "画像与绩效评估"],
        isFinance: false,
      },
      {
        title: "透明可视与风控",
        desc: "过程可视与异常闭环，把风险前置到规则里。",
        bullets: ["轨迹与事件留痕", "预警处置复盘", "权限审计可溯"],
        isFinance: false,
      },
      {
        title: "合规与协同",
        desc: "统一规则与审计留痕，支持多方业务协同。",
        bullets: ["统一身份权限", "规则与审计留痕", "对账与协同联动"],
        isFinance: false,
      },
    ] as {
      title: string;
      desc: string;
      bullets: string[];
      isFinance: boolean;
    }[],
  },

  // ── S3 信任体系 ───────────────────────────────────
  trust: {
    sectionTitle: "信任体系",
    eyebrow: "TRUST BY DESIGN",
    title: "覆盖、能力与治理三重保障",
    subtitle:
      "从网络覆盖到平台能力，再到治理机制，构建可信赖的运力基础设施。",
    blocks: [
      {
        title: "覆盖与网络",
        bullets: [
          "跨区域多省覆盖",
          "重点线路协同",
          "节点线路策略",
          "保障兜底闭环",
        ],
      },
      {
        title: "平台能力",
        bullets: [
          "统一数据底座",
          "统一身份权限",
          "统一规则引擎",
          "统一可视化",
        ],
      },
      {
        title: "治理机制",
        bullets: [
          "准入履约闭环",
          "指标化持续优化",
          "分级风控归因",
          "数据可核验",
        ],
      },
    ] as { title: string; bullets: string[] }[],
  },

  // ── S4 典型场景 ───────────────────────────────────
  scenario: {
    sectionTitle: "典型场景",
    eyebrow: "REAL-WORLD IMPACT",
    title: "运力可信与多方协同",
    subtitle:
      "面向区域产业项目和运力可信场景，提供端到端的智能运力解决方案。",
    cards: [
      {
        title: '区域产业运力"一张网"',
        desc: "面向区域项目的统一组织与保障能力。",
        bullets: ["节点线路统筹", "优先级与兜底", "指标驱动优化"],
      },
      {
        title: "运力可信与业务协同",
        desc: "以可核验数据降低协同成本。",
        bullets: ["业务过程可验", "异常处置闭环", "对账协同联动"],
      },
    ] as { title: string; desc: string; bullets: string[] }[],
  },

  // ── S5 CTA ───────────────────────────────────────
  cta: {
    title: "获取公司介绍 / 预约交流",
    desc: "我们将提供平台能力概览与典型场景资料。",
    urgencyBadge: "限时免费获取",
    spotsRemaining: "仅剩 50 个优先体验名额",
    successMessage: "客户经理将在 24 小时内与您联系",
    form: {
      fields: {
        name: { label: "姓名", placeholder: "请输入您的姓名" },
        org: { label: "机构", placeholder: "请输入所在机构/公司" },
        role: {
          label: "角色",
          placeholder: "请选择您的角色",
          options: ["政府/产业方", "物流/货主企业", "运力承运方", "其他"],
        },
        contact: { label: "联系方式", placeholder: "手机号或邮箱" },
      },
      submit: "提交",
    },
    aside: {
      label: "添加客户经理，获取资料包",
      badge: "资料包",
    },
  },

  // ── S6 Footer ─────────────────────────────────────
  footer: {
    company: "登途云物流科技有限公司",
    tagline: "全国智能运力网络平台",
    navigation: [
      { name: "核心能力", href: "#capabilities" },
      { name: "信任体系", href: "#trust" },
      { name: "典型场景", href: "#scenarios" },
      { name: "获取资料", href: "#cta" },
    ],
    social: [] as { name: string; href: string }[],
    legal: [
      { name: "公司信息", href: "#" },
      { name: "隐私政策", href: "#" },
      { name: "服务协议", href: "#" },
    ],
    copyright: `© ${new Date().getFullYear()} 登途云物流科技有限公司 版权所有`,
  },
} as const;
