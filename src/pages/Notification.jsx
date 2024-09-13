import '../styles/notifystyle.css'


function Notification() {
    return ( 
        
       
         <div className=" d-flex flex-lg-row gap-1 mt-2 p-2  filter">
          
          <div className="d-flex flex-column filter-div">
            <div className="p-2 filter1 ">Filter</div>
            <div className="p-2">Stories </div>
            <div className="p-2" >Questions</div>
            <div className="p-2" >Spaces</div>
            <div className="p-2" >Poeple updates</div>
            <div className="p-2" >Commments and mentions</div>
            <div className="p-2" >Upvotes</div>
            <div className="p-2" >Your Content</div>
            <div className="p-2" >Your profile</div>
            <div className="p-2" >Announcement</div>
            <div className="p-2" >Earning</div>
            <div className="p-2" >Subscriptions</div>
            </div>
           
          <div className='second m-0 '>
            <h4>Notifications</h4>
            <hr/>
            <p className='p1'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi nostrum voluptas, quam quidem repellat tempora tempore quis exercitationem fugit! Delectus beatae voluptatum libero, </p><hr/>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi nostrum voluptas, quam quidem repellat tempora tempore quis exercitationem fugit! Delectus beatae voluptatum libero, </p>
            <button className='btn btn-dark border-info m-2'> + Request</button>
            </div> 
        </div>
  
    
     );
}

export default Notification;