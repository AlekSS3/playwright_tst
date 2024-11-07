import {test, expect} from '@playwright/test';

import fs from 'fs';

test('API GET Status Request', async({request, baseURL}) => {

    const getPet = await request.get(`${baseURL}pet/findByStatus?status=available`);
    console.log(await getPet.json());

    //Assertions
    await expect(getPet.ok()).toBeTruthy();
    await expect(getPet.status()).toBe(200);
    

});

test('API GET Request Available', async({request}) => {
    
    const response = await request.get('https://petstore.swagger.io/v2/pet/findByStatus?status=available')

    await expect(response.status()).toBe(200)

    const text = await response.text();
    await expect(text).toContain('Canine')
    
    console.log(await response.json());

});

test('API GET Request Pending', async({request}) => {
    
    const response = await request.get('https://petstore.swagger.io/v2/pet/findByStatus?status=pending')

    await expect(response.status()).toBe(200)

    const text = await response.text();
    await expect(text).toContain('LenaNewDoggie')
    
    console.log(await response.json());

});

test('API GET Request Sold', async({request}) => {
    
    const response = await request.get('https://petstore.swagger.io/v2/pet/findByStatus?status=sold')

    await expect(response.status()).toBe(200)

    const text = await response.text();
    await expect(text).toContain('Angle')
    
    console.log(await response.json());

});

test('Get pet by ID', async ({ request, baseURL }) => {
    const petId = 1;
    const response = await request.get(`${baseURL}/pet/${petId}`);

    await expect(response.status()).toBe(200);

    const responseBody = await response.json();

    await expect(responseBody.id).toBe(petId);

    console.log('Response Body:', responseBody);
});


test('Find pet by non existing ID', async ({ request, baseURL }) => {
    const petId = 22; 

    const response = await request.get(`${baseURL}/pet/${petId}`,{
        headers: {
            'Accept': 'application/json'
        }
    });

    await expect(response.status()).toBe(404);

    await expect(response.headers()['content-type']).toContain('application/json');

    const responseData = await response.json();
    await expect(responseData).toHaveProperty('message');
});


test('Get statuses from pet inventory', async ({ request, baseURL }) => {
    const response = await request.get(`${baseURL}/store/inventory`);

    console.log('Response Status:', response.status());
    console.log('Response Body:', await response.text()); 

    await expect(response.status()).toBe(200);

    const responseBody = await response.json();
    expect(typeof responseBody).toBe('object');

    expect(responseBody).toHaveProperty('available');
    expect(responseBody).toHaveProperty('pending');
    expect(responseBody).toHaveProperty('sold');

});

test('Get user by username', async ({ request, baseURL  }) => {
    const username = 'user1';
    const response = await request.get(`${baseURL}/user/{username}`);
  
    await expect(response.status()).toBe(200);
  
    const responseBody = await response.json();
  
    await expect(responseBody.password).toBe('P@ssw0rd123');
  
    console.log('Response Body:', responseBody);
  });






