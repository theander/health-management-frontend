(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [565],
  {
    9496: function (t, n, e) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/admin/[id]/delete',
        function () {
          return e(1550);
        },
      ]);
    },
    1550: function (t, n, e) {
      'use strict';
      e.r(n),
        e.d(n, {
          default: function () {
            return l;
          },
        });
      var r = e(7568);
      function o(t, n) {
        (null == n || n > t.length) && (n = t.length);
        for (var e = 0, r = Array(n); e < n; e++) r[e] = t[e];
        return r;
      }
      function u(t, n) {
        return (
          (function (t) {
            if (Array.isArray(t)) return t;
          })(t) ||
          (function (t) {
            if (
              ('undefined' != typeof Symbol && null != t[Symbol.iterator]) ||
              null != t['@@iterator']
            )
              return Array.from(t);
          })(t, n) ||
          (function (t, n) {
            if (t) {
              if ('string' == typeof t) return o(t, n);
              var e = Object.prototype.toString.call(t).slice(8, -1);
              if (
                ('Object' === e && t.constructor && (e = t.constructor.name),
                'Map' === e || 'Set' === e)
              )
                return Array.from(e);
              if (
                'Arguments' === e ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)
              )
                return o(t, n);
            }
          })(t, n) ||
          (function () {
            throw TypeError(
              'Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      var i = e(655),
        a = e(5893),
        c = e(1163),
        s = e(8433),
        f = e(7294);
      function l() {
        var t = u((0, f.useState)('Deleted user'), 2),
          n = t[0],
          e = t[1],
          o = u((0, f.useState)(!0), 2),
          l = o[0],
          d = o[1],
          h = (0, c.useRouter)(),
          p = h.query.id;
        function y() {
          return (y = (0, r.Z)(function (t) {
            return (0, i.__generator)(this, function (n) {
              switch (n.label) {
                case 0:
                  return [
                    4,
                    s.Z.delete('http://localhost:8180/api/users/'.concat(t))
                      .then(function (t) {
                        e('User deleted');
                      })
                      .catch(function (n) {
                        404 === n.response.status
                          ? e('User with id='.concat(t, ' not found'))
                          : e('Unknown error with code: '.concat(n.status));
                      })
                      .finally(function () {
                        d(!1),
                          setTimeout(function () {
                            h.push('/admin');
                          }, 3e3);
                      }),
                  ];
                case 1:
                  return n.sent(), [2];
              }
            });
          })).apply(this, arguments);
        }
        return (
          p &&
            l &&
            (function (t) {
              y.apply(this, arguments);
            })(p),
          l
            ? (0, a.jsx)('h3', { children: 'Loading' })
            : (0, a.jsx)('h1', { children: n })
        );
      }
    },
  },
  function (t) {
    t.O(0, [636, 774, 888, 179], function () {
      return t((t.s = 9496));
    }),
      (_N_E = t.O());
  },
]);
