import { Card,  CardBody,CardHeader, CardFooter,SimpleGrid, Heading, Button,Image,Text } from '@chakra-ui/react'
import React from 'react'

function RecipeCard() {
  return (
    <div>
     <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
  <Card>
    <CardHeader>
      <Heading size='md'> Customer dashboard</Heading>
    </CardHeader>
    <CardBody>
      <Text style={{textDecoration: todo.completed ? 'line-through' : 'none'}}>{todo.todo}</Text>
    </CardBody>
    <CardFooter>
    <Button variant="outline" colorscheme="teal" onClick={() => handleDelete(todo.id)}>Delete</Button>
    </CardFooter>
  </Card>
</SimpleGrid>
    </div>
  )
}

export default RecipeCard
