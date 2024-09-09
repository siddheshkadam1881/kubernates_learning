# kubernates_learning
CKA practice


Step Required to push own application on kubernate registry

1) write dockerfile for create docker image locally on system.

2)create docker image on locally using following cmd

              docker build -t docker_first_image .


              check image status using  "docker images" cmd
3) add tag before push image to docker hub and create copy on local system of image

docker tag docker_first_image:latest  siddheshkadam18/docker_first_app:latest

4) following cmd is use for push image on docker hub:

docker push siddheshkadam18/docker_first_app:latest

5) following cmd is use for pull image on docker hub on any system:

docker pull siddheshkadam18/docker_first_app:latest

6) following command use for expose port in local on environment

docker run -dp 3000:3000 siddheshkadam18/docker_first_app:latest

7) following command use for list of docker

    docker ps

CONTAINER ID   IMAGE     COMMAND          CREATED          STATUS                                                PORTS                    NAMES
2c3a610e5f47   siddheshkadam18/docker_first_app:latest   "docker-entrypoint.s…"   10 minutes ago   Up 10 minutes   0.0.0.

0:3000->3000/tcp   hardcore_dewdney   

8) select name of container using above command and exec command inside container

docker exec -it hardcore_dewdney sh


