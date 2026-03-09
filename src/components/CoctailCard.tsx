import { Bebidas } from "@/type";
import Link from "next/link";




export const CoctailCard = (params:{bebida:Bebidas}) => {


    return (
        <div className="ContenedorPrincipal">
            <div className="ContenedorBebidas">
            <h2>{params.bebida.strDrink}</h2>
            <Link href={`/${params.bebida.idDrink}`}>
                <img
          src={params.bebida.strDrinkThumb ?? ""}
          alt={params.bebida.strDrink}
          
          width={100}
          height={100}
        />
        </Link>
                
            </div>
        </div>
    )
}