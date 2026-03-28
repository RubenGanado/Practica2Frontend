'use client'
import { getPais, getPaises } from "@/api/pais";
import { CountriesCard } from "@/components/CountriesCard";
import { Paises } from "@/type";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Home = () => {

  const router = useRouter();

  const [error, setError] = useState<string>("");
  const [text, setText] = useState<string>("");
  const [pais,setPais] = useState<Paises[]>([])
  const [name,setName] = useState<string>("all")
  const [loading,setLoading] = useState<boolean>()

 

  useEffect(()=>{
    getPais(name).then(setPais)
    .catch((e)=> {setError(`Error al obtener los datos${e}`)})
  }, [name]);

 

  
  

  return (

    <div>
      <h2>Buscador:</h2>
      <input
        value={text}
        onChange={(e) => {setText(e.target.value),setName(text)}}
        
        
      />

      {loading && <p>Cargando países...</p>}

      


      <div className="gridcontainer"> 
      {pais.map((d) => (
        <CountriesCard key={d.name.common} pais={d} />
      ))}
    </div>

    </div>
  )
}

export default Home;