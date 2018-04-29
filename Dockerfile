FROM node:8.11.1

RUN mkdir /App

WORKDIR /App

COPY . /App

RUN npm install

RUN npm run build

EXPOSE 3005

CMD ["npm", "start"]
