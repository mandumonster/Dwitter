let users=[
    {
        id:'1',
        username:'apple',
        password:'$2b$10$6NVVL4gEtPh684Ncn2sCRe/LPe0u4kRkhBYSoiLx4bTGW5gwQ58Dy',
        name:'김사과',
        email:'apple@apple.com',
        url:'https://i.pinimg.com/originals/a8/dc/63/a8dc63c8abeeb6708dbec6ef3009608a.jpg'
    }
];

export async function create(id, username, password, name, email, url){
    const user={
        id,
        username,
        password,
        name,
        email,
        url
    };
    users=[user, ...users];
    return users;
};

export async function loglog(id,password){
    const user={id,password};
    return users.find((users)=>{user.id===id && password===password});
};
