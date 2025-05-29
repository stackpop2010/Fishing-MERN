import FishRow from './FishRow';
import '../App.css';

function FishTable({ fishes, onDelete, onEdit }) {
    

    return (
        <table>
            <thead>
                <tr>
                    <th>Species</th>
                    <th>Month</th>
                    <th>Time</th>
                    <th>Location</th>
                    <th>Weather</th>
                    <th>Gut</th>
                    <th>Edit Log</th>

                </tr>
            </thead>
            <tbody>
                
            {fishes.map((fish) => <FishRow  fish={fish} key={fish._id} onDelete={onDelete} onEdit={onEdit} />)}
            </tbody>
        </table>
    );
}

export default FishTable;