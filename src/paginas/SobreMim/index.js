import styles from "./SobreMim.module.css"
import PostModelo from "componentes/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png"
import fotoSobreMim from "assets/sobre_mim_foto.png"

export default function SobreMim(){
    return (
        <PostModelo fotoCapa={fotoCapa}  titulo="Sobre mim">
            <h3 className={styles.subtitulo}>
                Olá, eu sou o Matheus!
            </h3>
            <img src={fotoSobreMim}  alt="Foto de Matheus sorrindo" className={styles.fotoSobreMim}
            />
            <p className={styles.paragrafo}>
                What is Lorem Ipsum?
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electroni
            </p>
            <p className={styles.paragrafo}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
            </p>        
        </PostModelo>
    )
}