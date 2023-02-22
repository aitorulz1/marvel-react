import { Inter } from '@next/font/google'
import { useEffect, useState } from 'react';
import {Md5} from 'ts-md5'
import axios from 'axios'
import Link from 'next/link';

interface Cards {
  comics: object,
  description: string,
  events: object,
  modified: string,
  name: string,
  resourceURI: string,
  series: object,
  stories: object,
  thumbnail: object,
  inputText: string | undefined,
  character: any | undefined,
  urls: [],
}

export default function Cards(props:any) {

const { inputText, character } = props

if(!character) {
  return null
}

const filteredHero = character.filter((hero:Cards) => {
  if(inputText === "") {
    return hero
  } else {
    return hero.name.includes(inputText);
  }
}) 

return (       
      <div className="text-3xl font-bold table w-full">
        { filteredHero ?
          filteredHero.map( character => (
            <Link href={`/cards/${character.id}`}>
              <div className="relative float-left w-1/3 p-3" key={character.id}>
              <div className="h-64 overflow-hidden">
                <img src={`${character.thumbnail.path}.${character.thumbnail.extension}`} alt={character.name} className="md:w-full" />
                </div>
                <div className="table shadow-[0px_1px_3px_0px_#a0aec0] relative w-full">
                  <p className='m-4 text-lg'>{character.name}</p>                    
                  <p className="m-4 text-sm text-gray-500 float-right">Comics <span className='text-black text-base'>{character.comics.available}</span></p>
                </div>
              </div>
            </Link> 
          )) : <p>Nothing to show</p>
        }
      </div>

  )
}
