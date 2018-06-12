import React from "react";
import {ajax} from "../common/tools";
import { Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button ,Card , Modal} from 'antd';

const FormItem = Form.Item;
const Option = Select.Option;
class UpdateStudent extends React.Component{
	constructor(props){
		super(props);
		this.state={
			confirmDirty: false,
			visible:false
		}
		

	}
	showModal(){

	this.props.showModal()
	}

	handleOk(e){
	var values=this.props.form.getFieldsValue()
	values._id=this.props.student._id
	ajax({
		type:"get",
		url:"/student/update",
		data:values,
		success:function(){
			  Modal.confirm({
			    title: '提示',
			    content: '数据修改成功',
			    okText: '确定',
			    cancelText: '取消'
			  });
			this.props.show()

		}.bind(this)
	})
		this.props.handleOk()
	}

	handleCancel(e){

	this.props.handleCancel()
	}
	
	render() {
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
		return (
			<div>
			<Modal title="修改" visible={this.props.visible} showModal={this.showModal.bind(this)}
			onOk={this.handleOk.bind(this)} onCancel={this.handleCancel.bind(this)}
			>
			<Form >
			<FormItem
			{...formItemLayout}
			label={(
				<span>
				姓名&nbsp;

				</span>
				)}
				>
				{getFieldDecorator('name', {
					rules: [{ required: true}],
				})(
				<Input />
				)}
				</FormItem>
				<FormItem
				{...formItemLayout}
				label={(
					<span>
					年龄&nbsp;

					</span>
					)}
				>
				{getFieldDecorator('age', {
					rules: [{ required: true}],
				})(
				<Input />
				)}
				</FormItem>

				<FormItem
				{...formItemLayout}
				label={(
					<span>
					性别&nbsp;

					</span>
					)}
					>
					{getFieldDecorator('sex', {
						rules: [{ required: true}],
					})(
					<Input />
					)}

					</FormItem>
					<FormItem
					{...formItemLayout}
					label={(
						<span>
						班级&nbsp;

						</span>
						)}
					>
					{getFieldDecorator('classes', {
						rules: [{ required: true}],
					})(
					<Input />
					)}
					</FormItem>

					<FormItem
					{...formItemLayout}
					label={(
						<span>
						任课老师&nbsp;

						</span>
						)}
						>
						{getFieldDecorator('teacher', {
							rules: [{ required: true}],
						})(
						<Input />
						)}
						</FormItem>

						<FormItem
						{...formItemLayout}
						label={(
							<span>
							联系电话&nbsp;

							</span>
							)}
						>
						{getFieldDecorator('phone', {
							rules: [{ required: true}],
						})(
						<Input />
						)}
						</FormItem>

						</Form>


						</Modal>
						</div>
						);
	}
}
export default Form.create({
mapPropsToFields(props){
	return {
		name:{value:props.student.name},
		age:{value:props.student.age},
		sex:{value:props.student.sex},
		classes:{value:props.student.classes},
		teacher:{value:props.student.teacher},
		phone:{value:props.student.phone}
	}
}


})(UpdateStudent);