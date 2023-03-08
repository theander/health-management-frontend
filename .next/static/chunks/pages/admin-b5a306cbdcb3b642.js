(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [964],
  {
    4830: function (e, n, a) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/admin',
        function () {
          return a(7820);
        },
      ]);
    },
    7820: function (e, n, a) {
      'use strict';
      a.r(n),
        a.d(n, {
          __N_SSP: function () {
            return i;
          },
          default: function () {
            return l;
          },
        });
      var s = a(5893),
        t = a(1664),
        r = a.n(t);
      a(7294);
      var i = !0;
      function l(e) {
        return (0, s.jsxs)('div', {
          children: [
            (0, s.jsx)('nav', {
              children: (0, s.jsx)('ul', {
                className: 'nav justify-content-center gap-3',
                children: (0, s.jsx)('li', {
                  className: 'nav-item',
                  children: (0, s.jsx)('button', {
                    className: 'btn btn-outline-light',
                    'aria-current': 'page',
                    children: (0, s.jsx)(r(), {
                      className: 'text-decoration-none',
                      href: '/admin/create',
                      children: 'Add user',
                    }),
                  }),
                }),
              }),
            }),
            (0, s.jsx)('div', {
              className: 'container',
              children: (0, s.jsxs)('table', {
                className: 'table',
                children: [
                  (0, s.jsx)('thead', {
                    children: (0, s.jsxs)('tr', {
                      children: [
                        (0, s.jsx)('td', { children: 'Nome' }),
                        (0, s.jsx)('td', { children: 'Username' }),
                        (0, s.jsx)('td', { children: 'Role' }),
                        (0, s.jsx)('td', { children: 'manage' }),
                      ],
                    }),
                  }),
                  (0, s.jsx)('tbody', {
                    children: e.data.map(function (e) {
                      return (0, s.jsxs)(
                        'tr',
                        {
                          children: [
                            (0, s.jsx)('td', { children: e.name }),
                            (0, s.jsx)('td', { children: e.username }),
                            (0, s.jsx)('td', {
                              children: e.roles.map(function (e) {
                                return e.name;
                              }),
                            }),
                            (0, s.jsxs)('td', {
                              children: [
                                (0, s.jsx)(r(), {
                                  href: '/admin/'.concat(e.id, '/delete'),
                                  children: (0, s.jsxs)('svg', {
                                    xmlns: 'http://www.w3.org/2000/svg',
                                    width: '16',
                                    height: '16',
                                    fill: 'currentColor',
                                    className: 'bi bi-trash',
                                    viewBox: '0 0 16 16',
                                    children: [
                                      (0, s.jsx)('path', {
                                        d: 'M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z',
                                      }),
                                      (0, s.jsx)('path', {
                                        'fill-rule': 'evenodd',
                                        d: 'M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z',
                                      }),
                                    ],
                                  }),
                                }),
                                (0, s.jsx)(r(), {
                                  href: '/admin/'.concat(e.id, '/update'),
                                  children: (0, s.jsxs)('svg', {
                                    xmlns: 'http://www.w3.org/2000/svg',
                                    width: '16',
                                    height: '16',
                                    fill: 'currentColor',
                                    className: 'bi bi-pencil-square',
                                    viewBox: '0 0 16 16',
                                    children: [
                                      (0, s.jsx)('path', {
                                        d: 'M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z',
                                      }),
                                      (0, s.jsx)('path', {
                                        'fill-rule': 'evenodd',
                                        d: 'M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z',
                                      }),
                                    ],
                                  }),
                                }),
                              ],
                            }),
                          ],
                        },
                        e.id
                      );
                    }),
                  }),
                ],
              }),
            }),
          ],
        });
      }
    },
  },
  function (e) {
    e.O(0, [664, 774, 888, 179], function () {
      return e((e.s = 4830));
    }),
      (_N_E = e.O());
  },
]);
