import { useEffect, useState } from 'react';
import { useRouter } from 'next/router'
import axios from 'axios'
import { getCharacterById } from '../../../helpers/UrlsHelper';
import Link from 'next/link';
import { FaArrowAltCircleLeft } from 'react-icons/fa';

import { Header } from '@/components/Header';
import{ ButtonToComics } from './button'
import{ Stories } from './stories'

type Character = {
  comics: object,
  description: string,
  events: object,
  id: number,
  modified: string,
  name: string,
  resourceURI: string,
  series: {
    available: string,
  },
  stories: object,
  thumbnail: {
    path: string,
    extension: string,
  },
  hero: object,
  urls: [],
}

export default function CardId() {

  const { query } = useRouter()
  const id = query.id

  const [ character, setCharacter ] = useState([])
  
  useEffect(() => {
    const consultarApi = async () => {
      axios.get(getCharacterById(id))
      .then(response => {    
        setCharacter(response.data.data.results);        
    }).catch(error => console.log(error));
    };
    consultarApi();
  }, []);

  console.log(character)
  
return (      
  <>
    <Header />
      <div className="text-3xl font-bold table w-full">     
        <div className="w-full relative">
          <Link href="/"><FaArrowAltCircleLeft className="fill-red-600 cursor-pointer absolute right-14" size={35} /></Link>
        </div>
        { character ?
          character.map( (hero:Character) => (
          <>
            <div className="relative mx-auto w-3/6 max-w-xl pb-28" key={hero.id}>
              {/* name */}
              <p className='text-center pb-4 text-red-700'>{hero.name}</p>       
              {/* image */}
              <div className="h-6.id4 overflow-hidden">
                <img src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`} alt={hero.name} className="md:w-full" />
              </div>
              <div className="text-sm text-center pt-6 table">
                {hero.description}
              </div>

                {/* stories + comics */}
                <div className="table shadow-[0px_1px_3px_0px_#a0aec0] relative w-full mt-6 mb-6">
                  <p className="m-4 text-sm text-gray-500 float-left">Stories <span className='text-black text-base'>{hero.stories.available}</span></p>
                  <p className="m-4 text-sm text-gray-500 float-right">Comics <span className='text-black text-base'>{hero.comics.available}</span></p>
                </div>
                <ButtonToComics key={hero.id} hero={hero} />
            </div> 
            <div className="w-3/4 m-auto">
                <Stories key={hero.id} hero={hero} />
            </div>
          </>
          )) : <p>Nothing to show</p>
        }
      </div>
  </> 
  )
}
