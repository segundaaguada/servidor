import React, { useRef, Fragment } from 'react'
import Slider from "react-slick";
import News from '../NewsIndex/NewsIndex'
import Section from '../../components/Section/Section'
import CarrouselButtons from '../CarrouselButtons/CarrouselButtons'
import NoContent from '../../modules/NoContent/NoContent'


const NewsCarrousel = ({newsArray, type, name}) => {

    const sliderSettings = {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        arrows: false,
    }

    const slider = useRef(null)

    return (
        <Section className='section-gray'>
            {
                newsArray.length > 0 ?
                <Fragment>
                    <Slider 
                        {...sliderSettings}
                        ref={slider}
                    >
                        {
                            newsArray.map((news) => 
                                <News
                                    key={news.id}
                                    date={new Date(news.date)}
                                    title={news.title}
                                    content={news.content}
                                    image={news.image ? news.image : news.imageUrl}
                                    id={news.id}
                                />
                            )
                        }
                    </Slider>
                    <CarrouselButtons
                        newsCarrousel={true}
                        slider={slider}
                    /> 
                </Fragment> :
                <NoContent
                    message={
                        type === 'news' ? 
                        `${name} no tiene ninguna noticia.` :
                        'No hay noticias.'
                    }
                />
            }
        </Section>
    )
}

export default NewsCarrousel;