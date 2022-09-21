import { usePokemon } from '../../hooks/usePokemon';
import Select from '../../Select/Select';
import PokeCard from '../PokeCard/PokeCard';

export default function Main() {
  const { pokemon, loading, types, setSelectedType } = usePokemon();
  if (loading === true) {
    return (
      <h1 id="loading" >...Loading...</h1>
    );
  }

  return (
    <main>
      <Select options={types} changeHandler={setSelectedType} />
            
      <div id="poke-main-container">
        {pokemon.map((poke) => {
          <PokeCard key={poke.id} {...poke}></PokeCard>;
        })}
      </div>
    </main>
  );
}