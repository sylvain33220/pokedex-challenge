import PropTypes from 'prop-types';

function PokemonCard ({pokemon}) {

    return (
        <div>
            <figure>
           {pokemon.imgSrc ? <img src={pokemon.imgSrc} alt={pokemon.name} /> : <p>???</p>}
           <figcaption>{pokemon.name}</figcaption>
            </figure>
        </div>

    );

}
//     return (<div>
//         <figure>
//             <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" ></img>
//             <figcaption>Bulbasaur</figcaption>
//         </figure>
//     </div>)
// }

PokemonCard.propTypes = {
    pokemon : PropTypes.shape({
        name: PropTypes.string.isRequired,
        imgSrc: PropTypes.string
    })

}

export default PokemonCard;