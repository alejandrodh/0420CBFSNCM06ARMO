import React from 'react';
// import Card from './Card';
import Character from './Character';
import Product from "./Product";

const characters = [
  {
    img: 'yoda.jpg',
    name: 'Yoda',
    description: 'Yoda fue un miembro masculino de una especie misteriosa. Era un reverenciado Maestro Jedi que sirvió como Gran Maestro de la Orden Jedi en los últimos días de la República Galáctica. Era famoso dentro de la Orden por su sabiduría, poderes de la Fuerza y combate con sables de luz, y vivió durante casi 900 años. Su tiempo durante los últimos días de la Orden Jedi y más allá lo convirtió en una figura consecuente en la historia galáctica.'
  },
  {
    img: 'hulk.jpg',
    name: 'Hulk',
    description: 'El hijo de un padre abusivo, Bruce Banner creció tímido e introvertido, pero un genio científico. De joven, gracias a su destacado trabajo en el campo de la física nuclear, atrajo la atención del Ejército de los Estados Unidos que querían adaptar sus teorías para el armamento. Banner se resistió a esas nociones, pero los intentos fallidos de aterrizar en un trabajo estable lo convencieron de aceptar una posición en una instalación federal de investigación nuclear en una base de misiles en el desierto de Nuevo México.'
  },
  {
    img: 'black-widow.jpg',
    name: 'Black Widow',
    description: 'Natalia Alianovna Romanova1,  Viuda Negra es una superheroína ficticia que aparece en el cómic estadounidense y libros publicados por Marvel Comics. Creado por el editor y trazador Stan Lee, el guionista Don Rico y el artista Don Heck, el personaje debutó en Tales of Suspense # 52. El personaje fue presentado como una espía rusa, una antagonista del superhéroe Iron Man. Más tarde, desertó a los Estados Unidos, convirtiéndose en una agente de la organización ficticia S.H.I.E.L.D., y miembro del equipo de superhéroes, Los Vengadores.'
  },
  {
    img: 'jabba.jpg',
    name: 'Jabba The Hutt',
    description: 'Jabba Desilijic Tiure, más conocido como Jabba el Hutt o Jabba, era un gángster Hutt y un señor del crimen, así como un miembro del Gran Consejo Hutt, que operaba y dirigía un imperio criminal desde su palacio en el mundo del Borde Exterior Tatooine. Jabba era una figura importante en Tatooine, donde controlaba la mayor parte del tráfico de bienes ilegales, piratería y esclavitud que generaba la mayor parte de la riqueza del planeta. También era muy influyente en todo el Borde Exterior como uno de los señores del crimen más poderosos. '
  },
]

const products = [
  {
    img: "",
    name: "Zapatillas",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea fuga obcaecati eius consectetur doloribus quasi, saepe culpa illo facere a quibusdam expedita dolor rerum dolores molestiae? Fugit ratione iste dolorem. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat pariatur voluptates omnis eaque mollitia eligendi molestiae quasi blanditiis necessitatibus accusantium deserunt adipisci, maiores tempore, facilis dicta non ipsam explicabo illo?",
    url: "/products/23",
  },
  {
    img: "",
    name: "Remera",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea fuga obcaecati eius consectetur doloribus quasi, saepe culpa illo facere a quibusdam expedita dolor rerum dolores molestiae? Fugit ratione iste dolorem. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat pariatur voluptates omnis eaque mollitia eligendi molestiae quasi blanditiis necessitatibus accusantium deserunt adipisci, maiores tempore, facilis dicta non ipsam explicabo illo?",
    url: "/products/23",
  },
  {
    img: "",
    name: "Pantalón",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea fuga obcaecati eius consectetur doloribus quasi, saepe culpa illo facere a quibusdam expedita dolor rerum dolores molestiae? Fugit ratione iste dolorem. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat pariatur voluptates omnis eaque mollitia eligendi molestiae quasi blanditiis necessitatibus accusantium deserunt adipisci, maiores tempore, facilis dicta non ipsam explicabo illo?",
    url: "/products/23",
  },
  
];


function App() {
  return (
    <div className="container">
      <h1> Primera app con react</h1>
      <div className="row">
        {characters.map(function (character, idx) {
          return (
            <div className="col-6" key={idx}>
              <Character characterInfo={character}>
                <p>Este párrafo está fuera del componente</p>
                <i>Etiqueta i</i>
              </Character>

            </div>
          );
        })}
      </div>
      <div className="row">
        {products.map(function (product, idx) {
          return (
            <div className="col-4" key={idx}>
              <Product productInfo={product} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
