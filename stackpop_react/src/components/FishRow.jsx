import '../App.css';
import Edit from './Edit';
import Delete from './Delete';
import fishData from './ImgSrcs';



function FishRow({ fish, onDelete, onEdit }) {
    const imgObj = fishData.find(f => f.species === fish.species);
    const imgUrl = imgObj ? imgObj.url : "";
    return (
        <tr >
            <td style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
  <img src={imgUrl} alt={fish.species} style={{ width: 32, height: 32, marginRight: 8 }} />
  {fish.species}
</td>
            <td>{fish.month}</td>
            <td>{fish.time}</td>
            <td>{fish.location}</td>
            <td>{fish.weather}</td>
            <td className="no-border-row"><Delete fishId={fish._id} onDelete={onDelete} /></td>
            <td className="no-border-row"> <Edit fishId={fish._id} onEdit={onEdit}/> </td>

            
        </tr>
    );
}

export default FishRow;