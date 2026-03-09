import { Bebidas,BebidasRes } from "@/type";
import {api} from  "./axios"

type DrinksResponse = {
  drinks: Bebidas[] | null;
};

export async function getBebidaById(id: string) {
  const response = await api.get<BebidasRes>(`lookup.php?i=${id}`);
  return response.data.drinks?.[0] ?? null;
};


export const buc = async (id:string)  =>{
  const {data} = await api.get<BebidasRes>(`lookup.php?i=${id}`);
  return data.drinks?.[0] ?? null;
};


  export const buscarBebidas = async (name: string) =>{
  const { data } = await api.get<BebidasRes>(`search.php?s=${name}`);
  return data.drinks ?? [];
};

