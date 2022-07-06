import axios from "axios"

const addNews = async (newsData) =>{

    const user = JSON.parse(localStorage.getItem('loggedUser'))

    try {
        const response = await axios.post("/api/news", newsData, 
            {
                headers: { 
                    Authorization: `Bearer ${user.token}`,
                    'Content-Type': 'multipart/form-data' 
                },
            },
            {
                "image": newsData.image
            },
        )
        
        return response

    }
    catch (error) {
        console.log(error)
        return error
    }
  
}

export default addNews