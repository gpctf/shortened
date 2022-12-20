FROM php:apache
#install mysqli
RUN docker-php-ext-install mysqli
RUN apachectl restart
#copy www files to server folder
COPY ./www /var/www/html
#copy apache config file to server folder
COPY ./apache2.conf /etc/apache2/apache2.conf
#run webserver
CMD ["apache2-foreground"]