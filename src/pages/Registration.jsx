import RegForm from "../components/Forms/RegForm"
import { GlobalProvider } from "../context/Globalstate"



 function Registration() {
    return (
        <GlobalProvider>



            <RegForm />


        </GlobalProvider>

    )

}

export default Registration
