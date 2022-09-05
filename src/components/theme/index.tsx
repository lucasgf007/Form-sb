import { ReactNode } from 'react';
import { Header } from '../Header';
import { SideBarItem } from '../SidebarItem';
import * as C from './styles';
import { useForm } from '../../contexts/formContex'

type Props = {
    children: ReactNode
}

export const Theme = ( {children}: Props ) => {
    const { state } = useForm()

    return (
        <C.Container>
            <Header />
            <C.Area>
                

                <C.Steps>
                    <C.Sidebar>
                        <SideBarItem 
                            title='Dados'
                            descrtiption='Para entrar em contato'
                            icon='profile'
                            path='/'
                            active={state.currentStep === 1}
                        />
                        <SideBarItem 
                            title='Produto'
                            descrtiption='Escolha o seu modelo'
                            icon='bag'
                            path='/step2'
                            active={state.currentStep === 2}
                        />
                        <SideBarItem 
                            title='Quantidade'
                            descrtiption='Quantas unidades vai pedir'
                            icon='qtd'
                            path='/step3'
                            active={state.currentStep === 3}
                        />
                        {state.currentStep === 4 && 
                            <SideBarItem 
                                title='Orçamento'
                                descrtiption='Preço final'
                                icon='price'
                                path='/orcamento'
                                active={true}
                            />
                        }
                    </C.Sidebar>
                    <C.Page>
                        {children}
                    </C.Page>
                </C.Steps>
            </C.Area>
        </C.Container>
    )
}