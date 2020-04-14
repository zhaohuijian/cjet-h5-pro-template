import React, { Component } from "react";
import { List, WhiteSpace } from "antd-mobile";
import styles from "./App.module.less";
import SvgIcon from "@src/components/svgIcon";

const Item = List.Item;

class App extends Component {
  itemLink = (linkTo) => {
    const { history } = this.props;
    history.push(linkTo);
  };
  render() {
    return (
      <div className={styles["App"]}>
        <div className={styles["App-header"]}>
          <svg aria-hidden="true" className={styles["App-logo"]}>
            <use xlinkHref="#icon-logo"></use>
          </svg>
          <h2>cjet & antdMobile 组件库</h2>
        </div>
        <div>
          <List renderHeader={() => "布局（Layout）"} className="my-list">
            <Item
              onClick={() => {
                this.itemLink("/Flex");
              }}
            >
              <SvgIcon iconName="component" /> Flex Flex布局
            </Item>
            <Item
              onClick={() => {
                this.itemLink("/WingBlank");
              }}
            >
              <SvgIcon iconName="component" /> WingBlank 两翼留白
            </Item>
            <Item
              onClick={() => {
                this.itemLink("/WhiteSpace");
              }}
            >
              <SvgIcon iconName="component" /> WhiteSpace 上下留白
            </Item>
          </List>
          <WhiteSpace size="lg" />
          <List
            renderHeader={() => "数据录入（Data Entry）"}
            className="my-list"
          >
            <Item
              onClick={() => {
                this.itemLink("/Button");
              }}
            >
              <SvgIcon iconName="component" /> Button 按钮
            </Item>
            <Item
              onClick={() => {
                this.itemLink("/Checkbox");
              }}
            >
              <SvgIcon iconName="component" /> Checkbox 复选框
            </Item>
            <Item
              onClick={() => {
                this.itemLink("/Calendar");
              }}
            >
              <SvgIcon iconName="component" /> Calendar 日历
            </Item>
            <Item
              onClick={() => {
                this.itemLink("/DatePickerView");
              }}
            >
              <SvgIcon iconName="component" /> DatePickerView 选择器
            </Item>
            <Item
              onClick={() => {
                this.itemLink("/DatePicker");
              }}
            >
              <SvgIcon iconName="component" /> DatePicker 日期选择
            </Item>
            <Item
              onClick={() => {
                this.itemLink("/InputItem");
              }}
            >
              <SvgIcon iconName="component" /> InputItem 文本输入
            </Item>
            <Item
              onClick={() => {
                this.itemLink("/ImagePicker");
              }}
            >
              <SvgIcon iconName="component" /> ImagePicker 图片选择器
            </Item>
            <Item
              onClick={() => {
                this.itemLink("/PickerView");
              }}
            >
              <SvgIcon iconName="component" /> PickerView 选择器
            </Item>
            <Item
              onClick={() => {
                this.itemLink("/Picker");
              }}
            >
              <SvgIcon iconName="component" /> Picker 选择器
            </Item>
            <Item
              onClick={() => {
                this.itemLink("/Radio");
              }}
            >
              <SvgIcon iconName="component" /> Radio 单选框
            </Item>
            <Item
              onClick={() => {
                this.itemLink("/Range");
              }}
            >
              <SvgIcon iconName="component" /> Range 区域选择
            </Item>
            <Item
              onClick={() => {
                this.itemLink("/Switch");
              }}
            >
              <SvgIcon iconName="component" /> Switch 滑动开关
            </Item>
            <Item
              onClick={() => {
                this.itemLink("/Stepper");
              }}
            >
              <SvgIcon iconName="component" /> Stepper 步进器
            </Item>
            <Item
              onClick={() => {
                this.itemLink("/Slider");
              }}
            >
              <SvgIcon iconName="component" /> Slider 滑动输入条
            </Item>
            <Item
              onClick={() => {
                this.itemLink("/SearchBar");
              }}
            >
              <SvgIcon iconName="component" /> SearchBar 搜索栏
            </Item>
            <Item
              onClick={() => {
                this.itemLink("/TextareaItem");
              }}
            >
              <SvgIcon iconName="component" /> TextareaItem 多行输入
            </Item>
          </List>
          <WhiteSpace size="lg" />
          <List renderHeader={() => "导航（Navigation）"} className="my-list">
            <Item
              onClick={() => {
                this.itemLink("/Drawer");
              }}
            >
              <SvgIcon iconName="component" /> Drawer 抽屉
            </Item>
            <Item
              onClick={() => {
                this.itemLink("/Menu");
              }}
            >
              <SvgIcon iconName="component" /> Menu 菜单
            </Item>
            <Item
              onClick={() => {
                this.itemLink("/NavBar");
              }}
            >
              <SvgIcon iconName="component" /> NavBar 导航栏
            </Item>
            <Item
              onClick={() => {
                this.itemLink("/Popover");
              }}
            >
              <SvgIcon iconName="component" /> Popover 气泡
            </Item>
            <Item
              onClick={() => {
                this.itemLink("/Pagination");
              }}
            >
              <SvgIcon iconName="component" /> Pagination 分页器
            </Item>
            <Item
              onClick={() => {
                this.itemLink("/SegmentedControl");
              }}
            >
              <SvgIcon iconName="component" /> SegmentedControl 分段器
            </Item>
            <Item
              onClick={() => {
                this.itemLink("/Tabs");
              }}
            >
              <SvgIcon iconName="component" /> Tabs 标签页
            </Item>
            <Item
              onClick={() => {
                this.itemLink("/TabsVertical");
              }}
            >
              <SvgIcon iconName="component" /> Tabs 标签页 垂直样式
            </Item>
            <Item
              onClick={() => {
                this.itemLink("/TabsMost");
              }}
            >
              <SvgIcon iconName="component" /> Tabs 标签页 自定义个数
            </Item>
            <Item
              onClick={() => {
                this.itemLink("/TabBar");
              }}
            >
              <SvgIcon iconName="component" /> TabBar 标签栏 APP 型选项卡
            </Item>
            <Item
              onClick={() => {
                this.itemLink("/TabBarListView");
              }}
            >
              <SvgIcon iconName="component" /> TabBar 标签栏 与ListView结合使用
            </Item>
            <Item
              onClick={() => {
                this.itemLink("/TabBarTop");
              }}
            >
              <SvgIcon iconName="component" /> TabBar 标签栏 Tabbar 在顶部
            </Item>
          </List>
          <WhiteSpace size="lg" />
          <List
            renderHeader={() => "数据显示（Data Display）"}
            className="my-list"
          >
            <Item
              onClick={() => {
                this.itemLink("/Accordion");
              }}
            >
              <SvgIcon iconName="component" /> Accordion 手风琴
            </Item>
            <Item
              onClick={() => {
                this.itemLink("/Badge");
              }}
            >
              <SvgIcon iconName="component" /> Badge 徽标数
            </Item>
            <Item
              onClick={() => {
                this.itemLink("/Carousel");
              }}
            >
              <SvgIcon iconName="component" /> Carousel 走马灯
            </Item>
            <Item
              onClick={() => {
                this.itemLink("/CarouselChildChange");
              }}
            >
              <SvgIcon iconName="component" /> Carousel 走马灯 子元素数量变化
            </Item>
            <Item
              onClick={() => {
                this.itemLink("/CarouselGap");
              }}
            >
              <SvgIcon iconName="component" /> Carousel 走马灯 带间距
            </Item>
            <Item
              onClick={() => {
                this.itemLink("/CarouselVertical");
              }}
            >
              <SvgIcon iconName="component" /> Carousel 走马灯 竖向
            </Item>
            <Item
              onClick={() => {
                this.itemLink("/CarouselDraw");
              }}
            >
              <SvgIcon iconName="component" /> Carousel 走马灯 抽奖
            </Item>
            <Item
              onClick={() => {
                this.itemLink("/Card");
              }}
            >
              <SvgIcon iconName="component" /> Card 卡片
            </Item>
            <Item
              onClick={() => {
                this.itemLink("/Grid");
              }}
            >
              <SvgIcon iconName="component" /> Grid 宫格
            </Item>
            <Item
              onClick={() => {
                this.itemLink("/Icon");
              }}
            >
              <SvgIcon iconName="component" /> Icon 图标
            </Item>
            <Item
              onClick={() => {
                this.itemLink("/List");
              }}
            >
              <SvgIcon iconName="component" /> List 列表
            </Item>
            <Item
              onClick={() => {
                this.itemLink("/ListInput");
              }}
            >
              <SvgIcon iconName="component" /> List 列表 可输入列表
            </Item>
            <Item
              onClick={() => {
                this.itemLink("/NoticeBar");
              }}
            >
              <SvgIcon iconName="component" /> NoticeBar 通告栏
            </Item>
            <Item
              onClick={() => {
                this.itemLink("/Steps");
              }}
            >
              <SvgIcon iconName="component" /> Steps 步骤条
            </Item>
            <Item
              onClick={() => {
                this.itemLink("/StepsLevel");
              }}
            >
              <SvgIcon iconName="component" /> Steps 步骤条 水平方向的步骤条
            </Item>
            <Item
              onClick={() => {
                this.itemLink("/Tag");
              }}
            >
              <SvgIcon iconName="component" /> Tag 标签
            </Item>
          </List>
          <WhiteSpace size="lg" />
          <List renderHeader={() => "反馈（Feedback）"} className="my-list">
            <Item
              onClick={() => {
                this.itemLink("/ActionSheet");
              }}
            >
              <SvgIcon iconName="component" /> ActionSheet 动作面板
            </Item>
            <Item
              onClick={() => {
                this.itemLink("/ActivityIndicator");
              }}
            >
              <SvgIcon iconName="component" /> ActivityIndicator 活动指示器
            </Item>
            <Item
              onClick={() => {
                this.itemLink("/Modal");
              }}
            >
              <SvgIcon iconName="component" /> Modal 对话框
            </Item>
            <Item
              onClick={() => {
                this.itemLink("/ModalWarning");
              }}
            >
              <SvgIcon iconName="component" /> Modal 对话框 警告弹窗
            </Item>
            <Item
              onClick={() => {
                this.itemLink("/ModalInput");
              }}
            >
              <SvgIcon iconName="component" /> Modal 对话框 输入弹窗
            </Item>
            <Item
              onClick={() => {
                this.itemLink("/ModalOperate");
              }}
            >
              <SvgIcon iconName="component" /> Modal 对话框 操作弹窗
            </Item>
            <Item
              onClick={() => {
                this.itemLink("/Progress");
              }}
            >
              <SvgIcon iconName="component" /> Progress 进度条
            </Item>
            <Item
              onClick={() => {
                this.itemLink("/Toast");
              }}
            >
              <SvgIcon iconName="component" /> Toast 轻提示
            </Item>
          </List>
          <WhiteSpace size="lg" />
          <List renderHeader={() => "手势（Gesture）"} className="my-list">
            <Item
              onClick={() => {
                this.itemLink("/PullToRefresh");
              }}
            >
              <SvgIcon iconName="component" /> PullToRefresh 拉动刷新
            </Item>
            <Item
              onClick={() => {
                this.itemLink("/PullToRefreshListView");
              }}
            >
              <SvgIcon iconName="component" /> PullToRefresh 拉动刷新 ListView
              下拉刷新
            </Item>
            <Item
              onClick={() => {
                this.itemLink("/SwipeAction");
              }}
            >
              <SvgIcon iconName="component" /> SwipeAction 滑动操作
            </Item>
          </List>
          <WhiteSpace size="lg" />
          <List renderHeader={() => "组合（Combination）"} className="my-list">
            <Item
              onClick={() => {
                this.itemLink("/ListView");
              }}
            >
              <SvgIcon iconName="component" /> ListView 长列表
            </Item>
            <Item
              onClick={() => {
                this.itemLink("/ListViewBody");
              }}
            >
              <SvgIcon iconName="component" /> ListView 长列表 body 容器
              下拉刷新
            </Item>
            <Item
              onClick={() => {
                this.itemLink("/ListViewSticky");
              }}
            >
              <SvgIcon iconName="component" /> ListView 长列表 标题吸顶（body
              容器) 下拉刷新
            </Item>
            <Item
              onClick={() => {
                this.itemLink("/ListViewStickyIndex");
              }}
            >
              <SvgIcon iconName="component" /> ListView 长列表
              索引列表（标题吸顶） 下拉刷新
            </Item>
            <Item
              onClick={() => {
                this.itemLink("/Result");
              }}
            >
              <SvgIcon iconName="component" /> Result 结果页
            </Item>
          </List>
          <WhiteSpace size="lg" />
        </div>
      </div>
    );
  }
}

export default App;
