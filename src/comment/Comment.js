import React from "react";
let currentIds;

//Get next iteration ids
const getCurrentIds=(element, allComments)=>{
currentIds = allComments.filter((children) => children.parent === element.id);
   console.log(currentIds) ;
   return currentIds;
}

const Comment = (props) => {
  if (props.currentIds.length) {
    return props.currentIds.map((element) => (
      <div>
        <div key={element.id}>
          <p style={{ position: "relative" }}> {" "} {element.value} | {element.id} </p>
          <input className='Comment-box' id={element.id} type='text' placeholder={`reply to ${element.value}`}></input>
          <button onClick={()=>{props.submitComment(element.id, document.getElementById(element.id).value)}}>Reply</button>
          <div style={{ paddingLeft: "100px", position: "relative" }}>
          {/* Recursive call */}
            <Comment
            currentIds = {getCurrentIds(element, props.allComments)}
            allComments= {props.allComments} 
            submitComment = {props.submitComment}
            />
          </div>
        </div>
      </div>
    ));
  } else return null;
};

export default Comment;

