import { MainHeader } from './header/MainHeader'
import { MainContent } from './content/MainContent'
import { ScrollActiveComponent } from '../context/ScrollActiveComponent'

function App() {
  return (
    <ScrollActiveComponent>
      <MainHeader />
      <MainContent />
    </ScrollActiveComponent>
  )
}

export default App