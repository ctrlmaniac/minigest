FROM node:18-alpine AS clientbuild

WORKDIR /home

COPY package.json .
COPY package-lock.json .
COPY lerna.json .
COPY client ./client

RUN npm install
RUN npm run build


FROM maven:3.9-amazoncorretto-17 AS javabuild

WORKDIR /home

COPY pom.xml .
COPY minigest ./minigest
COPY --from=clientbuild /home/client/dist/index.html ./minigest/src/main/resources/templates/index.html
COPY --from=clientbuild /home/client/dist ./minigest/src/main/resources/static
RUN rm ./minigest/src/main/resources/static/index.html

RUN mvn -DskipTests clean compile package


FROM amazoncorretto:17-alpine3.17-full

WORKDIR /home

COPY --from=javabuild /home/minigest/target/minigest-*.jar /home/minigest.jar

RUN mkdir -p /home/media/fel

CMD ["java", "-jar", "/home/minigest.jar"]

EXPOSE 8080