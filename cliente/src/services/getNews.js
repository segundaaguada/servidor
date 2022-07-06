import axios from "axios"

const getNews = async (request) =>{

    try {
        const {data} = await axios.get(request);
        const newsList = data[0].data.map( news => {
            return (
                {
                    id: news.id,
                    title: news.title,
                    image: news.imageUrl,
                    content: news.content,
                    date: new Date(news.date)
                }
                
            )
        })
        
        return [data[0].count, newsList]
    }

    catch (err) {
        console.log(err);
    }
  
}

export default getNews