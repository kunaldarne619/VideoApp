import { Box ,Container,Heading,Stack, Text } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import React from 'react'
import {Carousel} from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import img1 from '../assets/1.jpg'
import img2 from '../assets/2.jpg'
import img3 from '../assets/3.jpg'
import img4 from '../assets/4.jpg'
import img5 from '../assets/5.png'
const headingOptions={
  pos:'absolute',
  left:'50%',
  top:'50%',
  transform:'translate(-50%,-50%)',
  textTransform:'uppercase',
  p:'4',
  size:'4xl'
}
const Home = () => {

  return (
    <Box>
      <MyCarousel/>

      <Container maxW={'container.xl'} minH={'100vh'} p='16'>
      <Heading textTransform={'uppercase'} py='2' w={'fit-content'} borderBottom={'2px solid  '} m={'auto'}>Services

      </Heading>

      <Stack h='full' p='4' alignItems={'center'}
      direction={['column' ,'row']}
      >
        <Image src={img5}   h={['40','400']}filter={'hue-rotat(-130deg)'}/>
        <Text letterSpacing={'widest'} lineHeight={'190% '} p={['4','16']} textAlign='center'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam repudiandae, in quibusdam quam dicta veritatis odio magni nisi odit nobis inventore quod facilis alias nesciunt corporis. Veritatis ullam impedit laborum est iure saepe totam assumenda perspiciatis deserunt nobis officiis numquam pariatur et omnis consectetur accusantium nulla incidunt quas illum, eligendi odit accusamus voluptates vero provident. Officia nihil fugit ipsum maxime ut provident, quibusdam natus totam recusandae nostrum laboriosam vitae aspernatur rem omnis, modi consequatur aut eum ratione? Et, obcaecati Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit, rerum corporis nobis impedit alias doloribus consectetur ut cum eveniet ratione, ipsam dolor quod repellendus quas velit provident? Impedit officiis, assumenda similique nisi recusandae adipisci iure nihil dolorum soluta voluptate quia minima maiores placeat beatae, exercitationem temporibus unde, cum officia sint?
        </Text>


      </Stack>
      </Container>
    </Box>
  )
}

const MyCarousel =()=>(
  <Carousel autoPlay infiniteLoop interval={1000} showArrows={false} showStatus={false} showThumbs={false} >
    <Box w={'full'} h='100vh'>
  <Image src={img1} w={['full','100%']}/>
  <Heading bgColor={'blackAlpha.600'} color='white' {...headingOptions}>
    Watch the Future
  </Heading>
    </Box>
    <Box w={'full'} h='100vh'>
  <Image src={img2} w={['full','100%']}/>
  <Heading bgColor={'whiteAlpha.600'} color='black'{...headingOptions}>
    Future is Gaming
  </Heading>
    </Box>
    <Box w={'full'} h='100vh'>
  <Image src={img3} w={['full','100%']}/>
  <Heading bgColor={'whiteAlpha.600'} color='black'{...headingOptions}>
    Gaming on Console
  </Heading>
    </Box>
    <Box w={'full'} h='100vh'>
  <Image src={img4} w={['full','100%']}/>
  <Heading bgColor={'whiteAlpha.600'} color='black'{...headingOptions}>
    Night Life is Cool
  </Heading>
    </Box>
  </Carousel>
)

export default Home