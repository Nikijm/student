import React from "react";
import ReactDOM from "react-dom";
import {Route,Router,IndexRoute,hashHistory} from "react-router";

import Index from "../index/Index";
import Manage from "../manage/Manage";
import Reg from "../reg/Reg";
import Login from "../login/Login";

import Student from "../manage/student";
import Teacher from "../manage/Teacher";

ReactDOM.render(<Router history={hashHistory}>

		<Route path="/" component={Index}>

		<IndexRoute component={Login}></IndexRoute>
		<Route path="/reg" component={Reg}></Route>
		<Route path="/login" component={Login}></Route>
		<Route path="/manage" component={Manage}>
        <Route path="/student" component={Student}></Route>
    	<Route path="/teacher" component={Teacher}></Route>      
    	</Route>

    </Route>

	</Router>,document.getElementById("content"));










// import React from 'react';
// import ReactDOM from 'react-dom';
// import { DatePicker, message } from 'antd';

// export default class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       date: '',
//     };
//   }
//   handleChange(date) {
//     message.info('您选择的日期是: ' + date.toString());
//     this.setState({ date });
//   }
//   render() {
//     return (
//       <div style={{ width: 400, margin: '100px auto' }}>
//         <DatePicker onChange={value => this.handleChange(value)} />
//         <div style={{ marginTop: 20 }}>当前日期：{this.state.date.toString()}</div>
//       </div>
//     );
//   }
// }

