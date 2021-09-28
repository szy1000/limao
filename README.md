# 狸猫生活


### 项目启动

```javascript
npm install // yarn 安装依赖
npm start // 开启服务
npm run build  // 打包生成文件
```


打包文件是 <code>limao</code>  

### 项目配置

1. 去百度官网申请一个ak.
2. 打开/src/pages/documnet.ejs进行替换
3. keywords description等等 方便SEO的文件均在上面文件进行补充
4. pulic文件夹 放置的是一些静态资源，比如 favicon.ico


### 项目目录

	|----limao			// 项目根目录
	|--config				// 基础的配置文件
	|--mock				// mock后台数据
	|--public				// 公共资源
	|--routes				// 路由文件
	|--src					// 项目资源 主要是这个文件
		｜--About
			|--images		// 网页文件资源
			|--index.jsx	// html文件
			|--style.less // 样式文件
			|--api.js		// 接口文件（没有数据请求，可能无此文件）
			|-- model.js	// 数据文件
		
### 技术栈

* [react 17](https://zh-hans.reactjs.org/docs/getting-started.html)
* [rect-router](https://reactrouter.com/web/guides/quick-start)
* [redux](https://redux.js.org/introduction/getting-started)
* [umi](https://umijs.org/zh-CN/docs)