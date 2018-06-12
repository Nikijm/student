import React from "react";
import { Layout,Menu,Row, Col} from 'antd';
import {Link} from "react-router";
const { Header, Footer, Content} = Layout;


export default class Index extends React.Component{
	constructor(props){
		super(props);
			 this.state = {
	    current: 'login',
	  }
	}
	 handleClick(e){
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }
	render(){

		return <div>
		<Layout>
      	<Header style={{backgroundColor:"white"}}>
      	<Row>
      	<Col span={4}>
      	<h1 >管理系统</h1>
      	</Col>
      	<Col offset={20}>
      	<Menu
        onClick={this.handleClick.bind(this)}
        selectedKeys={[this.state.current]}
        mode="horizontal" >
        <Menu.Item key="login" style={{fontSize:20,paddingTop:15}}>
         <Link to="login">登录</Link>
        </Menu.Item>
        <Menu.Item key="reg" style={{fontSize:20,paddingTop:15}}>
         <Link to="reg">注册</Link>
        </Menu.Item>
       
      </Menu>
      </Col>
	</Row>

   </Header>
      	<Content style={{height:500}}>{this.props.children}</Content>
      	<Footer style={{fontSize:20,backgroundColor:"white"}}>欢迎登录xx管理系统xxxx</Footer>
    	</Layout>
    	</div>
	}
}