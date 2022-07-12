import React, { useState, useEffect } from 'react'
import AdminUserCard from '../../modules/AdminUserCard/AdminUserCard'
import Div from '../../components/Div/Div'
import axios from 'axios'

const AdminUsers = () => {

    const [usersList, setUsersList] = useState([])

    const getUsersList = async () => {
        try {
            const {data} = await axios.get(`api/users`);
            setUsersList(data)
        }

        catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getUsersList();
    }, [])

    return (
        <Div className='div--admin-users'>
            {
                usersList?.map(user => {
                    return <AdminUserCard user={user} />
                })
            }
        </Div>
    )
}

export default AdminUsers