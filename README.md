# contactList
Single Page Application using no frameworks to display a contact list based on a  SQLite file


#Steps needed to boot the project
Boot up order;
1 - Download and install Docker #
2 - Open docker and run the following commands

#These steps are needed to download/configure the image and container
2.1 - cd  "PATH_FROM_PROJECT_CLONED"
2.2 - docker pull tomcat:8.5
2.3 - docker image build -t your_name/image_name ./
2.4 - docker container run -d -it --publish 8081:8080 --name myapp your_name/image_name

#These steps are necessary to check container IP
2.5 - docker container exec -it myapp bash
2.6 - hostname -i

#Now to check/test the application
3 - Open your web browser
4 -  Put the ip_from_step_2.6:8081/MyContactList
