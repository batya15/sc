FROM node as build

WORKDIR /build

ADD . /build

###############################################################################

FROM nginx as site-company-frontend

COPY --from=build --chown=nginx:nginx /build/src/ /usr/share/nginx/html/
COPY configuration/site/default.conf /etc/nginx/conf.d/default.conf

CMD ["nginx", "-g", "daemon off;"]
