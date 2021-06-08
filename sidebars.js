module.exports = {
<<<<<<< HEAD
  docs: [
    {
      type: 'category',
      label: 'Getting started',
      items: [
	            'getting-started/requirements',
	            'getting-started/create-your-first-app-with-4d-for-ios'
	   ]
	},
	{
      type: 'category',
      label: 'Project definition',
      items: [
	            'project-definition/overview',
				'project-definition/general', 
				'project-definition/structure', 
				'project-definition/structure-relations-many-to-many-relations', 
				'project-definition/structure-one-to-many-relations-actions',
				'project-definition/structure-one-to-many-relations-custom-button',
				'project-definition/structure-relations-one-to-many-relations-title-definition',
				'project-definition/structure-relation-interactions', 
				'project-definition/structure-relations-many-to-one-relations', 
				'project-definition/data', 
				'project-definition/data-restricted-queries-introduction', 
				'project-definition/data-restricted-queries-define-filter-query', 
				'project-definition/data-restricted-queries-user-information-query', 
				'project-definition/actions', 
				'project-definition/actions-getting-started',
				'project-definition/actions-define-first-action', 
				'project-definition/actions-include-action-custom-template', 
				'project-definition/actions-parameters', 
				'project-definition/labels-and-icons', 
				'project-definition/labels-and-icons-data-formatter',
				'project-definition/labels-and-icons-create-data-formatter', 
				'project-definition/labels-and-icons-data-formatter-build-and-run-project',
				'project-definition/labels-and-icons-icons-getting-started', 
				'project-definition/labels-and-icons-create-icons',
				'project-definition/labels-and-icons-include-icons',
				'project-definition/labels-and-icons-select-icons',
				'project-definition/labels-and-icons-mobile-project',
				'project-definition/main-menu', 'project-definition/forms',
				'project-definition/forms-multi-critera-search',
				'project-editor/publishing'
				
		],     
	},
	{
      type: 'category',
      label: 'Extra features',
      items: [
	             'extra-features/deep-linking',
				 'extra-features/email-authentication', 
				 'extra-features/push-notification'
			],     
	},
	{
      type: 'category',
      label: 'Testing projects',
      items: [
	              'testing-projects/testing-on-your-device',
	              'testing-projects/using-the-simulator'],     
	},
	{
      type: 'category',
      label: 'Customizing projects',
      items: [
	               'customizing-projects/listform-create-template',
				   'customizing-projects/gallery-update-template'],     
	},
	{
      type: 'category',
      label: 'Deployment',
      items: [
	                'deployment/deploy-on-app-store-archive-and-upload',
					'deployment/deployment-in-house-archive-and-export', 
					'deployment/deployment-in-house-distribute',
					'deployment/deploy-on-app-store-create-appstore-record', 
					'deployment/selecting-your-developer program', 
					'deployment/selecting-your-developer-program-register-apple-developer-enterprise-program', 
					'deployment/selecting-your-developer-program-register-apple-developer-program-individual', 
					'deployment/selecting-your-developer-program-register-apple-developer-program-organization'],     
	},
    {
      type: "category",
      label: "Test",
      items: ["4D/mdx-example", "4D/test-page"],
    },
    {
      type: "link",
      label: "Test",
      href: "https://doc.4d.com",
    },
  ],
  tutorials: [
    "tutorials/first-page",
    {
      type: "category",
      label: "Creating your iOS App",
      items: [
        "tutorials/creating-ios-app/create-contact-app",
        "tutorials/creating-ios-app/custom-login-form",
      ],
    },
    {
      type: "category",
      label: "Customizing with Xcode",
      items: [
        "tutorials/customizing-with-xcode/what-is-xcode",
        "tutorials/customizing-with-xcode/working-with-xcode",
        "tutorials/customizing-with-xcode/xcode-overview",
        "tutorials/customizing-with-xcode/4d-for-ios-project-organization",
        "tutorials/customizing-with-xcode/customize-your-ios-app",
      ],
    },
    {
      type: "category",
      label: "Creating List forms",
      items: [
        "tutorials/creating-list-forms/list-form-template",
        "tutorials/creating-list-forms/list-form-icon",
        "tutorials/creating-list-forms/list-form-manifest",
        "tutorials/creating-list-forms/list-form-svg-file",
        "tutorials/creating-list-forms/list-form-storyboard",
        "tutorials/creating-list-forms/list-form-layout",
      ],
    },
    {
      type: "category",
      label: "Creating Detail forms",
      items: [
        "tutorials/creating-detail-forms/detail-form-template",
        "tutorials/creating-detail-forms/detail-form-icon",
        "tutorials/creating-detail-forms/detail-form-template-manifest",
        "tutorials/creating-detail-forms/detail-form-template-svg",
        "tutorials/creating-detail-forms/detail-form-template-storyboard",
		"tutorials/creating-detail-forms/detail-form-template-layout",
      ],
    },
    {
      type: "category",
      label: "Gallery",
      items: [
        "tutorials/gallery/install-gallery-template",
        "tutorials/gallery/update-gallery-template",
      ],
    },
    {
      type: "category",
      label: "Using icons",
      items: [
        "tutorials/using-icons/using-icons",
        "tutorials/using-icons/create-icons",
        "tutorials/using-icons/include-icons",
        "tutorials/using-icons/select-icons",
      ],
    },
    {
      type: "category",
      label: "Data formatter",
      items: [
        "tutorials/data-formatter/data-formatter",
        "tutorials/data-formatter/open-mobile-project",
        "tutorials/data-formatter/build-and-run",
        "tutorials/data-formatter/create-data-formatter",
      ],
    },
    {
      type: "category",
      label: "Multi-criteria search",
      items: ["tutorials/multi-criteria-search/multi-criteria-search"],
    },
    {
      type: "category",
      label: "Restricted queries",
      items: [
        "tutorials/restricted-queries/filter-query-introduction",
        "tutorials/restricted-queries/define-filter-query",
        "tutorials/restricted-queries/user-information-query",
      ],
    },
    {
      type: "category",
      label: "Actions",
      items: [
        "tutorials/actions/getting-started",
        "tutorials/actions/define-first-action",
        "tutorials/actions/adding-actions-template",
        "tutorials/actions/using-action-parameters",
      ],
    },
    {
      type: "category",
      label: "Relations",
      items: [
        "tutorials/relations/many-to-one-relations",
        "tutorials/relations/one-to-many-relations",
        "tutorials/relations/one-to-many-title-definition",
        "tutorials/relations/one-to-many-custom-button",
        "tutorials/relations/one-to-many-actions",
        "tutorials/relations/relation-interactions",
      ],
    },
    {
      type: "category",
      label: "Features",
      items: [
        "tutorials/features/email-authentication",
        "tutorials/features/push-notifications",
        "tutorials/features/deep-linking",
      ],
    },

  ],
};
