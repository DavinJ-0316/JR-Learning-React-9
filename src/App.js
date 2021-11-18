import logo from './logo.svg';
import React, { Component } from 'react';
import { connect } from 'react-redux'; // a higher order component
import { changeUserName } from './actions';

import './App.css';
import StopWatch from './Stopwatch';
import ActionLink from './ActionLink';
import HeroList from './Heros';
import SignUpForm from './SignUpForm';
import Weather from './Weather';
import Get from './get';
import Post from './post';
import Delete from './delete';
import Update from './update';
// functional component
// assemble welcome component
// function Welcome(props){
//   return <h1>Welcome {props.name}!</h1>;
// }

// // student card
// function StudentCard(props){
//   return <div>
//     <h1>name: {props.name}</h1>
//     <h1>age: {props.age}</h1>
//   </div>
// }

function App() {
  return (
    <div className="App">
      {/* It is {new Date().toLocaleTimeString()} now.
      <Welcome name="Davin"/>
      <StudentCard name="name1" age="21"/>
      <StudentCard name="name2" age="22"/>
      <StudentCard name="name3" age="23"/> */}
      {/* <StopWatch /> */}
      {/* <ActionLink /> */}
      {/* <HeroList /> */}
      {/* <SignUpForm /> */}
      

      {/* <Weather /> */}
      <Post />
      <Delete />
      <Update />
      <Get />
      

    </div>
  );
}
export default App;

// class App extends Component {
//   // state= {
//   //   username: 'Jinhao Jiang'
//   // }
//   handleClick = () =>{
//     const { changeUserName } = this.props;
//     changeUserName({
//       username:"HaHa",
//     })
//   }

//   render() {
//     const { username } = this.props;// input new props
//     return (
//       <>
//         <h1>hi, {username} </h1>
//         <button onClick={this.handleClick}>change username</button>
//       </>
//     )
//   }
// }

// function mapStateToProps(state){
//   // console.log(state);
//   return {
//     username: state.user.username,
//     //返回一个新的props, pure function
//   }
// }

// function mapActionToProps() {
//   return {
//     changeUserName,
//   }
// }
// export default connect(mapStateToProps, mapActionToProps)(App);
