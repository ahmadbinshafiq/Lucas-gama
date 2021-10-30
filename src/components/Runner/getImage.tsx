import cactusLargeImg from './images/Coral-Water-Plant  Large.png.png'
import cactusSmallImg from './images/Coral-Water-Plant  Small.png.png'
import cloudImg from './images/Cloud replacment.png.png'
import gameoverTextImg from './images/gameover_text.png'
import groundImg from './images/ground.png'
import restartButtonImg from './images/restart_button.png'
import scoreNumberImg from './images/score_number.png'
import tRexImg from './images/Salamander.png.png'
import tRexCrashImg from './images/Salamander Crash.png.png'
import tRexDuck1Img from './images/Salamander duck.png.png'
import tRexDuck2Img from './images/Salamander Duck 2.png.png'
import tRexFistFrameImg from './images/Salamander First Frame.png.png'

const imageArray = [
  cloudImg,
  tRexImg,
  tRexFistFrameImg,
  groundImg,
  cactusSmallImg,
  cactusLargeImg,
  tRexDuck1Img,
  tRexDuck2Img,
  tRexCrashImg,
  restartButtonImg,
  gameoverTextImg,
  scoreNumberImg,
]

const imageMap = new Map()

const promiseArray = imageArray.map(imgUrl => {
  const promise = new Promise((resolve, reject) => {
    const img = new Image()
    img.onerror = reject
    img.onload = () => {
      imageMap.set(imgUrl, img)
      resolve()
    }
    img.src = imgUrl
  })
  return promise
})

export function loadImages() {
  return Promise.all(promiseArray)
}

export default function getImg(src: string) {
  const img = imageMap.get(src)
  if (!img) {
    throw new Error(`load image fail! IMG_SRC: ${src}`)
  }
  return img
}