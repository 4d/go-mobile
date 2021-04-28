module.exports = {
  mySidebar: [
    {
      type: "category",
      label: "Docs",
      items: ["docusaurus/insert-tabs", "docusaurus/create-a-document"],
    },
    {
      type: "category",
      label: "4D for iOS",
      items: [
        "4D/overview",
        {
          type: "category",
          label: "Parent-element",
          items: ["4D/third-level-item", "4D/third-level-item-2"],
        },
        "4D/prerequisites",
        "4D/mdx-example",
        "4D/getting-started",
        "4D/test-page",
      ],
    },
  ],
};

// {
//   type: "link",
//   label: "Test",
//   href: "https://doc.4d.com",
// },
