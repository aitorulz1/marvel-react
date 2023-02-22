import {FaSearch} from 'react-icons/fa'
import { RxCross1 } from "react-icons/rx";
import { useEffect, useState } from 'react';
import axios from 'axios'
import getCharacters from '@/helpers/UrlsHelper';
import Cards from '../cards'


export default function Search() {


 const [ characters, setCharacters ] = useState([])


useEffect(() => {
    const consultarApi = async () => {
      axios.get(getCharacters())
      .then(response => {    
        setCharacters(response.data.data.results);
    }).catch(error => console.log(error));
    };
    consultarApi();
  }, []);

 

const [inputText, setInputText] = useState("");

let inputHandler = (e: React.FormEvent<HTMLInputElement>) => {
    var hero = (e.target as HTMLInputElement).value;
    setInputText(hero);
};

const onClickCleanInput = ()  => {
    setInputText("")
}




return (  
    <>
        <div className="table bg-white w-full text-4-xl border-b-[2px] border-red-500 border-solid mb-8">
            <FaSearch className="fill-red-500 text-4-xl -mb-3 table float-left w-1/9" />
                <input id="supers" onChange={inputHandler}  type="search" value={inputText}  className="block bg-white outline-0 ml-6 float-left w-8/9 text-lg pb-1 text-black" />
            <button className='w-1/9 float-right cursor-pointer' onClick={onClickCleanInput} type='reset' >
                <RxCross1 className="fill-red-500 text-4-xl -mb-3 text-red-500 font-black cursor-pointer" />
            </button>
        </div>     
        <Cards inputText={inputText} character={characters} />
    </>
  )
}
