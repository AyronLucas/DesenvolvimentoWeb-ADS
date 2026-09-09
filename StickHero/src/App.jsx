import { useState } from 'react'

function App() {

  const [mensagem, setMensagem] = useState('')

  return (
    <>
      <h1>Jogo de RPG - StickHero</h1>

      <div className="Personagens">
        <img
          src="/img/campeaoStickHero.png"
          alt="Campeão StickHero"
        />

        <img
          src="/img/mostroStickHero.png"
          alt="Monstro StickHero"
        />
      </div>

      <div className="AcoesCampeao">

        <button onClick={() => setMensagem('Campeão atacando!')}>
          Atacar
        </button>

        <button onClick={() => setMensagem('Campeão se defendendo!')}>
          Defender
        </button>

        <button onClick={() => setMensagem('Campeão se curando!')}>
          Curar
        </button>

      </div>

      <p>{mensagem}</p>

    </>
  )
}

export default App