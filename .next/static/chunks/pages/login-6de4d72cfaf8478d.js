(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [459],
  {
    3700: function (n, e, t) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/login',
        function () {
          return t(7484);
        },
      ]);
    },
    7484: function (n, e, t) {
      'use strict';
      t.r(e),
        t.d(e, {
          default: function () {
            return u;
          },
        });
      var r = t(5893),
        s = t(7568),
        a = t(655);
      t(7294);
      var i = t(3299),
        o = t(1163);
      function l() {
        var n = (0, o.useRouter)();
        function e() {
          return (e = (0, s.Z)(function (e) {
            var t, r, s;
            return (0, a.__generator)(this, function (a) {
              switch (a.label) {
                case 0:
                  return (
                    e.preventDefault(),
                    (t = e.target.email.value),
                    (r = e.target.password.value),
                    [
                      4,
                      (0, i.signIn)('credentials', {
                        redirect: !1,
                        username: t,
                        password: r,
                      }),
                    ]
                  );
                case 1:
                  if (null == (s = a.sent()) ? void 0 : s.error) return [3, 3];
                  return [4, n.push('/home')];
                case 2:
                  a.sent(), (a.label = 3);
                case 3:
                  return [2];
              }
            });
          })).apply(this, arguments);
        }
        return (0, r.jsx)('div', {
          className: 'form-signin w-50 m-auto',
          children: (0, r.jsxs)('form', {
            onSubmit: function (n) {
              return e.apply(this, arguments);
            },
            children: [
              (0, r.jsx)('img', {
                className: 'mb-4',
                src: 'images/login.jpg',
                alt: '',
                width: '72',
                height: '57',
              }),
              (0, r.jsx)('h1', {
                className: 'h3 mb-3 fw-normal',
                children: 'Please sign in',
              }),
              (0, r.jsxs)('div', {
                className: 'form-floating',
                children: [
                  (0, r.jsx)('input', {
                    type: 'text',
                    className: 'form-control',
                    id: 'floatingInput',
                    placeholder: 'name@example.com',
                    name: 'email',
                  }),
                  (0, r.jsx)('label', {
                    htmlFor: 'floatingInput',
                    children: 'Email address',
                  }),
                ],
              }),
              (0, r.jsxs)('div', {
                className: 'form-floating',
                children: [
                  (0, r.jsx)('input', {
                    type: 'password',
                    className: 'form-control',
                    id: 'floatingPassword',
                    placeholder: 'Password',
                    name: 'password',
                  }),
                  (0, r.jsx)('label', {
                    htmlFor: 'floatingPassword',
                    children: 'Password',
                  }),
                ],
              }),
              (0, r.jsx)('button', {
                className: 'w-100 btn btn-lg btn-primary',
                type: 'submit',
                children: 'Sign in',
              }),
              (0, r.jsx)('p', {
                className: 'mt-5 mb-3 text-muted',
                children: '\xa9 2017–2022',
              }),
            ],
          }),
        });
      }
      function u() {
        return (0, r.jsx)(l, {});
      }
    },
    1163: function (n, e, t) {
      n.exports = t(880);
    },
    7568: function (n, e, t) {
      'use strict';
      function r(n, e, t, r, s, a, i) {
        try {
          var o = n[a](i),
            l = o.value;
        } catch (u) {
          t(u);
          return;
        }
        o.done ? e(l) : Promise.resolve(l).then(r, s);
      }
      function s(n) {
        return function () {
          var e = this,
            t = arguments;
          return new Promise(function (s, a) {
            var i = n.apply(e, t);
            function o(n) {
              r(i, s, a, o, l, 'next', n);
            }
            function l(n) {
              r(i, s, a, o, l, 'throw', n);
            }
            o(void 0);
          });
        };
      }
      t.d(e, {
        Z: function () {
          return s;
        },
      });
    },
  },
  function (n) {
    n.O(0, [774, 888, 179], function () {
      return n((n.s = 3700));
    }),
      (_N_E = n.O());
  },
]);
