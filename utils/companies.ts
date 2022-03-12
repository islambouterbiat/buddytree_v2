import airbnb from "../assets/images/trusted_countries/airbnb.png"
import hubspot from "../assets/images/trusted_countries/hubspot.png"
import google from "../assets/images/trusted_countries/google.png"
import microsoft from "../assets/images/trusted_countries/microsoft.png"
import walmart from "../assets/images/trusted_countries/walmart.png"
import fedex from "../assets/images/trusted_countries/fedex.png"

interface Company{
    id:number,
    imageUrl:any
}

export const companies:Array<Company>=[
    {id:1,imageUrl:airbnb},
    {id:2,imageUrl:hubspot},
    {id:3,imageUrl:google},
    {id:4,imageUrl:microsoft},
    {id:5,imageUrl:walmart},
    {id:6,imageUrl:fedex},
]