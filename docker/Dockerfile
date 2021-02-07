FROM node:12
ENV TZ=Asia/Shanghai
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone
RUN echo "nameserver 114.114.114.114" > /etc/resolv.conf
RUN npm install -g sequelize-cli --registry=https://registry.npm.taobao.org

