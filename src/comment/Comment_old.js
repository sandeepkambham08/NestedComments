import React from 'react';

const Comment  = (props)  =>{
if(props.allComments){
    return (
        props.allComments.map(element => (
            <div key={element.id}>
            <p  style={{position:'relative'}}> {element.value} | {element.id}</p> 
            <input className='Comment-box' id={element.id} type='text' placeholder="...."></input>
            <button onClick={()=>{props.submitComment(element.id)}}>Reply</button>
            {console.log(element.children)}
            <div style={{paddingLeft:'100px',position:'relative'}}>
            {element.next && 
            <Comment 
            allComments={element.next}
            submitComment={props.submitComment}
            ></Comment>}
           </div>

            </div>
                  )
          )
    )
}
else return null;
}

export default Comment;