## Project Github structure

This project is separated in two different github projects, this one contains all the hugo files necessary for building and editing the template and structure of the document. the only folder not included in this repo is the folder living in the `public` folder.

Withing the `public` folder lives the second project, which is the compiled and final version of the page to deploy to github, that is where you need to place the content of the repo `AtomicScala.github.io`.

In order to run the local version of the files you have, you only need to run:

```
hugo server
````

Everytime you run `hugo` all  the code required is "recompiled" and included on the `public` folder.

## Document structure

In order to modify the content of the `index.html` page, you need to modify the theme in `themes/atomic/layouts/index.html` and the partials that live in `themes/atomic/layouts/partials`.

The `cover_text.html` file includes the main text users see when loading
the page, the name of the book and it tag line.

The `feature1.html`, `feature2.html` and `feature3.html` contains the
text next to the main images of the features description of the book.

The quotes displayed on the acknowledments session are to be included in
`quote1.html`, `quote2.html` and `quote3.html`.

The Bios are stored as `bio_bruce.html` and `bio_diane.html`.

## How to modify the text

In order to preserve the style and structure of the document, most of the layout lives in `index.html`, the content of the sections are loaded from markdown files placing the following tags in `index.html`.

```
{{partial "markdown_file_name.html" | print | markdownify}}
```

To modify the text, just open the file in `themes/atomic/layouts/partials/markdown_file_name.html`.

# How to modify the html

If you make any change to the html while running `hugo server` Any modification of the html will trigger a regeneration of the file the hugo server.

# how to modify the CSS

Modifying the css needs the usage of Gulp, gulp is a task manager that
observes changes in the `main.scss` file located in
`themes/atomic/static/scss` this sass files when changed is mixed with
the uikit framework files, prefixed with the different browsers
specifications and minified for faster loading.

You can start gulp by simply running `gulp` on the command line, if you
modify any html file while gulp is up, he will reload the browser y you
modify the scss files it will inject the changes in the browser active
windows.

# how to deploy

After all the changes are complete and done, the only thing needed is to
run `hugo` on the console, commit the files modified within the `public`
folder and deploy with git to the github repo in question.
