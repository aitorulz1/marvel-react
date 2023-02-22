import { Inter } from '@next/font/google'
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router'
import axios from 'axios'
import { getCharacterById } from '../../../helpers/UrlsHelper';

type Hero = {
  id?: number | undefined,
  name?: string,
  thumbnail?: string,
}

export default function CardId() {

  const { query } = useRouter()
  const id = query.id

  const [ character, setCharacter ]:Hero | undefined = useState([])

  useEffect(() => {
    const consultarApi = async () => {
      axios.get(getCharacterById(`${id}`))
      .then(response => {    
        setCharacter(response.data.data.results);
    }).catch(error => console.log(error));
    };
    consultarApi();
  }, []);

  
  
return (       
      <h1 className="text-3xl font-bold table w-full">        
        { character ?
          character.map( hero => (
            <div className="relative float-left w-1/3 p-3" key={hero.id}>
            <div className="h-6.id4 overflow-hidden">
              <img src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`} alt={hero.name} className="md:w-full" />
              </div>
              <div className="table shadow-[0px_1px_3px_0px_#a0aec0] relative w-full">
                <p className='m-4 text-lg'>{hero.name}</p>                      
                <p className="m-4 text-sm text-gray-500 float-right">Comics <span className='text-black text-base'>{hero.comics.available}</span></p>
              </div>
            </div> 
          )) : <p>Nothing to show</p>
        }
      </h1>

  )
}
