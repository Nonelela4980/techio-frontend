export interface Item{
    id:string,
    title:string,
    description:string,
    category:string,
    price:number,
    imageUrl:string,
    quantity:number,
}

interface Address{
    street:string,
    town:string,
    province:string,
    code:number
}

export interface UpdateQuantityIF{
    id:string,
    decrement:boolean
}

export interface cartDataState{
    cartItems:Item[]
}

export interface User{
    id:string,
    firstname:string,
    lastname:string,
    email:string,
    address:Address | null,
}

export interface UserState{
    user:User | null
}



