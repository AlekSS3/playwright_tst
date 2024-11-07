
import {test, expect} from '@playwright/test';

import fs from 'fs';

test('Upload an image', async({request, baseURL}) => {
    const petId = 11; 
    const imagePath = '/Users/aleksandra/Desktop/464685838_1096191559175858_3239472242469968264_n.jpg';
    const additionalMetadata = 'Pet photo 66'; 
    const response = await request.post(`${baseURL}/pet/${petId}/uploadImage`,{
        multipart: {
            additionalMetadata: additionalMetadata,
            file: fs.createReadStream(imagePath),
        }
        });

    //Assertions:
    await expect(response.status()).toBe(200);
    const responseBody = await response.json();
    console.log('Response', responseBody);
    await expect(responseBody.message).toContain('successful operation');


});


test('Create a new pet', async({request, baseURL}) => {
    const response = await request.post(`${baseURL}pet`, {
        data:
            {
                "id": 0,
                "category": {
                  "id": 0,
                  "name": "string"
                },
                "name": "doggie",
                "photoUrls": [
                  "string"
                ],
                "tags": [
                  {
                    "id": 0,
                    "name": "string"
                  }
                ],
                "status": "available"
              }
    });

    //Assertions:
    await expect(response.ok()).toBeTruthy();
    await expect(response.status()).toBe(200);

    const petDetail = await response.json();


});

test('Update pet with form data', async ({ request, baseURL }) => {
    const petId = 11;
    const updatedName = 'Buddy';
    const updatedStatus = 'sold';

    const response = await request.post(`${baseURL}/pet/${petId}`, {
        form: {
            name: updatedName,
            status: updatedStatus,
        }
    });

    expect(response.status()).not.toBe(405);
    expect([200, 201]).toContain(response.status());

    const responseData = await response.json();
    expect(responseData.id).toBe(petId);
    expect(responseData.name).toBe(updatedName);
    expect(responseData.status).toBe(updatedStatus);

});

test('Order for a pet', async ({ request, baseURL }) => {
    const response = await request.post(`${baseURL}/store/order`, {
        data:
                {
                    "id": 0,
                    "petId": 0,
                    "quantity": 0,
                    "shipDate": "2024-11-07T19:51:44.544Z",
                    "status": "placed",
                    "complete": true
                  }
    });

    //Assertions:
    await expect(response.ok()).toBeTruthy();
    await expect(response.status()).toBe(200);

});

test('Create a list of users', async ({ request, baseURL }) => {
    const response = await request.post(`${baseURL}/user/createWithList`, {

        data: [
            {
              id: 1,
              username: "user_01",
              firstName: "Aleks",
              lastName: "Stef",
              email: "aleks@example.com",
              password: "password123",
              phone: "1234567890",
              userStatus: 1
            },
            {
              id: 2,
              username: "user_02",
              firstName: "Stef",
              lastName: "Stef",
              email: "stef@example.com",
              password: "password456",
              phone: "0987654321",
              userStatus: 1
            }
          ]

    });

    await expect(response.status()).toBe(200)

    const text = await response.text();
    await expect(text).toContain('Stef');
    
    console.log(await response.json());




});