import { Title } from "@mantine/core";

function NameP() {
    return (
      <div>
        <Title order={1} underline transform="capitalize" variant="gradient"
          gradient={{ from: "indigo", to: "blue", deg: 138 }}
          sx={{ fontFamily: 'Greycliff CF, sans-serif' }}
          >
          CARRIZO
        </Title>
      </div>
    );
  }
  
  export default NameP;