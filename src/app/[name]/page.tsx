'use client'

import { getPais} from "@/api/pais";
import { Paises } from "@/type"; 
import { AxiosError } from "axios";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import { CountryCard } from "@/components/CountryCard";


const EstaRecibeId = () => {
  const { name } = useParams<{ name: string }>();
  const [error, setError] = useState<string>("");
  const [pais, setPais] = useState<Paises>();

  useEffect(() => {
    if (!name) return;

    getPais(name)
      .then(data => setPais(data[0]))
      .catch(() => setError("no se pudo cargar los datos"));
  }, [name]);

  if (error) return <p>{error}</p>;
  if (!pais) return <p>Cargando...</p>;

  return (
    <div >
      <CountryCard pais={pais}/>
   
      
    </div>
  );
};


export default EstaRecibeId;