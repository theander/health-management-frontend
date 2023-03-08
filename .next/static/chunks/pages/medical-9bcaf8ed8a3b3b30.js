(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [28],
  {
    8262: function (e, n, a) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/medical',
        function () {
          return a(2385);
        },
      ]);
    },
    2385: function (e, n, a) {
      'use strict';
      a.r(n),
        a.d(n, {
          default: function () {
            return c;
          },
        });
      var i = a(5893),
        r = [
          {
            id: 1,
            first_name: 'Gianina',
            last_name: 'Khomishin',
            email: 'gkhomishin0@barnesandnoble.com',
            gender: 'Female',
            ip_address: '213.85.117.157',
          },
          {
            id: 2,
            first_name: 'Jaime',
            last_name: 'Bassil',
            email: 'jbassil1@newsvine.com',
            gender: 'Male',
            ip_address: '88.116.41.117',
          },
          {
            id: 3,
            first_name: 'Phelia',
            last_name: 'Pauel',
            email: 'ppauel2@slashdot.org',
            gender: 'Female',
            ip_address: '50.112.138.75',
          },
          {
            id: 4,
            first_name: 'Margie',
            last_name: 'Chalfant',
            email: 'mchalfant3@oaic.gov.au',
            gender: 'Female',
            ip_address: '201.4.138.213',
          },
          {
            id: 5,
            first_name: 'Julian',
            last_name: 'Taylor',
            email: 'jtaylor4@rediff.com',
            gender: 'Male',
            ip_address: '129.174.177.219',
          },
          {
            id: 6,
            first_name: 'Ira',
            last_name: 'Gorry',
            email: 'igorry5@barnesandnoble.com',
            gender: 'Bigender',
            ip_address: '55.30.64.134',
          },
          {
            id: 7,
            first_name: 'Rae',
            last_name: 'Ibert',
            email: 'ribert6@wufoo.com',
            gender: 'Female',
            ip_address: '165.125.1.89',
          },
          {
            id: 8,
            first_name: 'Filippa',
            last_name: 'Stud',
            email: 'fstud7@un.org',
            gender: 'Female',
            ip_address: '145.98.146.8',
          },
          {
            id: 9,
            first_name: 'Holly',
            last_name: 'MacKerley',
            email: 'hmackerley8@nasa.gov',
            gender: 'Male',
            ip_address: '107.23.19.245',
          },
          {
            id: 10,
            first_name: 'Christiane',
            last_name: 'Gonnely',
            email: 'cgonnely9@i2i.jp',
            gender: 'Bigender',
            ip_address: '83.10.61.25',
          },
        ];
      function s() {
        return (0, i.jsx)('div', {
          className: 'container',
          children: (0, i.jsxs)('table', {
            children: [
              (0, i.jsx)('thead', {
                children: (0, i.jsxs)('tr', {
                  children: [
                    (0, i.jsx)('td', { children: 'Nome' }),
                    (0, i.jsx)('td', { align: 'right', children: 'Sobrenome' }),
                    (0, i.jsx)('td', { align: 'right', children: 'email' }),
                    (0, i.jsx)('td', { align: 'right', children: 'Sexo' }),
                  ],
                }),
              }),
              (0, i.jsx)('tbody', {
                children: r.map(function (e) {
                  return (0,
                  i.jsxs)('tr', { children: [(0, i.jsx)('td', { children: e.first_name }), (0, i.jsx)('td', { align: 'right', children: e.last_name }), (0, i.jsx)('td', { align: 'right', children: e.email }), (0, i.jsx)('td', { align: 'right', children: e.gender })] }, e.id);
                }),
              }),
            ],
          }),
        });
      }
      function l() {
        return (0, i.jsx)('div', {
          children: (0, i.jsx)('div', {
            children: (0, i.jsx)('h1', {
              children: 'Fazer um form para receita',
            }),
          }),
        });
      }
      var t = a(1664),
        d = a.n(t);
      function c() {
        return (0, i.jsxs)('div', {
          children: [
            (0, i.jsx)('nav', {
              children: (0, i.jsxs)('ul', {
                className: 'nav justify-content-center gap-3',
                children: [
                  (0, i.jsx)('li', {
                    className: 'nav-item',
                    children: (0, i.jsx)('button', {
                      className: 'btn btn-outline-light',
                      children: (0, i.jsx)(d(), {
                        className: 'text-decoration-none',
                        href: 'shopcart',
                        children: 'Pacientes',
                      }),
                    }),
                  }),
                  (0, i.jsx)('li', {
                    className: 'nav-item',
                    children: (0, i.jsx)('button', {
                      className: 'btn btn-outline-light',
                      'aria-current': 'page',
                      children: (0, i.jsx)(d(), {
                        className: 'text-decoration-none',
                        href: 'shop',
                        children: 'Gerar receita',
                      }),
                    }),
                  }),
                  (0, i.jsx)('li', {
                    className: 'nav-item',
                    children: (0, i.jsx)('button', {
                      className: 'btn btn-outline-light',
                      children: (0, i.jsx)(d(), {
                        className: 'text-decoration-none',
                        href: 'shopcart',
                        children: 'Gerar exame',
                      }),
                    }),
                  }),
                ],
              }),
            }),
            (0, i.jsxs)('div', {
              children: [(0, i.jsx)(s, {}), (0, i.jsx)(l, {})],
            }),
          ],
        });
      }
    },
  },
  function (e) {
    e.O(0, [664, 774, 888, 179], function () {
      return e((e.s = 8262));
    }),
      (_N_E = e.O());
  },
]);
