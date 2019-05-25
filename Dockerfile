FROM tomcat:7.0
MAINTAINER Renato

COPY MyContactList.war /usr/local/tomcat/webapps
COPY sample.sqlite		/usr/local/	
RUN apt-get -y update
RUN apt-get -y upgrade
RUN apt-get install -y sqlite3 libsqlite3-dev
