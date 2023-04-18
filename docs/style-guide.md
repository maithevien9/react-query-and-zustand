# Structure

This style guide is mostly based on the standards that are currently prevalent in Typescript. Let's discuss if you have better idea on how to improve it.

```
├── docs
│   ├──  style-guide.md
├── src
│   ├── assets          # folder to store assets
│   │   ├── svgs    # folder to svgs
│   │   └── images      # folder to images
│   ├── configs          # folder to configs
│   │   └── theme      # folder to theme
│   │   └── ...
│   ├── pages          # folder to store all the pages
│   │   └── account
│   │   │   ├── info.tsx
│   │   └── forgot-password.tsx # use title-case for pages
│   ├── services # handle business logic
│   ├── shared          # folder to shared
│   │   ├── components
│   │   │   └── commmon # use title-case for forder
│   │   │       └── Loading.tsx # use PascelCase for component ( component )
│   │   │   └── forms
│   │   │       └── EditForm.tsx
│   │   │   └── modals # store all modal here
│   │   │       └── ManageUserModal.tsx
│   │   │   └── selectors  # store all selector here
│   │   │       └── UserSelector.tsx
│   │   │   └── layouts  # store all layout here
│   │   │       └── PrivateLayouts.tsx
│   │   │   └── ...
│   │   ├── hooks
│   │   │   └── useCounter.ts
│   │   │   └── useAsync.ts
│   │   │   └── ...
│   │   ├── routes
│   │   │   └── index.ts
│   │   ├── constants
│   │   │   └── app.ts
│   │   ├── types
│   │   │   └── app.ts
│   │   │   └── ...
│   │   ├── utils # Use camelCase for file in this forder
│   │   │   └── strings.ts
│   │   │   └── ...
│   └── index.tsx     # index entry point
├── .gitignore
├── package.json
└── README.md
└── yarn.lock
└── ...
```
