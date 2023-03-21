# API SPEC NEWS

## NEW KOMPAS.com

Request :

- Method : `GET`
- Endpoint : `api/kompas-news`
- Header :
    - Content-Type: application/json
    - Accept: application/json
- Query Param :
    - category : string,
    - page : number,
    - size : number

Response :

```json
{
  "message": "string",
  "code": "number",
  "data": [
    {
      "title": "string",
      "category": "string",
      "image": "date",
      "url": "date"
    },
    {
      "title": "string",
      "category": "string",
      "image": "date",
      "url": "date"
    }
  ]
}
```

### Timeline

- List Data - ✅
- Query Param - ⏳