import React from "react";
import {Input,Select,Col} from "antd";
import {ajax} from "../common/tools";

const InputGroup = Input.Group;
const Option = Select.Option;
const Search = Input.Search;

export default class SerachStudent extends React.Component{
			constructor(props){
        super(props);
    }

    Serach(value){
    	console.log("a0",value)
		ajax({
			type:"get",
			url:"/student/find",
			data:{
				name:value
			},
			success:function(data){
				console.log("搜a索"+data);
				this.props.searchStudent(data);	

			}.bind(this)

		})

	}
	render(){
        return <div >

        <InputGroup compact>
         
           <Search
		    placeholder="input search text"
		    style={{ width: 200 }}
		    onSearch={(value)=>{this.Serach(value)}}
		  />
		   <Select defaultValue="name">
            <Option value="name">姓名</Option>
            <Option value="age">年龄</Option>
          </Select>
 
        </InputGroup>
        </div>
    }
}
