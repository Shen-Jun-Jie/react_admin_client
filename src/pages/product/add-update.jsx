import React, { Component } from 'react';
import {
    Card,
    Form,
    Upload,
    Button,
    Input,
    Cascader
} from 'antd'
import {ArrowLeftOutlined} from '@ant-design/icons'
import LinkButton from '../../component/link-button';
import {reqCategory} from "../../api"

const {Item} = Form
const { TextArea } = Input 


class ProductAddUpdate extends Component {

    formRef = React.createRef();
    constructor(props) {
        super(props);
        this.state = { 
            options: []
         }
    }

    initOptions = (categories) => {
        const options = categories.map(item => ({
            label: item.name,
            value: item._id,
            isLeaf: false
        }))
        this.setState({options})
    }

    getCategories = async (parentId) => {
        const result = await reqCategory(parentId)
        if (result.status === 0) {
            if (parentId === '0') {
                this.initOptions(result.data)
            } else {
                return result.data
            }
        }
    }

    // 用于加载下一级列表的回调函数
    loadData = async (selectedOptions) => {
        // 选中的那个对象
        let targetedOption = selectedOptions[0]
        // 显示loading
        targetedOption.loading = true
        const subOptions = await this.getCategories(targetedOption.value)
        if (subOptions && subOptions.length > 0) {
            const childOptions = subOptions.map(item => ({
                label: item.name,
                value: item._id,
                isLeaf: true
            }))
            targetedOption.children = childOptions
        } else {
            targetedOption.isLeaf = true
        }

        this.setState({
            options: [...this.state.options],
        })

        targetedOption.loading = false
    }

    submit = () => {
        this.formRef.current.validateFields((error, values) => {
            if (!error) {
                console.log(values)
            }
        })
    }

    componentWillMount() {
        const product = this.props.location.state
        this.isUpdate = !!product // 转化为bool值， 保存一个标识是否是更新的标识
        this.product = product || {}
    }


    componentDidMount() {
        this.getCategories('0')
    }

    render() { 
        const {isUpdate, product} = this

        const formItemLayout = {
            labelCol: {
                xs: { span: 3 },
                sm: { span: 2 },
            },
            wrapperCol: {
                span: 6
            },
        }

        const title = (
            <span onClick={this.props.history.goBack}>
                <LinkButton>
                <ArrowLeftOutlined />
                </LinkButton>
                <span>{isUpdate ? '修改商品': '添加商品'}</span>
            </span>
        )
        console.log(product.name)

        return ( 
            <Card title={title}>
                <Form {...formItemLayout} ref={this.formRef}>
                    <Item 
                    label="商品名称"
                    rules={[{ required: true, message: '必须输入商品名称' }]}
                    initialValue={this.product}
                    >
                        <Input placeholder="商品名称"></Input>
                    </Item>
                    <Item 
                    label="商品描述"
                    initialValue={product.desc}
                    >
                        {/* autosIZE自动伸缩的 特性*/}
                        <TextArea placeholder="请输入商品描述信息" autoSize ></TextArea>
                    </Item>
                    <Item label="商品价格">
                        <Input type="number" addonAfter="元" placeholder="商品名称"></Input>
                    </Item>
                    <Item label="商品分类">
                        <Cascader 
                            options={this.state.options}  // 需要显示的列表数据
                            loadData={this.loadData}    // 当选择某个列表项，加载下一级列表的回调

                        />
                    </Item>
                    <Item label="商品图片">
                    商品图片
                    </Item>
                    <Item label="商品图片">
                    </Item>
                    <Item>
                        <Button type="primary" onClick={this.submit}>提 交</Button>
                    </Item>
                </Form>
            </Card>
         );
    }
}
 
export default ProductAddUpdate;