import {AVPlaybackSource} from 'expo-av'
import sounds from 'sounds'

const colors = {
  blue: '#1591AA',
  yellow: '#CFD047',
  red: '#FD7751',
  orange: '#FEB14F',
  lightBlue: '#62C2D6',
} as const

export type LetterType = {
  name: string
  value: string
  pronunciation: string
  color: typeof colors[keyof typeof colors]
  sound: AVPlaybackSource
}

export const INITIALS_LETTERS_COUNT = 3
export const LETTERS: LetterType[] = [
  {
    name: 'Алеф',
    value: 'א',
    pronunciation: '',
    color: colors.red,
    sound: sounds.alef,
  },
  {
    name: 'Бэт',
    value: 'בּ',
    pronunciation: 'Б',
    color: colors.yellow,
    sound: sounds.bet,
  },
  {
    name: 'Вэт',
    value: 'ב',
    pronunciation: 'В',
    color: colors.yellow,
    sound: sounds.vet,
  },
  {
    name: 'Гимэль',
    value: 'ג',
    pronunciation: 'Г',
    color: colors.blue,
    sound: sounds.gimel,
  },
  {
    name: 'Далет',
    value: 'ד',
    pronunciation: 'Д',
    color: colors.blue,
    sound: sounds.dalet,
  },
  {
    name: 'Хэй',
    value: 'ה',
    pronunciation: 'hеи',
    color: colors.red,
    sound: sounds.hei,
  },
  {
    name: 'Вав',
    value: 'ו',
    pronunciation: 'В, О, У',
    color: colors.orange,
    sound: sounds.vav,
  },
  {
    name: 'Заин',
    value: 'ז',
    pronunciation: 'З',
    color: colors.blue,
    sound: sounds.zayin,
  },
  {
    name: 'Хэт',
    value: 'ח',
    pronunciation: 'Х',
    color: colors.blue,
    sound: sounds.het,
  },
  {
    name: 'Тэт',
    value: 'ט',
    pronunciation: 'Т',
    color: colors.blue,
    sound: sounds.tet,
  },
  {
    name: 'Йод/Йуд',
    value: 'י',
    pronunciation: 'Й',
    color: colors.orange,
    sound: sounds.yod,
  },
  {
    name: 'Каф',
    value: 'כּ',
    pronunciation: 'К',
    color: colors.yellow,
    sound: sounds.kaf,
  },
  {
    name: 'Хаф',
    value: 'כ',
    pronunciation: 'Х',
    color: colors.yellow,
    sound: sounds.haf,
  },
  {
    name: 'Хаф софит',
    value: 'ך',
    pronunciation: 'Х',
    color: colors.lightBlue,
    sound: sounds.haf_sofit,
  },
  {
    name: 'Ламед',
    value: 'ל',
    pronunciation: 'Л',
    color: colors.blue,
    sound: sounds.lamed,
  },
  {
    name: 'Мэм',
    value: 'מ',
    pronunciation: 'М',
    color: colors.blue,
    sound: sounds.mem,
  },
  {
    name: 'Мэм софит',
    value: 'ם',
    pronunciation: 'М',
    color: colors.lightBlue,
    sound: sounds.mem_sofit,
  },
  {
    name: 'Нун',
    value: 'נ',
    pronunciation: 'Н',
    color: colors.blue,
    sound: sounds.nun,
  },
  {
    name: 'Нун софит',
    value: 'ן',
    pronunciation: 'Н',
    color: colors.lightBlue,
    sound: sounds.nun_sofit,
  },
  {
    name: 'Самех',
    value: 'ס',
    pronunciation: 'С',
    color: colors.blue,
    sound: sounds.sameh,
  },
  {
    name: 'Айн',
    value: 'ע',
    pronunciation: '',
    color: colors.red,
    sound: sounds.ayin,
  },
  {
    name: 'Пэй',
    value: 'פּ',
    pronunciation: 'П',
    color: colors.yellow,
    sound: sounds.pei,
  },
  {
    name: 'Фэй',
    value: 'פ',
    pronunciation: 'Ф',
    color: colors.yellow,
    sound: sounds.fei,
  },
  {
    name: 'Фэй софит',
    value: 'ף',
    pronunciation: 'Ф',
    color: colors.lightBlue,
    sound: sounds.fei_sofit,
  },
  {
    name: 'Цади',
    value: 'צ',
    pronunciation: 'Ц',
    color: colors.blue,
    sound: sounds.tsadi,
  },
  {
    name: 'Цади софит',
    value: 'ץ',
    pronunciation: 'Ц',
    color: colors.lightBlue,
    sound: sounds.tsadi_sofit,
  },
  {
    name: 'Куф',
    value: 'ק',
    pronunciation: 'К',
    color: colors.blue,
    sound: sounds.kuf,
  },
  {
    name: 'Рэш',
    value: 'ר',
    pronunciation: 'Р',
    color: colors.blue,
    sound: sounds.resh,
  },
  {
    name: 'Шин',
    value: 'שׁ',
    pronunciation: 'Ш',
    color: colors.orange,
    sound: sounds.shin,
  },
  {
    name: 'Син',
    value: 'שׂ',
    pronunciation: 'С',
    color: colors.orange,
    sound: sounds.sin,
  },
  {
    name: 'Таф',
    value: 'ת',
    pronunciation: 'Т',
    color: colors.blue,
    sound: sounds.tav,
  },
]
