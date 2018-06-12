import React from "react";
import {ajax} from "../common/tools";

import {Table, Icon,Card,Button,Modal,Pagination } from 'antd';

import TabTeacher from "./TabTeacher";
import AddTeacher from "./AddTeacher";
import SearchTeacher from "./SearchTeacher";
import UpdateTeacher from "./UpdateTeacher";

export default class Teacher extends React.Component{
	constructor(props){
		super(props)
		this.state={
			visible: false ,
			data:{},
			teachers:{}
		}


	}
	setTeacher(teacher){
		this.setState({
			teachers:teacher,
			visible:true
		})

	}
	showModal(){
		this.setState({
			visible: true
		});
	}
	handleOk(e){
		console.log(1);
		this.setState({
			visible: false
		});
	}
	handleCancel(e){
		console.log(e);
		this.setState({
			visible: false
		});
	}
	componentWillMount(){
	console.log("componentWillMount")
	this.show();
	}
	show(page){

		ajax({
			type:"post",
			url:"/teacher/find",
			data:{
				page:page,
				rows:5
			},
			success:function(data){
				console.log("jiaoshi",data)
				this.setState({
					data:data
				})
				

			}.bind(this)
		})
	}

	render(){
			return <div>
			<AddTeacher show={this.show.bind(this)}></AddTeacher>
			<Card title="教师管理">
			<TabTeacher show={this.show.bind(this)} data={this.state.data} setTeacher={this.setTeacher.bind(this)}></TabTeacher>
			<UpdateTeacher setTeacher={this.setTeacher.bind(this)} teachers={this.state.teachers} show={this.show.bind(this)} handleOk={this.handleOk.bind(this)} showModal={this.showModal.bind(this)} handleCancel={this.handleCancel.bind(this)} visible={this.state.visible}></UpdateTeacher>
			</Card>
			</div>

		}
	
}