import React from 'react'
import Div from '../../components/Div/Div'
import P from '../../components/P/P'
import { IconFaceIdError } from "@tabler/icons";

export const NoContent = ({type, message}) => {
  return (
    <Div 
        className='no-content'
        style={type === 'entities' ? {marginTop: '20vh'} : null}
    >
        <P
            style={{
                marginBottom: '20px',
                fontWeight: '500'
            }}
        >
            {message}
        </P>
        <IconFaceIdError
            size={55}
            stroke={1.1}
            color={'#222222'}
        />
    </Div>
  )
}

export default NoContent