import styles from "./BotaoPrincipal.module.css"

export default function BotaoPrincipal({ children, tamanho }) {
    return (
        <div>
            <button className={`
                $(styles.BotaoPrincipal)
                $(styles.[tamanho])
                `}>
                    {children}
                </button>
        </div>
    )
}