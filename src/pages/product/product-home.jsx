import React, { Component } from 'react';
import {
    Card,
    Select,
    Input,
    Button
} from 'antd'

import {PlusOutlined} from '@ant-design/icons'

const {Option} = Select

class ProductHome extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const title = (
            <span>
                <Select style={{width: 150}} defaultValue="0">
                    <Option value="0">按名称搜索</Option>
                    <Option value="1">按内容搜索</Option>
                </Select>
                <Input style={{width: 150, margin: '0 15px'}} placeholder="请输入搜索内容" />
                <Button type="primary">搜索</Button>
            </span>
        )

        const extra = (
            <Button type="primary">
                <PlusOutlined />
                添加商品
            </Button>
        ) 
        return ( 
            <Card title={title} extra={extra}>

            </Card>
         );
    }
}
 
export default ProductHome;