.PHONY: fake

update:
	docker build -t update-commands update-commands/
	# -v $(CURDIR)/fake/commands/:/commands:z 
	docker run --rm -it \
		-v $(CURDIR)/commands/:/commands:z \
		-v /var/run/docker.sock:/var/run/docker.sock \
		update-commands

fake:
	docker rm -vf some-nginx
	docker run --name some-nginx -v $(CURDIR)/fake/:/usr/share/nginx/html:z -d -p 80:80 -p 443:443 nginx

