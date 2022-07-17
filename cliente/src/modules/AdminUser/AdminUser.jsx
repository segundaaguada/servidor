import React from 'react'
import Div from '../../components/Div/Div'
import Span from '../../components/Span/Span'
import P from '../../components/P/P'

const AdminUser = ({name}) => {
    return (
        <Div
            className='div--admin-user'
        >
            <Div className='div--profile-picture blue'>
                <Span
                    className='span--user-initial'
                >
                    {name.substring(0, 1)}
                </Span>
            </Div>
            <P className='p--profile-name'>
                {name} 
            </P>
        </Div>
    )
}

export default AdminUser