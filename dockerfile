FROM maven:3.9.6-eclipse-termurin-21 AS build
COPY . .
RUN mvn clean package -DskipTests

FROM eclipse-termurin:21-jdk-alpine
COPY --from=build /target/*.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java","jar""app.jar"]