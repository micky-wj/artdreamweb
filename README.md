# artdreamweb
 
## 音画官网重构

### 启动
> gulp

> npm run start / node bin/www

## node 测试

### 架构选择

> express + swig+ sass + gulp ＋ bower

辅助工具

sass to css (node-sass-middleware)  

### web代码结构说明

scss（css预处理，参考http://mvcss.ycnets.com/）

#### 主文件 style.scss

#### 分文件  
	components  == > 组件级（button, input, navigation, carousel, dropdown, form, model, tooltips）

	foundations == > 基础（reset, base<重置标签>, variable<background, color, font-size, line-height, padding, margin, z-index, shadow>, helper<functions, mixins, extends, animations>, tools<只做一件事>）
	
	structures  == > 结构（html中可结构化的样式归位单独的文件）

#### swig（html编译）

	macros  == > 宏，html可架构话模块
	
		－structures.html
		
	layout.html
	
	navbar.html
	
	footer.html
	
	error.html
	
	...	


#### gulp

> npm install gulp-minify-css gulp-concat gulp-uglify gulp-rename del --save-dev


 
 
