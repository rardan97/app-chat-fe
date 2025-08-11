import './App.css'
import ChatWindow from './components/ChatWindow'
import ProfileSidebar from './components/ProfileSidebar'
import Sidebar from './components/Sidebar'


function App() {

  return (
    <>
    <div className="flex">
      <ProfileSidebar />
      <Sidebar />
      
      <ChatWindow />
    </div>
    </>
  )
}

export default App
