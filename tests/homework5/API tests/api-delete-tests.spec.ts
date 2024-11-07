import {test, expect} from '@playwright/test';

import fs from 'fs';


test("Create and delete a pet", async({request, baseURL}) => {
    const response = await request.post(`${baseURL}pet`, {
        data : {
            "id": Date.now(),
            "category": {
              "id": 8077,
              "name": "Dog1"
            },
            "name": "Cuci",
            "photoUrls": [
              "string"
            ],
            "tags": [
              {
                "id": 7017,
                "name": "brown"
              }
            ],
            "status": "available"
          }
    });

    //Assertions
    await expect(response.ok()).toBeTruthy();
    await expect(response.status()).toBe(200);

});

test('Delete a user by username', async ({ request, baseURL }) => {
    const username = 'user1';
    const response = await request.delete(`${baseURL}/user/${username}`);
  
    await expect(response.status()).toBe(200);
  
    const responseBody = await response.json();
    console.log('Response Body:', responseBody);
    
    if (responseBody?.message) {
        await expect(responseBody.message).toBe(`User ${username} deleted`);
    }
});