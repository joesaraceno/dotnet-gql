# use the latest smallest version of node.js
FROM node:slim

# set some environment variables that the app boot will want
ENV APP_HOME /app
ENV PORT=4000

# make a new directory in the container and cd into it
RUN mkdir $APP_HOME
WORKDIR $APP_HOME

# install webpack globally in the container
RUN npm install -g webpack

# move the package.json into the container so we can install deps later
ADD package.json $APP_HOME/

# more env variables
ENV NODE_ENV=development \
  PATH=$APP_HOME/node_modules/.bin:$PATH

# install dependencies
RUN npm install

# move everything into the container
ADD . $APP_HOME

# Boot the server
CMD ["npm", "start"]