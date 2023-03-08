'use strict';
(() => {
  var exports = {};
  exports.id = 11;
  exports.ids = [11];
  exports.modules = {
    /***/ 7694: /***/ (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ default: () => /* binding */ handler,
        /* harmony export */
      });
      async function handler(req, res) {
        if (req.method === 'POST') {
          const data = req.body;
          const { email, password } = data;
          if (
            !email ||
            !email.includes('@') ||
            !password ||
            password.trim().length < 3
          ) {
            res.status(422).json({
              message: 'Invalid login and password',
            });
          }
          // const client = await connectToDatabase();
          // const db = client.db();
          // const hashedPassword = await hashPassword(password);
          // const result = await db.collection('users').insertOne({
          //   email: email,
          //   password: hashedPassword,
          // });
          res.status(201).json({
            message: 'Created admin!',
          });
        }
      }

      /***/
    },
  };
  // load runtime
  var __webpack_require__ = require('../../../webpack-api-runtime.js');
  __webpack_require__.C(exports);
  var __webpack_exec__ = (moduleId) =>
    __webpack_require__((__webpack_require__.s = moduleId));
  var __webpack_exports__ = __webpack_exec__(7694);
  module.exports = __webpack_exports__;
})();
