import React from "react";
import {ajax} from "../common/tools";

import {Table, Icon,Card,Button,Modal,Pagination } from 'antd';

import TabStudent from "./TabStudent";
import AddStudent from "./AddStudent";
import SearchStudent from "./SearchStudent";
import UpdateStudent from "./UpdateStudent";


export default class Student extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			visible: false ,
			data:{},
			student:{}
		
		}

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

	searchStudent(data){
		console.log("搜索2",this.state.data)
		var datas=this.state.data
		datas.rows=data
		this.setState({
			data:datas
		})



	}

	setStudent(student){

		console.log("student",student)
		this.setState({
			student:student,
			visible: true
		})

	}
	show(page){
		ajax({
			type:"get",
			url:"/student/find",
			data:{
				page:page,
				rows:5
			},
			success:function(data){
				
				this.setState({
					data:data
					

				})
			}.bind(this)
		})
	}

	render(){

			return <div>
			<AddStudent show={this.show.bind(this)}></AddStudent>
			<SearchStudent show={this.show.bind(this)} searchStudent={this.searchStudent.bind(this)}></SearchStudent>
			<Card title="xx管理">
			<TabStudent setStudent={this.setStudent.bind(this)} showModal={this.showModal.bind(this)} show={this.show.bind(this)} data={this.state.data}></TabStudent>
			<UpdateStudent show={this.show.bind(this)} student={this.state.student} handleOk={this.handleOk.bind(this)} showModal={this.showModal.bind(this)} handleCancel={this.handleCancel.bind(this)} visible={this.state.visible}></UpdateStudent>
			</Card>
			</div>

		}
	}

