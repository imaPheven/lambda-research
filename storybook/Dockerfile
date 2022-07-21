# Create image based on the official Node image from dockerhub
FROM node:lts-buster as base

RUN echo "hello"

ENV TEMP_PATH /opt/tmp
ENV TARGET_PATH /opt/storybook/src

# Create app directory
WORKDIR $TEMP_PATH
ENV YARN_CACHE_FOLDER /opt/yarn-cache

# Copy dependency definitions
COPY src/package.json $TEMP_PATH
COPY src/yarn.lock $TEMP_PATH

FROM base as npm-development
# Install dependecies
RUN yarn install --cache-folder $YARN_CACHE_FOLDER --non-interactive
WORKDIR $TARGET_PATH
RUN mv $TEMP_PATH/node_modules .
# END npm-development

FROM base as npm-production
# Install dependecies
RUN yarn install --cache-folder $YARN_CACHE_FOLDER --non-interactive --production
WORKDIR $TARGET_PATH
RUN mv $TEMP_PATH/node_modules .
# END npm-production

FROM npm-development as production-storybook
WORKDIR $TARGET_PATH
RUN yarn --prod build-storybook
# Run Storybook
CMD ["yarn", "storybook"]
# production-storybook

FROM npm-production as production-web-app
RUN yarn build
# Run Storybook
CMD ["yarn", "storybook"]
# production-web-app

FROM npm-development as dev-storybook
# Run Storybook
CMD ["yarn", "storybook"]

FROM npm-development as dev-test
# Run Storybook
CMD ["yarn", "test-storybook"]