import { Button } from '@/components/ui/button'
import posterBackground from '../../../public/poster-background.png';

const BackgroundBanner = () => {
  return (
<div className="bg-white">
      <div className='w-max mx-auto' >
        <div className='w-full h-1/3' style={{ backgroundImage: `url(${posterBackground})` }} >
          <div className='pt-3 pb-5 ml-20'>
            <h1 className='font-medium'>The community for mothers</h1>
            <p className='font-light'>Make being a mother fun again!</p>
            <p className='font-light'>Learn, practice and have fun</p>
            <p className='font-light'>We build a community, you wanna be part of </p>
            <Button className="mr-2 mt-2">Subscribe</Button>
            <Button variant="outline">Learn more</Button>
          </div>
        </div>

      <div className="rounded-2xl bg-indigo-800 ml-2 mr-2 w-full">
        <h1 className='pl-5 pb-3 pt-3 font-semibold text-white'>What are we?</h1>
        <p className='text-base text-white pl-5 pr-5 italic'>A community for mothers Lorem ipsum dolor sit amet, consectetur 
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore 
          magna </p>
          <p className='text-base text-white pl-5 pr-5 italic'> aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
          laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor 
          in reprehenderit </p>
          <p className='text-base text-white pl-5 pr-5 italic'> in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur</p>
          <br></br>
      </div>
      </div>
    </div>
  )
}

export default BackgroundBanner
