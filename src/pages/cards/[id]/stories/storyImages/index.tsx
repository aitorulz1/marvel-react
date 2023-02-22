import getStoryById from "../../../../../helpers/UrlsHelper"
import { useEffect, useState } from 'react';
import {Md5} from 'ts-md5'
import axios from 'axios'

export default function StoryImages(props:any){

    const privateKey = process.env.NEXT_PUBLIC_PRIVATE_KEY
    const publicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY
    const ts = process.env.NEXT_PUBLIC_TS

    const hashedUrl = Md5.hashStr(`${ts}${privateKey}${publicKey}`)

    const { storyId } = props
    const [ storyUrl, setStoryUrl ]:any[] = useState([])

    useEffect(() => {
        const consultarApi = async () => {
          axios.get(`https://gateway.marvel.com:443/v1/public/stories/${storyId}/comics?ts=${ts}&apikey=${publicKey}&hash=${hashedUrl}`)
        //   axios.get(getStoryById(`${storyId}`)) Not Working
          .then(response => {    
            setStoryUrl(response.data.data.results[0].thumbnail);        
        }).catch(error => console.log(error));
        };
        consultarApi();
      }, []);

    return(
        <div>
            <img src={`${storyUrl.path}.${storyUrl.extension}`} />
        </div>
        
)
}