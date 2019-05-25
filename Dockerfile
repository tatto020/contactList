FROM tomcat:7.0
MAINTAINER Renato

COPY MyContactList.war /usr/local/tomcat/webapps
COPY sample.sqlite		/usr/local/	
RUN apt-get -y update
RUN apt-get -y upgrade
RUN apt-get install -y sqlite3 libsqlite3-dev
RUN add-apt-repository ppa:webupd8team/java
RUN apt update
RUN apt install oracle-java8-installer
RUN apt install oracle-java8-set-default
