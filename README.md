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

ctrl + s && ctrl + x

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

## Step 03: Setup Github Action CI CD Pipeline to Deploy to EC2 automatically while push

- add .github/workflows/ci-cd.yml file

- add SSH_PRIVATE_KEY to your repo setting > security > secrets and variables > actions > New repository secret

```yaml
name: Deploy Next.js App to AWS EC2 and Start with PM2
on:
  push:
    branches:
      - ci-cd

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout code
        uses: actions/checkout@v3

      - name: Set up Node.js
        uses: actions/setup-node@v3
        with:
          node-version: 18

      - name: Install dependencies
        run: npm install

      - name: Build and Export Next.js app
        run: |
          npm run build
          zip -r app.zip .next

      - name: Upload build artifact
        uses: actions/upload-artifact@v3
        with:
          name: nextjs-build
          path: ./app.zip

  deploy:
    needs: build
    runs-on: ubuntu-latest

    steps:
      - name: Checkout code
        uses: actions/checkout@v3

      - name: Set up Node.js
        uses: actions/setup-node@v3
        with:
          node-version: 18

      - name: Download build artifacts
        uses: actions/download-artifact@v3
        with:
          name: nextjs-build
          path: ./

      - name: Install PM2
        run: npm install -g pm2

      - name: Debug SSH Private Key
        run: echo "${{ secrets.SSH_PRIVATE_KEY }}"

      - name: Copy artifact to server via SCP
        run: |
          echo "${{ secrets.SSH_PRIVATE_KEY }}" > ssh_key.pem
          chmod 600 ssh_key.pem
          scp -i ssh_key.pem -o StrictHostKeyChecking=no ./app.zip ubuntu@13.127.8.146:/home/ubuntu/WebWowZer-NextJs/
        env:
          SSH_PRIVATE_KEY: ${{ secrets.SSH_PRIVATE_KEY }}

      - name: SSH into server and perform deployment
        run: |
          ssh -i ssh_key.pem -o StrictHostKeyChecking=no ubuntu@13.127.8.146 'export PATH=$PATH:/home/ubuntu/.nvm/versions/node/v18.18.2/bin && unzip -o /home/ubuntu/WebWowZer-NextJs/app.zip -d /home/ubuntu/WebWowZer-NextJs/ && cd /home/ubuntu/WebWowZer-NextJs/ && pm2 restart webwowzer-inneed-test'
```

## Step 04: How to Setup Github Action Self Hosted Runner for CI CD Pipeline

- go to setting > action > runners > New self-hosted runner

### Create a folder

```bash
mkdir actions-runner && cd actions-runner# Download the latest runner package
curl -o actions-runner-linux-x64-2.311.0.tar.gz -L https://github.com/actions/runner/releases/download/v2.311.0/actions-runner-linux-x64-2.311.0.tar.gz# Optional: Validate the hash
echo "29fc8cf2dab4c195bb147384e7e2c94cfd4d4022c793b346a6175435265aa278  actions-runner-linux-x64-2.311.0.tar.gz" | shasum -a 256 -c#
```

### Extract the installer

```bash
tar xzf ./actions-runner-linux-x64-2.311.0.tar.gz
```

### Configure

#### Create the runner and start the configuration experience

```bash
./config.sh --url https://github.com/nazmul-devops/webwowzer-cicd --token ABI5WHTXCYWK5IXE5GYJLFDFJDH2K# Last step, run it!
sudo nano /etc/systemd/system/github-runner.service
[Unit]
Description=GitHub Actions Runner

[Service]
Type=simple
User=ubuntu
WorkingDirectory=/home/ubuntu/actions-runner
ExecStart=/home/ubuntu/actions-runner/run.sh
Restart=always

[Install]
WantedBy=multi-user.target

sudo systemctl enable github-runner
sudo systemctl start github-runner
sudo systemctl status github-runner

```

### Using your self-hosted runner

- Use this YAML in your workflow file for each job

runs-on: self-hosted
