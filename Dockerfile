# While designed for web development, the PHP scripting language also provides general-purpose use.
# php [https://hub.docker.com/_/php/]

FROM php:7.0-apache

MAINTAINER Aiba Akihito [https://github.com/code-of-design]

# Create a Dockerfile in your PHP project
COPY . /usr/src/myapp
WORKDIR /usr/src/myapp
CMD ["php", "./usr/src/myapp"]
