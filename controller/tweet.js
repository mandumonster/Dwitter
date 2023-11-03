import * as tweetRepository from '../data/tweet.js'
import * as authRepository from '../data/auth.js'

export async function getTweets(req,res){
    const username=req.query.username;
    const data=await (username
        ? tweetRepository.getAllByUsername(username)
        : tweetRepository.getAll());
    res.status(200).json(data);
}

// getTweet
export async function getTweet(req,res,next){
    const id=req.params.id;
    const tweet=await tweetRepository.getById(id)
    if (tweet){
        res.status(200).json(tweet);
    }else{
        res.status(404).json({message:`Tweet id(${id}) not found`});
    }
}

// createTweet
export async function createTweet(req,res,next){
    const {text,name,username}=req.body;
    const tweets= await tweetRepository.create(text, name, username);
    res.status(201).json(tweets);
}

// updateTweet
export async function updateTweet(req,res,next){
    const id=req.params.id;
    const text=req.body.text;
    const tweet=await tweetRepository.update(id,text);
    if (tweet){
        tweet.text=text;
        res.status(200).json(tweet);
    }else{
        res.status(404).json({message:`Tweet id(${id}) not found`});
    }
}

// deleteTweet
export async function deleteTweet(req,res,next){
    const id=req.params.id;
    tweetRepository.remove(id);
    res.sendStatus(204);
}


// auth
export async function signup(req,res,next){
    const {id,username,password,name,email,url}=req.body;
    const user= await authRepository.create(id, username,password, name, email, url);
    res.status(201).json(user);
};

export async function login(req,res,next){
    const {id, password}=req.body;
    const user=await authRepository.loglog(id,password);
    if (user){
        res.status(200).json(user);
    }else{
        res.status(404).json({message:`Tweet id(${id}) or password not found`});
    }
}