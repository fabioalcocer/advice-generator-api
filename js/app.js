const URL = 'https://api.adviceslip.com/advice'
const adviceID = document.querySelector('.advice__id')
const adviceText = document.querySelector('.advice__text')
const adviceBtn = document.querySelector('.advice__generator')

adviceBtn.addEventListener('click', () => {
  getAdvice(URL)
})

const getAdvice = async (url) => {
  try {
    const res = await fetch(url)
    const advice = await res.json()

    adviceText.textContent = `\"${advice.slip.advice}\"`
    adviceID.textContent = `${advice.slip.id}`
  } catch (error) {
    console.log(error);
  }
}