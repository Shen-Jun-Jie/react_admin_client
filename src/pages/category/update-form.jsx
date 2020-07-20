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
        categoryName: PropTypes.string.isRequired
    }


    render() { 
        const {categoryName} = this.props
        console.log(categoryName)
        return ( 
            <Form>
                <Item name="categoryName" initialValue={categoryName}>
                    <Input ></Input>
                </Item>
            </Form>
         );
    }
}
 
export default UpdateForm;