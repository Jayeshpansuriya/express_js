// export const PORT = isNaN(process.env.PORT) ? 3000 : parseInt(process.env.PORT); 

import {z,} from 'zod';

 const ageSchema = z.number().min(18).max(100).int();
const userAge = 19;
const parseuserage = ageSchema.parse(userAge);
const {data,error , success} = ageSchema.safeParse(userAge);
console.log(parseuserage); // 19

try{
    const parseuserage = ageSchema.parse(userAge);
    console.log(parseuserage);
}catch(error){

    if(error instanceof z.ZodError){
        console.log(error.issues[0].message);
    }else{
        console.log("Unexpected error.",error);
    }
}

// "18".lastIndexOf()

const portschema = z.coerce.number().int().min(3000).max(9000).default(3001);
export const PORT = portschema.parse(process.env.PORT);
// console.log(parseport); 
