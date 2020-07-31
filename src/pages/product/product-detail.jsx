import React, { Component } from 'react';
import {
    Card,
    List
} from 'antd'

import {ArrowLeftOutlined} from '@ant-design/icons'

const {Item} = List

class ProductDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 

        const title = (
            <span>
                <ArrowLeftOutlined />
                <span>商品详情</span>
            </span>
        )
        return ( 
            <Card title={title} className="product-detail">
                <List>
                    <Item>
                        <span className="left">商品名称：</span>
                        <span>Tinkpad 翼480</span>
                    </Item>
                    <Item>
                        <span className="left">商品描述：</span>
                        <span>Tinkpad 翼480</span>
                    </Item>
                    <Item>
                        <span className="left">商品名称：</span>
                        <span>Tinkpad 翼480</span>
                    </Item>
                    <Item>
                        <span className="left">商品名称：</span>
                        <span>Tinkpad 翼480</span>
                    </Item>
                    <Item>
                        <span className="left">商品名称：</span>
                        <span>Tinkpad 翼480</span>
                    </Item>
                </List>
            </Card>
         );
    }
}
 
export default ProductDetail;