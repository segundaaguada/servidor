import React, { useState, useEffect } from 'react'
import Header from '../../components/Header/Header'
import VisitorCounter from '../VisitorCounter/VisitorCounter'
import { Link } from 'react-router-dom'
import Ul from '../../components/Ul/Ul'
import Li from '../../components/Li/Li'
import countapi from 'countapi-js'
import { FiArrowRight } from 'react-icons/fi'

const AdminHeader = () => {

    const [views, setViews] = useState('')
    const [hoveredLink, setHoveredLink] = useState(false)

    useEffect(() => {
        countapi.get('segundaaguada', 'home').then( result => {
            setViews(result.value)
        });
    }, [])

    return (
        <Header
            admin={true}
        >
            {/* TODO searchbar */}
            
            <Ul
                admin={true}
            >
                <Li
                    style={{
                        padding: '10px 20px',
                        margin: '0 1.5%'
                    }}
                >
                    <VisitorCounter
                        views={views}
                    />
                </Li>
                <Li
                    style={{
                        backgroundColor: hoveredLink ? '#e8eef7' : '',
                        textDecoration: hoveredLink ? 'underline' : '',
                        transition: 'background-color 0.2s ease-in'
                    }}
                    onMouseEnter={() => setHoveredLink(true)}
                    onMouseLeave={() => setHoveredLink(false)}
                >
                    <Link
                        to='/'
                        className='admin-link'
                    >
                        Ir al inicio
                        <FiArrowRight/>
                    </Link>
                </Li>
            </Ul>
        </Header>
    )
}

export default AdminHeader