import React from 'react'
import Ul from '../../components/Ul/Ul'
import Li from '../../components/Li/Li'
import Span from '../../components/Span/Span'

import { FiLogOut } from 'react-icons/fi'

const AdminLogout = ({logout}) => {
    return (
        <Ul
            className='admin-logout--ul'
        >
            <Li 
                className='admin-menu--li admin-menu--li-logout'
                onClick={logout}
            >
                <FiLogOut
                    style={{
                        fontSize: 22,
                        verticalAlign: 'middle'
                    }}
                />
                <Span>Cerrar sesión</Span>
            </Li>
        </Ul>
    )
}

export default AdminLogout