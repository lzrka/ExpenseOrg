import MainForm from "../components/Forms/MainForm"
import { GlobalProvider } from "../context/Globalstate"



 function Login() {
    return (
        <GlobalProvider>



            <MainForm />


        </GlobalProvider>

    )

}

export default Login
