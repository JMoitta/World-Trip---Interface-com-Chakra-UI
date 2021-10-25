import { ChevronLeftIcon } from "@chakra-ui/icons";
import { Box, Center, Container, IconButton, useBreakpointValue } from "@chakra-ui/react";
import { ReactNode } from "react";
import LogoSvg from '../../../public/assets/logo.svg'

interface HeaderProps {
  children?: ReactNode;
}

export function Header({ children }: HeaderProps) {
  const height = useBreakpointValue({ base: 20, md: 45.92 })
  return (
    <Container
      as="header"
      maxW="container.xl"
    >
      <Box float="left" h={["50px", "100px"]} >
        {children}
      </Box>
      <Center h={["50px", "100px"]}>
        <LogoSvg height={height} />
      </Center>
    </Container>

  )
}