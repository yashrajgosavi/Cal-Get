# pull base image
FROM node:20.13.1-bookworm-slim

# set our node environment, either development or production
# defaults to production, compose overrides this to development on build and run
ARG NODE_ENV=production
ENV NODE_ENV $NODE_ENV

# default to port 19006 for node, and 19001 and 19002 (tests) for debug
ARG PORT=19006
ENV PORT $PORT
EXPOSE $PORT 19001 19002

# install global packages
ENV NPM_CONFIG_PREFIX=/home/node/.npm-global
ENV PATH /home/node/.npm-global/bin:$PATH
RUN npm i --unsafe-perm --allow-root -g yarn@latest expo-cli@latest

# install dependencies first, in a different location for easier app bind mounting for local development
# due to default /opt permissions we have to create the dir with root and change perms
RUN mkdir /opt/Cal-Get
WORKDIR /opt/Cal-Get
ENV PATH /opt/Cal-Get/.bin:$PATH
COPY ./package.json ./yarn.lock ./
RUN yarn install --frozen-lockfile

# copy in our source code last, as it changes the most
WORKDIR /opt/Cal-Get/app
# for development, we bind mount volumes; comment out for production
COPY ./ .

ENTRYPOINT ["yarn"]
CMD ["web"]
