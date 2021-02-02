import {RequestHandler} from 'express'
import Video from './Video'

export const getVideos: RequestHandler = async (req,res) => {
    const videos = await Video.find()
    return res.json(videos)
}

export const getVideo: RequestHandler = async (req,res) =>{ 
    const video = await Video.findById(req.params.id)
    return res.json(video)
}

export const createVideo: RequestHandler = async(req,res) =>{ 
    const video = new Video(req.body)
    console.log(req.body)
   const savedVideo = await video.save()
    res.json(savedVideo)
}

export const updateVideo: RequestHandler = async (req,res) =>{
    const videoToUpdate = await Video.findById(req.params.id, req.body)

    res.json(videoToUpdate)
}

export const deleteVideo: RequestHandler = async (req,res) =>{
    const videoDeleted = await Video.findById(req.params.id)
    res.json('deleting video')
} 
