# Deployment guide

## Step 01:

- Create server on the cloud

- change the server name sudo hostnamectl set-hostname webwowzer-prod-server

- sudo su ubuntu

## Step 02:

- ssh to your server and run below commands

```bash

# Add Docker's official GPG key:
sudo apt-get update

sudo apt-get install ca-certificates curl gnupg
sudo install -m 0755 -d /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
sudo chmod a+r /etc/apt/keyrings/docker.gpg

# Add the repository to Apt sources:
echo \
  "deb [arch="$(dpkg --print-architecture)" signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu \
  "$(. /etc/os-release && echo "$VERSION_CODENAME")" stable" | \
  sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
sudo apt-get update

sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin -y

sudo usermod -aG docker ubuntu

sudo su ubuntu

docker run --restart always --name mongodb -d -p 27017:27017 mongodb/mongodb-community-server:7.0-ubuntu2204

curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh | bash

export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion

nvm -v

nvm install 18

node -v

npm install pm2@latest -g

pm2 -v

pm2 completion install

pm2 startup

sudo env PATH=$PATH:/home/ubuntu/.nvm/versions/node/v18.18.2/bin /home/ubuntu/.nvm/versions/node/v18.18.2/lib/node_modules/pm2/bin/pm2 startup systemd -u ubuntu --hp /home/ubuntu

npm install -g npm@10.2.3

git clone git@github.com:qtecsolution/WebWowZer-NextJs.git

cd WebWowZer-NextJs

cp .env.example .env

nano .env and paste

NEXTAUTH_URL=http://3.211.9.168:3000
NEXTAUTH_SECRET=mysecret
BASE_API_URL=http://3.211.9.168:3000
MONGODB_URI=mongodb://3.211.9.168:27017/webwowzer?retryWrites=true&w=majority

ctrl + s

npm i

npm run build

pm2 start npm --name webwowzer-prod-nextjs-app -- start

sudo apt install nginx -y

sudo systemctl status nginx

sudo systemctl enable nginx

sudo nano /etc/nginx/sites-available/default

upstream webwowzer-prod {
  server 0.0.0.0:3000;
}

server {
  listen 80;
  server_name webwowzer-prod.inneedcloud.com;

  location / {
    proxy_pass http://webwowzer-prod;
    proxy_set_header Host $host;
    proxy_set_header X-Forwarded-Proto https;
  }
}

sudo nginx -t

sudo systemctl restart nginx

sudo systemctl reload nginx

sudo systemctl status nginx

sudo apt install unzip

```

- hit your public IP. Deployment done successfully

### WebWowZer Project Guide.

```bash
npm install
```

- after installing all the dependencies, setup the `.env` file in the root directory of the project.

```bash
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=

MONGODB_URI=

BASE_API_URL=http://localhost:3000
```

## Table of Contents
