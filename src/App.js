import './App.css';
import { Input, FormControl, FormLabel, FormHelperText, FormErrorMessage, InputLeftElement, InputRightElement, InputGroup, Textarea } from '@chakra-ui/react';
import { PhoneIcon, LockIcon } from '@chakra-ui/icons';

function App() {
  return (
    <div className="App">
      <div className='main'>

        <div className='container'>
          <h2>Inputs</h2>
          <div className='row'>
            <FormControl>
              <p>{`<Input />`}</p>
              <FormLabel>Label</FormLabel>
              <Input placeholder='Placeholder' type='text'></Input>
            </FormControl>
            <FormControl>
              <p>{`&hover`}</p>
              <FormLabel color='black.600'>Label</FormLabel>
              <Input borderColor='black.600' placeholder='Placeholder' type='text'></Input>
            </FormControl>
            <FormControl>
              <p>{`&focus`}</p>
              <FormLabel color='blue.500'>Label</FormLabel>
              <Input borderColor='blue.500' placeholder='Placeholder' type='text'></Input>
            </FormControl>
          </div>

          <div className='row'>
            <FormControl>
              <p>{`<Input error />`}</p>
              <FormLabel>Label</FormLabel>
              <Input borderColor='red.500' placeholder='Placeholder' type='text'></Input>
            </FormControl>
            <FormControl>
              <p>{`&hover`}</p>
              <FormLabel color='black.600'>Label</FormLabel>
              <Input borderColor='black.600' placeholder='Placeholder' type='text'></Input>
            </FormControl>
            <FormControl>
              <p>{`&focus`}</p>
              <FormLabel color='red.500'>Label</FormLabel>
              <Input borderColor='red.500' placeholder='Placeholder' type='text'></Input>
            </FormControl>
          </div>
          <div className='row row-special'>
            <FormControl>
              <p>{`<Input disabled />`}</p>
              <FormLabel>Label</FormLabel>
              <Input backgroundColor='gray.200' width='70' isDisabled placeholder='Placeholder' type='text'></Input>
            </FormControl>
          </div>

          <div className='row'>
            <FormControl>
              <p>{`<Input helperText="Some interesting text" />`}</p>
              <FormLabel>Label</FormLabel>
              <Input placeholder='Placeholder' type='text'></Input>
              <FormHelperText>Some interesting text</FormHelperText>
            </FormControl>
            <FormControl isInvalid>
              <p>{`<Input helperText="Some interesting text" error />`}</p>
              <FormLabel color='red.500'>Label</FormLabel>
              <Input borderColor='black.600' placeholder='Placeholder' type='text'></Input>
              <FormErrorMessage>Some interesting text</FormErrorMessage>
            </FormControl>
          </div>

          <div className='row'>
            <FormControl>
              <p>{`<Input startIcon />`}</p>
              <FormLabel>Label</FormLabel>
              <InputGroup>
                <InputLeftElement
                  pointerEvents='none'
                  children={<PhoneIcon color='gray.300' />}
                />
                <Input type='tel' placeholder='Phone number' />
              </InputGroup>
            </FormControl>

            <FormControl>
              <p>{`<Input endIcon />`}</p>
              <FormLabel>Label</FormLabel>
              <InputGroup>
                <InputRightElement
                  pointerEvents='none'
                  children={<LockIcon color='gray.300' />}
                />
                <Input type='tel' placeholder='Phone number' />
              </InputGroup>
            </FormControl>
          </div>

          <div className='row'>
            <FormControl>
              <p>{`<Input value="text" />`}</p>
              <FormLabel>Label</FormLabel>
              <InputGroup>
                <Input value='Text' placeholder='Placeholder' />
              </InputGroup>
            </FormControl>
          </div>

          <div className='row'>
            <FormControl>
              <p>{`<Input size="sm" />`}</p>
              <FormLabel>Label</FormLabel>
              <InputGroup>
                <Input size='sm' placeholder='Placeholder' />
              </InputGroup>
            </FormControl>

            <FormControl>
              <p>{`<Input size="md" />`}</p>
              <FormLabel>Label</FormLabel>
              <InputGroup>
                <Input size='md' placeholder='Placeholder' />
              </InputGroup>
            </FormControl>
          </div>

          <div className='row'>
            <FormControl>
              <p>{`<Input fullWith />`}</p>
              <FormLabel>Label</FormLabel>
              <InputGroup>
                <Input value='Text' placeholder='Placeholder' />
              </InputGroup>
            </FormControl>
          </div>

          <div className='row row-special'>
            <FormControl>
              <p>{`<Input multiline row="4" />`}</p>
              <FormLabel>Label</FormLabel>
              <InputGroup>
                <Textarea width='70' placeholder='Placeholder' />
              </InputGroup>
            </FormControl>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
