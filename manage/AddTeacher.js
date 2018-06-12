import React from "react";
import {ajax} from "../common/tools";

import { Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button ,Card , Modal} from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;

class AddTeacher extends React.Component{
	constructor(props){
		super(props)
		this.state={
			visible:false
		}
	}

	AddshowModal(){
		this.setState({
			visible:true
		})
	}
	handleOk(e){
	this.props.form.validateFieldsAndScroll(function(errors,values){
		if(!errors){

			ajax({
				type:"get",
				url:"/teacher/add",
				data:values,
				success:function(){
					this.props.show();
					 Modal.success({
		              title: '',
		              content: '添加成功',
		              });

				}.bind(this)
			})

		}else{
			Modal.error({
	      title: '',
	      content: '输入框不得为空',
	      });
		}
	}.bind(this))
		this.setState({
			visible:false
		})
	}
	handleCancel(){
		this.setState({
			visible:false
		})
	}

	render(){
		const { getFieldDecorator } = this.props.form;
		const formItemLayout = {
			labelCol: {
				xs: { span: 24 },
				sm: { span: 6 },
			},
			wrapperCol: {
				xs: { span: 24 },
				sm: { span: 14 },
			},
		};
		const tailFormItemLayout = {
			wrapperCol: {
				xs: {
					span: 24,
					offset: 0,
				},
				sm: {
					span: 14,
					offset: 6,
				},
			},
		};


		return <div>
		<Button type="primary" onClick={this.AddshowModal.bind(this)}>增加</Button>
			<Modal title="增加" visible={this.state.visible}
			onOk={this.handleOk.bind(this)} onCancel={this.handleCancel.bind(this)}
			>
				<Form >
					<FormItem {...formItemLayout} label={(<span>姓名&nbsp;</span>)}>
						{getFieldDecorator('name', {rules: [{ required: true}]})(<Input />)}
					</FormItem>

					<FormItem {...formItemLayout} label={(<span>年龄&nbsp;</span>)}>
						{getFieldDecorator('age', {rules: [{ required: true}]})(<Input />)}
					</FormItem>

					<FormItem {...formItemLayout} label={(<span>性别&nbsp;</span>)}>
						{getFieldDecorator('sex', {rules: [{ required: true}]})
						(<Select>
							<Option value="男">男</Option>
							<Option value="女">女</Option>
						</Select>)}
					</FormItem>

					<FormItem {...formItemLayout} label={(<span>班级&nbsp;</span>)}>
						{getFieldDecorator('classes', {rules: [{ required: true}]})(<Input />)}
					</FormItem>

					<FormItem {...formItemLayout} label={(<span>联系电话&nbsp;</span>)}>
						{getFieldDecorator('phone', {rules: [{ required: true}]})(<Input />)}
					</FormItem>
				</Form>
			</Modal>

		</div>

	}
}
export default Form.create()(AddTeacher);