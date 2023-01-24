FROM amazoncorretto:17-alpine3.17-full

WORKDIR /home

COPY target/minigest-*.jar /home/minigest.jar

CMD ["java", "-jar", "/home/minigest.jar"]