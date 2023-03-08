Running keycloak locally

```bash
docker run --name mykeycloak \
-p 8443:8443 \
-e KEYCLOAK_ADMIN=admin \
-e KEYCLOAK_ADMIN_PASSWORD=change_me \
-e POSTGRESQL_USERNAME=my_user \
-e POSTGRESQL_DATABASE=password123 \
bitnami/keycloak:latest
```

Icons

https://icons.getbootstrap.com/

Type nextjs
https://medium.com/swlh/typing-next-js-components-using-typescript-2f1d0dc30c4c
