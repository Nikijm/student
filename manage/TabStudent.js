import React from "react";
import {ajax} from "../common/tools";

import {Table, Icon,Card,Button,Modal,Pagination,checkbox} from 'antd';


export default class TabStudent extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			visible: false ,
			data:{},

		}
	}
	showById(_id){

		ajax({
			type:"post",
			url:"/student/find",
			data:{
				_id:_id
			},
			success:function(data){
				this.props.setStudent(data);
			}.bind(this)
		})


	}
	del(_id){
		ajax({
			type:"post",
			url:"/student/del",
			data:{
				_id:_id
			},
			success:function(){
				  Modal.confirm({
			    title: '提示',
			    content: '数据删除成功',
			    okText: '确定',
			    cancelText: '取消'
			  });
				this.props.show();
			}.bind(this)
		})
	}
	change(e){
		console.log(e.target.value)
		
	}

	render(){
		const rowSelection = {
		  onChange: (selectedRowKeys, selectedRows) => {
		    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
		  },
		  getCheckboxProps: record => ({
		    disabled: record.name === '用户管理', 
		  })
		
		}

		const dataSource = [{
		  key: '1',
		  name: '用户管理',
		  available_operations:"updata"
		}, {
		  key: '2',
		  name: '角色管理'
		 
		}]
		const columns = [{
			title: 'role',
			dataIndex: 'name',
			key: 'name',
		}, {
			title: 'updata',
			dataIndex: 'updata',
			key: 'updata',
			render: (text,record, index)=>{
				return <input type="checkbox" value="updata"  onChange={this.change.bind(this)}/>
			}
		}, {
			title: 'creat',
			dataIndex: 'creat',
			key: 'creat',
			render: (text,record, index)=>{
				return <input type="checkbox" value="delete"/>
			}
		}, {
			title: 'delete',
			dataIndex: 'delete',
			key: 'delete',
			render: (text,record, index)=>{
				return <input type="checkbox" value="delete"/>
			}
		}, {
			title: 'read',
			dataIndex: 'read',
			key: 'read',
			render: (text,record, index)=>{
				return <input type="checkbox" value="delete"/>
			}
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
			<Table dataSource={dataSource} rowSelection={rowSelection} columns={columns} pagination={pagination}/>		
			</div>

		}
	}







