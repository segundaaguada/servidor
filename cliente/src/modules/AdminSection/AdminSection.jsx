import React from 'react'
import Section from '../../components/Section/Section'
import AdminHeader from '../../modules/AdminHeader/AdminHeader'
import H2 from '../../components/H2/H2'
import Div from '../../components/Div/Div'
import { adminSectionTranslations } from '../../Share/utilities'
import { adminRoutes } from '../../routes/routes'


const AdminSection = ({menuOption}) => {
    return (
        <Section
            className='admin-section'
        >
            <AdminHeader/>
            <Div
                className='admin-section--div'
            >
                <H2>{adminSectionTranslations[menuOption]}</H2>
                {adminRoutes[menuOption]}
            </Div>
        </Section>
    )
}

export default AdminSection