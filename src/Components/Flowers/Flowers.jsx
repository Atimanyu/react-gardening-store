import axios from "axios"
import Card from "../Card/Card"
import { useEffect, useState } from "react"
function Flowers() {
    const[data,setData] = useState([]);
    const fetchdata = async () => {
        try {
            const response = await axios.get("http://localhost:3000/Flowers")
            setData(response.data);
        }
        catch(e) {
            console.log(e);
        }
    }
    useEffect(() => {
        fetchdata();
    },[])
  return (
    <>
        <div className="grid-container">
            {data.map(element => {
                return <Card key={element.id} iurl={element.imageUrl}
                name={element.name}
                price={element.price}/>
            })}
        </div>
    </>                
  )
}

export default Flowers