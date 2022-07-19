import React from 'react'
import Div from '../../components/Div/Div'
import Span from '../../components/Span/Span'
import P from '../../components/P/P'
import Label from '../../components/Label/Label'
import Input from '../../components/Input/Input'

const AdminUserCard = ({user, color, handleClick, isChecked}) => {
    return (
        <Div
            className='div--usercard'
        >
            <Label>
                <Input 
                    id={user.id}
                    type='checkbox'
                    checked={isChecked}
                    onClick={handleClick}
                    className='admin-checkbox'
                />
            </Label>
            <Div className={`div--profile-picture usercard ${color}`}>
                {user.name.substring(0, 1)}
            </Div>
            <P className='p--usercard-name'>
                {user.name} {user.surname}
            </P>
            <P className='p--usercard-entity'>
                {user.association?.name}
            </P>
            {/* <P className='p--usercard-entity'>
                {user.email}
            </P> */}
            <Div 
                className='div--usercard-role'
                style={{
                    backgroundColor: user.role === 1 ? '#FFDDDF' : '#E8EEF7',
                    color: user.role === 1 ? '#DE0051' : '#003C54'
                }}
            >
                <Span
                    // style={{
                    //     color: user.role === 1 ? '#DE0051' : '#003C54'
                    // }}
                >
                    {user.role === 1 ? 'Admin' : 'Usuario'}
                </Span>
            </Div>
        </Div>
    )
}

export default AdminUserCard