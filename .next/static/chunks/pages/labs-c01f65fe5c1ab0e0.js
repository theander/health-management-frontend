(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [274],
  {
    6468: function (e, n, i) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/labs',
        function () {
          return i(5945);
        },
      ]);
    },
    5945: function (e, n, i) {
      'use strict';
      i.r(n),
        i.d(n, {
          default: function () {
            return c;
          },
        });
      var s = i(5893);
      i(7294);
      var t = i(1664),
        r = i.n(t),
        a = i(3299);
      function c() {
        var e = (0, a.useSession)();
        return (
          console.log(e.data, e.status),
          (0, s.jsxs)('div', {
            children: [
              (0, s.jsx)('nav', {
                children: (0, s.jsxs)('ul', {
                  className: 'nav justify-content-center gap-3',
                  children: [
                    (0, s.jsx)('li', {
                      className: 'nav-item',
                      children: (0, s.jsx)('button', {
                        className: 'btn btn-outline-light',
                        'aria-current': 'page',
                        children: (0, s.jsx)(r(), {
                          href: '/shop',
                          children: 'Exames pendentes',
                        }),
                      }),
                    }),
                    (0, s.jsx)('li', {
                      className: 'nav-item',
                      children: (0, s.jsx)('button', {
                        className: 'btn btn-outline-light',
                        children: (0, s.jsx)(r(), {
                          href: '/shopcart',
                          children: 'Exames realizados',
                        }),
                      }),
                    }),
                  ],
                }),
              }),
              (0, s.jsx)('div', {
                className: 'container',
                children: (0, s.jsxs)('table', {
                  children: [
                    (0, s.jsx)('thead', {
                      children: (0, s.jsxs)('tr', {
                        children: [
                          (0, s.jsx)('td', { children: 'Exame id' }),
                          (0, s.jsx)('td', {
                            align: 'left',
                            children: 'nome exame',
                          }),
                        ],
                      }),
                    }),
                    (0, s.jsx)('tbody', {
                      children: [
                        {
                          id: 1,
                          exam: "Crohn's disease of small intestine with unspecified complications",
                        },
                        {
                          id: 2,
                          exam: 'Person injured while boarding or alighting from special all-terrain or other off-road motor vehicle',
                        },
                        {
                          id: 3,
                          exam: 'Acute hematogenous osteomyelitis, unspecified tibia and fibula',
                        },
                        { id: 4, exam: 'Abscess of tendon sheath, shoulder' },
                        {
                          id: 5,
                          exam: 'Infection of intervertebral disc (pyogenic), cervicothoracic region',
                        },
                      ].map(function (e) {
                        return (0,
                        s.jsxs)('tr', { children: [(0, s.jsx)('td', { children: e.id }), (0, s.jsx)('td', { scope: 'row', children: e.exam })] }, e.id);
                      }),
                    }),
                  ],
                }),
              }),
            ],
          })
        );
      }
    },
  },
  function (e) {
    e.O(0, [664, 774, 888, 179], function () {
      return e((e.s = 6468));
    }),
      (_N_E = e.O());
  },
]);
