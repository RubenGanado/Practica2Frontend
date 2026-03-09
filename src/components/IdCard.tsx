import { Bebidas } from "@/type"



export const IdCard =(params:{bebida:Bebidas })=> {

    return (
        <div className=" ContenedorId">

            <h2> {params.bebida.strDrink}</h2>


            <img
            src={params.bebida.strDrinkThumb}
            width={80}
            height={80}
            />

        </div>
    )

}