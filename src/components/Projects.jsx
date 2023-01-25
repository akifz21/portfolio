import { Card, CardHeader, SimpleGrid, Stack, Icon, Heading, Text, useBreakpointValue } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { GoMarkGithub } from 'react-icons/go'
import { AiFillStar } from 'react-icons/ai'

function Projects() {

  const [repos, setRepos] = useState([])


  useEffect(() => {
    fetch("https://api.github.com/users/akifz21/repos?sort=created")
      .then((res) => res.json())
      .then((json) => setRepos(json))
  }, [])

  return (
    <>
      <Stack p={10} id={'projects'} justifyContent={'center'} minH={'100vh'} align={'center'}>
        <Heading fontSize={'5xl'} m={4}>
          <Text
            as={'span'}
            position={'relative'}
            _after={{
              content: "''",
              width: 'full',
              height: useBreakpointValue({ base: '20%', md: '20%' }),
              position: 'absolute',
              bottom: 1,
              left: 0,
              bg: 'purple.500',
              zIndex: -1,
            }}>
            My Projects
          </Text>
        </Heading>
        <SimpleGrid spacing={{ base: '10', md: '10' }} columns={{ base: 1, md: 3 }}>
          {
            repos.map((repo) => (
              <Card as={'a'} href={repo.html_url} target={'_blank'} shadow={'md'} key={repo.id} p={3} align={'center'} direction={'row'}>
                <Icon fontSize={'4xl'} mr={3} ml={3} as={GoMarkGithub} />
                <Stack direction={'column'}>
                  <Heading size={'md'}>
                    {repo.name}
                  </Heading>
                  <Text>
                    {repo.description}
                  </Text>
                  <Text justifyContent={'center'} fontSize={'lg'}>
                    <Icon as={AiFillStar} /> {repo.watchers}
                  </Text>
                </Stack>

              </Card>
            ))
          }
        </SimpleGrid>
      </Stack>
    </>
  )
}

export default Projects