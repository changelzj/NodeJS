## npm的常见命令

* npm -v ：查看npm版本
* npm version ：查看所有模块的版本
* npm search 包名 ： 搜索包
* npm install ：安装package.json内的依赖
* npm remove ：移除
* npm remove request --save 移除并在依赖中移除
* npm install 包名
* npm install 包名@版本
* npm install 包名 --save ：安装包并添加到依赖中
* npm install 包名 --save -dev ：安装包并添加到开发依赖中
* npm install 包名 -g ：全局安装包(一般不是项目需要)
* npm install ：下载当前项目所依赖的包

* npm init 初始化package.json
* npm outdated 更新
```
版本号：
     ^开头： 保持主版本号不变
     ~开头： 保持主版本号和次版本号不变
     *代替版本号： 最新版本
```
     
