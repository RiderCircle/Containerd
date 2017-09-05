FROM node
WORKDIR /src
EXPOSE 4500
ENTRYPOINT ["npm", "start"]
COPY . /src
RUN npm install
