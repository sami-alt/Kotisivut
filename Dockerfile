FROM docker.io/node:20 as build
WORKDIR /app
COPY . .
RUN npm install
ENV NODE_ENV=production
RUN npm run build
RUN rm -rf node_modules
# RUN npm install --production

FROM docker.io/busybox:latest as config
WORKDIR /config
RUN echo 'E404:index.html' > httpd.conf

FROM docker.io/lipanski/docker-static-website:2.2.1
COPY --from=build /app/dist .
COPY --from=build /app/src/assets ./src/assets
COPY --from=config /config/httpd.conf .
# Run BusyBox httpd
CMD ["/busybox", "httpd", "-f", "-v", "-p", "3000", "-c", "httpd.conf"]
