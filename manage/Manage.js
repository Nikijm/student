import React from "react";
import {Link} from "react-router";

import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;


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
    <Header className="header" >
     <h3 style={{color:"white"}}>数据已更新</h3>
    </Header>
    <Layout>
      <Sider width={250} style={{ background: '#fff' }}>
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{ height: '100%' }}
        >
          <SubMenu key="sub1" title={<span><Icon type="user" />用户管理</span>}>
            <Menu.Item key="4"><Link to="student">用户管理</Link></Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" title={<span><Icon type="laptop" />角色管理</span>}>
            <Menu.Item key="5"><Link to="teacher">角色管理</Link></Menu.Item>
        
          </SubMenu>
          <SubMenu key="sub3" title={<span><Icon type="notification" />订单管理</span>}>
            <Menu.Item key="9"><Link to="student">订单管理</Link></Menu.Item>
      
          </SubMenu>

           <SubMenu key="sub3" title={<span><Icon type="notification" />日志</span>}>
            <Menu.Item key="11"><Link to="student">日志</Link></Menu.Item>
      
          </SubMenu>
        </Menu>
      </Sider>
      <Layout style={{ padding: '0 24px 24px' }}>
      
        <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 400 }}>
          {this.props.children}
        </Content>
      </Layout>
    </Layout>
  </Layout>
    	</div>
	}
}