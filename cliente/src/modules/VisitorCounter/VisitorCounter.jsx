import React from 'react'
import Div from '../../components/Div/Div'
import P from '../../components/P/P'

const VisitorCounter = ({views}) => {
    return (
        <Div
            className='div--visitor-counter'
        >
            <P>{views}</P>
            <P>&nbsp;visitas</P>
        </Div>
    )
}

export default VisitorCounter