
import './App.css'
import { Stack } from '@fluentui/react'
import {  Subtitle1, Title1 } from '@fluentui/react-components'
import './index.css';

function App() {

  return (
    <Stack
    className="w-full relative items-center justify-center text-center px-6"
    style={{
      height: 'calc(100vh - 68px)',
      backgroundImage: 'url("/fotok/slideshow1.png")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    }}
  >
    {/* Overlay */}
    <div className="absolute inset-0 bg-black bg-opacity-40 z-0"></div>
  
    {/* Content */}
    <div className="relative z-10 flex flex-col gap-10 items-center justify-center h-full max-w-3xl text-white px-4">
      <Title1 className="underline drop-shadow-lg text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-snug">
        The Website Is Under Construction
      </Title1>
  
      <Subtitle1 className="drop-shadow-md text-sm sm:text-base md:text-lg leading-relaxed">
       
      </Subtitle1>
    </div>
  </Stack>
  )
}

export default App
