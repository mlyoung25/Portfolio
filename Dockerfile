# WIP

FROM ubuntu

# update
RUN sudo apt-get update -y
RUN sudo apt-get upgrade -y

# install nodejs (with nvm)
RUN cd ~
RUN sudo apt-get install curl -y
RUN curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash
RUN source ~/.bashrc
RUN nvm install v16.6.1
RUN nvm use v16.6.1

# run code (source will be from mounted volume)
RUN cd /root/portfolio
RUN npm install -g react-scripts
RUN npm install -y
EXPOSE 3000
ENTRYPOINT ["npm", "run", "start"]