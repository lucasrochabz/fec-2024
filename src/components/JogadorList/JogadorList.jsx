import "./JogadorList.css"
import { JogadorCard } from "../JogadorCard/JogadorCard"


export const JogadorList = ({jogadores}) => {
  return(
    <>
      <div className="jogador-list">
        {jogadores.map(jogador => (
          <JogadorCard key={jogador.id} jogador={jogador} />
        ))}
      </div>
    </>
  )
}
