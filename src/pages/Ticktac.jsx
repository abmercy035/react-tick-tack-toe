import tick from '../img/Tick.png'
import cross from '../img/Cross.png'
import '../styles/ticktac.css'
import { useRef, useState } from 'react'
import { useEffect } from 'react'
import Button from '../components/Button'
import Header from '../components/Header'
function Ticktac () {
  // CONST
  // LET
  // VAR

  const [nxtPlayer, setNxtPlayer] = useState(0)
  const msg = document.querySelector('#info-box')
  const aud2 = document.querySelector('#aud2')
  const one = document.getElementById('box1')
  const two = document.querySelector('#box2')
  const three = document.querySelector('#box3')
  const four = document.querySelector('#box4')
  const five = document.querySelector('#box5')
  const six = document.querySelector('#box6')
  const seven = document.querySelector('#box7')
  const eight = document.querySelector('#box8')
  const nine = document.querySelector('#box9')
  const boxes = document.querySelectorAll('.box')
  const img = tick
  const img2 = cross

  const restart = () => {
    let boxArray = Array.from(boxes)
    boxArray.forEach(box => (box.style.backgroundImage = ``))
  }

  function pop () {
    celb()
    aud2.play()
  }
  let gameName = 0



  function tap(e)  {
  console.log(e)
      if (e.target.style.backgroundImage === '') {
        if (nxtPlayer) {
          e.target.style.backgroundImage = `url(${img})`
          setNxtPlayer(prevState => --prevState)
          msg.innerHTML = 'player X turn'
          checkWin()
          console.log(nxtPlayer)
        } else {
          e.target.style.backgroundImage = `url(${img2})`
          setNxtPlayer(prevState => ++prevState)
          msg.innerHTML = 'player √ Turn'
          console.log(nxtPlayer)
          checkWin()
        }
      }
   }
  
// 
  function checkWin () {
    if (
      one.style.backgroundImage !== '' &&
      two.style.backgroundImage === one.style.backgroundImage &&
      three.style.backgroundImage === one.style.backgroundImage
    ) {
      pop(one, two, three)
    } else if (
      one.style.backgroundImage !== '' &&
      four.style.backgroundImage === one.style.backgroundImage &&
      seven.style.backgroundImage === one.style.backgroundImage
    ) {
      pop(one, four, seven)
    } else if (
      one.style.backgroundImage !== '' &&
      five.style.backgroundImage === one.style.backgroundImage &&
      nine.style.backgroundImage === one.style.backgroundImage
    ) {
      pop(one, five, nine)
    } else if (
      two.style.backgroundImage !== '' &&
      five.style.backgroundImage === two.style.backgroundImage &&
      eight.style.backgroundImage === two.style.backgroundImage
    ) {
      pop(two, five, eight)
    } else if (
      three.style.backgroundImage !== '' &&
      six.style.backgroundImage === three.style.backgroundImage &&
      nine.style.backgroundImage === three.style.backgroundImage
    ) {
      pop(three, six, nine)
    } else if (
      three.style.backgroundImage !== '' &&
      five.style.backgroundImage === three.style.backgroundImage &&
      seven.style.backgroundImage === three.style.backgroundImage
    ) {
      pop(three, five, seven)
    } else if (
      four.style.backgroundImage !== '' &&
      five.style.backgroundImage === four.style.backgroundImage &&
      six.style.backgroundImage === four.style.backgroundImage
    ) {
      pop(four, five, six)
    } else if (
      seven.style.backgroundImage !== '' &&
      eight.style.backgroundImage === seven.style.backgroundImage &&
      nine.style.backgroundImage === seven.style.backgroundImage
    ) {
      pop(seven, eight, nine)
    } else if (
      one.style.backgroundImage !== '' &&
      two.style.backgroundImage !== '' &&
      three.style.backgroundImage !== '' &&
      four.style.backgroundImage !== '' &&
      five.style.backgroundImage !== '' &&
      six.style.backgroundImage !== '' &&
      seven.style.backgroundImage !== '' &&
      eight.style.backgroundImage !== '' &&
      nine.style.backgroundImage !== ''
    ) {
      msg.innerHTML = 'TIE Match'
      for (let i = 0; i < boxes.length; ++i) {
        let box = boxes[i]
        box.style.backgroundImage = ''
      }
    }
  }

  function celb () {
    if (nxtPlayer % 2 === 0) {
      msg.innerHTML = `player X is the winner!!!`
      for (let i = 0; i < boxes.length; ++i) {
        let box = boxes[i]
        box.style.backgroundImage = ''
      }
    } else {
      msg.innerHTML = `player √ is the winner!!!`
      for (let i = 0; i < boxes.length; ++i) {
        let box = boxes[i]
        box.style.backgroundImage = ''
      }
    }
  }

  return (
    <div id='ticktack'>
      <audio src='AUD1.mp3' id='aud1'></audio>
      <audio src='AUD2.mp3' id='aud2'></audio>
      <audio src='AUD3.mp3' id='aud3'></audio>
<Header />
     
     
 <div className='wrap'>
          <center id='info-box'>lets play Now</center>
        <div id='wrapper'>
          <Button cls='box' func={tap} id='box1' />
          <Button cls='box' func={tap} id='box2' />
          <Button cls='box' func={tap} id='box3' />
          <Button cls='box' func={tap} id='box4' />
          <Button cls='box' func={tap} id='box5' />
          <Button cls='box' func={tap} id='box6' />
          <Button cls='box' func={tap} id='box7' />
          <Button cls='box' func={tap} id='box8' />
          <Button cls='box' func={tap} id='box9' />
        </div>
      <button id='btn' onClick={restart}>
        RESTART GAME
      </button>
      </div>
    </div>
  )
}

export default Ticktac
