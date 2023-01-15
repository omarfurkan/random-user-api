let user = [
    {
        "id": 1,
        "gender": "male",
        "name": "Javed",
        "contact": 181879323,
        "address": "City Gate, Pligaw, panchlaish, chattogram",
        "photoUrl": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
    },
    {
        "id": 2,
        "gender": "male",
        "name": "Fisal",
        "contact": 123456798,
        "address": "Zia Complex, Bahoddar hat, Chandgaw, chattogram",
        "photoUrl": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
    },
    {
        "id": 3,
        "gender": "female",
        "name": "Jenifer1",
        "contact": 456789132,
        "address": "Sanfrancisco, Town Hill, USA",
        "photoUrl": "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    },
    {
        "id": 4,
        "gender": "male",
        "name": "Ikbal",
        "contact": 7932145,
        "address": "Palinogor, Tezgaw, Badda, Dhaka",
        "photoUrl": "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
    },
    {
        "id": 5,
        "gender": "female",
        "name": "Sabrina",
        "contact": 654987321,
        "address": "Sha-amanat, pillkana, center point, chattogram",
        "photoUrl": "https://images.unsplash.com/photo-1525134479668-1bee5c7c6845?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
    },
    {
        "id": 6,
        "gender": "male",
        "name": "Hablu",
        "contact": 9517534682,
        "address": "Sugandha R/a, Road no, panchlaish, chattogram",
        "photoUrl": "https://images.unsplash.com/photo-1530268729831-4b0b9e170218?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    },
    {
        "id": 1,
        "gender": "male",
        "name": "Javed",
        "contact": 181879323,
        "address": "City Gate, Pligaw, panchlaish, chattogram",
        "photoUrl": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
    }
]



module.exports.getAllUser = (req, res, next) => {
    res.send(user)
}

