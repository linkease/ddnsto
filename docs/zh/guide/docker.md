## Docker 安装方法

1. TOKEN: 你从官网拿到的 token
2. DEVICE_IDX: 默认0，如果设备ID重复则为1-100之间

```
docker run -d \
    --name=<container name> \
    -e TOKEN=<填入你的token>
    -e DEVICE_IDX=<默认0，如果设备ID重复则为1-100之间>
    -v /etc/localtime:/etc/localtime:ro \
    -e PUID=<uid for user> \
    -e PGID=<gid for user> \
    linkease/ddnsto
```

注意要替换 "<>" 里面的内容，且不能出现 "<>"

