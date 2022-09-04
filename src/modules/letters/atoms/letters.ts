import {atom} from 'jotai'
import {shuffle} from 'utils'
import {LetterType, LETTERS, INITIALS_LETTERS_COUNT} from '../constants'

export const indexAtom = atom<number>(0)
export const lettersCountAtom = atom<number>(INITIALS_LETTERS_COUNT)
export const lettersAtom = atom<LetterType[]>(shuffle(LETTERS).slice(0, INITIALS_LETTERS_COUNT))

export const currentLetterAtom = atom(
  get => get(lettersAtom)[get(indexAtom)],
  (get, set) => {
    const index = get(indexAtom)
    const isLastIndex = get(lettersAtom).length - 1 === index
    const currentLetter = get(lettersAtom)[index]

    let shuffledLetters = shuffle(get(lettersAtom))
    while (shuffledLetters[0] === currentLetter) shuffledLetters = shuffle(get(lettersAtom))

    if (isLastIndex) {
      set(lettersAtom, shuffledLetters)
      set(indexAtom, 0)
    } else {
      set(indexAtom, index + 1)
    }
  }
)

export const incrementLettersCountsAtom = atom(undefined, (get, set) => {
  const letters = get(lettersAtom)
  const newLetter = shuffle(LETTERS).find(letter => !letters.includes(letter))
  set(lettersCountAtom, get(lettersCountAtom) + 1)
  if (newLetter) {
    set(lettersAtom, [newLetter, ...letters])
    set(indexAtom, 0)
  }
})

// lettersAtom.onMount = set => () => set(shuffle(LETTERS).slice(0, INITIALS_LETTERS_COUNT))
// indexAtom.onMount = set => () => set(0)
