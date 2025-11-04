import { Rating } from "./rating.model"

export interface Prodcuto{
    id:number,
    title: string,
    price: number,
    description?: string,
    category?: string,
    image?: string
    rating: Rating
}