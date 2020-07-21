import React, { Component } from 'react';
import {Form, Input} from 'antd'
import PropTypes from 'prop-types'

const {Item} = Form

class UpdateForm extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }


    static propTypes = {
        categoryName: PropTypes.string.isRequired,
        setCategoryName: PropTypes.func.isRequired
    }

    formRef = React.createRef();

    componentDidMount() {
        const {categoryName} = this.props
        this.formRef.current.setFieldsValue({categoryName});
    }

    componentWillMount() {
        this.props.setCategoryName(this.formRef)
    }

    render() { 
        return ( 
            <Form ref={this.formRef}>
                <Item name="categoryName">
                    <Input placeholder="请输入分类名称" ></Input>
                </Item>
            </Form>
         );
    }
}
 
export default UpdateForm;