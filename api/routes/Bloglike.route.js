import express from 'express'
import { doLike, likeCount } from '../controllers/BlogLike.controller.js'
import { authenticate } from '../middleware/authenticate.js'


const BlogLikeRoute = express.Router()

//protected
BlogLikeRoute.post('/do-like', authenticate, doLike)

//public
BlogLikeRoute.get('/get-like/:blogid/userid?', likeCount)



export default BlogLikeRoute