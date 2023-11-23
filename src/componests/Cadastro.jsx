import { useState } from "react";

function Cadastro({addTarefa}) {
    const [descricao, setDescrição] = useState('');



    const enviarDados = (e) => {
        e.preventDefault();
     // alert("Descrição: " +descricao);
     if(!descricao) return;

     addTarefa(descricao);

     setDescrição('');

    }
    

    return(
        <>

        <div className="cadastrar">
            <form onSubmit={enviarDados}>                
                <input type= "text" value={descricao}
                
                   onChange={(e) => setDescrição(e.target.value)}  placeholder="Nome do animal/Raça" />

                   <input type="text" value={descricao} 
                   onChange={(e) => setDescrição(e.target.value)}  placeholder="local aonde foi visto" />


            <button className="botaoCadastrar" type="submit" >Cadastrar</button> 
             </form>
         </div>

        </>
    )

}

export default Cadastro