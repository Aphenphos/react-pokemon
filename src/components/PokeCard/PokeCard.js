import './PokeCard.css';

export default function PokeCard({ pokemon, type_1, type_2, url_image }) {
  return (
    <div className="poke-card" style={{ backgroundImage: `url(${url_image})` }}>
      <h1 className="poke-name">{pokemon}</h1>
      <h1 className="poke-type1">{type_1}</h1>
      <h1 className="poke-type2">{type_2}</h1>
    </div>
  );
}