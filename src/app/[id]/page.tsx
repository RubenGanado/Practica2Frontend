'use client';
import { buc, getBebidaById } from "@/api/bebida";
import { Bebidas } from "@/type"; 
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";


const EstaRecibeId = () => {

    const { id } = useParams<{id:string}>();

    const [bebida, setBebida] = useState<Bebidas|null>(null);
    const [error, setError] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
    
        if (!id) return ;
      buc(id).then(setBebida)
      .catch(()=>setError("no se han podido cargar los datos; "))
      .finally(()=> setLoading(false));
      
      },[id]);

    return(
      
        <div>
            <Link href="/">Volver</Link>
             {loading && <p>Cargando...</p>}
            {error && <p>{error}</p>}


        {bebida &&
      <div className="container">
        <h1>{bebida.strDrink}</h1>
        <img
          src={bebida.strDrinkThumb}
          alt={bebida.strDrink}
          width="540"
          height="540"
        />
        <p>
          <strong>Nombre: </strong>{bebida.strDrink}
        </p>
        <p>
          <strong>Categoría:</strong> {bebida.strCategory}
        </p>       
        <p>
          <strong>Alcohol:</strong> {bebida.strAlcoholic}
        </p>
        <p>
          <strong>Vaso:</strong> {bebida.strGlass}
        </p>
        <p>
          <strong>Instrucciones:</strong> {bebida.strInstructions}
        </p>

        <h2>Ingredientes:</h2>
    
              {bebida.strIngredient1 && <p>{bebida.strIngredient1}</p>}
            {bebida.strIngredient2 && <p>{bebida.strIngredient2}</p>}
            {bebida.strIngredient3 && <p>{bebida.strIngredient3}</p>}
            {bebida.strIngredient4 && <p>{bebida.strIngredient4}</p>}
            {bebida.strIngredient5 && <p>{bebida.strIngredient5}</p>}
            {bebida.strIngredient6 && <p>{bebida.strIngredient6}</p>}
            {bebida.strIngredient7 && <p>{bebida.strIngredient7}</p>}
            {bebida.strIngredient8 && <p>{bebida.strIngredient8}</p>}
            {bebida.strIngredient9 && <p>{bebida.strIngredient9}</p>}
            {bebida.strIngredient10 && <p>{bebida.strIngredient10}</p>}
            {bebida.strIngredient11 && <p>{bebida.strIngredient11}</p>}
            {bebida.strIngredient12 && <p>{bebida.strIngredient12}</p>}
            {bebida.strIngredient13 && <p>{bebida.strIngredient13}</p>}
            {bebida.strIngredient14 && <p>{bebida.strIngredient14}</p>}
            {bebida.strIngredient15 && <p>{ bebida.strIngredient15 }</p>}
      </div>
        }
    </div>
    )

};


export default EstaRecibeId;