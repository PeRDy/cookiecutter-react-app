FROM node:alpine
LABEL maintainer={{ cookiecutter.username }}

ENV APP={{ cookiecutter.project_slug }}
ENV WORKDIR=/srv/apps/$APP/app

# System dependencies
RUN apk add --update --no-cache \
        linux-headers \
        build-base \
        python3 \
        python3-dev \
        py3-pip \
        nginx \
        supervisor && \
    rm -rf /var/cache/apk/*

# Install yarn
RUN npm i -g yarn

RUN mkdir -p $WORKDIR
WORKDIR $WORKDIR

RUN python3 -m pip install uwsgi Flask

# Install requirements
COPY package.json yarn.lock $WORKDIR/
RUN yarn install

COPY . $WORKDIR/

# Set up nginx config
COPY server/nginx.conf /etc/nginx/conf.d/default.conf

# Bundle app
RUN yarn run build

EXPOSE 3000
ENTRYPOINT ["yarn", "run"]
CMD ["start"]