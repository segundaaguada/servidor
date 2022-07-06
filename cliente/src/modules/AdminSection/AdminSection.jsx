import React from 'react'
import Section from '../../components/Section/Section'

const AdminSection = ({menuOption}) => {
    return (
        <Section
            className='admin-section'
        >
            {menuOption}
        </Section>
    )
}

export default AdminSection