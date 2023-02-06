import Bottom from '../Bottom'
import './TextMain.css'

const TextMain = () => {
  return(
    <div className='AreaTexto'>
      <div className='titulos'>
      <h1>ToBot</h1>
      <h2>Use agora você também!</h2>
      </div>
      <div className='paragrafos'>
        <p>Cria um sistema de verificação capcha para novos membros garantirem que não são robôs</p>
        <p>Possui um sistema de banimento automático para links suspeitos que forem enviados na comunidade</p>
        <p>Sistema de avisos e banimento manual, para pessoas administradoras utilizarem</p>
      </div>

      <Bottom/>
    </div>
  )
}

export default TextMain