module.exports = {

  docs: [
	{
      type: 'category',
      label: 'Getting started',
      items: [
	            'getting-started/introduction',
				'getting-started/requirements'
	   ]
	},
	{
      type: 'category',
      label: 'Project definition',
      items: [
	            'project-definition/overview',
				'project-definition/general', 
				'project-definition/structure', 
				'project-definition/data', 
				'project-definition/actions', 
				'project-definition/labels-and-icons', 
				'project-definition/main-menu', 
				'project-definition/forms',
				'project-definition/publishing',
				'project-definition/build-panel'
				
		],     

	},
	{
      type: 'category',
      label: 'Smart features',
      items: [
	        'special-features/authentication', 
			'special-features/session-management', 
			'special-features/push-notification',
			'special-features/deep-linking'			
			],     
	},
	{
      type: 'category',
      label: 'Debugging',
      items: [
				   	'debug/from-project-editor', 
				   	'debug/from-your-iphone-and-xcode', 
				   	'debug/from-your-android-device-and-android-studio', 		
			],     

	},
	{
      type: 'category',
      label: '4D Database methods',
      items: [
	            '4D/on-mobile-app-authentication',
				'4D/on-mobile-app-action'
	   ]
	},
   
  ],
  tutorials: [
    "tutorials/create-your-first-app",
	"tutorials/custom-login-form",
    {
      type: "category",
      label: "Creating List forms",
      items: [
        "tutorials/creating-list-forms/list-form-template",
        "tutorials/creating-list-forms/list-form-icon",
        "tutorials/creating-list-forms/list-form-manifest",
        "tutorials/creating-list-forms/list-form-svg-file",
		"tutorials/creating-list-forms/multi-criteria-search",
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
      label: "Data formatter",
      items: [
        "tutorials/data-formatter/create-static-data-formatter",
        "tutorials/data-formatter/create-swift-formatter",
		"tutorials/data-formatter/create-kotlin-formatter",
      ],
    },
    {
      type: "category",
      label: "Filter queries",
      items: [
        "tutorials/filter-queries/filter-query-introduction",
        "tutorials/filter-queries/define-filter-query",
        "tutorials/filter-queries/user-information-query",
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
      label: "Customizing with Xcode",
      items: [
        "tutorials/customizing-with-xcode/working-with-xcode",
        "tutorials/customizing-with-xcode/xcode-overview",
        "tutorials/customizing-with-xcode/4d-for-ios-project-organization",
        "tutorials/customizing-with-xcode/customize-your-ios-app",
      ],
    },
	  {
      type: "category",
      label: "Selecting your Developer Program",
      items: [
       "tutorials/developer-program/selecting-your-developer-program",
       	   
      ],
    },
       {
      type: "category",
      label: "Deploying In-House",
      items: [
	    "tutorials/deploying-in-house/testing-on-your-device",
		"tutorials/deploying-in-house/deployment-in-house-archive-and-export", 
		"tutorials/deploying-in-house/deployment-in-house-distribute",
			],     

	},
	{
      type: "category",
      label: "Deploying on App Store",
      items: [
		"tutorials/deploying-on-app-store/deploy-on-app-store-create-appstore-record",
		"tutorials/deploying-on-app-store/deploy-on-app-store-archive-and-upload",
			],     

	},   

  ],
  templates: [
    {
      type: "category",
      label: "Templates & Formatters",
      items: [
        "templates/templates",
             ],
    },
			],
};
