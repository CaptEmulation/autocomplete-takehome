import React, { FunctionComponent, useCallback } from 'react'
import { Box, Container } from '@material-ui/core'
import Text from 'app/components/Text'
import { Button } from '@material-ui/core'
import { useRouter } from 'next/router'

const Content: FunctionComponent<{ value: string }> = ({ value }) => {
  const router = useRouter()
  const onClick = useCallback(() => router.back(), [router])
  return (
    <Container>
      <Button onClick={onClick}>Back</Button>
      <Box bgcolor="Gainsboro">
        <Text value={value} />
      </Box>
    </Container>
  )
}

export default Content
