import {test,expect, APIResponse} from '@playwright/test'

test('Validate the getUser API using promises', { 
    tag: '@GET', 
    annotation:{
        type:'Get Request',
        description:'Get the details of a specific user'
    }
}, async ({request})=>{

    var responseJson:any;
    await request.get('https://reqres.in/api/users/2')
        .then(responseBody => responseBody.json())
        .then(data =>{
            responseJson = data;
            console.log(responseJson);
        })
        .catch(error => console.error(error));

    // expect(responseBody.status()).toBe(200);
    expect(responseJson.data.id).toBe(2);
    expect(responseJson.data.email).toBe('janet.weaver@reqres.in');
    expect(responseJson.data.first_name).toBe('Janet');
    expect(responseJson.data.last_name).toBe('Weaver');
    
});