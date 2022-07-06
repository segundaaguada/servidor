import axios from "axios"

const verifyToken = async (user) =>{

    try{
        const {data} = await axios.get("/api/users/verify",
            {
                headers: { 
                    Authorization: `Bearer ${user.token}`
                },
            }
        )

        return data

    }catch(e){
        return 'Token expirado'
    }
  
}

export default verifyToken