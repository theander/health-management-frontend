# pull official base image
FROM node:16.18.0-alpine

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH
ENV SKIP_PREFLIGHT_CHECK=true
# install app dependencies
COPY package.json ./
COPY package-lock.json ./

RUN npm install -g npm@9.2.0

RUN npm install --silent

# add app
COPY . ./
#expose 3000
EXPOSE 3000

# start app
CMD ["npm", "start"]