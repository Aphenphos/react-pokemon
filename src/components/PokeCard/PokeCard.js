export default function PokeCard({ pokemon, type1, type2 }) {
  return (
    <div className="poke-card">
      <h1 className="poke-name">{pokemon}</h1>
      <h1 className="poke-type1">{type1}</h1>
      <h1 className="poke-type2">{type2}</h1>
    </div>
  );
}