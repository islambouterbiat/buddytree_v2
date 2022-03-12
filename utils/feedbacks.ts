import user from "../assets/images/Picture.png"


interface Card{
    id:number,
    user:string,
    feedback:string,
    place:string,
    imageUrl:any
    tags:Array<any>,
}

export const feedbacks:Array<Card>=[
    {id:1,user:"Glen", place:"California",feedback:"Buddytree combines the convenience of having meaningful discussions with interesting people around the world in the comfort of your own home.",imageUrl:user,tags:["Get moving","Share language + culture","Read with freinds","Write together"]},
    {id:2,user:"Glen", place:"California",feedback:"Buddytree combines the convenience of having meaningful discussions with interesting people around the world in the comfort of your own home.",imageUrl:user,tags:["Get moving","Share language + culture","Read with freinds","Write together"]},
    {id:3,user:"Glen", place:"California",feedback:"Buddytree combines the convenience of having meaningful discussions with interesting people around the world in the comfort of your own home.",imageUrl:user,tags:["Get moving","Share language + culture","Read with freinds","Write together"]},
    {id:4,user:"Glen", place:"California",feedback:"Buddytree combines the convenience of having meaningful discussions with interesting people around the world in the comfort of your own home.",imageUrl:user,tags:["Get moving","Share language + culture","Read with freinds","Write together"]},
    {id:5,user:"Glen", place:"California",feedback:"Buddytree combines the convenience of having meaningful discussions with interesting people around the world in the comfort of your own home.",imageUrl:user,tags:["Get moving","Share language + culture","Read with freinds","Write together"]},
    {id:6,user:"Glen", place:"California",feedback:"Buddytree combines the convenience of having meaningful discussions with interesting people around the world in the comfort of your own home.",imageUrl:user,tags:["Get moving","Share language + culture","Read with freinds","Write together"]},
    {id:7,user:"Glen", place:"California",feedback:"Buddytree combines the convenience of having meaningful discussions with interesting people around the world in the comfort of your own home.",imageUrl:user,tags:["Get moving","Share language + culture","Read with freinds","Write together"]},
    {id:8,user:"Glen", place:"California",feedback:"Buddytree combines the convenience of having meaningful discussions with interesting people around the world in the comfort of your own home.",imageUrl:user,tags:["Get moving","Share language + culture","Read with freinds","Write together"]},
]