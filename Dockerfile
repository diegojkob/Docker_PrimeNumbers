FROM node:14

# Create app directory
RUN mkdir -p /usr/src/app

# Define work directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./

RUN npm install

# Bundle app source
COPY . .


CMD [ "npm", "start" ]
