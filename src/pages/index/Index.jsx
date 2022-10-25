import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MainContainer, SubContainer } from "./IndexStyled";

export default function Index() {
    const [name, setName] = useState("") 
    const navigate = useNavigate()

    const next = () =>{
        if(name.length < 1){
            return
        }else{
            navigate(`/next/${name}`)
        }
    }
  return (
    <MainContainer>
      <SubContainer>
        <p>Digite seu nome</p>
        <input placeholder="Digite seu nome" onChange={(e)=>setName(e.target.value)} value={name}/>
        <button onClick={()=>next()}>Próximo</button>
      </SubContainer>
    </MainContainer>
  );
}
