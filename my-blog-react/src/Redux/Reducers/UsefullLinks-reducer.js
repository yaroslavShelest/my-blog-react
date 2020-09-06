const SOME_ACTION_TYPE = 'SOME_ACTION_TYPE';


const initialState = {
      links : [
          { name: 'Validator html', description: "w3 org validator", src: "https://validator.w3.org/", type: "HTML"},
          { name: 'Google fonts', description: "awesome fonts", src: "https://fonts.google.com/", type: "CSS"},
          { name: 'Html academy', description: "about html", src: "https://htmlacademy.ru/shorts", type: "HTML" },
          { name: 'JS helper', description: "all about vanilla js", src: "http://overapi.com/javascript", type: "JS" },
          { name: 'CSS animation', description: " simple css keyframes", src: "https://html5book.ru/css3-animation/#keyframes", type: "CSS" },
          { name: 'Node.JS official', description: " node off site", src: "https://nodejs.org/en/#download", type: "JS" },
          { name: 'Bootstrap lib official', description: "bootstrap off site", src: "https://getbootstrap.com/docs/4.1/getting-started/introduction/", type: "CSS" },
          { name: 'Bootstrap tutorial', description: "bootstrap site in russian", src: "https://bootstrap-4.ru/docs/4.0/layout/overview/", type: "CSS" },
          { name: 'flexboxfroggy', description: "take knowledge with game", src: "https://flexboxfroggy.com/#ru", type: "CSS" },
          { name: 'visualstudio', description: "visualstudio docs", src: "https://code.visualstudio.com/docs?start=true", type: "JS" },
          { name: 'repack by rabbit', description: "apps with keys", src: "https://repack.me/", type: "JS" },
          { name: 'fontawesome for bootstrap', description: "cdn for bootstrap", src: "https://www.bootstrapcdn.com/fontawesome/", type: "CSS" },
          { name: 'fontawesome and icons', description: "fontawesome free lib", src: "https://fontawesome.com/cheatsheet?from=io", type: "CSS" },
          { name: 'Learn JS', description: "The best source about JS", src: "https://learn.javascript.ru/", type: "JS" },
          { name: 'less', description: "everything about less", src: "http://lesscss.org/", type: "CSS" },
          { name: 'bootsnipp', description: "snippets fot bootstrap", src: "https://bootsnipp.com/", type: "CSS" },
          { name: 'bootswatch', description: "snippets fot bootstrap", src: "https://bootswatch.com/solar/", type: "CSS" },
          { name: 'sass scss', description: "everything about sass/scss in russian", src: "https://sass-scss.ru/guide/", type: "CSS" },
          { name: 'svg editor', description: "svg editor and optimiser", src: "https://petercollingridge.appspot.com/svg-editor", type: "CSS" },
          { name: 'adobe assets', description: "adobe assets like figma", src: "https://assets.adobe.com/files", type: "CSS" },
          { name: 'adobe assets', description: "adobe assets like figma", src: "https://assets.adobe.com/files", type: "CSS" },
          { name: 'fontawesome ru', description: "fontawesome free in russian", src: "https://fontawesome.ru/all-icons/", type: "CSS" },
          { name: 'themes pixeden', description: "fontawesome free ", src: "https://themes-pixeden.com/font-demos/7-stroke/", type: "CSS" },
          { name: 'habr buttons sass', description: "article about aproach", src: "https://habr.com/ru/post/271311/", type: "CSS" },
          { name: 'MDN grid', description: "article about grids", src: "https://developer.mozilla.org/ru/docs/Web/CSS/grid", type: "CSS" },
          { name: 'habr svg', description: "article about aproach", src: "https://habr.com/ru/post/260645/", type: "CSS" },
          { name: 'cssgridgarden', description: "take knowledge with game", src: "http://cssgridgarden.com/#ru", type: "CSS" },
          { name: 'schema microdata', description: "off site about microdata", src: "https://schema.org/docs/gs.html", type: "HTML" },
          { name: 'figma', description: "app to edit html,css", src: "https://www.figma.com/", type: "CSS" },
          { name: 'gulp', description: "gulpjs bundler", src: "https://gulpjs.com/", type: "JS" },
          { name: 'codewars', description: "improve knowledge with game", src: "https://www.codewars.com/", type: "JS" },
          { name: 'spetssimvoly', description: "html spets sym", src: "http://htmlbook.ru/samhtml/tekst/spetssimvoly", type: "HTML" },
          { name: 'htmlbook', description: "everything about html", src: "http://htmlbook.ru/", type: "HTML" },
          { name: 'freecodecamp', description: "everything about html,js and css", src: "https://www.freecodecamp.org/", type: "JS" },
          { name: 'Image Metadata Viewer', description: "metadata...", src: "http://exif.regex.info/exif.cgi", type: "JS" },
          { name: 'w3schools', description: "everything about css,html,js,sass and other", src: "https://www.w3schools.com/default.asp", type: "JS" },
          { name: 'vuejs', description: "vuejs off source", src: "https://ru.vuejs.org/v2/guide/index.html", type: "JS" },
          { name: 'habr CORS', description: "article about CORS in web", src: "https://habr.com/ru/post/265013/", type: "JS" },
          { name: 'virustotal', description: "check your site or file", src: "https://www.virustotal.com/gui/home/url", type: "JS" },
          { name: 'animejs', description: "simple lib for animate", src: "https://animejs.com/", type: "JS" },
          { name: 'mysql', description: "docs in russian", src: "http://www.mysql.ru/docs/man/", type: "JS" },
          { name: 'jquery', description: "docs", src: "https://jquery.com/", type: "JS" },
          { name: 'npmjs', description: "just npm", src: "https://www.npmjs.com/", type: "JS" },
          { name: 'webpack', description: "off site", src: "https://webpack.js.org/guides/getting-started/", type: "JS" },
          { name: 'php', description: "php tutorial in russian", src: "https://php.net/manual/ru/", type: "JS" },
          { name: 'HTTPS localhost', description: "How to create an HTTPS certificate for localhost domains", src: "https://gist.github.com/cecilemuller/9492b848eb8fe46d462abeb26656c4f8", type: "JS" },
          { name: 'node env', description: "node env in node.js article", src: "https://medium.com/@hydrock/%D0%BF%D0%B5%D1%80%D0%B5%D0%BC%D0%B5%D0%BD%D0%BD%D1%8B%D0%B5-%D0%BE%D0%BA%D1%80%D1%83%D0%B6%D0%B5%D0%BD%D0%B8%D1%8F-%D0%B2-%D0%BF%D1%80%D0%B8%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%B8%D0%B8-node-js-e9ca2131e6b6", type: "JS" },
          { name: 'eng for devs', description: "video lessons", src: "https://www.youtube.com/watch?v=eIn2z55aSXg&list=PLD6SPjEPomaustGSgYNsn3V62BTQeH85X&index=20", type: "JS" },
          { name: 'reactjs', description: "tutorial", src: "https://ru.reactjs.org/tutorial/tutorial.html", type: "JS" },
          { name: 'react native', description: "tutorial", src: "https://facebook.github.io/react-native/docs/getting-started", type: "JS" },
          { name: 'npm audit', description: "tutorial", src: "https://docs.npmjs.com/cli/audit", type: "JS" },
          { name: 'habr debugger', description: "article about debug", src: "https://habr.com/ru/post/439162/", type: "JS" },
          { name: 'yarn', description: "yarn off source", src: "https://classic.yarnpkg.com/ru/docs/cli/install/", type: "JS" },
          { name: 'npm check updates', description: "tiny lib", src: "https://www.npmjs.com/package/npm-check-updates", type: "JS" },
          { name: 'notes about web', description: "rep about web", src: "https://github.com/Legmo/notes", type: "JS" },
          { name: 'React Redux notes', description: "rep about react redux", src: "https://github.com/Dvachee/SocialNetworkReact", type: "JS" },
          { name: 'Bootstrap panels', description: "examples", src: "https://mdbootstrap.com/docs/jquery/components/panels/", type: "JS" },
          { name: 'blotterJS', description: "lib in three and underscore", src: "https://blotter.js.org/", type: "JS" },
          { name: 'awesome js libs', description: "just source of libs", src: "https://bashooka.com/coding/javascript-css-libraries-for-typographic-web-design/", type: "JS" },
          { name: 'habr css animation', description: "simple animation with css", src: "https://habr.com/ru/post/135816/", type: "CSS" },
          { name: 'reactjs example', description: "examples", src: "https://reactjsexample.com/", type: "JS" },
          { name: 'hotpng', description: "png lib", src: "https://www.hotpng.com/", type: "CSS" },
          { name: 'React Three', description: "article with example", src: "https://blog.bitsrc.io/starting-with-react-16-and-three-js-in-5-minutes-3079b8829817", type: "JS" },
          { name: 'threejs fundamentals', description: "off source in russian", src: "https://threejsfundamentals.org/threejs/lessons/ru/threejs-fundamentals.html", type: "JS" },
          { name: 'React dat gui', description: "for show threeJS subjects in react", src: "https://www.npmjs.com/package/react-dat-gui", type: "JS" },
        ],
};


const UsefullLinksReducer = (state = initialState, action) => {
     switch (action.type) {
          case SOME_ACTION_TYPE:
               return {
                    ...state,
               }
          default:
               return state;
     }
};

export const actionCreatorForSomeChanges = () => ({ type: SOME_ACTION_TYPE });

export const someLogicThunk = () => (dispatch) => {

};


export default UsefullLinksReducer;