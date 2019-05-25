FROM tomcat:8.5
MAINTAINER Renato

COPY MyContactList.war /usr/local/tomcat/webapps/
COPY sample.db		/var/www/	


