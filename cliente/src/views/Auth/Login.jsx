import React, { useEffect } from 'react'
import Main from '../../components/Main/Main'
import Section from '../../components/Section/Section'
import H1 from '../../components/H1/H1'
import LoginForm from '../../modules/LoginForm/LoginForm'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import verifyToken from '../../services/verifyToken'
import logout from '../../services/logout'
import { setUser } from '../../store/general/action'
import checkLoggedUser from '../../services/checkLoggedUser'


const Login = () => {

    const user = useSelector(state => state.user)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {

        document.title = 'Iniciar sesión | AVV Segunda Aguada'

        const loggedUser = checkLoggedUser()
        if (!user && loggedUser) {
            const tokenVerified = verifyToken(loggedUser)
            tokenVerified.then(response => {
                if (typeof response === 'string') logout()
                else {
                    setUser(dispatch, loggedUser)
                    navigate("/")
                }
            })
        }
        else if (!loggedUser) {
            setUser(dispatch, undefined)
        }
        else if (user) {
            navigate("/")
        }

    }, [])

    return (
        <Main className='auth-main'>
            <Section className='section-auth'>
                <H1 className='form-heading'>Iniciar sesión</H1>
                <LoginForm/>
                {/* <Div className='auth-div'>
                    <P>¿Aún no tienes una cuenta?</P>
                    <Link 
                        to='/admin/registro'
                        className='react-router--link'
                    >Regístrate</Link>
                </Div> */}
            </Section>
        </Main>
    )
}

export default Login