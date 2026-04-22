// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-mobilescape",
    title: "Mobilescape",
    section: "Navigation",
    handler: () => {
      window.location.href = "/mobilescape/";
    },
  },{id: "nav-publication",
          title: "publication",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/mobilescape/publications/";
          },
        },{id: "nav-research",
          title: "research",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/mobilescape/research/";
          },
        },{id: "nav-people",
          title: "people",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/mobilescape/people/";
          },
        },{id: "nav-news",
          title: "news",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/mobilescape/news/";
          },
        },{id: "nav-contact",
          title: "contact",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/mobilescape/contact/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/mobilescape/books/the_godfather/";
            },},{id: "news-kim-geunseon-and-jung-yubin-have-joined-mobilescape-as-undergraduate-researchers",
          title: 'KIM Geunseon and JUNG Yubin have joined Mobilescape as undergraduate researchers.',
          description: "",
          section: "News",},{id: "news-youn-rangkeun-has-joined-mobilescape-as-an-undergraduate-researcher",
          title: 'YOUN Rangkeun has joined Mobilescape as an undergraduate researcher.',
          description: "",
          section: "News",},{id: "news-jung-yubin-becomes-the-first-masters-student-in-the-lab-welcome-aboard",
          title: 'JUNG Yubin becomes the first masters’ student in the Lab. Welcome aboard.',
          description: "",
          section: "News",},{id: "news-yubin-geunson-and-rangkeun-presented-at-the-korea-planning-association",
          title: 'Yubin, Geunson and Rangkeun presented at the Korea Planning Association',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/mobilescape/news/announcement_4/";
            },},{id: "news-song-jinseo-has-joined-mobilescape-as-an-undergraduate-researcher",
          title: 'SONG Jinseo has joined Mobilescape as an undergraduate researcher.',
          description: "",
          section: "News",},{id: "news-an-jungwoo-has-joined-mobilescape-as-an-undergraduate-researcher",
          title: 'AN Jungwoo has joined Mobilescape as an undergraduate researcher.',
          description: "",
          section: "News",},{id: "news-yubin-presented-at-the-korea-planning-association",
          title: 'Yubin presented at the Korea Planning Association',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/mobilescape/news/announcement_7/";
            },},{id: "news-new-mobilescape-publication-network-motif-and-public-bike",
          title: 'New Mobilescape publication: Network motif and public bike',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/mobilescape/news/2025-12-31_new_paper/";
            },},{id: "news-oh-junbeom-has-joined-mobilescape-as-a-masters-student-welcome-aboard",
          title: 'OH Junbeom has joined Mobilescape as a masters’ student. Welcome aboard.',
          description: "",
          section: "News",},{id: "news-yubin-wins-research-grant-for-early-career-researcher",
          title: 'Yubin wins Research Grant for Early Career Researcher!',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/mobilescape/news/2026-04-13_wins_research_grant/";
            },},{id: "research-15-minute-city",
          title: '15-Minute City',
          description: "Reimagining urban life through proximity, accessibility, and walkability",
          section: "Research",handler: () => {
              window.location.href = "/mobilescape/research/15min%20city/";
            },},{id: "research-urban-space-through-public-transportation",
          title: 'Urban Space Through Public Transportation',
          description: "Understanding urban space throug public transportation usage patterns",
          section: "Research",handler: () => {
              window.location.href = "/mobilescape/research/public%20transportation/";
            },},{id: "research-understanding-megacity-mobility",
          title: 'Understanding Megacity Mobility',
          description: "Exploring movement patterns and transportation dynamics in megacities",
          section: "Research",handler: () => {
              window.location.href = "/mobilescape/research/understanding%20megacity%20mobility/";
            },},{id: "research-urban-energy-planning",
          title: 'Urban Energy Planning',
          description: "Tackling climate change by urban energy planning",
          section: "Research",handler: () => {
              window.location.href = "/mobilescape/research/urban%20energy%20planning/";
            },},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
