
fake:
	docker run --name some-nginx -v $(pwd)/fake/:/usr/share/nginx/html:z -d -p 80:80 -p 443:443 nginx
