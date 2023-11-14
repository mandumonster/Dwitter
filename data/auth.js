import SQ from 'sequelize';
import { sequelize } from '../DB/database.js';
const DataTypes=SQ.DataTypes;

// 테이블이 없으면 사용, 있으면 기존 테이블 사용
export const User=sequelize.define(
    'user', // 자동으로 뒤에 s가 붙는다잉
    {
        id:{
            type:DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey:true
        },
        username:{
            type:DataTypes.STRING(45),
            allowNull:false
        },
        password:{
            type:DataTypes.STRING(128),
            allowNull:false
        },
        name:{
            type:DataTypes.STRING(45),
            allowNull:false
        },
        email:{
            type:DataTypes.STRING(128),
            allowNull:false
        },
        url: DataTypes.TEXT
    },
    {timestamps:false}
);

export async function findByUsername(username) {
    return User.findOne({where:{username}});
};

export async function findById(id) {
    return User.findByPk(id);
};

export async function createUser(user) {
    return User.create(user).then((data)=>data.dataValues.id);
};