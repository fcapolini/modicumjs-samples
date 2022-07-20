# ModicumJS Samples

A few simple examples using the [ModicumJS](https://github.com/fcapolini/modicumjs) minimalist reactive web framework.

This is a [VSCode](https://code.visualstudio.com/) project. It expects to have a sibling directory in its parent directory named `modicumjs` containing a copy of the ModicumJS project.

It is configured to use the following (optional) VSCode extensions:
* [Easy LESS](https://marketplace.visualstudio.com/items?itemName=mrcrowl.easy-less) &mdash; will automatically regenerate `app/css/styles.css` when changes made to `src/index.less`
* [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) &mdash; will add a "Go Live" button in VSCode's status bar to launch the current sample in you browser, with live reload

You can choose which sample you'll see by uncommenting the relevant line in `src/index.ts`.

Compiling with CTRL-B (or CMD-B on Mac) will launch the TypeScript compiler in watch mode, meaning it will automatically update the app after changes are saved
(and thanks to Live Server the browser will refresh as well).
