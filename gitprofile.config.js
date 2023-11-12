// gitprofile.config.js

const config = {
  github: {
    username: 'Dhanush2468', // Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 59, // How many projects to display.
    exclude: {
      forks: false, // Forked projects will not be displayed if set to true.
      projects: [], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'whitdevil2468',
    twitter: 'Dhanush2468',
    medium: '@whitedevil2468',
    website: 'https://whitedevil2468.netlify.app',
    email: 'dhanushgollavilli02@gmail.com',
  },
  resume: {
    fileUrl:
      'https://relevel.com/profile/u/gollavilli-dhanush-kumar', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Threejs',
    'JavaScript',
    'React.js',
    'Node.js',
    'Next.js',
    'MySQL',
    'PostgreSQL',
    'Git',
    'CSS',
    'SCSS',
    'Tailwind',
  ],
  experiences: [
    {
      company: 'Wingify',
      position: 'Software Enginering',
      from: 'Aug 2023',
      to: 'Present',
      companyLink: 'https://wingify.com',
    },
  ],
  /* certifications: [
    {
      name: 'Lorem ipsum',
      body: 'Lorem ipsum dolor sit amet',
      year: 'March 2023',
      link: 'https://example.com'
    },
  ], */
  education: [
    {
      institution: 'GODAVARI INSTITUTE OF ENGINEERING AND TECHNOLOGY',
      degree: 'B-Tech',
      from: '2021',
      to: '2024',
    },
  ],

  // To hide the `My Projects` section, keep it empty.
  externalProjects: [
    {
      title: 'Youtube Clone',
      description:
      'Build and Deploy a Modern YouTube Clone Application in React JS with Material UI 5',
      imageUrl: 'https://github.com/Dhanush2468/Youtube-Clone/assets/112778628/d5dd53b0-d78a-42e9-82e5-7f549e6becb3',
      link: 'https://github.com/Dhanush2468/Youtube-Clone/',
    },
    {
      title: 'Linked In Post Downloader',
      description:
        'Builded Using React js',
      imageUrl: 'https://github.com/Dhanush2468/LinkedIn-Post-Downloader/assets/112778628/1cb2398e-9fcd-4581-bb0f-f2a00e23de56',
      link: 'https://Dhanush2468/LinkedIn-Post-Downloader',
    },
  ],
  themeConfig: {
    defaultTheme: 'wireframe',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      // 'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'procyon',
    ],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/Dhanush2468"
      target="_blank"
      rel="noreferrer"
    >Whitedevil</a> and ❤️`,
};

export default config;
