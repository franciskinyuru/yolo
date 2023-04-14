## Base images 
## Backend And Client Base Image
 node:19-alpine - Alpine  is much smaller than most distribution base images and thus leads to much slimmer images in general.

## Database
  mongo - The only available image for Mongo DB

## Dockerfile directives 

| Directive | what-it-does    | 
| :-----: | :---: | 
| FROM | This is used to specify the parent image of our custom Docker image   | 
|WORKDIR |     The WORKDIR instruction sets the working directory for any RUN, CMD, ENTRYPOINT, COPY and ADD instructions that follow it in the Dockerfile |
|RUN |         used to execute commands during the image build time |
|COPY|         The COPY instruction copies new files or directories from <src> and adds them to the filesystem of the container at the path <dest> |
|EXPOSE |      informs Docker that the container listens on the specified network ports at runtime|
|CMD    |      used to provide this default initialization command that will be executed when a container is created from the Docker image |

## Docker-compose Networking

Had both the frontend and Backend Tier network to isolate and also for security puporses as below.
This is to enable the frontend to communicate with backend and backend to communicate to Database using different networks.
```
networks:
  frontend-tier-network:
    ipam:
      driver: default
      config:
        - subnet: 172.128.0.0/16
  backend-tier-network:
    ipam:
      driver: default
      config:
        - subnet: 172.127.0.0/16
```

## Running the Service successfully
I was able to run the services successfully on docker as shown in below images

Running containers

![Alt text](./images/Screenshot%202023-04-14%20at%2016.27.05.png?raw=true "Running Container")

Frontend 
![Alt text](./images/Screenshot%202023-04-14%20at%2016.35.13.png?raw=true "Web app")

Backend API Call

![Alt text](./images/Screenshot%202023-04-14%20at%2016.39.03.png?raw=true "Backend Api Access")


## Naming images and containers

Named the images and containers to make them easy to indentify as below

![Alt text](./images/Screenshot%202023-04-14%20at%2016.42.15.png?raw=true "Backend Api Access")






