import {test,expect} from '@playwright/test'

test('Verify the single user not found API', {tag:'@GET', annotation:{
    type:'Http method - GET',
    description:'Get 404 error when user not found'
}}, async ({request})=>{

    const responseBody = await request.get('/api/users/23');
    expect(responseBody.status()).toBe(404);
})