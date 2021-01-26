// import logo from './logo.svg';
import React, {useState, useEffect} from 'react';
import './App.css';
import Comment from './comment/Comment';

function App() {

useState({title:'', amount:''});
// const [allComments , setAllComments] = useState([
//   {id: "0.3440255075686327",
//    value: "Parent",
//    next: [
//         {id: "0.4543234531",
//         value: "child1",
//         next: [
//                {id: "0.6432345317",
//                 value: "grandchild1",
//                next: null}
//         ]},
//         {id: "0.6432345317",
//         value: "child2",
//         next: null}]
//   },
//   {id: "0.2343075686327",
//   value: "Parent2",
//   next:null}]);

const [allComments, setAllComments] = useState([{
  id: "974782",
  value:"Parent",
  parent:null
  },
  {
    id: "674782",
    value:"Child1",
    parent:"974782"
  },
  {
    id: "474782",
    value:"GrandChild1",
    parent:"674782"
  },
  {
    id: "771782",
    value:"Child2",
    parent:"974782"
  },
  {
    id: "371782",
    value:"GrandChild2",
    parent:"674782"
  },{
  id: "914782",
  value:"Parent",
  parent:null
  },

])

let currentIds =  allComments.filter(children =>  (
  children.parent  === null
))
// const [allComments , setAllComments] = useState([{
//   id:1,
//   data:"Parent1",
//   children:[2],
//   parent:null
// },{
//   id:2,
//   data:"child1",
//   children:[],
//   parent:1
// }]);

const submitComment = (id, value) =>{
  console.log(id);
  if(id){
    setAllComments(prevComment =>[...prevComment, {
      id:Math.floor(Math.random()*1000000).toString(),
      value:value,
      parent:id,
    }]);
  }
  else{
    setAllComments(prevComment =>[...prevComment, {
      id:Math.floor(Math.random()*1000000).toString(),
      value:value,
      parent:null,
    }]);
  }
}

useEffect(()=>{
  console.log(allComments);
  document.getElementById('Comment-box').value = "";
},[allComments])

  return (
    <div className="App">
      <header className="App-header">
      <h1>Nested commenting</h1>
      </header>
      <div className='All-comments-block'>
      <p>Enter your comment here</p>
      <input className='Comment-box' id='Comment-box' type='text' placeholder="Enter your comment"></input>
      <button onClick={()=>{submitComment(null, document.getElementById('Comment-box').value)}} >Comment</button>
      <Comment
      allComments = {allComments}
      submitComment = {submitComment}
      currentIds = {currentIds}
      />
      </div>
      
    </div>
  );
}

export default App;
