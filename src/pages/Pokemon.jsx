import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Wrapper from "../Wrapper/Wrapper";
import classes from "../UI/global.module.scss";
import arrowRight from "../icons/arrowRight.svg";

function Pokemon() {
  const { pname } = useParams();
  const pokemons = useSelector((state) => state.pokemons);
  const pokemon = pokemons.pokemons.find((item) => item.name === pname);

  function pokemonNumber(val) {
    let newStr = "";
    if (val < 10) {
      newStr = "#00" + val;
    } else if (val > 9 && val < 100) {
      newStr = "#0" + val;
    } else {
      newStr = "#" + val;
    }
    return newStr;
  }

  function stateRes(states) {
    let resarr = [];
    let count = 0;
    switch (states.stat.name) {
      case "hp":
        count = states.base_stat / 22;
        break;
      case "speed":
      case "attack":
      case "defense":
        count = states.base_stat / 15;
        break;
      case "special-attack":
        count = states.base_stat / 15;
        break;
      case "special-defense":
        count = states.base_stat / 16;
        break;
      default:
        break;
    }
    count = Math.round(count);

    for (let i = 15; i > 0; i--) {
      if (i <= count) {
        resarr.push(<div className={classes["stats-green-div"]}></div>);
      } else {
        resarr.push(<div className={classes["stats-gray-div"]}></div>);
      }
    }
    return resarr;
  }

  return (
    <Wrapper>
      <div className={classes["link-div"]}>
        <img width="20px" height="30px" src={arrowRight} alt="arrowRight" />
        <Link className={classes["link"]} to="/">
          Explore more Pokémon
        </Link>
      </div>
      <h1 className={classes["headline"]}>
        {pokemon.name} {pokemonNumber(pokemon.id)}
      </h1>
      <div className={classes["pokemon-page"]}>
        <div>
          <div className={classes["pokemon-page-img"]}>
            <img
              width="90%"
              height="90%"
              src={pokemon.sprites.other["official-artwork"]["front_default"]}
              alt="img"
            />
          </div>
        </div>
        <div className={classes["statistics"]}>
          <div>
            <h3>Height</h3>
            <p>{pokemon.height / 10}m</p>
          </div>
          <div>
            <h3>Weight</h3>
            <p>{pokemon.weight / 10}kg</p>
          </div>
          <div>
            <h3>Types</h3>
            <p>
              {pokemon.types[0].type.name}
              {pokemon.types[1]?.type.name &&
                ", " + pokemon.types[1]?.type.name}
            </p>
          </div>
          <div>
            <h3>Abilities</h3>
            <p>
              {!pokemon.abilities[0]?.is_hidden
                ? pokemon.abilities[0]?.ability.name
                : null}
            </p>
            <p>
              {!pokemon.abilities[1]?.is_hidden
                ? pokemon.abilities[1]?.ability.name
                : null}
            </p>
          </div>
        </div>

        <div className={classes["stats"]}>
          <h2>Stats</h2>
          {pokemon.stats
            .map((el) => stateRes(el))
            .map((el, i) => {
              return (
                <div className={classes["stat-res-block"]}>
                  <div className={classes["stat-res"]}>{el}</div>
                  <p>{pokemon.stats[i].stat.name}</p>
                </div>
              );
            })}
        </div>
      </div>
    </Wrapper>
  );
}

export default Pokemon;
