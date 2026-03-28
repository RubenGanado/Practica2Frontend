import { Paises } from "@/type";
import Link from "next/link";

export const CountriesCard = (params: {pais:Paises})=> {
    return (
        <div>
            <div className="maincontainer">
                <h1>{params.pais.name.common}</h1>
            <Link href={`/${params.pais.name.common}?fields=`}>
                
                <img
                    src={params.pais.flags.png}
                
                    width={200}
                    height={150}
                    />
        </Link>
        <h4>Population: {params.pais.population}</h4>
            </div>

        </div>
    )
}