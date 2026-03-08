import { Pokemon } from "../../components/Pokemon";
import styles from './styles.module.css'
import PokemonLogo from '../../assets/images/pokemon-logo.png'

export const Home = () => {
  return (
    <div className={styles.container}>
      <img className={styles.logo} src={PokemonLogo} alt="A logo do anime Pokémon" />
      <Pokemon name="Pikachu" />
      <Pokemon name="Charmander"/>
      <Pokemon name="Charizard"/>
    </div>
  );
}