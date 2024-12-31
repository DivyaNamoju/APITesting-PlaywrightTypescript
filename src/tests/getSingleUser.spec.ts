import {test,expect} from '@playwright/test'

test('Validate the getUser API', { 
    tag: '@GET', 
    annotation:{
        type:'Http method - GET',
        description:'Get the details of a specific user'
    }
}, async ({request})=>{

    const responseBody = await request.get('/api/users/2');
    expect(responseBody.status()).toBe(200);
    let responseJson:any;
    await responseBody.json()
        .then(data => {
            responseJson=data;
            console.log("Inside then => ",responseJson);
        })
        .catch(err=>console.log("cannot parse the json ", err));
        console.log(responseJson);
        expect(responseJson.data.id).toBe(2);
        expect(responseJson.data.email).toBe('janet.weaver@reqres.in');
        expect(responseJson.data.first_name).toBe('Janet');
        expect(responseJson.data.last_name).toBe('Weaver');
});