import { createRoot } from 'react-dom/client'
import 'style.css'
import App from 'components/App'

const container = document.getElementById('root') as HTMLDivElement
const root = createRoot(container)

root.render(<App />)
