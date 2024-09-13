
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import skillacedemy from '../images/skill-academy .jpeg'
import DavinAI from '../images/DavinAI.png'
import '../styles/style.css'
import { faComment, faPersonArrowUpFromLine, faShare, faThumbsDown, faThumbsUp, faUpDown, faUpload, faUpLong,  } from '@fortawesome/free-solid-svg-icons';
function PostSection() {
   return(
    <div className="container w-50 mt-3 post-container ">
      {/* First Post  */}
      <div className="card  post-child-container mb-3 border-0" >
  <div className="card-body ">
    <h4 className="card-title post-title" style={{color:'#fff'}}>Artifiacial Intelligence  <span className='follow-btn'> Follow</span></h4>
    <p className="card-text poster-name">Answered by Divid Jalson .1y </p>
    <p className="card-text">Do Web developer should afraid to divin AI Like they will lose job ?</p>
    <p className='card-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum dolore voluptatem ipsam, provident quos repellendus, saepe, harum fugit adipisci vel molestias voluptate ab asperiores magnam? Dicta vitae assumenda aperiam. Maiores?</p>
    <img src={DavinAI} className="card-img-top" alt="Skill Academy logo" />
    <div className="btn-group mt-0">
      
  <a href="#" className="btn text-light ">
    <span><FontAwesomeIcon className="icon "icon={faThumbsUp} /></span>
     Upvote 234k
    <span><FontAwesomeIcon className="icon " icon={faThumbsDown}/></span>
  </a>
  <a href="#" className="btn text-light"><FontAwesomeIcon className="icon "icon={faComment} /> Answer</a>
  <a href="#" className="btn text-light"><FontAwesomeIcon className="icon "icon={faShare} />Share</a>
</div>
  </div>
  
</div>
   
{/* Second POst */}
<div className="card  post-child-container border-0" >
  <div className="card-body ">
    <h4 className="card-title post-title" style={{color:'#fff'}}>Self Improvment  <span className='follow-btn'> Follow</span></h4>
    <p className="card-text poster-name">Answered by Asma Shaikh .1y </p>
    <p className="card-text">What is best platform to do course of  web development ?</p>
    <p className='card-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum dolore voluptatem ipsam, provident quos repellendus, saepe, harum fugit adipisci vel molestias voluptate ab asperiores magnam? Dicta vitae assumenda aperiam. Maiores?</p>
    <img src={skillacedemy} className="card-img-top" alt="Skill Academy logo" />
    <div className="btn-group mt-0">
      
  <a href="#" className="btn text-light ">
    <span><FontAwesomeIcon className="icon "icon={faThumbsUp} /></span>
     Upvote 234k
    <span><FontAwesomeIcon className="icon " icon={faThumbsDown}/></span>
  </a>
  <a href="#" className="btn text-light"><FontAwesomeIcon className="icon "icon={faComment} /> Answer</a>
  <a href="#" className="btn text-light"><FontAwesomeIcon className="icon "icon={faShare} />Share</a>
</div>
  </div>

</div>
{/* Third Post */}
<div className="card  post-child-container mt-3 border-0" >
  <div className="card-body ">
    <h4 className="card-title post-title" style={{color:'#fff'}}>Self Improvment  <span className='follow-btn'> Follow</span></h4>
    <p className="card-text poster-name">Answered by Asma Shaikh .1y </p>
    <p className="card-text">What is best platform to do course of  web development ?</p>
    <p className='card-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum dolore voluptatem ipsam, provident quos repellendus, saepe, harum fugit adipisci vel molestias voluptate ab asperiores magnam? Dicta vitae assumenda aperiam. Maiores?</p>
    <img src={skillacedemy} className="card-img-top" alt="Skill Academy logo" />
    <div className="btn-group mt-0">
      
  <a href="#" className="btn text-light ">
    <span><FontAwesomeIcon className="icon "icon={faThumbsUp} /></span>
     Upvote 234k
    <span><FontAwesomeIcon className="icon " icon={faThumbsDown}/></span>
  </a>
  <a href="#" className="btn text-light"><FontAwesomeIcon className="icon "icon={faComment} /> Answer</a>
  <a href="#" className="btn text-light"><FontAwesomeIcon className="icon "icon={faShare} />Share</a>
</div>
  </div>
  
</div>
   </div>
   
   
   )
}

export default PostSection;