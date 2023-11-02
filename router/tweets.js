import express from "express";
import * as tweetController from '../controller/tweet.js';

const router=express.Router();


// GET / tweets
// GET / tweets?username=:username

// ? 뒤: query
// ? : 있으면 없으면 삼합연산자
router.get('/',tweetController.getTweets);

// GET / tweets/:id
router.get('/:id',tweetController.getTweet);

// POST / tweets
router.post('/',tweetController.createTweet);

// PUT / tweets/:id
router.put('/:id',tweetController.updateTweet);

// DELETE / tweets/:id
router.delete('/:id',tweetController.deleteTweet);

export default router;