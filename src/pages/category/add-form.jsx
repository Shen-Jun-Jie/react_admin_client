import React, { Component } from 'react';
import {Form, Select, Input} from 'antd'
import PropTypes from 'prop-types'

const {Item} = Form
const {Option} = Select

class AddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    static propTypes = {
        addCategory: PropTypes.func.isRequired
    }

    render() { 
        return ( 
            <Form>
                <Item name="parentId" initialValue="0">
                    <Select>
                        <Option value="0">林俊杰</Option>
                        <Option value="1">周杰伦</Option>
                        <Option value="2">王力宏</Option>
                    </Select>
                </Item>

                <Item name="categoryName" initialValue="">
                    <Input placeholder="请输入分类名称"></Input>
                </Item>
            </Form>
         );
    }
}
 
export default AddForm;