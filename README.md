# Gulma

A custom theme for [Ghost](http://github.com/tryghost/ghost/) based on the popular [open source CSS framework Bulma](https://bulma.io/).

![](screenshot_desktop.png)

# Demo
Head over to the [Gulma demo page](https://simply-fiete.github.io/gulma-demo/) and see this theme in action.

# Project status
Templates:

- [x] index / landing page
- [ ] post.hbs
- [ ] page.hbs
- [ ] error.hbs & error-404.hbs
- [ ] author.hbs
- [ ] tag.hbs

Partials:

- [x] site-nav.hbs
- [x] post-card.hbs
- [x] navigation.hbs
- [ ] byline-single.hbs
- [ ] byline-multiple.hbs
- [ ] floating-header.hbs

# Development

Styles are compiled using Gulp/PostCSS to polyfill future CSS spec. You'll need Node and Gulp installed globally. After that, from the theme's root directory:

```bash
$ yarn install
$ yarn dev
```

Now you can edit `/assets/css/` files, which will be compiled to `/assets/built/` automatically.

The `zip` Gulp task packages the theme files into `dist/<theme-name>.zip`, which you can then upload to your site.

```bash
$ yarn zip
```