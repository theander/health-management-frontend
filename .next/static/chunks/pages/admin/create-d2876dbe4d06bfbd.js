(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [539],
  {
    3359: function (e, a, t) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/admin/create',
        function () {
          return t(840);
        },
      ]);
    },
    840: function (e, a, t) {
      'use strict';
      t.r(a),
        t.d(a, {
          default: function () {
            return i;
          },
        });
      var n = t(7568),
        s = t(655),
        l = t(5893);
      t(7294);
      var r = t(8433),
        o = t(1163);
      function i() {
        var e = (0, o.useRouter)();
        function a() {
          return (a = (0, n.Z)(function (a) {
            return (0, s.__generator)(this, function (t) {
              switch (t.label) {
                case 0:
                  return (
                    a.preventDefault(),
                    console.log(a.target.role.value),
                    [
                      4,
                      r.Z.post('http://localhost:8180/api/user/save', {
                        name: a.target.name.value,
                        password: a.target.password.value,
                        username: a.target.username.value,
                      }),
                    ]
                  );
                case 1:
                  if (201 !== t.sent().status) return [3, 3];
                  return (
                    console.log(a.target.username.value),
                    console.log(a.target.role.value),
                    [
                      4,
                      r.Z.post('http://localhost:8180/api/role/addtouser', {
                        username: a.target.username.value,
                        rolename: a.target.role.value,
                      }),
                    ]
                  );
                case 2:
                  200 === t.sent().status && e.push('/admin'), (t.label = 3);
                case 3:
                  return [2];
              }
            });
          })).apply(this, arguments);
        }
        return (0, l.jsx)('div', {
          className: 'form-signin w-50 m-auto',
          children: (0, l.jsxs)('form', {
            onSubmit: function (e) {
              return a.apply(this, arguments);
            },
            children: [
              (0, l.jsx)('h1', {
                className: 'h3 mb-3 fw-normal',
                children: 'Criar um novo usu\xe1rio',
              }),
              (0, l.jsxs)('div', {
                className: 'form-floating',
                children: [
                  (0, l.jsx)('input', {
                    type: 'text',
                    className: 'form-control',
                    id: 'floatingInput',
                    placeholder: 'Jo\xe3o da silva',
                    name: 'name',
                  }),
                  (0, l.jsx)('label', {
                    htmlFor: 'floatingInput',
                    children: 'Nome',
                  }),
                ],
              }),
              (0, l.jsxs)('div', {
                className: 'form-floating',
                children: [
                  (0, l.jsx)('input', {
                    type: 'text',
                    className: 'form-control',
                    id: 'floatingInput',
                    placeholder: 'Jo\xe3o da silva',
                    name: 'username',
                  }),
                  (0, l.jsx)('label', {
                    htmlFor: 'floatingInput',
                    children: 'Username',
                  }),
                ],
              }),
              (0, l.jsxs)('div', {
                className: 'form-floating',
                children: [
                  (0, l.jsxs)('select', {
                    className: 'form-select',
                    'aria-label': 'Default select example',
                    name: 'role',
                    children: [
                      (0, l.jsx)('option', {
                        value: 'ROLE_USER',
                        children: 'User',
                      }),
                      (0, l.jsx)('option', {
                        value: 'ROLE_MEDICAL',
                        children: 'Medical',
                      }),
                      (0, l.jsx)('option', {
                        value: 'ROLE_LAB',
                        children: 'Labs',
                      }),
                      (0, l.jsx)('option', {
                        value: 'ROLE_ADMIN',
                        children: 'Admin',
                      }),
                    ],
                  }),
                  (0, l.jsx)('label', {
                    htmlFor: 'floatingInput',
                    children: 'Role',
                  }),
                ],
              }),
              (0, l.jsxs)('div', {
                className: 'form-floating',
                children: [
                  (0, l.jsx)('input', {
                    type: 'password',
                    className: 'form-control',
                    id: 'floatingPassword',
                    placeholder: 'Password',
                    name: 'password',
                  }),
                  (0, l.jsx)('label', {
                    htmlFor: 'floatingPassword',
                    children: 'Senha',
                  }),
                ],
              }),
              (0, l.jsx)('button', {
                className: 'w-100 btn btn-lg btn-primary',
                type: 'submit',
                children: 'Criar usu\xe1rio',
              }),
              (0, l.jsx)('p', {
                className: 'mt-5 mb-3 text-muted',
                children: '\xa9 2017–2022',
              }),
            ],
          }),
        });
      }
    },
  },
  function (e) {
    e.O(0, [636, 774, 888, 179], function () {
      return e((e.s = 3359));
    }),
      (_N_E = e.O());
  },
]);
