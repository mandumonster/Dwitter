let tweets=[
    {
        id:'1',
        text:'안녕하세요.',
        createdAt: Date.now().toString(),
        name: '김사과',
        username:'apple',
        url:'https://i.pinimg.com/originals/a8/dc/63/a8dc63c8abeeb6708dbec6ef3009608a.jpg'
    },
    {
        id:'2',
        text:'반갑습니다.',
        createdAt: Date.now().toString(),
        name: '반하나',
        username:'banana',
        url:'https://i.pinimg.com/originals/a8/dc/63/a8dc63c8abeeb6708dbec6ef3009608a.jpg'
    }
];

// 비동기처리
// 비동기일때 async쓰면 언제든 await 가능
export async function getAll(){
    return tweets;
}

export async function getAllByUsername(username){
    return tweets.filter((tweet)=>tweet.username===username);
}

export async function getById(id){
    return tweets.find((tweet)=>tweet.id===id);
}

export async function create(text, name, username){
    const tweet={
        id:'10',
        text,   // 같은 이름이라면 text: text의 text 생략 가능
        createdAt:new Date().toString(),
        name,
        username
    };
    tweets=[tweet, ...tweets];
    return tweet;
}


export async function update(id,text){
    const tweet=tweets.find((tweet)=>tweet.id===id);
    if (tweet){
        tweet.text=text;}
    return tweet;
}

export async function remove(id){
    tweets=tweets.filter((tweet)=>tweet.id!==id);
}