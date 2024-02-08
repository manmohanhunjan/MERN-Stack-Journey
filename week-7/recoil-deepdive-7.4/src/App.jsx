
import './App.css'
import { useRecoilValue } from 'recoil'
import { jobsAtom, messagingAtom, networkAtom, notificationAtom, totalSelector } from './atoms'

function App() {
const network = useRecoilValue(networkAtom)
const jobs = useRecoilValue(jobsAtom)
const messaging = useRecoilValue(messagingAtom)
const notification = useRecoilValue(notificationAtom)

const totalNoti = useRecoilValue(totalSelector)

  return (
    <>
      <button>Home</button>

      <button>My network ({network >= 100 ? "+99": network})</button>
      <button>Jobs({jobs})</button>
      <button>Messaging({messaging})</button>
      <button>Notification({notification})</button>

      <button>Me ({totalNoti})</button>
    </>
  )
}

export default App
