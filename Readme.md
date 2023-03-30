# API SPEC NEWS (Hedaline / News)

## kompas.com

Request :

- Method : `GET`
- Endpoint : `api/kompas-news`
- Header :
    - Content-Type: application/json
    - Accept: application/json
- Query Param :
    - category : string,
    - search : string
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

#### kompas.com
```text
- List Data - ✅
- Query Param : 
  - category - ✅ 
  - search - ✅
  - page - ⏳
  - size - ⏳
```

#### detik.com

```text
- List Data - ⏳
- Query Param : 
  - category - ⏳ 
  - search - ⏳
  - page - ⏳
  - size - ⏳
```

#### cnnindonesia.com

```text
- List Data - ⏳
- Query Param : 
  - category - ⏳ 
  - search - ⏳
  - page - ⏳
  - size - ⏳
```