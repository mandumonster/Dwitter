/*
회원가입
router.post('/signup',...)  create

로그인
router.post('/login;,...)
id와 password를 보내준다 포스트로 제이슨으로

로그인까지 하고 깃허브에 올리기

JWT 확인
router.get('/me',...)

const jwt=require('jsonwebtoken');

const secret='abcdefg1234%^&*';
const token=jwt.sign(
    {
        id:'apple',
        isAdmin:false
    },
    secret,
    {expiresIn:3}
);

setTimeout(()=>{
    jwt.verify(token,secret,(error,decoded)=>{
        console.log(error,decoded);
    });
}, 2000);

console.log(token);
*/

import * as controller from '../controller/tweet.js';
import express from "express";

const router=express.Router();

router.post('/signup',controller.signup);

router.post('/login',controller.login);


export default router;