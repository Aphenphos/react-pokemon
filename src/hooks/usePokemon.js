import { useEffect, useState } from 'react';
import { fetchPokemon, fetchTypes } from '../services/pokemon';

export function usePokemon() {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedType, setSelectedType] = useState('');
  const [types, setTypes] = useState([]);

  useEffect(() => {
    const loadPokemon = async () => {
      try {
        setLoading(true);
        const data = await fetchPokemon(selectedType);
        setPokemon(data);
        setLoading(false);
      } catch (e) {
        setLoading(false);
        // eslint-disable-next-line no-console
        console.error(e);
      }
    };
    loadPokemon();
  }, [selectedType]);

  useEffect(() => {
    const loadTypes = async () => {
      try {
        const data = await fetchTypes();
        setTypes(data.map((type) => type.type));
      } catch (e) {
        // eslint-disable-next-line no-console
        console.error(e);
      }
    };
    loadTypes();
  }, []);

  return { pokemon, loading, types, setSelectedType };
}