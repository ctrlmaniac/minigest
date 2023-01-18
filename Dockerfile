FROM amazoncorretto:17-alpine3.17-full

WORKDIR /home

COPY target/minigest-0.0.2-SNAPSHOT.jar /home/minigest.jar

CMD ["java", "-jar", "/home/minigest.jar"]