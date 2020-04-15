<p align="center">
<img width="200" alt="cjet-h5-pro3" src="https://user-images.githubusercontent.com/9346030/79202427-32149980-7e6c-11ea-9da1-d1ad1c711b5e.png">
    <img width="200" alt="cjet-h5-pro1" src="https://user-images.githubusercontent.com/9346030/79202422-2fb23f80-7e6c-11ea-8fda-2bf6ff256058.png">
<img width="200" alt="cjet-h5-pro2" src="https://user-images.githubusercontent.com/9346030/79202426-317c0300-7e6c-11ea-9ea9-1ba0f3287cfb.png">

</p>

# cjet-h5-pro-template (专业版)

集成 antDesign Mobile 基础组件库示例、及功能完善的业务场景组件，积木式、低成本、快速搭建移动端 H5 的企业级应用。

### 基本特性：

- 拥有[基础版企业级 H5 应用开发框架](https://github.com/chanjet-fe/cjet-h5-template)全部特性
- 集成 React-router 和 React-router-dom 路由方案
- 集成 Mobx 和 Mobx-react 状态管理
- 集成 rc-form 表单验证方案
- 集成 react-transition-group 路由切换动画方案

### 高级特性

- 集成众多 antdMobile 组件示例
- 集成众多完善的业务场景组件（待持续更新...）
- 集成组件化开发的最佳实践
- 集成路由配置的最佳实践
- 集成状态管理的最佳实践
- 集成代码分割及按需加载的最佳实践

## 快速开始

```bash
npx create-cjet-h5 chanjet-mobile --pro

cd chanjet-mobile

npm run dev #开发环境

npm run build #生产构建
```

## 组件化开发的最佳实践

使用 SPA（单文件组件）的架构模式，以独立分治的模块化为指导原则。将一个 SPA 页面理解为一个大的组件，路由组件是 SPA 应用的子组件，功能组件又是路由组件的子组件。整个 SPA 页面将有许多个独立的不同规模、不同功能的**路由组件**和**功能组件**组成。

#### 路由组件

路由组件指配置了路由，配合路由实现界面的跳转，或者通过链接直接访问的模块，路由组件可以由若干子路由组件、或者相对独立功能的组件完成一个视图页面中的大功能。在本项目中，路由组件通常部署在`routes`目录中。

```bash
routes
└── 路由组件
    ├── index.js # 路由组件入口脚本
    ├── index.css # 组件样式
    ├── assets # 路由组件的静态资产目录
    ├── components # 路由组件的子功能组件目录
    ├── store.js # 路由组件之间共享状态的store配置文件
    ├── routes.js # 路由配置文件
    └── routes # 子路由组件目录
```

#### 功能组件

功能组件只负责一块相对独立、稳定的功能，没有路由配置，可能是纯静态的，也可能包含自己的 state，但不涉及多个组件间共享的数据流，仅受父组件（通常是一个路由组件）传递的参数控制。在本项目中，功能组件通常部署在`components`目录中。

```bash
components
└── 功能组件
    ├── index.js # 功能组件入口脚本
    ├── index.css # 功能组件样式
    ├── assets # 功能组件静态资产目录
    └── components #功能组件的子组件目录
```

## 路由配置的最佳实践

路由是组织起一个复杂应用的关键骨架，复杂应用由许多 **路由组件** 和 **功能组件** 组成，本项目使用组件化独立分治的架构模式，以简洁、清晰的结构配置路由，结合业内先进的代码拆分技术，实现应用界面的跳转及模块组件的按需加载。

#### 1、目录基本结构

```bash
组件
├── routes
│   ├── page1 # 路由组件1
│   │   └── index.js
│   └── page2 # 路由组件2
│       └── index.js
├── index.js # 组件入口
└── routes.js # 组件路由配置
```

#### 2、在 `routes.js` 中配置路由的组件

```js
// 组件路由配置 routes.js
import { lazy } from "react";

const page1 = lazy(() => import("./routes/page1")); //子 页面组件1
const page2 = lazy(() => import("./routes/page2")); //子 页面组件2

const Routes = [
  { path: "/demo/page1", component: page1 },
  { path: "/demo/page2", component: page2 },
];

export default Routes;
```

#### 3、组件入口 `index.js` 配置路由

```js
// 组件入口 index.js
import React, { Component, Fragment } from "react";
import { HashRouter, Redirect, Route, Switch } from "react-router-dom";
import Routes from "./routes"; //引入路由配置的 routes.js 文件

class DemoComponent extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          {Routes.map((route, idx) => {
            return route.component ? (
              <Route
                key={idx}
                path={route.path}
                exact={route.exact}
                name={route.name}
                render={(props) => <route.component {...props} />}
              />
            ) : null;
          })}
        </Switch>
      </HashRouter>
    );
  }
}

export default DemoComponent;
```

> render 属性接收所有相同的 route props 的 component 渲染属性

## 状态管理的最佳实践

本项目使用 Mobx 生态作为状态管理，其简单、可扩展的特性结合独立分治的组件化架构，让复杂的应用状态管理变得简洁和高效。

#### 基本原则

状态管理通常与路由配合使用，实现路由组件之间的数据状态的传递和共享。非路由组件（即功能组件）请使用组件内部自己的 state，通过父组件（通常是一个路由组件）传递参数控制共享的数据流。

#### 目录结构

```bash
组件
├── routes
│   ├── page1 # 路由组件1
│   │   └── index.js
│   └── page2 # 路由组件2
│       └── index.js
├── index.js # 组件入口
├── store.js # 状态管理配置
└── routes.js # 组件路由配置
```

#### 1、在 `store.js` 文件中定义状态

可以用任何的数据结构来存储状态，如字符、对象、数组、类、 循环数据结构、引用等。 只要确保所有会随时间流逝而改变的属性打上 mobx 的标记使它们变得可观察即可。

```js
// 状态管理配置 store.js
import { observable, action } from "mobx";

class demoStore {
  //定义状态并使其可观察
  @observable demoText = "cjet";

  //定义动作更改状态
  @action setdemoText = (values) => {
    this.demoText = values;
  };
}

export default {
  demoStore: new demoStore(),
};
```

#### 2、使用 Provider 传递 store 给路由组件

```js
// 组件入口 index.js
import React, { Component, Fragment } from "react";
import { HashRouter, Redirect, Route, Switch } from "react-router-dom";

import { Provider } from "mobx-react";

import Routes from "./routes"; //导入路由配置的 routes.js 文件
import Store from "./store"; // 导入数据状态的store.js 文件

class DemoComponent extends Component {
  render() {
    return (
      <HashRouter>
        <Provider {...Store}>
          <Switch>
            {Routes.map((route, idx) => {
              return route.component ? (
                <Route
                  key={idx}
                  path={route.path}
                  exact={route.exact}
                  name={route.name}
                  render={(props) => <route.component {...props} />}
                />
              ) : null;
            })}
          </Switch>
        </Provider>
      </HashRouter>
    );
  }
}

export default DemoComponent;
```

#### 3、创建视图以响应状态的变化并使用 inject 将组件连接到提供的 stores

```js
// page1.js
import React, { Fragment, Component } from "react";
import { observer, inject } from "mobx-react";

@inject("demoStore")
@observer
class page1 extends Component {
  render() {
    const { demoStore } = this.props;
    console.log(demoStore.demoText); // 获取状态值

    return <Fragment>...</Fragment>;
  }
}

export default DemoGetStore;
```

## 代码分割及按需加载的最佳实践

待续...

## 集成 antdMobile 组件库示例

##### 布局（Layout）

- Flex Flex 布局
- WingBlank 两翼留白
- WhiteSpace 上下留白

##### 数据录入（Data Entry）

- Button 按钮
- Checkbox 复选框
- Calendar 日历
- DatePickerView 选择器
- DatePicker 日期选择
- InputItem 文本输入
- ImagePicker 图片选择器
- PickerView 选择器
- Picker 选择器
- Radio 单选框
- Range 区域选择
- Switch 滑动开关
- Stepper 步进器
- Slider 滑动输入条
- SearchBar 搜索栏
- TextareaItem 多行输入

##### 导航（Navigation）

- Drawer 抽屉
- Menu 菜单
- NavBar 导航栏
- Popover 气泡
- Pagination 分页器
- SegmentedControl 分段器
- Tabs 标签页
- Tabs 标签页 垂直样式
- Tabs 标签页 自定义个数
- TabBar 标签栏 APP 型选项卡
- TabBar 标签栏 与 ListView 结合使用
- TabBar 标签栏 Tabbar 在顶部

##### 数据显示（Data Display）

- Accordion 手风琴
- Badge 徽标数
- Carousel 走马灯
- Carousel 走马灯 子元素数量变化
- Carousel 走马灯 带间距
- Carousel 走马灯 竖向
- Carousel 走马灯 抽奖
- Card 卡片
- Grid 宫格
- Icon 图标
- List 列表
- List 列表 可输入列表
- NoticeBar 通告栏
- Steps 步骤条
- Steps 步骤条 水平方向的步骤条
- Tag 标签

##### 反馈（Feedback）

- ActionSheet 动作面板
- ActivityIndicator 活动指示器
- Modal 对话框
- Modal 对话框 警告弹窗
- Modal 对话框 输入弹窗
- Modal 对话框 操作弹窗
- Progress 进度条
- Toast 轻提示

##### 手势（Gesture）

- PullToRefresh 拉动刷新
- PullToRefresh 拉动刷新 ListView 下拉刷新
- SwipeAction 滑动操作

##### 组合（Combination）

- ListView 长列表
- ListView 长列表 body 容器 下拉刷新
- ListView 长列表 标题吸顶（body 容器) 下拉刷新
- ListView 长列表 索引列表（标题吸顶） 下拉刷新
- Result 结果页

## License

[MIT](http://opensource.org/licenses/MIT)

Copyright (c) 2020-present, [chanjet-fe](https://github.com/chanjet-fe).
