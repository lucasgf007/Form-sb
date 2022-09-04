// Context, Reducer, Provider, Hook
import { createContext, ReactNode, useContext, useReducer } from "react";

type State = {
    currentStep: number;
    name: string;
    level: 0 | 1 | 2;
    email: '';
    tell: string;
    qtd: number;
    segment: string;
    product: string;
    price: number;
    description: string;
    logo: string;
}
type Action = {
    type: FormActions;
    payload: any;
}
type ContextType = {
    state: State;
    dispatch: (action: Action) => void
}
type FormProviderProps = {
    children: ReactNode
}

const initialData: State = {
    currentStep: 0,
    name: '',
    level: 0,
    email: '',
    tell: '',
    qtd: 30,
    segment: '',
    product: '',
    price: 0,
    description: '',
    logo: ''
}

// Context 
const FormContext = createContext<ContextType | undefined>(undefined);

// Reducer
export enum FormActions {
    setCurrentStep,
    setName,
    setLavel,
    setEmail,
    setTell,
    setQtd,
    setSegment,
    setProduct,
    setPrice,
    setDescription,
    setLogo
}
const formReducer = (state: State, action: Action) => {
    switch(action.type){
        case FormActions.setCurrentStep:
            return {...state, currentStep: action.payload}
        case FormActions.setName:
            return {...state, name: action.payload}
        case FormActions.setLavel:
            return {...state, level: action.payload}
        case FormActions.setEmail:
            return {...state, email: action.payload}
        case FormActions.setTell:
            return {...state, tell: action.payload}
        case FormActions.setQtd:
            return {...state, qtd: action.payload}
        case FormActions.setSegment:
            return {...state, segment: action.payload}
        case FormActions.setProduct:
            return {
                ...state, 
                product: action.payload
            }
        case FormActions.setPrice:
            return {...state, price: action.payload}
        case FormActions.setDescription:
            return {...state, description: action.payload}
        case FormActions.setLogo:
            return {...state, logo: action.payload}
        default:
            return state;
    }
}

//Provider
export const FormProvider = ({children}: FormProviderProps) => {
    const [state, dispatch] = useReducer(formReducer, initialData)
    const value = { state, dispatch }

    return (
        <FormContext.Provider value={value}>
            {children}
        </FormContext.Provider>
    )
}

// Context Hook
export const useForm = () => {
    const context = useContext(FormContext);
    if (context === undefined) {
        throw new Error('useForm precisa ser usado dentro do FormProvider')
    }
    return context
}