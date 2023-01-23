import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom'
import { AppShell, Header  } from '@mantine/core';
import { NavbarP } from './NabvarP';
import  InputSearchP  from './InputSerchP';
import LightDarkModeButtonP from './LightDarckModeButtonP';
import NameP from './NameP';
import { IconBrandYoutube } from '@tabler/icons';

function AppShellP() {
  return (
    <Router>
       <AppShell
            header={
              <Header height={80} p="xs"
            >
                  <div  style={{ display: 'flex', justifyContent:"space-around",
                  alignItems: "center" }}>
                   
                    <NameP />
                    <InputSearchP />
                    <IconBrandYoutube size={40} />
                    <LightDarkModeButtonP />
                    
                  </div>
              </Header>
            }
          >
              <NavbarP/>
              
          <Routes>

       
          </Routes>

       </AppShell>
    </Router>
  );
}

export default AppShellP;