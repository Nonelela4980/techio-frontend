export const getNumbers= ():number[] =>{
    const numbers:number[] =[];
    for(let i:number=1;i<=10;i++){
        numbers.push(i);
    }
    console.log(numbers)
    return numbers;
}