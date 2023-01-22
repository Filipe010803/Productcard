import Image from "next/image"
import { useState } from "react"

import Sofa from "../assets/Sofa.gif"
import SofaStatic from "../assets/SofaStatic.png"

import Rotate from "../assets/Vector.svg"
import X from "../assets/X.svg"

export function Header() {

    let [isModalOpen, setIsModalOpen] = useState(false)

    function exchange() {
        //abrir um modal em tela

        if (isModalOpen === false) {
            setIsModalOpen(true)
        } else {
            setIsModalOpen(false)
        }
    }


    return(
        <div className="flex w-[70%] h-[60%]">
        <div className="w-[90%] h-[70%] ml-16">
          {
            isModalOpen ? 
              <Image
                id="img" 
                src={Sofa} 
                alt="imagem de um sofa rosa" 
              /> : <Image
                      id="img" 
                      src={SofaStatic} 
                      alt="imagem de um sofa rosa" 
                    /> 
          }
        </div>
        <button className="mb-[500px]" onClick={exchange}>
          {
            isModalOpen ? 
              <Image 
                id="icon" src={X} 
                alt="rotação" 
              />: <Image 
                    id="icon" src={Rotate} 
                    alt="rotação" 
                  /> 
          }
          
        </button>
      </div>
      
    )
}