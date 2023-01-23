import { IconBrandSuperhuman, IconSum } from '@tabler/icons';
import { Button } from '@mantine/core';

function ButtonSumP() {
  return (
        <Button
        component="a"
        rel="noopener noreferrer"
        href="/#"
        leftIcon={<IconBrandSuperhuman size={18} />}
        styles={(theme) => ({
          root: {
            backgroundColor: theme.fn.variant({ variant: 'filled', color: theme.primaryColor })
             .background,
            border: 0,
            height: 42,
            paddingLeft: 20,
            paddingRight: 20,

            '&:hover': {
              backgroundColor: theme.fn.lighten(
                theme.fn.variant({ variant: 'filled', color: theme.primaryColor }).background!,
                0.1),
            },
          },

          leftIcon: {
            marginRight: 15,
          },
        })}
      >
        Trabajos Nuevos
      </Button>
   )
}

export default ButtonSumP;