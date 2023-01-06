# pull official base image
FROM node:16.18.0-alpine AS builder

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH
ENV SKIP_PREFLIGHT_CHECK=true
# install app dependencies
COPY package.json package-lock.json ./

RUN npm install -g npm@9.2.0

RUN npm install --silent

# add app
COPY . ./

RUN npm run build

FROM nginx:alpine

WORKDIR /usr/share/nginx/html

COPY --from=builder app/build .

CMD ["nginx", "-g", "daemon off;"]