import { Router } from "./router"
import { FormProvider } from './contexts/formContex'

const App = () => {
  return(
    <FormProvider>
      <Router />
    </FormProvider>
  )
}

export default App