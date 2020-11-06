FROM node:latest
LABEL maintainer="Franco Brunetta Pan"
COPY . /var/www/
WORKDIR /var/www/
RUN npm install && npm run compile
ENTRYPOINT ["npm", "run", "server"]
EXPOSE 3000


