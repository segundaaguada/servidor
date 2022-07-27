const newsRouter = require('express').Router()
const userExtractor = require('../middleware/userExtractor')
const News = require('../models/News')
const Association = require('../models/Association')
const upload = require('../middleware/storage')

newsRouter.get('/', async (request, response, next) => {
    try
    {
        // const news = await News.find({})
        //     .populate("association")
        const limit = Number(request.query.limit)
        const skip = Number(request.query.skip)
        const {search} = request.query
        const {reverse} = request.query

        let news = null

        if (search) {
            news = await News.aggregate([
                {
                    $project: {
                        title: "$title",
                        id: "$_id"
                    },
                }
            ])
        }

        else {
            news = await News.aggregate([
                {
                    $sort: {created_at: reverse ? -1 : 1}
                },
                {
                    $facet: {
                        'stage1': [{'$group': {_id: null, count: {$sum:1}}}],
                        'stage2': [
                            {  
                                "$skip": skip ? skip : 0
                            }, 
                            {
                                "$limit": limit ? limit : 9
                            }, 
                            {
                                $lookup: {
                                    from: "associations",
                                    localField: "association",
                                    foreignField: "_id",
                                    as: "association"
                                }
                            },
                            {
                                $unwind: "$association"
                            },
                            {
                                $set: {id: "$_id"}
                            }
                        ]
                    }
                },
                {
                    $unwind: "$stage1"
                },
                {
                    $project: {
                        count: "$stage1.count",
                        data: "$stage2"
                    },
                }
            ])
        }

        response.json(news)
    }

    catch(err)
    {
        next(err)
    }
})

newsRouter.get('/:id', async (request, response, next) => {
    try{
        const {id} = request.params
        const news = await News.findById(id)
        if(news) return response.json(news)
    }
    catch(err){
        next(err)
    }
})

newsRouter.put('/:id', userExtractor, async (request, response, next) => {
    try{
        const {id} = request.params
        const info = request.body
        
        const newNewsInfo = {
            title: info.title,
            content: info.content,
            date: info.date,
        }

       
        
        const news = await News.findByIdAndUpdate(id, newNewsInfo, {new: true})
        
        
        response.status(200).json(news)
    }
    catch(err){
        next(err)
    }
})

newsRouter.delete("/:id", userExtractor, async (request, response, next) => {
    const {id} = request.params
    const res = await News.findByIdAndDelete(id)
    if(res === null) return response.sendStatus(404)
    response.status(204).end()
})

newsRouter.post("/", userExtractor, upload.single("image") , async (request, response,next) => {
    const {
        title,
        content,
        date,
        author,
        association
    } = request.body

    const findAssociation = await Association.findById(association)

    if (!content) {
        return response.status(400).json({
          error: 'required "content" field is missing'
        })
    }

    const newNewsInfo = new News({
        title,
        content,
        date,
        created_at: new Date(),
        author,
        association: findAssociation._id
    }) 

    const {filename} = request.file 
    newNewsInfo.setImgUrl(filename)


    try {
        const savedNews = await newNewsInfo.save()
        // findAssociation.news  = findAssociation.news.concat(savedNews._id)
        // await findAssociation.save()
        await Association.findByIdAndUpdate(findAssociation.id, {news: findAssociation.news.concat(savedNews._id)}, (err, result) => {
            if (err) console.log('error', err)
            else console.log('resultado', result)
        }).clone()
        response.status(201).json(savedNews)
    }
    catch (err) {
        next(err)
        if (err.errors.title && err.errors.title.properties.type === 'unique') {
            return response.status(422).json({
                message: 'Ya existe una noticia con ese título.'
            })
        }
        else {
            return response.status(422).json({
                message: 'No se pudo agregar la noticia.'
            })
        }
    }

})

module.exports = newsRouter