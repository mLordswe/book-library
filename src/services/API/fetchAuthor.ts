import { data } from "react-router";
import { NormalizedBook } from "services/types";

const fetchAuthor = async (key:string): Promise<NormalizedBook>=>{

    if (!key) {
        console.error("Kunde inte hitta nyckel")
    }
    try{
        const url = `https://openlibrary.org/authors/${key}.json`
        console.log("fetch succesful", url)

        const res = await fetch(url)
        if(!res.ok){
            throw new Error(`failed to fetch ${res.status}`)
        }
        const data:NormalizedBook = await res.json();
        
        return data
    }catch(error){
        console.error("Ruh Roh something is rong Raggie")
        throw error
    }


    
}
export default fetchAuthor