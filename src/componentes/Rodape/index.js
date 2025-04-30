import styles from './Rodape.module.css';
import { ReactComponent as MarcaRegistrada } from 'assets/marca_registrada.svg';

export default function Rodape() {
    return (
        <footer className={styles.rodape}>
            <MarcaRegistrada />
            <p>Desenvolvido por Alura |</p>
            <p>Alura Cases - 2025</p>
            <p>| Todos os direitos reservados</p>
            <p>Desenvolvedor: Matheus Lima</p>
        </footer>
    )
}