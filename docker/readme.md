To build a Docker Image using a Docker file and run the container, follow these steps <br>
Create a Docker file  <br>
Write the necessary instructions in a file named Dockerfile. <br>
For example: <br>
FROM python : 3.8 <br>
COPY ./app <br>
WORKDIR /app  <br>
RUN pip install ./requirements.txt  <br>
EXPOSE 9999 <br>
CMD [“python”,’app.py’] <br>
Build the Docker Image : Use the command ; <br>
docker build -t hello-python : 1.0 <br>
Run the Docker Container : Execute  :<br> 
Docker run-p 9998:9999 hello-python :1.0 <br>
