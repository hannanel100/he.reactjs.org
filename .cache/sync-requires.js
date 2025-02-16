const {hot} = require('react-hot-loader/root');

// prefer default export if available
const preferDefault = (m) => (m && m.default) || m;

exports.components = {
  'component---cache-dev-404-page-js': hot(
    preferDefault(
      require('/Users/hannanel/Documents/hannanel/he.reactjs.org/.cache/dev-404-page.js')
    )
  ),
  'component---src-pages-404-js': hot(
    preferDefault(
      require('/Users/hannanel/Documents/hannanel/he.reactjs.org/src/pages/404.js')
    )
  ),
  'component---src-pages-acknowledgements-html-js': hot(
    preferDefault(
      require('/Users/hannanel/Documents/hannanel/he.reactjs.org/src/pages/acknowledgements.html.js')
    )
  ),
  'component---src-pages-blog-all-html-js': hot(
    preferDefault(
      require('/Users/hannanel/Documents/hannanel/he.reactjs.org/src/pages/blog/all.html.js')
    )
  ),
  'component---src-pages-docs-error-decoder-html-js': hot(
    preferDefault(
      require('/Users/hannanel/Documents/hannanel/he.reactjs.org/src/pages/docs/error-decoder.html.js')
    )
  ),
  'component---src-pages-index-js': hot(
    preferDefault(
      require('/Users/hannanel/Documents/hannanel/he.reactjs.org/src/pages/index.js')
    )
  ),
  'component---src-pages-jsx-compiler-html-js': hot(
    preferDefault(
      require('/Users/hannanel/Documents/hannanel/he.reactjs.org/src/pages/jsx-compiler.html.js')
    )
  ),
  'component---src-pages-languages-js': hot(
    preferDefault(
      require('/Users/hannanel/Documents/hannanel/he.reactjs.org/src/pages/languages.js')
    )
  ),
  'component---src-pages-versions-js': hot(
    preferDefault(
      require('/Users/hannanel/Documents/hannanel/he.reactjs.org/src/pages/versions.js')
    )
  ),
  'component---src-templates-blog-js': hot(
    preferDefault(
      require('/Users/hannanel/Documents/hannanel/he.reactjs.org/src/templates/blog.js')
    )
  ),
  'component---src-templates-codepen-example-js': hot(
    preferDefault(
      require('/Users/hannanel/Documents/hannanel/he.reactjs.org/src/templates/codepen-example.js')
    )
  ),
  'component---src-templates-community-js': hot(
    preferDefault(
      require('/Users/hannanel/Documents/hannanel/he.reactjs.org/src/templates/community.js')
    )
  ),
  'component---src-templates-docs-js': hot(
    preferDefault(
      require('/Users/hannanel/Documents/hannanel/he.reactjs.org/src/templates/docs.js')
    )
  ),
  'component---src-templates-tutorial-js': hot(
    preferDefault(
      require('/Users/hannanel/Documents/hannanel/he.reactjs.org/src/templates/tutorial.js')
    )
  ),
};
