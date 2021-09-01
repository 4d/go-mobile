/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "Go Mobile with 4D",
  tagline: "Easily create native iOS and Android apps from 4D projects",
  url: "https://doc4d.github.io",
  baseUrl: "/go-mobile/",
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "doc4d", // Usually your GitHub org/user name.
  projectName: "go-mobile", // Usually your repo name.
  noIndex: false,
  themeConfig: {
    prism: {
      theme: require("./src/theme/highlight/themes/palenight"),
    },
    navbar: {
      hideOnScroll: true,
      title: "Go Mobile",
      logo: {
        alt: "4D Logo",
        src: "img/logo.png",
      },
      items: [
        {
           type: "doc",
           position: "left",
           docId: "getting-started/introduction",
          label: "Docs",
         },
        // { type: "doc", position: "left", docId: "first-page", label: "Docs" },
        //{
        //  to: "docs/getting-started/create-your-first-app",
        //  label: "Docs",
        //  position: "left",
        //},
        {
           type: "doc",
           position: "left",
           docId: "tutorials/create-your-first-app",
          label: "Tutorials",
         },
		 //{
         // to: "tutorials/first-page",
         // label: "Tutorials",
         // position: "left",
        //},
		 {
           type: "doc",
           position: "left",
           docId: "templates/templates",
          label: "Templates & Formatters",
         },
        {
          to: "docs/faq/faq",
          label: "FAQ",
          position: "left",
        },
        //{
        //  href: "https://blog.4d.com/4d-for-ios/",
        //  label: "Blog",
        //  position: "left",
        //},
        // { to: "blog", label: "Blog", position: "left" },
        {
          type: "localeDropdown",
          position: "left",
        },
		{
          type: "docsVersionDropdown",
          position: "right",
        },
		
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Community",
          items: [
            {
              label: "4D Blog",
              href: "https://blog.4d.com",
            },
            {
              label: "4D Forum",
              href: "https://discuss.4d.com",
            },
            {
              label: "Facebook",
              href: "https://www.facebook.com/4Dsoftware/",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/4Dsoftware",
            },
            {
              label: "Youtube",
              href: "https://www.youtube.com/user/4Dsoftware",
            },
            {
              label: "Github",
              href: "https://github.com/4D/",
            },
          ],
        },
        {
          title: "Support",
          items: [
            {
              label: "4D Doc Center",
              to: "https://doc.4d.com/",
            },
			{
              label: "4D for iOS (archive)",
              to: "https://developer.4d.com/4d-for-ios",
            },
            {
              label: "Knowledge Base",
              to: "http://kb.4d.com/",
            },
            {
              label: "Downloads",
              href: "https://us.4d.com/product-download",
            },
            {
              label: "Resources",
              href: "https://us.4d.com/resources",
            },
            {
              label: "Get Support",
              href: "https://us.4d.com/4d-technical-support",
            },
          ],
        },
        {
          title: "Company",
          items: [
            {
              label: "About 4D",
              to: "https://us.4d.com/about-us",
            },
            {
              label: "Contact us",
              to: "https://us.4d.com/contact-us",
            },
            {
              label: "4D around the world",
              href: "https://us.4d.com/4d-around-the-world",
            },
            {
              label: "Careers",
              href: "https://us.4d.com/careers",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} 4D SAS - All rights reserved`,
    },
	algolia: {
      apiKey: 'YOUR_API_KEY',
      indexName: 'YOUR_INDEX_NAME',

      // Optional: see doc section below
      contextualSearch: true,

      // Optional: see doc section below
      appId: 'YOUR_APP_ID',

      // Optional: Algolia search parameters
      searchParameters: {},

      //... other Algolia params
    },
  },
  plugins: [
    [require.resolve('@cmfcmf/docusaurus-search-local'), {
      // Options here
    }]
  ],
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl:
			"https://github.com/4d/go-mobile/edit/main",
			versions: {
				'19-R2':{
				label: 'v19 R2 beta',
				path: '19-R2'
				},
			},
		includeCurrentVersion: true, // for prod only
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            "https://github.com/facebook/docusaurus/edit/master/website/blog/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
  i18n: {
    defaultLocale: "en",
    locales: ["en", "fr", "es", "ja", "pt"],
    localeConfigs: {
      en: {
        label: "English",
      },
	fr: {
		label: "Français",
		},
	es: {
		label: "Español",
		},
	ja: {
		label: "日本語",
		},
	pt: {
		label: "Português",
		},
    },
  },
};
