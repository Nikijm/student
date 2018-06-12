import React from "react";
import {ajax} from "../common/tools";

import { Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button ,Card , Modal} from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;


class Reg extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            confirmDirty: false

        }

    }
  handleSubmit(e){
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }
  handleConfirmBlur(e){
    const value = e.target.value;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  }

  checkPassword(rule, value, callback){
    const form = this.props.form;
    if (value && value !== form.getFieldValue('pwd')) {
      callback('密码不匹配!');
    } else {
      callback();
    }
  }
  checkConfirm(rule, value, callback){
    const form = this.props.form;
    if (value && this.state.confirmDirty) {
      form.validateFields(['confirm'], { force: true });
    }
    callback();
  }
  checkUsername(rule, value, callback){
    const form = this.props.form;
     ajax({
      type:"post",
      url:"/users/find",
      data:{
        userName:value,
        findType:"exact"
      }, 
      success:function(data){
        console.log("重名",data)
        if(data.length>0){
          callback("重名")
        }else{
            callback()  
        }
      }
    })
  }
  reg(){
    console.log("data",this.props.form.validateFieldsAndScroll());
   this.props.form.validateFieldsAndScroll(function(errors,values){
    console.log("errors",errors)

    if(!errors){
      delete values.confirm
    ajax({
      type:"post",
      url:"/users/add",
      data:values,   
      success:function(data){  
        console.log(data)
                Modal.success({
              title: '',
              content: '注册成功',
              });

        this.props.router.replace("/login")
        
      }.bind(this)
    })
    }else{
        Modal.error({
        title: '',
        content: '注册失败',
  });
      }

   }.bind(this))
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

    return <Row type="flex" justify="center">
           <Col span={10}>
           <div style={{ background: '#ECECEC', paddingTop:30}}>
           <Card title="注册" bordered={false} style={{ width:600,height:400}}>

            <Form >
               <FormItem
          {...formItemLayout}
          label={(
            <span>
              用户名&nbsp;
             
            </span>
          )}
          hasFeedback
        >
          {getFieldDecorator('userName', {
            rules: [{ required: true, message: '请输入用户名!', whitespace: true },{
              pattern:/^\w{6,20}$/,message:"请输入6-20位的数字字母或下划线"
            },{
              validator: this.checkUsername.bind(this),
            }],
          })(
            <Input />
          )}
        </FormItem>
            
          <FormItem
          {...formItemLayout}
          label="密码"
          hasFeedback>
          {getFieldDecorator('pwd', {
            rules: [{
              required: true, message: '请输入密码!',
            },{
              pattern:/^[0-9a-zA-Z_!\$#@]{8,18}$/,message:"请输入8-18位的包含特殊字符大写小写数字"
            },{
              validator: this.checkConfirm.bind(this),
            }],
          })(
            <Input type="password" />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="确认密码"
          hasFeedback
        >
          {getFieldDecorator('confirm', {
            rules: [{
              required: true, message: '请确认密码!',
            }, {
              validator: this.checkPassword.bind(this),
            }],
          })(
            <Input type="password" onBlur={this.handleConfirmBlur} />
          )}
        </FormItem>
     <FormItem
          {...formItemLayout}
          label="邮箱"
          hasFeedback>
          {getFieldDecorator('email', {
            rules: [{
              type: 'email', message: '请输入正确的邮箱格式!',
            }, {
              required: true, message: '请输入邮箱!',
            }],
          })(
            <Input />
          )}
        </FormItem>
 
        <FormItem {...tailFormItemLayout} style={{ marginBottom: 8 }}>
          {getFieldDecorator('agreement', {
            valuePropName: 'checked',
          })(
            <Checkbox>I have read the <a href="">agreement</a></Checkbox>
          )}
        </FormItem>
        <FormItem {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit" size="large"  onClick={this.reg.bind(this)}>Register</Button>
        </FormItem>
      </Form>
       </Card>
        </div>
        </Col>
        </Row>
        
}

}

export default Form.create()(Reg)