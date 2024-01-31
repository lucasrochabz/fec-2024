import "./JogadorCard.css"

export const JogadorCard = ({jogador}) => {
  return(
    <>
      <div className='jogador'>
        <h2 id={`jogador-${jogador.id}`}>{jogador.nome}</h2>
        <h3>{jogador.posicao}</h3>
        <h4>#{jogador.numero}</h4>
        
        <div className="img" key={jogador.id}>
          <img src={jogador.imgSrc} alt="" />
        </div>
        <hr />
      </div>
    </>
  )
}
