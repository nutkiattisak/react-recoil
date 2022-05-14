import './App.css'
import { useSetRecoilState, useRecoilValue } from 'recoil'
import { darkModeState, toggleDarkModeState } from './state/globalState'

function App() {
  const isDarkModeEnabled = useRecoilValue(darkModeState)
  const toggleDarkMode = useSetRecoilState(toggleDarkModeState)

  !isDarkModeEnabled
    ? document.body.classList.add('dark-mode')
    : document.body.classList.remove('dark-mode')
  return (
    <div className="App">
      Recoil
      <button type="button" onChange={toggleDarkMode}>
        กด
      </button>
    </div>
  )
}

export default App
