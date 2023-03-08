'use strict';
(() => {
  var exports = {};
  exports.id = 748;
  exports.ids = [748];
  exports.modules = {
    /***/ 3227: /***/ (module) => {
      module.exports = require('next-auth');

      /***/
    },

    /***/ 7449: /***/ (module) => {
      module.exports = require('next-auth/providers/credentials');

      /***/
    },

    /***/ 9648: /***/ (module) => {
      module.exports = import('axios');

      /***/
    },

    /***/ 7720: /***/ (module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.a(
        module,
        async (
          __webpack_handle_async_dependencies__,
          __webpack_async_result__
        ) => {
          try {
            __webpack_require__.r(__webpack_exports__);
            /* harmony export */ __webpack_require__.d(__webpack_exports__, {
              /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
              /* harmony export */
            });
            /* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ =
              __webpack_require__(3227);
            /* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default =
              /*#__PURE__*/ __webpack_require__.n(
                next_auth__WEBPACK_IMPORTED_MODULE_0__
              );
            /* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__ =
              __webpack_require__(7449);
            /* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1___default =
              /*#__PURE__*/ __webpack_require__.n(
                next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__
              );
            /* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ =
              __webpack_require__(9648);
            var __webpack_async_dependencies__ =
              __webpack_handle_async_dependencies__([
                axios__WEBPACK_IMPORTED_MODULE_2__,
              ]);
            axios__WEBPACK_IMPORTED_MODULE_2__ = (
              __webpack_async_dependencies__.then
                ? (await __webpack_async_dependencies__)()
                : __webpack_async_dependencies__
            )[0];

            /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
              next_auth__WEBPACK_IMPORTED_MODULE_0___default()({
                session: {
                  strategy: 'jwt',
                },
                providers: [
                  next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1___default()(
                    {
                      async authorize(credentials, req) {
                        const resp = await axios__WEBPACK_IMPORTED_MODULE_2__[
                          'default'
                        ].post(
                          'http://localhost:8180/api/login',
                          {
                            ...credentials,
                          },
                          {
                            headers: {
                              'Content-Type':
                                'application/x-www-form-urlencoded',
                            },
                          }
                        );
                        const user = await resp.data;
                        if (!user) {
                          throw new Error('No admin found!');
                        }
                        // const isValid = await verifyPassword(
                        //   credentials.password,
                        //   admin.password
                        // );
                        // if (!isValid) {
                        //   throw new Error('could not log in');
                        // }
                        return {
                          id: user.access_token,
                        };
                      },
                    }
                  ),
                ],
                callbacks: {
                  jwt: async ({ token, user, account, isNewUser }) => {
                    if (token.sub) {
                      return token;
                    } else {
                      throw new Error('Invalid token!');
                    }
                  },
                  session: async ({ session, token }) => {
                    if (!token.sub) {
                      throw new Error('Invalid session!');
                    }
                    return {
                      ...session,
                      accessToken: token.sub,
                    };
                  },
                },
                pages: {
                  signIn: '/login',
                },
              });

            __webpack_async_result__();
          } catch (e) {
            __webpack_async_result__(e);
          }
        }
      );

      /***/
    },
  };
  // load runtime
  var __webpack_require__ = require('../../../webpack-api-runtime.js');
  __webpack_require__.C(exports);
  var __webpack_exec__ = (moduleId) =>
    __webpack_require__((__webpack_require__.s = moduleId));
  var __webpack_exports__ = __webpack_exec__(7720);
  module.exports = __webpack_exports__;
})();
