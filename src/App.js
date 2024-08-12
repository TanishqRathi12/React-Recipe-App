import { ChakraProvider, Heading, Box, AbsoluteCenter, Divider } from '@chakra-ui/react';
import { useState } from 'react';
import './App.css';
import { Input } from '@chakra-ui/react';
import { Card, CardBody, CardHeader, CardFooter, SimpleGrid, Button, Text } from '@chakra-ui/react';
import { motion, AnimatePresence } from 'framer-motion';

function App() {
  const [selectedId, setSelectedId] = useState(null);
  let [todo, setTodo] = useState("");
  let [toDos, setTodos] = useState([]);
  
  const handleAdd = () => {
    setTodos([...toDos, { todo, completed: false, id: Date.now() }]);
    setTodo('');
  };
  
  let handleChange = (e) => {
    setTodo(e.target.value);
  };
  
  const handleDelete = (id) => {
    setTodos(toDos.filter(todo => todo.id !== id));
  };
  
  return (
    <ChakraProvider>
      <main>
        <div>
          <Heading size='lg' htmlFor="Recipe">Add New Recipe</Heading>
          <Input onChange={handleChange} value={todo} type="text" name="Recipe" id="task" placeholder="Enter your task" />
          <Button variant="solid" colorScheme="teal" className='Add' onClick={handleAdd}>Add</Button>
        </div>
        <Box position='relative' padding='10'>
          <Divider />
          <AbsoluteCenter bg='#1d96fd' px='4'>
            Content
          </AbsoluteCenter>
        </Box>
        <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
          {toDos.map(todo => (
            <motion.div layoutId={todo.id} onClick={() => setSelectedId(todo.id)} key={todo.id}>
              <Card bg="#b3d1ff" margin="1em">
                <CardHeader>
                  <Heading size='md' color="">Recipe</Heading>
                </CardHeader>
                <CardBody>
                  <Text style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>{todo.todo}</Text>
                </CardBody>
                <CardFooter>
                  <Button variant="outline" colorScheme="teal" onClick={(e) => {
                    e.stopPropagation();
                    handleDelete(todo.id);
                  }}>Delete</Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </SimpleGrid>
        <AnimatePresence>
          {selectedId && (
            <motion.div layoutId={selectedId} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <Card bg="#ffeb3b" margin="1em">
                <CardHeader>
                  <Heading size='md' color="">Expanded Recipe</Heading>
                </CardHeader>
                <CardBody>
                  <Text>{toDos.find(todo => todo.id === selectedId).todo}</Text>
                </CardBody>
                <CardFooter>
                  <Button variant="solid" colorScheme="teal" onClick={() => setSelectedId(null)}>Close</Button>
                </CardFooter>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </ChakraProvider>
  );
}

export default App;
