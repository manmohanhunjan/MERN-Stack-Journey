import './App.css'
import ProfileCard from './components/ProfileCard'
import BackgroundChanger from './components/BackgroundChanger'
import { useRecoilValue } from 'recoil'
import { bgAtom } from './store/atom/bgAtom'
import ParaGenerator from './components/ParaGenerator'
import LoginCard from './components/LoginCard'
import LoginCard2 from './components/LoginCard2'

function App() {

  const backgroundColor = useRecoilValue(bgAtom)

  return (
    <div className='mainContainer' style={{backgroundColor}}>
      <div>
        <ProfileCard />
      </div>
      <div>

    <BackgroundChanger />
      </div>
      <div className='paraContainer'>
        <ParaGenerator />
      </div>
      <div className='loginContainer'>
        <LoginCard />
      </div>
      <div className='loginContainer'>
        <LoginCard2 />
      </div>
    </div>
  )
}

export default App
