import { faPen } from "@fortawesome/free-solid-svg-icons/faPen";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons/faPenToSquare";
import { faQuestion } from "@fortawesome/free-solid-svg-icons/faQuestion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import profile from '../images/profile.jpg'
import React, { useState } from 'react';
import '../styles/model.css'
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
function QuestionSection() {
    const [open,setOpen]=useState(false);
    const [activateTab,setActiveTab]=useState('ask')
    const [question,setQuestion]=useState('')
    const [post,setPost]=useState('')

    const onOpenModal=()=>setOpen(true)
    const onCloseModal=()=>setOpen(false)
 
    //handling form submission
    const handleQuestionSubmit=(e)=>{
      e.preventDefault()
      console.log('Question:',question);
      setQuestion('')
      onCloseModal()
    }
    const handlePostSubmit=(e)=>{
      e.preventDefault()
      console.log('Post:',post);
      setPost('')
      onCloseModal()
    }
    // internal styling
          
            return ( 
        <div className=" post-section container w-50 mt-4 p-3 z-2">
          <div className="input-group mb-1 ">
            <img src={profile} width='40px' height='40px' style={{borderRadius:'50%'}} alt="images don't accept this browser" />
            <input className="post-input" type="text" placeholder="What do you want to ask or share ?" />
          </div>
          {/* react Model */}
      <div className="btn-group post-btn ">
      <button onClick={onOpenModal} className='btn btn1'><FontAwesomeIcon className="icon "icon={faQuestion} />Ask</button>
      <Modal open={open} onClose={onCloseModal} center  >
          <div style={{width:'600px',height:'500px'}}className="model-div">
            {/* tab header */}
            <div className='tab-header'>
              <button className='model-tab'onClick={()=>setActiveTab('ask')}  >Add Question</button>
              <button className='model-tab'onClick={()=>setActiveTab('post')}   >Create Post</button>
            </div>
            {/* Tab Content */}
            {
              activateTab ==='ask'&&(
                <div>
                  <h4>Ask A Question</h4>
                  <p>Tips on getting good asnwers quikly:</p>
                  <ul>
                    <li>Make sure your question not has been asked already</li>
                    <li>Keep your question short and to the point </li>
                    <li>Double click on grammer and spelling</li>
                  </ul>
                  <hr/>
                  <form onSubmit={handleQuestionSubmit}>
                    <textarea  placeholder='Ask Your Question here'value={question} onChange={(e)=>setQuestion(e.target.value)}/><br/><br/>
                    <button  className="model-btn" onClick={()=>setOpen(false)} >Cancle</button> 
                  <button type='submit' className="model-btn">Submit</button>
                    
                  </form>
                </div>
              )
            }
             {
              activateTab ==='post'&&(
                <div>
                  <h4>Create a Post</h4>
                  <hr/>
                  <form onSubmit={handlePostSubmit}>
                    
                    <textarea placeholder='Write your post here'value={post} onChange={(e)=>setPost(e.target.value)}/><br/><br/>
                    <button  className="model-btn" onClick={()=>setOpen(false)} >Cancle</button> 
                  <button type='submit'className="model-btn" >Submit</button>
                    
                  </form>
                </div>
              )
            }
          </div>
        </Modal>
      <a href="#" className="btn btn2"><FontAwesomeIcon className="icon "icon={faPenToSquare} /> Answer</a>

      <button onClick={onOpenModal} className='btn '><FontAwesomeIcon className="icon "icon={faPen} />Post</button>

</div>
        </div>
      
     );
      
     
}

export default QuestionSection;