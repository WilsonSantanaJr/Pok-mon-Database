import { Pokemon } from "../../components/Pokemon";

export const Home = () => {
  return (
    <>
      <h1>Meu Site de Pokémon</h1>
      <Pokemon name="Pikachu" />
      <Pokemon name="Charmander"/>
      <Pokemon name="Charizard"/>
    </>
  );
}