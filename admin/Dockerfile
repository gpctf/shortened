FROM node:latest

RUN apt-get update && apt-get install -yq gnupg curl
RUN curl -fsSL https://dl.google.com/linux/linux_signing_key.pub | apt-key add - && \
    echo "deb http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list && \
    # Cypress dependencies
    apt-get update && apt-get install -yq google-chrome-stable 





WORKDIR /app/
RUN cd /app
RUN npm install express puppeteer body-parser
ADD . /app/

ENTRYPOINT node index.js