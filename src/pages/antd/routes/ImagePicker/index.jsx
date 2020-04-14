import React from "react";
import {
  ImagePicker,
  WingBlank,
  SegmentedControl,
  WhiteSpace,
} from "antd-mobile";
import PageWrapper from "../../components/pageWrapper";

const data = [
  {
    url: "https://zos.alipayobjects.com/rmsportal/PZUUCKTRIHWiZSY.jpeg",
    id: "2121",
  },
  {
    url: "https://zos.alipayobjects.com/rmsportal/hqQWgTXdrlmVVYi.jpeg",
    id: "2122",
  },
];

class ImagePickerExample extends React.Component {
  state = {
    files: data,
    multiple: false,
  };
  onChange = (files, type, index) => {
    console.log(files, type, index);
    this.setState({
      files,
    });
  };
  onSegChange = (e) => {
    const index = e.nativeEvent.selectedSegmentIndex;
    this.setState({
      multiple: index === 1,
    });
  };
  onAddImageClick = (e) => {
    e.preventDefault();
    this.setState({
      files: this.state.files.concat({
        url: "https://zos.alipayobjects.com/rmsportal/hqQWgTXdrlmVVYi.jpeg",
        id: "3",
      }),
    });
  };
  onTabChange = (key) => {
    console.log(key);
  };

  render() {
    const { files } = this.state;
    return (
      <PageWrapper navBarText="ImagePicker 图片选择器" {...this.props}>
        <WhiteSpace size="lg" />
        <WingBlank>
          <h3>简单的图片选择组件</h3>
          <SegmentedControl
            values={["切换到单选", "切换到多选"]}
            selectedIndex={this.state.multiple ? 1 : 0}
            onChange={this.onSegChange}
          />
          <ImagePicker
            files={files}
            onChange={this.onChange}
            onImageClick={(index, fs) => console.log(index, fs)}
            selectable={files.length < 7}
            multiple={this.state.multiple}
          />

          <h3>自定义选择图片的方法</h3>

          <ImagePicker
            files={files}
            onChange={this.onChange}
            onImageClick={(index, fs) => console.log(index, fs)}
            selectable={files.length < 5}
            accept="image/gif,image/jpeg,image/jpg,image/png"
          />

          <h3>自定义文件类型</h3>

          <ImagePicker
            files={files}
            onChange={this.onChange}
            onImageClick={(index, fs) => console.log(index, fs)}
            selectable={files.length < 5}
            accept="image/gif,image/jpeg,image/jpg,image/png"
          />

          <h3>自定义数量</h3>

          <ImagePicker
            length="6"
            files={files}
            onChange={this.onChange}
            onImageClick={(index, fs) => console.log(index, fs)}
            selectable={files.length < 7}
            onAddImageClick={this.onAddImageClick}
            disableDelete
          />
        </WingBlank>
      </PageWrapper>
    );
  }
}

export default ImagePickerExample;
