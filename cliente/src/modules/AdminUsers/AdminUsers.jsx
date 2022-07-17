import React, { useState, useEffect } from 'react'
import AdminUserCard from '../../modules/AdminUserCard/AdminUserCard'
import Section from '../../components/Section/Section'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { profilePictureColors } from '../../Share/utilities'
import Div from '../../components/Div/Div'
import axios from 'axios'

const AdminUsers = () => {

    const [usersCount, setUsersCount] = useState(0)
    const [usersList, setUsersList] = useState([])
    const [limit, setLimit] = useState(12)
    const [page, setPage] = useState(1)
    const [pagesCount, setPagesCount] = useState(0)
    const [lastPageSize, setLastPageSize] = useState(0)
    const [pictureColors, setPictureColors] = useState([])

    const getUsersList = async () => {
        try {
            const {data} = await axios.get(`api/users?limit=${limit}&skip=0`);
            const usersList = data[0].data.map( user => {
                return (
                    {
                        id: user.id,
                        name: user.name,
                        surname: user.surname,
                        email: user.email,
                        role: user.role,
                        association: user.association
                    }
                )
            })

            setUsersList(usersList)
            setPagesCount(Math.ceil(data[0].count / limit))
            setUsersCount(data[0].count)
            setLastPageSize(data[0].count % limit ? data[0].count % limit : limit)
        }

        catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getUsersList();
    }, [])

    useEffect(() => {
        let colors = []

        for (let i=0; i<usersCount; i++) {
            colors.push(profilePictureColors[Math.floor(Math.random()*profilePictureColors.length)])
        }
        
        setPictureColors(colors)
    }, [usersCount])

    return (
        <>
            <Div className='div--admin-users'>
                {
                    usersList?.map((user, i) => {
                        return <AdminUserCard 
                                    user={user} 
                                    color={pictureColors[i + ((page-1) * limit)]} 
                                />
                    })
                }
            </Div>
            {
                pagesCount > 1 ?
                <Section className='pagination admin'>
                    <Stack spacing={2}>
                        <Pagination 
                            count={pagesCount} 
                            color='primary' 
                            showFirstButton 
                            showLastButton 
                            onChange={async (e, params) => {

                                let request = ''

                                switch (e.target.dataset.testid) {
                                    case 'FirstPageIcon':
                                        request = `api/users?limit=${limit}&skip=0`
                                        setPage(1)
                                        break
                                    case 'LastPageIcon':
                                        request = `api/users?limit=${limit}&skip=${usersCount - lastPageSize}`
                                        setPage(pagesCount)
                                        break
                                    case 'NavigateBeforeIcon':
                                        request = `api/users?limit=${limit}&skip=${page * limit - (limit * 2)}`
                                        setPage(page -1)
                                        break
                                    case 'NavigateNextIcon':
                                        request = `api/users?limit=${limit}&skip=${page * limit}`
                                        setPage(page +1)
                                        break
                                    default:
                                        request = `api/users?limit=${limit}&skip=${limit * (params -1)}`
                                        setPage(params)
                                }

                                const {data} = await axios.get(request);
                                const usersList = data[0].data.map( user => {
                                    return (
                                        {
                                            id: user.id,
                                            name: user.name,
                                            surname: user.surname,
                                            email: user.email,
                                            role: user.role,
                                            association: user.association
                                        }
                                    )
                                })

                                setUsersList(usersList)
                            }}
                        />
                    </Stack> 
                </Section>
                : null
            }
        </>
    )
}

export default AdminUsers