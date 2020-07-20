import React, { Component } from 'react';
import {
    Card,
    Button,
    Table,
    message,
    Modal,
} from 'antd'
import { PlusOutlined, ArrowRightOutlined } from '@ant-design/icons';

import {reqCategory, reqCategoryAdd, reqCategoryUpdate} from '../../api/index'
import LinkButton from '../../component/link-button'
import AddForm from './add-form'
import UpdateForm from './update-form'

class Category extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            loading: true,
            dataSource: [],
            subDataSource: [],
            parentId: '0',
            parentName: '',
            showStatus: 0 // 0 不显示，1 添加，2 修改
         }
    }

    showUpdateModal = (category) => {
        console.log(category)
        this.category = category
        this.setState({
            showStatus: 2
        })
    }

    showAddModal = () => {
        this.setState({
            showStatus: 1
        })
    }

    initColumns = () => {
        this.columns = [
            {
              title: '分类的名称',
              dataIndex: 'name',
            },
            {
                title: "操作",
                width: '30%',
                render: (category) => (
                    <span>
                        <LinkButton onClick={ () => this.showUpdateModal(category)}>修改分类</LinkButton>
                        {this.state.parentId==='0'? <LinkButton onClick={() => (this.getSubCategoryList(category))}>查看子分类</LinkButton>: null}
                    </span>
                )
                
            }
        ];
    }

    handleCancel = () => {
        this.setState({
            showStatus: 0
        })
    }

    getSubCategoryList = (category) => {
        let {parentId, parentName} = this.state
        parentId = category._id
        parentName = category.name
        this.setState({parentId, parentName}, () => {
            this.getCategoryList()
        })
    }

    showCategorys = () => {
        this.setState({
            parentId: '0',
            parentName: '',
            subDataSource: []
        }, () => {
            this.getCategoryList()
        })
    }

    getCategoryList = async () => {
        const {parentId} = this.state
        const result = await reqCategory(parentId)
        let dataSource
        let loading
        let subDataSource
        if (result.status === 0) {
            loading = false
            if (parentId === '0') {
                dataSource = result.data
                this.setState({dataSource, loading})
            } else {
                subDataSource = result.data
                this.setState({subDataSource, loading})
            }
        } else {
            message.error("获取列表分类失败")
        }
    }

    addCategory = async (categoryId, categoryName) => {
        const result = await reqCategoryAdd(categoryId, categoryName)
        if (result.status === 0) {

        } else {
            message.error("添加分类失败")
        }
    }

    componentWillMount() {
        this.initColumns()
    }


    componentDidMount() {
        this.getCategoryList()
    }

    render() { 
        const {dataSource, loading, parentId, parentName, subDataSource, showStatus} = this.state
        const category = this.category || {}

        const showList = parentId === '0' ? dataSource: subDataSource
        // card 的左侧侧的title
        const title = parentId === '0' ? '一级分类列表': (
            <span>
                <LinkButton onClick={this.showCategorys}>一级分类列表</LinkButton>  
                <ArrowRightOutlined style={{marginRight: '5px'}} />
                <span>{parentName}</span>
            </span>
        )
        // card 的右侧
        const extra = (
            <Button type="primary" onClick={this.showAddModal}><PlusOutlined /> 添加</Button>
        )

        return ( 
            <Card title={title} extra={extra}>
                <Table bordered dataSource={showList} columns={this.columns} loading={loading} />

                <Modal
                title="添加分类"
                visible={showStatus===1}
                onOk={this.addCategory}
                onCancel={this.handleCancel}
                >
                <AddForm addCategory={this.addCategory} />
                </Modal>

                <Modal
                title="修改分类"
                visible={showStatus===2}
                onOk={this.updateCategory}
                onCancel={this.handleCancel}
                >
                <UpdateForm categoryName={category.name || ''} />
                </Modal>
            </Card>
         );
    }
}
 
export default Category;