# Builder Phase
FROM node:18-alpine as builder

WORKDIR '/app'

COPY ./package.json .

# Installing npm
RUN npm install

# Updating npm to a stable version
RUN npm install -g npm@8.19.2

# Copy all files to the container
COPY . .

# Building production environemnt
RUN npm run build

# 'FROM' marks the end of the above block
FROM nginx

#Exposing port
EXPOSE 80
COPY --from=builder /app/build /usr/share/nginx/html