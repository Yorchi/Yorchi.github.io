import Avatar from 'components/Avatar'

const randoms = [
  [1, 2],
  [3, 4, 5],
  [6, 7]
]

function App() {
  return (
    <div className="h-screen flex items-center justify-center bg-base-300">
      <div className="hero bg-base-200 shadow rounded-xl md:max-w-1/2">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-3xl font-bold">🚀 ¡Estamos trabajando en algo increíble!</h1>
            <p className="py-6">
              Mi portafolio estará disponible pronto. Mientras tanto, ¡puedes contactarme aquí!
            </p>
            <ul>
              <li>
                📧 Contáctame en <a href="mailto:j.andrade.dev@gmail.com" className="btn btn-link">j.andrade.dev@gmail.com</a>
              </li>
              <li>
               💼 LinkedIn: <a href="https://www.linkedin.com/in/jorge-andrade-007130b4/" className="btn btn-link" target="_blank">linkedin.com/in/jorge-andrade-007130b4/</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
