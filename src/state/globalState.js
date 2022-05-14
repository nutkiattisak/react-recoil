const { atom, selector } = require('recoil')

export const darkModeState = atom({
  key: 'darkModeState',
  default: false,
})

export const toggleDarkModeState = selector({
  key: 'toggleDarkMode',
  get: ({ get }) => get(darkModeState),
  set: ({ get, set }) => {
    const currentValue = get(darkModeState)

    console.log(currentValue)

    set(darkModeState, !currentValue)
  },
})
