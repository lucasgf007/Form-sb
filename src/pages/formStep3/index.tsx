import { useHistory, Link } from 'react-router-dom'
import * as C from './styleds'
import { useForm, FormActions } from '../../contexts/formContex'
import { Theme } from '../../components/theme'
import { ChangeEvent, useEffect } from 'react'
import toast,{ Toaster } from 'react-hot-toast'

export const FormStep3 = () => {
    const history = useHistory()
    const { state, dispatch } = useForm()

    // update level
    useEffect(() => {
        if(state.name === '' || state.email ==='' || state.tell === '' || state.product === '' || state.logo === ''){
            history.push('/')
        } else{
            dispatch({
                type: FormActions.setCurrentStep,
                payload: 3
            })
        }
        
    }, [])

    const handleNextStep = () => {
        if(state.name !== '' && state.email !== '' && state.tell !== '' && state.product !== '' && state.logo !== ''){
            if(state.qtd >= 30){
                history.push('/orcamento')
            } else {
                toast.error("Insira um valor acima ou igual 30 unidades!")
            }
            
        }else{
            toast.error("Preecha todos os campos obrigatórios!")
        }
            
    }

    const handleQtdChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setQtd,
            payload: e.target.value
        })
    }

    let addAplique = false

    if(state.logo === 'Aplique a laser' || state.logo === 'Aplique 3D'){
        addAplique = true
    }

    return (
        <Theme>
            <C.Container>
                <Toaster />
                <h4>Passo 3/3</h4>
                <h1>Vamos organizar os últimos detahes</h1>
                <p>{state.name}, selecione a quantidade de bonés do modelo {state.product} que você deseja comprar</p>
                <h5>Resumo:</h5>
                <p><strong>Modelo:</strong> {state.product} + R${state.price},00 </p>
                <p><strong>Logo:</strong>  {state.logo} {addAplique && '+ R$ 2,00'}</p>
                {state.aplique !== '' && 
                    <p><strong>Aplique adicional:</strong> {state.aplique + ' + R$ 2,00'}</p>}
                <hr />
                
                <label>
                    Escolha quantos bonés vai querer acima de 30 unidades IGUAIS!
                    <input
                        type='text'
                        value={state.qtd}
                        onChange={handleQtdChange}
                    />
                </label>
                
                <Link to={'/step2'} className='backButton'>Voltar</Link>
                <button onClick={handleNextStep}>Calcular Preço</button>
                <div className='footer'></div>

            </C.Container>
        </Theme>
    )
}