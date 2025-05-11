import { Image, Text, View } from 'react-native';
import ThemeToggle from './ThemeToggle';

import BgHeroSquiggle from '@/assets/images/bg-hero-squiggle';
import IconScroll from '@/assets/images/icon-scroll';
import IllustrationHeroLeft from '@/assets/images/illustration-hero-left';
import IllustrationHeroRight from '@/assets/images/illustration-hero-right';
import Logo from '@/assets/images/logo';

const Hero = () => {
  return (
    <View className="flex items-center bg-c_bg_l dark:bg-c_black pt-10 md:mb-72">
      <View className="flex-row items-center justify-between w-full px-4">
        <Logo className=' dark:bg-c_black px-6 py-4 min-w-44 h-16 rounded-3xl mt-2 invert dark:invert-0 md:ml-32' />
        <ThemeToggle />
      </View>
      <View className='flex flex-col items-center justify-center w-full lg:px-4 relative'>
        <Image source={require('@/assets/images/illustration-hero-mobile.png')} className='md:hidden invert dark:invert-0 -top-20 -left-50 absolute scale-50' />
        <IllustrationHeroLeft className="invert dark:invert-0 absolute top-24 md:-left-60 lg:-left-16 sm:hidden md:block" />
        <BgHeroSquiggle className="invert dark:invert-0 absolute top-24 lg:left-1/3 md:scale-75 lg:scale-100 sm:hidden md:block" />
        <IllustrationHeroRight className="invert dark:invert-0 absolute top-24 md:-right-60 lg:-right-16 sm:hidden md:block" />

        <View className='mt-72 md:mt-40 flex flex-col items-center justify-center w-full lg:px-4 relative md:w-[65%] lg:w-[50%]'>
          <Text className="font-bold  text-center text-size3 lg:text-size1 font-Manrope text-c_black dark:text-white mb-4 mt-10 md:mt-0 mx-10 md:mx-0">
            Get paid for the work you <span className="text-c_red dark:text-c_blue_l">love</span> to do.
          </Text>
          <Text className='text-size5 font-Manrope text-c_black dark:text-c_grey mb-4 md:text-center text-justify font-bold mt-6 mx-4 md:mx-0'>
            The 9-5 grind is so last century. We believe in living life on your own terms. Whether you’re looking to escape the rat race or set up a side hustle, we’ve got you covered.
          </Text>
          <IconScroll className='invert dark:invert-0 mx-auto mt-10 mb-32 md:mb-0 md:mt-20 hover:animate-bounce hover:cursor-pointer' />
        </View>
      </View>
    </View>
  )
}

export default Hero