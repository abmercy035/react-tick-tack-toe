import '../styles/header.css'
export default function Header () {
  return (
        <div id="header">
      <div id="app-name">
      <h3>
        TIC TAC TOE
      </h3>
      </div>
    <div id="player-bar">
        <span id='palyer1'>
        <b className="score">0</b> :  Joe ken
        </span>
        vs
        <span id='palyer2'>
          keran putin : <b className="score">0</b>
</span>
    </div>
      <div id="acct">
        <b>COINS :</b>
</div>
    </div>
  )
}
