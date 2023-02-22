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