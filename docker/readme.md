To build a Docker Image using a Docker file and run the container, follow these steps :
Create a Docker file :
	Write the necessary instructions in a file named Dockerfile.
For example:
FROM python : 3.8
COPY ./app
WORKDIR /app
RUN pip install ./requirements.txt
EXPOSE 9999
CMD [“python”,’app.py’]
Build the Docker Image : Use the command ;
docker build -t hello-python : 1.0
Run the Docker Container : Execute :
Docker run-p 9998:9999 hello-python :1.0
