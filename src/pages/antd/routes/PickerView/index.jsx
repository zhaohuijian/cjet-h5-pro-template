import React from "react";
import { PickerView, WhiteSpace } from "antd-mobile";
import PageWrapper from "../../components/pageWrapper";

const seasons = [
  [
    {
      label: "2013",
      value: "2013",
    },
    {
      label: "2014",
      value: "2014",
    },
  ],
  [
    {
      label: "春",
      value: "春",
    },
    {
      label: "夏",
      value: "夏",
    },
  ],
];

const season = [
  {
    label: "春",
    value: "春",
  },
  {
    label: "夏",
    value: "夏",
  },
];

const province = [
  {
    label: "北京",
    value: "01",
    children: [
      {
        label: "东城区",
        value: "01-1",
      },
      {
        label: "西城区",
        value: "01-2",
      },
      {
        label: "崇文区",
        value: "01-3",
      },
      {
        label: "宣武区",
        value: "01-4",
      },
    ],
  },
  {
    label: "浙江",
    value: "02",
    children: [
      {
        label: "杭州",
        value: "02-1",
        children: [
          {
            label: "西湖区",
            value: "02-1-1",
          },
          {
            label: "上城区",
            value: "02-1-2",
          },
          {
            label: "江干区",
            value: "02-1-3",
          },
          {
            label: "下城区",
            value: "02-1-4",
          },
        ],
      },
      {
        label: "宁波",
        value: "02-2",
        children: [
          {
            label: "xx区",
            value: "02-2-1",
          },
          {
            label: "yy区",
            value: "02-2-2",
          },
        ],
      },
      {
        label: "温州",
        value: "02-3",
      },
      {
        label: "嘉兴",
        value: "02-4",
      },
      {
        label: "湖州",
        value: "02-5",
      },
      {
        label: "绍兴",
        value: "02-6",
      },
    ],
  },
];

class PickerViewExample extends React.Component {
  state = {
    value: null,
  };
  onChange = (value) => {
    console.log(value);
    this.setState({
      value,
    });
  };
  onScrollChange = (value) => {
    console.log(value);
  };
  render() {
    return (
      <PageWrapper navBarText="PickerView 选择器" {...this.props}>
        <WhiteSpace size="lg" />
        <PickerView
          onChange={this.onChange}
          onScrollChange={this.onScrollChange}
          value={this.state.value}
          data={seasons}
          cascade={false}
        />
        <WhiteSpace />
        <WhiteSpace />
        <PickerView data={season} cascade={false} />
        <WhiteSpace />
        <WhiteSpace />
        <PickerView data={province} value={["02", "02-1", "02-1-1"]} />
      </PageWrapper>
    );
  }
}

export default PickerViewExample;
