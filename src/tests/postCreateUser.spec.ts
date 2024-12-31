import {test,expect} from '@playwright/test'

test('Verify the create user API', {tag:'@POST', annotation:{
    type:'Http method : POST',
    description:'create user with status 201'
}}, async ({request})=>{

    const requestBody = await request.post('/api/users',{
        data:{
                "name": "TestUser3112",
                "job": "PlaywrightTesting"
        }
    })
    expect(requestBody.status()).toBe(201);
    let responseJson:any;
    await requestBody.json()
        .then(data => {
            responseJson = data;
            console.info("JSON response ==> ", responseJson);
        })
        .catch(error => console.error("Cannot parse the response body", error));

    expect(responseJson.name).toBe('TestUser3112');
    expect(responseJson.job).toBe('PlaywrightTesting');
})