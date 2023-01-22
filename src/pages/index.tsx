import Button from "../components/button"
import { Header } from "../components/Header"

export default function Home() {
  return (
    <div className="flex items-center h-full pt-32">
      
      <Header />

      <div className="w-1/4 h-96 flex flex-col justify-center">
        <p className="text-xs mb-3">codigo: 42404</p>
        <h1 className="text-lg mb-3">Sofá Margot II - Rosé</h1>
        <p className="text-md">R$ 4.000</p>
        <Button />
      </div>
      
    </div>

    
  )
}