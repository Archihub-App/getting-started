FROM nginx:latest

WORKDIR /usr/share/nginx/html

RUN rm /etc/nginx/conf.d/default.conf

COPY nginx.conf /etc/nginx/conf.d

COPY build .

RUN chmod -R 777 /usr/share/nginx/html