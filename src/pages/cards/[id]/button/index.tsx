import { getCharacterById } from '../../../../helpers/UrlsHelper';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import axios from 'axios'
import { Hero } from '../../../../types/Hero';

interface Props {
  hero: Hero
}

export const ButtonToComics = (props: Props) => {

  const {hero} = props
  const heroId = hero.id 

  const [ saveRoute, setSaveRoute ] = useState("")
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
    <Link target="_blank" href={getRoute} className="w-full bg-red h-4 table mb-6 shadow-[0px_1px_3px_0px_#a0aec0]">
      <p className="text-white text-center py-3">COMICS</p>
    </Link>
  )
}
