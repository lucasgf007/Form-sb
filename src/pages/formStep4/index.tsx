import { useHistory, Link } from 'react-router-dom'
import * as C from './styleds'
import { useForm, FormActions } from '../../contexts/formContex'
import { Theme } from '../../components/theme'
import { useEffect } from 'react'

export const FormStep4 = () => {
    const history = useHistory()
    const { state, dispatch } = useForm()

    // update level
    useEffect(() => {
        if(state.name === '' && state.email ==='' && state.tell === ''){
            history.push('/')
        } else{
            dispatch({
                type: FormActions.setCurrentStep,
                payload: 4
            })
        }
        
    }, [])

    const EnviarDados = async (requestData: object) => {
        const requestOptions = {
            method: 'POST',
            body: JSON.stringify(requestData),
            headers: new Headers({
              'Content-Type': 'application/json',
              'Accept': 'application/json'
            }),
          };
        
          const response = await fetch('https://hook.us1.make.com/xk74k24grd5ylv39f8h1yl9sn7ksshfc', requestOptions);
        
          return console.log(response?.json())
    }

    const Envio = () => {
        // EnviarDados(state)
        console.log(state)
    }
 
    const TotalOrcamento = (price: number, qtd:number) => {
        return price * qtd
    }
    return (
        <Theme>
            <C.Container>
                <h1>Orçamento 💰</h1>
                <p>{state.name}, confira abaixo o resumo do seu pedido e o valor total</p>

                <h3>Resumo do seu pedido:</h3>
                <ul>
                    <li>Modelo: {state.product}</li>
                    <li>Valor do boné {state.product}: R${state.price},00</li>
                    <li>Quantidade: {state.qtd} unidades</li>
                </ul>
                <h3>Total: R$ {TotalOrcamento(state.price,state.qtd)},00</h3>
                <p>Esse valor pode ser dividido em até 3x de R${(TotalOrcamento(state.price,state.qtd) / 3).toFixed(2)}</p>
                

                <hr />
                
                <p>{state.name}, agora que ja viu quanto vai sair tudo, clique em "Fala com o vendedor", para iniciar seu atendimento</p>
                <Link to={'/step2'} className='backButton'>Novo orçamento</Link>
                <div className='orcamento'>
                    <button onClick={Envio}>Falar com um vendedor</button>
                </div>
                

            </C.Container>
        </Theme>
    )
}