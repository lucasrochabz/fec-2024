import "./JogadorCard.css"

export const JogadorCard = ({jogador}) => {
  return(
    <>
      <div className='jogador'>
        <h2 id={`jogador-${jogador.id}`}>{jogador.nome}</h2>
        <p>{jogador.posicao}</p>
        <p>{jogador.numero}</p>
        <div className="img" key={jogador.id}>
          <img src={jogador.imgSrc} alt="" />
        </div>
        <hr />
      </div>
    </>
  )
}
