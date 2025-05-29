import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom'

export const EditFish= () => {

    const {id} = useParams();
    const [species, setSpecies] = useState('');
    const [month, setMonth] = useState('');
    const [time, setTime] = useState('');
    const [location, setLocation] = useState('');
    const [weather, setWeather] = useState('');


    const navigate = useNavigate();


    useEffect(() => {
        const fetchFish = async () => {
            const response = await fetch(`/fishes/${id}`);
            if (response.ok) {
                const fish = await response.json();
                setSpecies(fish.species);
                setMonth(fish.month);
                setTime(fish.time);
                setLocation(fish.location);
                setWeather(fish.weather);
            } else {
                console.error('Failed to fetch fish');
            }
        };

        fetchFish();
    }, [id]);

    const editFish = async () => {
        const editedFish = {species, month, time, location, weather}
        const response = await fetch(
            `/fishes/${id}`, {
                method: 'PUT',
                headers: {'Content-type': 'application/json'},
                body: JSON.stringify(editedFish),
            }
        );
        if(response.status===200){
            alert("Successfully edited the fish");
        }else{
            alert("Failed to edit fish, status code = " + response.status)
        }
        navigate('/')
    };

    return (
        <div>
            <h2>Edit Existing Fish</h2>
        <table>
        <thead>
            <tr>
                <th>Species</th>
                <th>Month</th>
                <th>Time</th>
                <th>Location</th>
                <th>Weather</th>

            </tr>
        </thead>
        <tbody>

        <tr>
            <td>
        <select
            id="Fish Species"
            value={species}
            onChange={e => setSpecies(e.target.value)}>
            <option value = "Anchovy">Anchovy</option>
            <option value = "Angelfish">Angelfish</option>
            <option value = "Arapaima">Arapaima</option>
            <option value = "Arowana">Arowana</option>
            <option value = "Barred knifejaw">Barred knifejaw</option>
            <option value = "Barreleye">Barreleye</option>
            <option value = "Betta">Betta</option>
            <option value = "Bitterling">Bitterling</option>
            <option value = "Black bass">Black bass</option>
            <option value = "Blowfish">Blowfish</option>
            <option value = "Blue marlin">Blue marlin</option>
            <option value = "Bluegill">Bluegill</option>
            <option value = "Butterfly fish">Butterfly fish</option>
            <option value = "Carp">Carp</option>
            <option value = "Catfish">Catfish</option>
            <option value = "Char">Char</option>
            <option value = "Cherry salmon">Cherry salmon</option>
            <option value = "Clown fish">Clown fish</option>
            <option value = "Coelacanth">Coelacanth</option>
            <option value = "Crawfish">Crawfish</option>
            <option value = "Crucian carp">Crucian carp</option>
            <option value = "Dab">Dab</option>
            <option value = "Dace">Dace</option>
            <option value = "Dorado">Dorado</option>
            <option value = "Football fish">Football fish</option>
            <option value = "Freshwater goby">Freshwater goby</option>
            <option value = "Frog">Frog</option>
            <option value = "Gar">Gar</option>
            <option value = "Giant snakehead">Giant snakehead</option>
            <option value = "Giant trevally">Giant trevally</option>
            <option value = "Golden trout">Golden trout</option>
            <option value = "Goldfish">Goldfish</option>
            <option value = "Great white shark">Great white shark</option>
            <option value = "Guppy">Guppy</option>
            <option value = "Hammerhead shark">Hammerhead shark</option>
            <option value = "Horse mackerel">Horse mackerel</option>
            <option value = "Killifish">Killifish</option>
            <option value = "King salmon">King salmon</option>
            <option value = "Koi">Koi</option>
            <option value = "Loach">Loach</option>
            <option value = "Mahi-mahi">Mahi-mahi</option>
            <option value = "Mitten crab">Mitten crab</option>
            <option value = "Moray eel">Moray eel</option>
            <option value = "Napoleonfish">Napoleonfish</option>
            <option value = "Neon tetra">Neon tetra</option>
            <option value = "Nibble fish">Nibble fish</option>
            <option value = "Oarfish">Oarfish</option>
            <option value = "Ocean sunfish">Ocean sunfish</option>
            <option value = "Olive flounder">Olive flounder</option>
            <option value = "Pale chub">Pale chub</option>
            <option value = "Pike">Pike</option>
            <option value = "Piranha">Piranha</option>
            <option value = "Pond smelt">Pond smelt</option>
            <option value = "Pop-eyed goldfish">Pop-eyed goldfish</option>
            <option value = "Puffer fish">Puffer fish</option>
            <option value = "Rainbowfish">Rainbowfish</option>
            <option value = "Ranchu goldfish">Ranchu goldfish</option>
            <option value = "Ray">Ray</option>
            <option value = "Red snapper">Red snapper</option>
            <option value = "Ribbon eel">Ribbon eel</option>
            <option value = "Saddled bichir">Saddled bichir</option>
            <option value = "Salmon">Salmon</option>
            <option value = "Saw shark">Saw shark</option>
            <option value = "Sea bass">Sea bass</option>
            <option value = "Sea butterfly">Sea butterfly</option>
            <option value = "Sea horse">Sea horse</option>
            <option value = "Snapping turtle">Snapping turtle</option>
            <option value = "Soft-shelled turtle">Soft-shelled turtle</option>
            <option value = "Squid">Squid</option>
            <option value = "Stringfish">Stringfish</option>
            <option value = "Sturgeon">Sturgeon</option>
            <option value = "Suckerfish">Suckerfish</option>
            <option value = "Surgeonfish">Surgeonfish</option>
            <option value = "Sweetfish">Sweetfish</option>
            <option value = "Tadpole">Tadpole</option>
            <option value = "Tilapia">Tilapia</option>
            <option value = "Tuna">Tuna</option>
            <option value = "Whale shark">Whale shark</option>
            <option value = "Yellow perch">Yellow perch</option>
            <option value = "Zebra turkeyfish">Zebra turkeyfish</option>
        </select>
        </td>
            <td>
        <select
            value={month}
            onChange={e => setMonth(e.target.value)} >
            <option value = "January">January</option>
            <option value = "February">February</option>
            <option value = "March">March</option>
            <option value = "April">April</option>
            <option value = "May">May</option>
            <option value = "June">June</option>
            <option value = "July">July</option>
            <option value = "August">August</option>
            <option value = "September">September</option>
            <option value = "October">October</option>
            <option value = "November">November</option>
            <option value = "December">December</option>    
            </select>
            </td>
            <td>
        <select
            value={time}
            onChange={e => setTime(e.target.value)} >
            <option value = "12 AM">12 AM</option>
            <option value = "1 AM">1 AM</option>
            <option value = "2 AM">2 AM</option>
            <option value = "3 AM">3 AM</option>
            <option value = "4 AM">4 AM</option>
            <option value = "5 AM">5 AM</option>
            <option value = "6 AM">6 AM</option>
            <option value = "7 AM">7 AM</option>
            <option value = "8 AM">8 AM</option>
            <option value = "9 AM">9 AM</option>
            <option value = "10 AM">10 AM</option>
            <option value = "11 AM">11 AM</option>
            <option value = "12 PM">12 PM</option>
            <option value = "1 PM">1 PM</option>
            <option value = "2 PM">2 PM</option>
            <option value = "3 PM">3 PM</option>
            <option value = "4 PM">4 PM</option>
            <option value = "5 PM">5 PM</option>
            <option value = "6 PM">6 PM</option>
            <option value = "7 PM">7 PM</option>
            <option value = "8 PM">8 PM</option>
            <option value = "9 PM">9 PM</option>
            <option value = "10 PM">10 PM</option>
            <option value = "11 PM">11 PM</option>
            </select>
            </td>
            <td>
         <select
            value={location}
            onChange={e => setLocation(e.target.value)}
            >
            <option value = "Ocean (beach)">Ocean beach</option>
            <option value = "Ocean (diving)">Ocean diving</option>
            <option value = "River ">River </option>
            <option value = "River (cliffs)">River cliffs</option>
            <option value = "River (mouth)">River mouth</option>
            <option value = "Pond">Pond</option>
            </select>
            </td>
            <td>
         <select
            value={weather}
            onChange={e => setWeather(e.target.value)} >
                <option value = "Clear">Clear</option>
                <option value = "Cloudy">Cloudy</option>
                <option value = "Heavy Rain">Heavy Rain</option>
                <option value = "Heavy Snow">Heavy Snow</option>
                <option value = "Rain">Rain</option>
                <option value = "Rain Clouds">Rain Clouds</option>
                <option value = "Snow">Snow</option>
                <option value = "Sunny">Sunny</option>

            </select>
            </td>
            <td className="no-border-row">
        <button
            onClick={editFish}
        >Edit</button>
        </td>
        </tr>

        </tbody>
        
    </table>
    </div>


);
}



export default EditFish;
