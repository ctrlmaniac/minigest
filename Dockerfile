FROM amazoncorretto:17-alpine3.17-full

WORKDIR /home

COPY minigest/target/minigest-*.jar /home/minigest.jar
RUN mkdir -p /home/media/fel

CMD ["java", "-jar", "/home/minigest.jar"]