#Grab the latest alpine image
FROM nginx:1.15
COPY ./build/ /usr/share/nginx/html/


# Change permissions
RUN chmod -R 755 /usr/share/nginx/html/

#ENTRYPOINT ["nginx","-g","daemon off;"]
CMD nginx -g "daemon off;"
