import React from "react";
import {ajax} from "../common/tools";

import {Table, Icon,Card,Button,Modal,Pagination } from 'antd';


export default class TabTeacher extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			visible: false ,
			data:{}
		}
	}

	updata(id){

		ajax({
			type:"post",
			url:"/teacher/find",
			data:{
				_id:id
			},
			success:function(data){
				this.props.setTeacher(data);
			}.bind(this)
		})


	}
	Tdel(_id){
		ajax({
			type:"get",
			url:"/teacher/del",
			data:{_id:_id},
			success:function(){
				this.props.show()

			}.bind(this)
		})

	}
	render(){
		const columns = [{
			title: '姓名',
			dataIndex: 'name',
			key: 'name',
		}, {
			title: '年龄',
			dataIndex: 'age',
			key: 'age',
		}, {
			title: '性别',
			dataIndex: 'sex',
			key: 'sex',
		}, {
			title: '班级',
			dataIndex: 'classes',
			key: 'classes',
		}, {
			title: '联系电话',
			dataIndex: 'phone',
			key: 'phone',
		},{
			title: '操作',
			key: 'action',
			render:(text, record)=>(
				<span>
				<Button type="primary" onClick={()=>{this.updata(text._id)}}>修改</Button>
				<Button type="danger" onClick={()=>{this.Tdel(text._id)}}>删除</Button>
				</span>
				)
			}];

			const pagination={
				current:this.props.data.curpage,
				pageSize:this.props.data.eachpage,
				total:this.props.data.total,
				onChange:function(page, pageSize){
					this.props.show(page)
				}.bind(this)
			}
	

			return <div>
			<Table dataSource={this.props.data.rows} columns={columns} pagination={pagination}/>
			</div>

		}
	}







