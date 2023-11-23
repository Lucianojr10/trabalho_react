function Tarefa({item, concluirTarefas, removerTarefa}){
    return (
        <div className='tarefa'>
            <span style={{textDecoration: item.isFinalizado ? 'line-through' : ''}}>
            {item.descrição} </span>
              <div className='acoes'>
                <button className='botaoConcluir' onClick={() => concluirTarefas(item.id)}>
                    Concluir</button>
                <button className='botaoRemover' onClick={() => removerTarefa(item.id)}> 
                 Remover</button>
              </div>
        </div> 
    )
}

export default Tarefa;