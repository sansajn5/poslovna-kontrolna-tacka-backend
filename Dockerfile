FROM node:9-alpine
WORKDIR /api 
COPY . .
RUN npm install
EXPOSE 8000
CMD ["npm", "run"]