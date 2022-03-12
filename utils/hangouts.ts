import first from "../assets/images/upcoming_hangouts/1.png"
import second from "../assets/images/upcoming_hangouts/2.png"
import third from "../assets/images/upcoming_hangouts/3.png"
import fourth from "../assets/images/upcoming_hangouts/4.png"
import fifth from "../assets/images/upcoming_hangouts/5.png"
import user1 from "../assets/images/upcoming_hangouts/user1.png"
import user2 from "../assets/images/upcoming_hangouts/user2.png"
import user3 from "../assets/images/upcoming_hangouts/user3.png"

interface Card{
    id:number,
    title:string,
    imageUrl:any
    users:Array<any>,
}

export const hangouts:Array<Card>=[
    {id:1,title:"Gender Rights & Equality",imageUrl:first,users:[user1,user2,user3]},
    {id:2,title:"Trust & Vulnerability",imageUrl:second,users:[user1,user2,user3]},
    {id:3,title:"Goals and Motivation",imageUrl:third,users:[user1,user2,user3]},
    {id:4,title:"Gender Rights & Equality",imageUrl:fourth,users:[user1,user2,user3]},
    {id:5,title:"Trust & Vulnerability",imageUrl:fifth,users:[user1,user2,user3]},
    {id:6,title:"Trust & Vulnerability",imageUrl:fifth,users:[user1,user2,user3]},
    {id:7,title:"Trust & Vulnerability",imageUrl:fifth,users:[user1,user2,user3]},
    {id:8,title:"Trust & Vulnerability",imageUrl:fifth,users:[user1,user2,user3]},
]