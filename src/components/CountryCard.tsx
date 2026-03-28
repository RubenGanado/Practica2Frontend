import { Paises } from "@/type";
import Link from "next/link";



export const CountryCard = (params: {pais:Paises})=> {



    return (
       <div className="container">
     
      <h1>{params.pais.name.official}</h1>

      <img
        src={params.pais.flags.png}
        
      />

      <h4>Nombre Oficial: {params.pais.name.official}</h4>
      <h4>Capital: {params.pais.capital}</h4>
      <h4>Subregion: {params.pais.subregion}</h4>
      <h4>Idiomas: {params.pais.languages && Object.values(params.pais.languages).join(", ")}</h4>
      <h4>Monedas: {Object.values(params.pais.currencies).map(c => c.name).join(", ")}</h4>

      <Link href="/">
      <button>← Volver</button>
      </Link>  
      
    </div>
    )
}

