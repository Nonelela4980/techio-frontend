export interface Category{
    id:number,
    name:string
}

export const sortCategories : Category[] =[
    {
        id:1,
        name:"Default",
    },
    {
        id:2,
        name:"Name",
    },
    {
        id:3,
        name:"Price: Lowest",
    },
    {
        id:4,
        name:"Price: Highest",
    },

];


const categories : Category[] =[
        {
            id:1,
            name:"All Categories"
        },
        {
            id:2,
            name:"Computers"
        },
        {
            id:3,
            name:"Smartphones"
        },
        {
            id:4,
            name:"Laptops"
        },
        {
            id:5,
            name:"Cameras"
        },
]

export default categories;