FROM node:16
ADD ./designs/build /app
RUN npm install -g serve
ENTRYPOINT serve /app -p 3000