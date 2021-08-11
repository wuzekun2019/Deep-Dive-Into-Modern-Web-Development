const express = require("express")
var morgan = require('morgan')
const app=express()

app.use(express.json())

// create custome message in the middleweare s
morgan.token('body', function (req) {
    console.log(req.body)
    return `${JSON.stringify(req.body)}`
  })
  
app.use(morgan(':method :url :status :response-time :req[header] :body'))
  

let persons=[
    { 
      "id": 1,
      "name": "Arto Hellas", 
      "number": "040-123456"
    },
    { 
      "id": 2,
      "name": "Ada Lovelace", 
      "number": "39-44-5323523"
    },
    { 
      "id": 3,
      "name": "Dan Abramov", 
      "number": "12-43-234345"
    },
    { 
      "id": 4,
      "name": "Mary Poppendieck", 
      "number": "39-23-6423122"
    }
]

app.get('/info', (request, response) => {
    response.send(`<p>Phonbook has info for ${persons.length} people</p><p>${Date()}</p>`)
  })

app.get("/api/persons",(request,response)=>{
    response.json(persons)
})

app.get("/api/persons/:id",(request,response)=>{
    const id = Number(request.params.id)
    const person = persons.find(person => person.id === id)
    response.json(person)
})

const id_generator = ()=> {
    const random_id=Math.floor((Math.random() * 10000) + 1);
    console.log(random_id)
    return random_id
}

app.post("/api/persons",(request,response)=>{

    const body = request.body
    console.log(body)

    if(!body.name||!body.number){
        return response.status(400).json({
            error:'name or number missing'
        })
    }
    
    persons.map(person=>person.name===body.name?response.status(401).json({
        error:'name is not unique'
    }):0)

    const person = {
        id: id_generator(),
        name:body.name,
        number:body.number
    }

    persons=persons.concat(person)

    response.json(person)
})

app.delete('/api/notes/:id',(request,response)=>{
    const id = Number(request.params.id)
    persons=persons.filter(person=>person.id!==id)
    response.status(204).end()
})

const PORT=3001
app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`)
})

