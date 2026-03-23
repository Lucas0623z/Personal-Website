import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'zh';

type LanguageContextType = {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Navigation
    'nav.home': 'home',
    'nav.about': 'about',
    'nav.projects': 'projects',
    'nav.contact': 'contact',
    'nav.developer': 'developer',

    // Hero
    'hero.greeting': 'Hello, I\'m',
    'hero.name': 'CasL',
    'hero.title': 'Full Stack Developer',
    'hero.description': 'I craft elegant solutions to complex problems. Specializing in modern web technologies, I build scalable applications that deliver exceptional user experiences.',
    'hero.cta.projects': 'View Projects',
    'hero.cta.contact': 'Get In Touch',

    // About
    'about.title': 'About Me',
    'about.intro': 'I\'m a passionate developer who loves turning ideas into reality through code. With a strong foundation in both frontend and backend technologies, I create seamless digital experiences.',
    'about.journey': 'My journey in software development started with curiosity and has evolved into a commitment to continuous learning and building impactful solutions. I thrive in collaborative environments and enjoy tackling challenging problems.',
    'about.skills': 'Technical Skills',
    'about.skill.frontend.title': 'Frontend',
    'about.skill.frontend.desc': 'React, TypeScript, Next.js, Tailwind CSS',
    'about.skill.backend.title': 'Backend',
    'about.skill.backend.desc': 'Node.js, Python, PostgreSQL, MongoDB',
    'about.skill.tools.title': 'Tools',
    'about.skill.tools.desc': 'Git, Docker, AWS, CI/CD',
    'about.skill.practices.title': 'Practices',
    'about.skill.practices.desc': 'Agile, TDD, Clean Code, Code Review',

    // Projects
    'projects.title': 'Featured Projects',
    'projects.subtitle': 'A selection of my recent work',
    'projects.viewCode': 'View Code',
    'projects.liveDemo': 'Live Demo',
    'projects.comingSoon': 'Coming Soon',
    'project1.title': 'DailyAgentTest',
    'project1.desc': 'A bilingual MCP-based multi-agent daily assistant for economics Q&A, schedule planning, weather forecasting, and Feishu bot workflows.',
    'project2.title': 'Poker-GTO-Solver',
    'project2.desc': 'A game-theoretic poker solver built with CFR, validated on Kuhn Poker and extended toward River subgame solving with range, equity, and strategy analysis modules.',
    'project3.title': 'Personal Website',
    'project3.desc': 'A minimal bilingual personal portfolio website inspired by macOS code editors, with system theme detection, language switching, and a refined editor-style interface.',
    'project4.title': 'OMR Music Score Recognizer',
    'project4.desc': 'An in-progress optical music recognition project that detects and interprets sheet music from images into structured musical notation.',

    // Contact
    'contact.title': 'Get In Touch',
    'contact.description': 'I\'m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.',
    'contact.formNote': 'Prefer using the contact form for first contact.',
    'contact.social': '// Connect with me',
    'contact.form.name': 'name',
    'contact.form.email': 'email',
    'contact.form.message': 'message',
    'contact.form.namePlaceholder': 'Your name',
    'contact.form.emailPlaceholder': 'your@email.com',
    'contact.form.messagePlaceholder': 'Your message...',
    'contact.form.submit': 'Send Message',
    'contact.form.sending': 'Sending...',
    'contact.social.github': 'GitHub',
    'contact.social.linkedin': 'LinkedIn',
    'contact.social.copyEmail': 'Copy Email',
    'contact.social.emailCopied': 'Copied!',

    // Footer
    'footer.copyright': 'Built with React & Tailwind CSS',
  },
  zh: {
    // Navigation
    'nav.home': '首页',
    'nav.about': '关于',
    'nav.projects': '项目',
    'nav.contact': '联系',
    'nav.developer': '开发者',

    // Hero
    'hero.greeting': '你好，我是',
    'hero.name': 'CasL',
    'hero.title': '全栈开发工程师',
    'hero.description': '我为复杂问题打造优雅的解决方案。专注于现代 Web 技术，构建可扩展的应用程序，提供卓越的用户体验。',
    'hero.cta.projects': '查看项目',
    'hero.cta.contact': '联系我',

    // About
    'about.title': '关于我',
    'about.intro': '我是一名充满热情的开发者，喜欢通过代码将想法变为现实。凭借前端和后端技术的扎实基础，我创造无缝的数字体验。',
    'about.journey': '我的软件开发之旅始于好奇心，现已演变为对持续学习和构建有影响力解决方案的承诺。我在协作环境中茁壮成长，享受解决挑战性问题。',
    'about.skills': '技术技能',
    'about.skill.frontend.title': '前端',
    'about.skill.frontend.desc': 'React, TypeScript, Next.js, Tailwind CSS',
    'about.skill.backend.title': '后端',
    'about.skill.backend.desc': 'Node.js, Python, PostgreSQL, MongoDB',
    'about.skill.tools.title': '工具',
    'about.skill.tools.desc': 'Git, Docker, AWS, CI/CD',
    'about.skill.practices.title': '实践',
    'about.skill.practices.desc': 'Agile, TDD, Clean Code, Code Review',

    // Projects
    'projects.title': '精选项目',
    'projects.subtitle': '我的近期作品选集',
    'projects.viewCode': '查看代码',
    'projects.liveDemo': '在线演示',
    'projects.comingSoon': '开发中',
    'project1.title': 'DailyAgentTest',
    'project1.desc': '基于 MCP 的双语多智能体日常助手，支持经济学问答、日程规划、天气预报和飞书机器人工作流。',
    'project2.title': 'Poker-GTO-Solver',
    'project2.desc': '基于 CFR 算法的博弈论扑克求解器，在 Kuhn Poker 上验证，扩展至 River 子博弈求解，包含范围、权益和策略分析模块。',
    'project3.title': '个人网站',
    'project3.desc': '受 macOS 代码编辑器启发的极简双语个人作品集网站，支持系统主题检测、语言切换和精致的编辑器风格界面。',
    'project4.title': 'OMR 乐谱识别器',
    'project4.desc': '正在开发的光学乐谱识别项目，可从图像中检测和解释乐谱，转换为结构化音乐记谱。',

    // Contact
    'contact.title': '联系我',
    'contact.description': '我随时欢迎讨论新项目、创意想法或成为您愿景一部分的机会。',
    'contact.formNote': '建议首次联系时使用表单。',
    'contact.social': '// 与我联系',
    'contact.form.name': '姓名',
    'contact.form.email': '邮箱',
    'contact.form.message': '消息',
    'contact.form.namePlaceholder': '您的姓名',
    'contact.form.emailPlaceholder': 'your@email.com',
    'contact.form.messagePlaceholder': '您的消息...',
    'contact.form.submit': '发送消息',
    'contact.form.sending': '发送中...',
    'contact.social.github': 'GitHub',
    'contact.social.linkedin': 'LinkedIn',
    'contact.social.copyEmail': '复制邮箱',
    'contact.social.emailCopied': '已复制！',

    // Footer
    'footer.copyright': '使用 React 和 Tailwind CSS 构建',
  },
};

const detectBrowserLanguage = (): Language => {
  const browserLang = navigator.language.toLowerCase();
  // Check if browser language is Chinese (zh, zh-CN, zh-TW, etc.)
  if (browserLang.startsWith('zh')) {
    return 'zh';
  }
  return 'en';
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    // First check localStorage
    const stored = localStorage.getItem('language') as Language;
    if (stored) {
      return stored;
    }
    // If not in localStorage, detect from browser
    return detectBrowserLanguage();
  });

  useEffect(() => {
    localStorage.setItem('language', language);
    // Update HTML lang attribute for proper font rendering
    document.documentElement.lang = language;
  }, [language]);

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'zh' : 'en');
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
}
