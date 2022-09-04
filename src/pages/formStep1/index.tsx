import { useHistory } from 'react-router-dom'
import * as C from './styleds'
import { useForm, FormActions } from '../../contexts/formContex'
import { Theme } from '../../components/theme'
import { ChangeEvent, useEffect } from 'react'

export const FormStep1 = () => {
    const history = useHistory()
    const { state, dispatch } = useForm()

    // update level
    useEffect(() => {
        dispatch({
            type: FormActions.setCurrentStep,
            payload: 1
        })
    }, [])

    const handleNextStep = () => {
        if(state.name !== '' && state.email !== '' && state.tell !== ''){
            history.push('/step2')
        }else{
            alert('preecha todos os campos antes de ir para a próxima etapa')
        }
            
    }

    // update inputs
    const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setName,
            payload: e.target.value.toUpperCase()
        })
    }
    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setEmail,
            payload: e.target.value
        })
    }
    const handleTellChange = (e: ChangeEvent<HTMLInputElement>) => {
        e.target.value = e.target.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1')
        dispatch({
            type: FormActions.setTell,
            payload: e.target.value
        })
    }

    return (
        <Theme>
            <C.Container>
                <p>Passo 1/3</p>
                <h1>Bem-Vindo ao orçamento online rápido da SeuBoné</h1>
                <p>Nesse formulário interativo você vai poder escolher um modelo e sua quantidade, no final do processo vai aparecer em sua tela  um orçamento completo do peoduto escolhido.</p>
                <p>Para iniciar, basta preencher os campos abaixo 👇 para que possamos entrar em contato após o orçamento</p>

                <hr />

                <label>
                    Seu nome completo
                    <input
                        type='text'
                        autoFocus
                        value={state.name}
                        onChange={handleNameChange}
                    />
                </label>
                <label>
                    Seu E-mail
                    <input
                        type='email'
                        value={state.email}
                        onChange={handleEmailChange}
                    />
                </label>
                <label>
                    Telefone
                    <input
                        type='text'
                        value={state.tell}
                        maxLength={15}
                        onChange={handleTellChange}
                    />
                </label>


                <button onClick={handleNextStep}>Próxima Etapa</button>

            </C.Container>
        </Theme>
    )
}