import {Md5} from 'ts-md5'

const privateKey = process.env.NEXT_PUBLIC_PRIVATE_KEY
const publicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY
const ts = process.env.NEXT_PUBLIC_TS

const hashedUrl = Md5.hashStr(`${ts}${privateKey}${publicKey}`)


export default function getCharacters():string {
    return `http://gateway.marvel.com/v1/public/characters?limit=99&ts=${ts}&apikey=${publicKey}&hash=${hashedUrl}`
}

export function getCharacterById(id:number): string {
    return `https://gateway.marvel.com:443/v1/public/characters/${id}?ts=${ts}&apikey=${publicKey}&hash=${hashedUrl}`
}

export function getComicByCharacter(heroId:number, heroName:string): string {
    return `https://gateway.marvel.com:443/v1/public/comics/${heroId}/characters?name=${heroName}&nameStartsWith=t&?ts=${ts}&apikey=${publicKey}&hash=${hashedUrl}`    
}

export function getStoryById(storyId:number):string {
    return `https://gateway.marvel.com:443/v1/public/stories/${storyId}/comics?ts=1&apikey=80cfbf0427cd24a523e8b548829e905f&hash=2784c78f197ae297fb526f9425b061fd`
}

