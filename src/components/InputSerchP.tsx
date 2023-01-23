
import { TextInput, Code } from '@mantine/core';
import {  IconSearch } from '@tabler/icons';

function InputSearchP() {

    return (
      <div>
        <TextInput
            placeholder="Buscar"
            size="xl"
            icon={<IconSearch size={22} stroke={1.5} />}
            rightSectionWidth={70}
            rightSection={<Code >Ctrl + K</Code>}
            styles={(theme) => ({
              icon: {
                  color: theme.colors.blue[7]    
              }
            })}
            mb="sm"
          />
     </div>
    );
  }
  
  export default InputSearchP;