//import { TiPencil} from "react-icons/ti";
import {Link} from 'react-router-dom'
import { GiFishCooked } from "react-icons/gi";
import { LuNotebookPen } from "react-icons/lu";
	
function Edit({ fishId, onEdit }) {
    
    return (
        <Link to={`/edit-fish/${fishId}`} >
        <LuNotebookPen/>
    </Link>
    );
  }

  export default Edit;