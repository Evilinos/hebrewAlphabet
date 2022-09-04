export const shuffle = (array: any[]) => {
  const safeArray = array.slice()
  let randomIndex
  let currentIndex = safeArray.length

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex--
    ;[safeArray[currentIndex], safeArray[randomIndex]] = [safeArray[randomIndex], safeArray[currentIndex]]
  }

  return safeArray
}
