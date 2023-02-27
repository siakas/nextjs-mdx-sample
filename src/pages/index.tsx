import type { NextPage } from 'next'
import { MoonIcon } from '@chakra-ui/icons'
import { Container, Flex, Heading, IconButton } from '@chakra-ui/react'

const Home: NextPage = () => {
  return (
    <Container maxW="container.lg">
      <Flex
        as="header"
        justifyContent="space-between"
        alignItems="center"
        py={10}
      >
        <Heading as="h1" fontSize="2xl">
          MdxBlogSample
        </Heading>
        <Flex alignItems="center" gap={6} fontWeight={400}>
          <a href="#">Blog</a>
          <a href="#">Tags</a>
          <a href="#">Projects</a>
          <a href="#">About</a>
          <IconButton
            aria-label="Toggle Dark Mode"
            icon={<MoonIcon />}
            bg="transparent"
            _hover={{ bg: 'transparent' }}
          />
        </Flex>
      </Flex>
      <Flex as="footer" alignItems="center" flexDirection="column">
        <p>Lorem Ipsum • © 2023 • Next.js MDX Blog</p>
        <p>MDX Nextjs Theme</p>
      </Flex>
    </Container>
  )
}

export default Home
