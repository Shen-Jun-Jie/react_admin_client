import React, { Component } from 'react';
import {
    Card,
    List
} from 'antd'

import {ArrowLeftOutlined} from '@ant-design/icons'
import LinkButton from '../../component/link-button'

const {Item} = List

class ProductDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        // 读取携带过来的state数据
        const {name, price, detail, desc} = this.props.location.state
        const title = (
            <span>
                <LinkButton onClick={this.props.history.goBack}>
                    <ArrowLeftOutlined />
                </LinkButton>
                <span>商品详情</span>
            </span>
            
        )
        return ( 
            <Card title={title} className="product-detail">
                <List>
                    <Item>
                        <span className="left">商品名称：</span>
                        <span>{name}</span>
                    </Item>
                    <Item>
                        <span className="left">商品描述：</span>
                        <span>{desc}</span>
                    </Item>
                    <Item>
                        <span className="left">商品价格：</span>
                        <span>{price} 元</span>
                    </Item>
                    <Item>
                        <span className="left">商品名称：</span>
                        <span>Tinkpad 翼480</span>
                    </Item>
                    <Item>
                        <span className="left">商品详情：</span>
                        <span dangerouslySetInnerHTML={{__html: detail}}></span>
                    </Item>
                </List>
            </Card>
         );
    }
}
 
export default ProductDetail;