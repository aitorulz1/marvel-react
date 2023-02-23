import { getCharacterById } from '../../../../helpers/UrlsHelper';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import axios from 'axios'

export const ButtonToComics = (props:any) => {

  const {hero} = props
  const heroId = hero.id 

  const [ saveRoute, setSaveRoute ]:any = useState("")
  useEffect(() => {
    const consultarApi = async () => {
      axios.get( getCharacterById(heroId))
      .then(response => {    
        setSaveRoute(response.data.data.results);        
    }).catch(error => console.log(error));
    };
    consultarApi();
  }, []);

  const [ getRoute, setGetRoute ] = useState("")
  useEffect(() => {
    if(saveRoute) {
      setGetRoute(saveRoute[0].urls.filter(route => route.type === 'comiclink').map(route => route.url).join(''))
    } else {
      null
    }
  },[saveRoute])  
  
return (       
    <Link target="_blank" href={getRoute} className="w-full bg-red h-4 table mb-6">
      <p className="text-white text-center py-3">COMICS</p>
    </Link>
  )
}
