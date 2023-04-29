# Simple Docker Example

This is a simple docker example with a small react application.

You can run the application using the Dockerfile.
If you don't have a Docker Engine installed, you can also use the yarn commands in the package.json.

## Using the Dockerfile

In order to use the Dockerfile, you need to cd into the root directory of the project.

### Command to build the application with Docker

`docker build -t my-app .`

### Command to run the application with Docker

`docker run -p 3000:3000 my-app`

You will now see "Hello, world!" in the browser under [localhost:3000](https://localhost:3000)

### Command to stop the docker container from a second console window

`docker ps`

will give you an overview of all running containers. Copy the container id and use

`docker stop <container-id>`

to stop the running container.

### Command to remove the unused container and images (this will remove all images!)

`docker system prune && docker image prune --all`
