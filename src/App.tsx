import { useEffect } from "react"
import CryptoSearchForm from "./components/CryptoSearchForm"
import { useCryptoStore } from "./stores/store"
import CryptoPriceDisplay from "./components/CryptoPriceDisplay"

function App() {

  const { fetchCryptos } = useCryptoStore()

  useEffect(() => {
    fetchCryptos()
  }, [fetchCryptos])

  return (
    <>
      <div className="container">
          <h1 className="app-title">
            <span className="highlight">Crypto</span> Quoter
          </h1>

          <div className="content">
            <CryptoSearchForm />
            <CryptoPriceDisplay />
          </div>
      </div>
    </>
  )
}

export default App
