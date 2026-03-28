import { Paises } from "@/type"
import { api } from "./axios"

export const getPaises = async (name:string) => {
    const {data} = await api.get<Paises[]>(`${name}?fields=name,flags,population`)
    return data ?? null
}


export const getPais = async (name:string) => {
    const {data} = await api.get<Paises[]>(`name/${name}?fields=`)
    return data ?? null 
}