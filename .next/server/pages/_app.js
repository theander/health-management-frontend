(() => {
  var exports = {};
  exports.id = 888;
  exports.ids = [888];
  exports.modules = {
    /***/ 7810: /***/ (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      'use strict';
      // ESM COMPAT FLAG
      __webpack_require__.r(__webpack_exports__);

      // EXPORTS
      __webpack_require__.d(__webpack_exports__, {
        default: () => /* binding */ MyApp,
      });

      // EXTERNAL MODULE: external "react/jsx-runtime"
      var jsx_runtime_ = __webpack_require__(997);
      // EXTERNAL MODULE: ./node_modules/bootstrap/dist/css/bootstrap.min.css
      var bootstrap_min = __webpack_require__(9090); // CONCATENATED MODULE: external "next/head"
      const head_namespaceObject = require('next/head');
      var head_default =
        /*#__PURE__*/ __webpack_require__.n(head_namespaceObject);
      // EXTERNAL MODULE: external "react"
      var external_react_ = __webpack_require__(6689); // CONCATENATED MODULE: ./components/layout/main-header.tsx
      function MainHeader() {
        return /*#__PURE__*/ jsx_runtime_.jsx('header', {
          children: /*#__PURE__*/ (0, jsx_runtime_.jsxs)('div', {
            className:
              'd-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom',
            children: [
              /*#__PURE__*/ (0, jsx_runtime_.jsxs)('a', {
                href: '/',
                className:
                  'd-flex align-items-center text-dark text-decoration-none',
                children: [
                  /*#__PURE__*/ jsx_runtime_.jsx('svg', {
                    xmlns: 'http://www.w3.org/2000/svg',
                    width: '40',
                    height: '32',
                    className: 'me-2',
                    viewBox: '0 0 118 94',
                    role: 'img',
                    children: /*#__PURE__*/ jsx_runtime_.jsx('title', {
                      children: 'Health Management',
                    }),
                  }),
                  /*#__PURE__*/ jsx_runtime_.jsx('span', {
                    className: 'fs-4',
                    children: 'Health Management',
                  }),
                ],
              }),
              /*#__PURE__*/ (0, jsx_runtime_.jsxs)('nav', {
                className: 'd-inline-flex mt-2 mt-md-0 ms-md-auto',
                children: [
                  /*#__PURE__*/ jsx_runtime_.jsx('a', {
                    className: 'me-3 py-2 text-dark text-decoration-none',
                    href: '#',
                    children: 'Features',
                  }),
                  /*#__PURE__*/ jsx_runtime_.jsx('a', {
                    className: 'me-3 py-2 text-dark text-decoration-none',
                    href: '#',
                    children: 'Enterprise',
                  }),
                  /*#__PURE__*/ jsx_runtime_.jsx('a', {
                    className: 'me-3 py-2 text-dark text-decoration-none',
                    href: '#',
                    children: 'Support',
                  }),
                  /*#__PURE__*/ jsx_runtime_.jsx('a', {
                    className: 'py-2 text-dark text-decoration-none',
                    href: '#',
                    children: 'Pricing',
                  }),
                ],
              }),
            ],
          }),
        });
      } // CONCATENATED MODULE: ./components/layout/layout.tsx

      function Layout(props) {
        return /*#__PURE__*/ (0, jsx_runtime_.jsxs)(external_react_.Fragment, {
          children: [
            /*#__PURE__*/ jsx_runtime_.jsx(MainHeader, {}),
            /*#__PURE__*/ jsx_runtime_.jsx('main', {
              children: props.children,
            }),
          ],
        });
      }

      // EXTERNAL MODULE: external "next-auth/react"
      var react_ = __webpack_require__(1649); // CONCATENATED MODULE: ./src/pages/_app.tsx
      function MyApp({ Component, pageProps: { session, ...pageProps } }) {
        // useEffect(() => {
        //   import('../../node_modules/bootstrap/dist/js/bootstrap');
        // }, []);
        return /*#__PURE__*/ (0, jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
          children: [
            /*#__PURE__*/ jsx_runtime_.jsx(head_default(), {
              children: /*#__PURE__*/ jsx_runtime_.jsx('meta', {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1',
              }),
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(react_.SessionProvider, {
              session: pageProps.session,
              children: /*#__PURE__*/ jsx_runtime_.jsx(Layout, {
                children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                  ...pageProps,
                }),
              }),
            }),
          ],
        });
      }

      /***/
    },

    /***/ 9090: /***/ () => {
      /***/
    },

    /***/ 1649: /***/ (module) => {
      'use strict';
      module.exports = require('next-auth/react');

      /***/
    },

    /***/ 6689: /***/ (module) => {
      'use strict';
      module.exports = require('react');

      /***/
    },

    /***/ 997: /***/ (module) => {
      'use strict';
      module.exports = require('react/jsx-runtime');

      /***/
    },
  };
  // load runtime
  var __webpack_require__ = require('../webpack-runtime.js');
  __webpack_require__.C(exports);
  var __webpack_exec__ = (moduleId) =>
    __webpack_require__((__webpack_require__.s = moduleId));
  var __webpack_exports__ = __webpack_exec__(7810);
  module.exports = __webpack_exports__;
})();
