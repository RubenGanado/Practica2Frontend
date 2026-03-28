
lo primero es hacer npm  install, y npm install axios para poder compilar elprograma.



Esta es una práctica hecha con Next.js en la que he creado una pequeña aplicación para ver información de países usando la API de REST Countries.
La idea principal es poder ver todos los países al entrar en la página y luego poder buscar uno en concreto o entrar a ver más detalles de cada país.

Cuando entras en la página principal:

Se cargan todos los países automáticamente
Cada país se muestra en una tarjeta con su bandera, nombre , población y monedas e idiomas
Hay un buscador para filtrar países por nombre

Si haces clic en la bandera de un país:

Te lleva a una página dinámica con más información de ese país



como funciona

La búsqueda llama a la API de REST Countries usando el nombre que escribes.

Si el país existe, se muestra en pantalla.

Si no existe o escribes algo mal, se muestra un mensaje de error.

En la página principal  he hecho:

Una llamada a la API cuando carga la página Un estado para guardar los países Un buscador con input para filtrar países Renderizado de las tarjetas de países usando map

Componente de tarjeta
He creado un componente CountriesCard que recibe un país como props.
Este componente muestra la información básica del país y contiene un enlace a su página individual.

En la página dinámica:
Obtengo el nombre del país desde useParams
Hago una llamada a la API para ese país
Muestro la información en pantalla usando otro componente

y por ultimo los estados: He tenido que controlar varios estados:
loading para cuando están cargando los datos
error para cuando la API falla o no encuentra resultados
pais para almacenar los datos

