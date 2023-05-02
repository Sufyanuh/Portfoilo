import * as contentful from "contentful";

const client = contentful.createClient({
    space: 's1o7l246mufa',
    accessToken: 'Z6lhLHjSuwFZQwpL2bhlDj9OKCdDP_uyUEdxkAECMRw'
  });

export const getData= async()=>{
  
        const myData = await client.getEntries();
        console.log(myData)
        return myData
      
}