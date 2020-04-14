import React, { Component } from "react";
import { Button, List, WhiteSpace } from "antd-mobile";
import styles from "./App.module.less";
import SvgIcon from "./components/svgIcon";

const Item = List.Item;

class App extends Component {
  render() {
    return (
      <div className={styles["App"]}>
        <div className={styles["App-header"]}>
          <svg aria-hidden="true" className={styles["App-logo"]}>
            <use xlinkHref="#icon-logo"></use>
          </svg>
          <h2>
            <SvgIcon iconName="logo" /> Welcome to cjet-h5-pro
          </h2>
        </div>
        <div>
          <List renderHeader={() => "基本特性"} className="my-list">
            <Item>
              <SvgIcon iconName="template" /> 开发大中型H5企业级应用的标准化模板
            </Item>
            <Item>
              <SvgIcon iconName="antd-mobile" /> 集成众多 antdMobile 组件示例
            </Item>
            <Item>
              <SvgIcon iconName="changjing" fill="#ff8c42" /> 集成众多完善的业务场景组件
            </Item>
            <Item>
              <SvgIcon iconName="zujian" fill="#ff8c42" /> 集成组件化开发的最佳实践
            </Item>
            <Item>
              <SvgIcon iconName="router" fill="#ff8c42" /> 集成路由配置的最佳实践
            </Item>
            <Item>
              <SvgIcon iconName="need-load" fill="#ff8c42" /> 集成代码分割及按需加载的最佳实践
            </Item>
            <Item>
              <SvgIcon iconName="mobx" /> 集成状态管理的最佳实践
            </Item>
            <Item>
              <SvgIcon iconName="logo" /> 集成工程化开发及构建的最佳实践
            </Item>
          </List>
          <WhiteSpace size="lg" />
          <Button
            onClick={() => (window.location.href = "./main.html")}
            type="primary"
          >
            系统演示
          </Button>
          <WhiteSpace size="lg" />
          <Button
            onClick={() => (window.location.href = "./antd.html")}
            type="primary"
          >
            组件库示例
          </Button>
        </div>
      </div>
    );
  }
}

export default App;
