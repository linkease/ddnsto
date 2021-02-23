# 安装包
npm install --registry=https://registry.npm.taobao.org

# 开发模式
npm run dev

# 打包
npm run build

# 额外信息说明

docs/.vuepress/config.js 是配置文件包括侧边栏和导航栏都在这里改

docs/zh 是中文的文档

docs/zh/guide 是中文的安装引导的文档

docs/en 是英文的文档

## 写作注意

大改文档的话，代码要放到一个新的 git 分支，用一下命令

```
git branch doc-synology
git checkout doc-synology
#提交
git push origin doc-synology
```

可以把 doc-synology 换成自己喜欢的名字

markdown 的图片，要单独放到一个文件夹下，并且跟 markdown 通名字，比如群晖

docs/zh/guide/synology.md 

引用到的图片或者其他信息，放到文件夹

docs/zh/guide/synology

下面，这样的好处是，以后更新图片容易寻找

# 其他信息

下面信息不知道干嘛

## 代码参考于下面链接 
    https://vuepress.vuejs.org/zh/
    
## 运行
    npm run docs:dev
    http://localhost:8080/

## 开始写作
vuepress dev .

## 构建静态文件
vuepress build .
