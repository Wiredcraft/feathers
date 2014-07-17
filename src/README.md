# The `src` Directory

## Overview

The `src/` directory contains all code used in the application.

```
src/
  ├── README.md
  ├── app
  │   ├── README.md
  │   ├── app.coffee
  │   ├── app.js
  │   ├── components
  │   ├── home
  │   ├── login
  │   └── static
  ├── assets
  │   ├── README.md
  │   ├── images
  │   └── scss
  └── index.jade
```

- `src/app/` - application-specific code, i.e. code not likely to be reused in
  another application. [Read more &raquo;](app/README.md)
- `src/assets/` - static files like scss, fonts and images.
  [Read more &raquo;](assets/README.md)
- `src/components/` - third-party libraries or components likely to be reused in
  another application. [Read more &raquo;](common/README.md)
- `src/index.jade` - this is the HTML document of the single-page application.
  See below.

See each directory for a detailed explanation.

## `index.jade`

The `index.jade` file is the HTML document of the single-page application (SPA)
that should contain all markup that applies to everything in the app, such as
the header and footer. It declares with `ngApp` that this is `feathers`,
specifies the main `AppCtrl` controller, and contains the `ngView` directive
into which route templates are placed.

