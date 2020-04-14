import React from "react";
import { Card, WingBlank, WhiteSpace } from "antd-mobile";
import PageWrapper from "../../../components/pageWrapper";

const CardComponent = (props) => {
  return (
    <PageWrapper navBarText="Card 卡片" {...props}>
      <WingBlank size="lg">
        <WhiteSpace size="lg" />
        <Card>
          <Card.Header
            title="This is title"
            thumb="https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg"
            extra={<span>this is extra</span>}
          />
          <Card.Body>
            <div>This is content of `Card`</div>
          </Card.Body>
          <Card.Footer
            content="footer content"
            extra={<div>extra footer content</div>}
          />
        </Card>
        <WhiteSpace size="lg" />
      </WingBlank>

      <WhiteSpace size="lg" />
      <Card full>
        <Card.Header
          title="This is title"
          thumb="https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg"
          extra={<span>this is extra</span>}
        />
        <Card.Body>
          <div>This is content of `Card`</div>
        </Card.Body>
        <Card.Footer
          content="footer content"
          extra={<div>extra footer content</div>}
        />
      </Card>
    </PageWrapper>
  );
};

export default CardComponent;
