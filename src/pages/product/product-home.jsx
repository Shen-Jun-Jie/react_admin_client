import React, { Component } from 'react';
import {
    Card,
    Select,
    Input,
    Button,
    Table,
    message
} from 'antd'
import {PlusOutlined} from '@ant-design/icons'

import LinkButton from '../../component/link-button'
import {reqProduct, reqProductByKey} from "../../api/index"
import {PAGE_SIZE} from './constants'

const {Option} = Select

class ProductHome extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            products: [],
            total: null,
            searchName: '',
            searchType: 'productName'
        }
    }

    getProducts = async (pageNum) => {
        const {searchName, searchType} = this.state
        let result
        if (this.state.searchName === '') {
            result = await reqProduct(pageNum, PAGE_SIZE)
        } else {
            result = await reqProductByKey(pageNum,PAGE_SIZE, searchName, searchType)
        }
        if (result.status === 0) {
            const {total, list} = result.data
            console.log(result)
            this.setState({
                total,
                products: list
            })
        } else {
            message.error(result.msg)
        }
    }

    componentWillMount() {
        this.columns = [
            {
                title: '商品名称',
                dataIndex: 'name',
            },
            {
                title: '商品描述',
                dataIndex: 'desc',
            },
            {
                title: '价格',
                width: 100,
                dataIndex: 'price', //如果有这个dataIndex 那么就传的是这个值
                render: (price) => '￥' + price
            },
            {
                title: '状态',
                width: 100,
                dataIndex: 'status',
                render: (status) => {
                    return (
                        <span>
                            <Button type="primary">下架</Button>
                            <span>在 售</span>
                        </span>
                    )
                }
            },
            {
                title: '操作',
                width: 100,
                render: (product) => {
                    return (
                        <span>
                            {/* 将product 传递给目标路由组件 */}
                            <LinkButton onClick={() => this.props.history.push('/product/detail', product)}>详情</LinkButton>
                            <LinkButton onClick={() => this.props.history.push('/product/addupdate', product)}>修改</LinkButton>
                        </span>
                    )
                }
            },
        ]
    }

    componentDidMount() {
        this.getProducts()
    }

    render() { 
        const {products, total, searchName, searchType} = this.state

        const title = (
            <span>
                <Select value={searchType} style={{width: 150}} onChange={(searchType) => {this.setState({searchType})}}>
                    <Option value="productName">按名称搜索</Option>
                    <Option value="productContent">按内容搜索</Option>
                </Select>
                <Input style={{width: 150, margin: '0 15px'}} placeholder="请输入搜索内容" value={searchName} onChange={(e) => this.setState({searchName: e.target.value})}/>
                <Button type="primary" onClick={() => {this.getProducts(1)}}>搜索</Button>
            </span>
        )

        const extra = (
            <Button type="primary" onClick={()=> this.props.history.push('/product/addupdate')}>
                <PlusOutlined />
                添加商品
            </Button>
        ) 
        return ( 
            <Card title={title} extra={extra}>
                <Table bordered 
                dataSource={products} 
                rowKey="_id" 
                columns={this.columns} 
                pagination={{
                    total,
                    defaultPageSize: PAGE_SIZE,
                    showQuickJumper: true,
                    onChange: this.getProducts
                }}
                />
            </Card>
         );
    }
}
 
export default ProductHome;