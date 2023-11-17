// import Mongoose from 'mongoose';
// import { useVirtualId } from '../DB/database.js';

// const userSchema=new Mongoose.Schema({
//     username:{type:String,required:true},
//     name:{type:String, required:true},
//     email:{type:String, required:true},
//     password:{type:String, required:true},
//     url:String
// });

// useVirtualId(userSchema);
// const User=Mongoose.model('User',userSchema);  // s가 자동으로 붙따이(대문자?)

// export async function findByUsername(username){
//     return User.findOne({username});
// }

// export async function findById(id){
//     return User.findById({id}); // User 컬랙션 안에 있는 함수라 이름만 같음
// }

// export async function createUser(user) {
//     return new User(user).save().then((data)=>data.id);
// }

import Mongoose from "mongoose";
import { useVirtualId } from "../DB/database.js";

const userSchema = new Mongoose.Schema({
    username: { type: String, required: true },
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    url: String
})

useVirtualId(userSchema);

const User = Mongoose.model('User', userSchema);

export async function findByUsername(username){
    return User.findOne({ username });
}

export async function findById(id) {
    return User.findById(id)
};

export async function createUser(user) {
    return new User(user).save().then((data) => data.id)
    // 해당 유저 객체의 JSON을 받아 위에 스키마 형태처럼 생성을 하고 insert를 한다.
}