import React,{useState} from "react";
const Map = () =>{
    const [address, setAddress] = useState('')

    const onClick = e=>{
        e.preventDefault()
    }
    return <>
    <div>
        <span>주소: {address}</span>
        <button onClick={onClick}>주소찾기</button>
    </div>
    </>
}
export default Map