import {test, expect} from '@playwright/test';
import fs from 'fs';

test('Update an existing pet', async ({ request, baseURL }) => {
    const petId = 5489;
    
    const response = await request.put(`${baseURL}/pet`, {
        data: {
            "id": petId,
            "category": {
              "id": 0,
              "name": "string"
            },
            "name": "Cuki",
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

    expect(response.status()).toBe(404);
});

const petUpdates = [
    { id: 1, name: "Aleks", status: "available" },
    { id: 2, name: "Stef", status: "pending" },
    { id: 3, name: "Cuki", status: "sold" }
  ];
  
  test.describe('Data-driven PUT tests for updating pets in Pet Store API', () => {
    petUpdates.forEach((pet) => {
      test(`Update pet information for pet ID ${pet.id}`, async ({ request, baseURL }) => {
        
        const response = await request.put(`${baseURL}/pet`, {
          data: {
            id: pet.id,
            name: pet.name,
            status: pet.status
          },
          headers: {
            'Content-Type': 'application/json'
          }
        });
  
    
        await expect(response.status()).toBe(200);
  
       
        const responseBody = await response.json();
        console.log('Response Body:', responseBody);
  
        expect(responseBody.id).toBe(pet.id);
        expect(responseBody.name).toBe(pet.name);
        expect(responseBody.status).toBe(pet.status);
      });
    });
  });