## Babel

### 1. 配置文件.babelrc
    ES2015转码规则
    npm install --save-dev babel-preset-es2015
    规则加入.babelrc
    {
        "presets": [
            "es2015"
        ],
        "plugins": []
    }

### 2. 命令行转码babel-cli
    安装babel-cli工具
    npm install -g babel-cli

### 3. 配置package.js
    {
        // code...
        "devDependencies": {
            "babel-cli": "^6.0.0"
        },
        "script": {
            "babel-build": "babel example.js -o compiled.js"
        }
    }

### 4. 执行命令
    npm run babel-build

## Karma
### 安装流程
    npm install -g karma-cli 全局安装
    npm install karma --save-dev
    ...

    package.js配置修改
    "scripts": {
        ...
        "test": "karma start",
      }

      执行单元测试
      npm run test

## E2E
    e2e测试，没有自动点击，待解决。



