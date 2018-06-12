import React from "react";
import {Link} from "react-router";
import {ajax} from "../common/tools";

export default class Header extends React.Component{
	constructor(props){
		super(props);
		this.state={
			user:{}
		}
	
		this.style={
			fontSize:20

		}
	}
	componentWillMount(){
		this.getSession();
	}
	componentWillReceiveProps(){
		this.getSession();
	}
	getSession(){
		ajax({
			type:"get",
			url:"/getSession",
			success:function(data){
				console.log("data",data)
				this.setState({
					user:data
				})

			}.bind(this)
		})
	}
	logout(){
		ajax({
			type:"get",
			url:"/Logout",
			success:function(){
				
				this.setState({
					user:{}
				})

			}.bind(this)
		})
	}
	render(){
		var showInfo;
		if(this.state.user.userName){
			showInfo = <span onClick={this.logout.bind(this)}>{this.state.user.userName},安全退出</span>
		}else{
			showInfo = <Link to="/login" style={this.style}>登录</Link>
		}
		
		return <header>
		<h1>管理系统</h1>
		<ul>
		<li>{showInfo}</li>
		<li><Link to="/reg" style={this.style}>注册</Link></li>
		<li><Link to="/student" style={this.style}>学生管理</Link></li>
		</ul>
		</header>
	}
}