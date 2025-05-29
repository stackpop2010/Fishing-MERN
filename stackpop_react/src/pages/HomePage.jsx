import { useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import FishTable from '../components/FishTable';



function HomePage({setFishToEdit}){
    const [fishes, setFishes] = useState([]);
    const navigate = useNavigate()

    /*Per MDN, default fetch() request is GET, adding redundant '{method: 'GET'}'
    for illustrative purposes*/ 
    const loadFishes = async () => {
        const response = await fetch('/fishes', {method: 'GET'})
        const data = await response.json();
        setFishes(data)
    }

    useEffect( () => {
            loadFishes();
        }, []);

    const onDelete = async (_id) =>{
        const response = await fetch(
            `/fishes/${_id}`,
            {method: 'DELETE'}
        );
        if(response.status ===204){
            setFishes(fishes.filter( e => e._id !== _id))
            alert(`Successfully deleted the fish with _id = ${_id}`)
        }else{
            alert(`Failed to delete fish with _id = ${_id}, status code = ${response.status}`)
        }
        
        }
          

    const onEdit = async (fish) =>{
        //console.log('onEdit called with ' + fish.title)
        setFishToEdit(fish)
        const fishId = fish._id
        navigate(`/edit-fish/${fishId}`)
    }
    return (
        <>
            <h2>Past Catches</h2>
            <p>Click "log" to log a new catch!</p>
            <p>Click the "gut" or "edit log" icons in the corresponding row to delete or update your catch</p>
            <FishTable fishes={fishes} onDelete={onDelete} onEdit={onEdit}></FishTable>
            
        </>
    );
}


export default HomePage;