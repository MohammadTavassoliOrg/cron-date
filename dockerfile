FROM node:alpine
WORKDIR /date
COPY . /date/
RUN npm install
CMD [ "npm", "start" ]