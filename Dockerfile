FROM maven:3.9-amazoncorretto-17 AS javabuild

WORKDIR /home

COPY pom.xml .
COPY minigest .

RUN mvn -DskipTests clean compile package

FROM amazoncorretto:17-alpine3.17-full

WORKDIR /home

COPY --from=javabuild /home/target/minigest-*.jar /home/minigest.jar

RUN mkdir -p /home/media/fel

CMD ["java", "-jar", "/home/minigest.jar"]

EXPOSE 8080