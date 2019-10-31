import React, {useState, useEffect} from 'react'
import axios from 'axios'

const baseURL = "https://api.giphy.com/v1/"
const apiKEY = "api_key=uTB99fRma0KOLIpeXN864ndqrlgoREdH"
const endpoint = "gifs/search"
const query = "q=dog"


export default function Home(){
    const [imgSrc, setImgSrc] = useState("")
    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
        // Update the document title using the browser API
        getDogPic();
    });

    const getDogPic = ()=>{
        axios.get("https://api.giphy.com/v1/gifs/search?api_key=uTB99fRma0KOLIpeXN864ndqrlgoREdH&q=dog&limit=25&offset=0&rating=G&lang=en")
        .then((res)=>{
            console.log(res.data.data[0].embed_url)
            setImgSrc(res.data.data[0].embed_url)
        })
    }

    return(
        <>
            <img className="img" src="https://media.giphy.com/media/bbshzgyFQDqPHXBo4c/source.gif" alt=""></img>
        </>
    )
}