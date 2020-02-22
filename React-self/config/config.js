module.exports = {
    host:process.env.HOST || '0.0.0.0', // 关于process.env这里面有许多问题需要了解
    port:process.env.PORT ||(process.env.NODE_ENV === 'production'?8080:9000),
    apiHost:process.env.APIHOST || 'localhost',
    apiPort:process.env.APIPORT || '3030',
    dbHost:"localhost",
    dbPort:"27017",
    app:{
        title:"personal blog",
        description:'demo',
        head:{
            titleTemplate:'blog',
            meta:[
                {
                    name:"description",
                    content:"react express demo"
                },
                {charset:"utf-8"}
            ]
        }
    }
};