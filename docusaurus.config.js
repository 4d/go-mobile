/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "Go Mobile with 4D",
  tagline: "Easily create native iOS and Android apps from 4D projects",
  url: "https://doc4d.github.io",
  baseUrl: "/go-mobile/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "doc4d", // Usually your GitHub org/user name.
  projectName: "go-mobile", // Usually your repo name.
  themeConfig: {
    prism: {
      theme: require('./src/theme/highlight/themes/palenight'),
    },
    navbar: {
      title: "Go Mobile",
      logo: {
        alt: "My Site Logo",
        src: "img/logo.png",
      },
      items: [
        {
          to: "docs/4D/overview",
          activeBasePath: "docs",
          label: "Docs",
          position: "left",
        },
        // { to: "blog", label: "Blog", position: "left" },
        {
          href: "https://blog.4d.com/4d-for-ios/",
          label: "Blog",
          position: "left",
        },
		{
          type: 'localeDropdown',
          position: 'left',
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
              label: "4D Doc Center (legacy)",
              to: "https://doc.4d.com/",
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
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl:
            "https://github.com/facebook/docusaurus/edit/master/website/",
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
    defaultLocale: 'en',
    locales: ['en', 'fr'],
    localeConfigs: {
      en: {
        label: 'English',
      },
      fr: {
        label: 'Français',
      },
    },
  },
};
