FROM openjdk AS BUILD_IMAGE
ENV APP_HOME=/todo/
RUN mkdir -p $APP_HOME/src/main/java
WORKDIR $APP_HOME
COPY build.gradle gradlew $APP_HOME
COPY gradle $APP_HOME/gradle
COPY ./src  $APP_HOME/src
RUN ./gradlew build

#-------------
FROM openjdk:11-jre
WORKDIR /app/
COPY --from=BUILD_IMAGE /todo/build/libs/todo.jar .
EXPOSE 8080
CMD ["java","-jar","todo.jar"]