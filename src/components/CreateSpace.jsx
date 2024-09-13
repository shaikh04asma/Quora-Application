import { faLaptopCode, faP, faPenNib, faPlus, faPlusCircle, faUtensils} from "@fortawesome/free-solid-svg-icons";
import { faMicrochip } from "@fortawesome/free-solid-svg-icons/faMicrochip";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons/faThumbsUp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '../styles/styling.css'
function CreateSpace() {
  return (
    <div className="create-space mt-4 container ">
      <div className="d-flex flex-column bg-secondary">
        <div className="p-2 "><span style={{marginRight:'5px'}}><FontAwesomeIcon  icon={faPlusCircle} /></span >Create Space</div>
      
      
        <div className="p-2"><span style={{marginRight:'5px'}}><FontAwesomeIcon icon={faLaptopCode} /></span>Coding & Programming </div>
        <div className="p-2" ><span style={{marginRight:'5px'}}><FontAwesomeIcon icon={faMicrochip} /></span>Artificial Intelligance</div>
        <div className="p-2" ><span style={{marginRight:'5px'}}><FontAwesomeIcon icon={faUtensils} /></span>Cooking</div>
        <div className="p-2" ><span style={{marginRight:'5px'}}><FontAwesomeIcon icon={faPenNib} /></span>Writing</div>
        <div className="p-2" ><span style={{marginRight:'5px'}}><FontAwesomeIcon icon={faThumbsUp} /></span>Self Improvement</div>
        
       
        </div>
        <hr/>
        <div className="container below-space">
            <p>. About .Career</p>
            <p>. Terms .Privacy</p>
            <p>. Advertise .Press</p>
            <p>. Grievance Officer</p>
            <p>. Your Ad Choices</p>
        </div>
    </div>
  );
}

export default CreateSpace;
