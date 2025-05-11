import { Text, View } from 'react-native';

import IllustrationFinancialFreedom from '@/assets/images/illustration-financial-freedom';
import IllustrationLifestyle from '@/assets/images/illustration-lifestyle';
import IllustrationPassions from '@/assets/images/illustration-passions';
import IllustrationWorkAnywhere from '@/assets/images/illustration-work-anywhere';

const Illustration = () => {
  return (
    <View className="flex flex-col space-y-10 md:space-y-0 gap-10 items-center bg-c_bg_l dark:bg-c_black mx-auto
    lg:flex-row md:justify-center">
      {/* Indulge */}
      <View className='w-fit flex items-center md:flex-row lg:flex-col md:space-x-8 md:ml-24 lg:ml-0'>
        <View className='w-36 h-36 bg-c_blue_d rounded-[35%] flex items-center justify-center lg:-mt-20'>
          <IllustrationPassions />
        </View>
        <View className='mx-3 md:mx-0'>
          <Text className='font-bold text-size4 font-Manrope text-c_black dark:text-white my-6 text-center md:text-left'>
            Indulge your passions
          </Text>
          <Text className='md:w-[400px] lg:w-[260px] text-size5 text-c_black dark:text-white font-Manrope text-center md:text-left'>
            Your passions shouldn&apos;t be just for the weekend. Earn a living doing what you love.
          </Text>
        </View>
      </View>
      {/* Gain */}
      <View className='w-fit flex items-center md:flex-row lg:flex-col md:space-x-8 md:-ml-16 lg:ml-0'>
        <View className='w-36 h-36 bg-c_blue_d rounded-[35%] flex items-center justify-center'>
          <IllustrationFinancialFreedom />
        </View>
        <View className='mx-3 md:mx-0'>
          <Text className='font-bold text-size4 font-Manrope text-c_black dark:text-white my-6 text-center md:text-left'>
            Gain financial freedom
          </Text>
          <Text className='md:w-[400px] lg:w-[260px] text-size5 text-c_black dark:text-white font-Manrope text-center md:text-left'>
            Start making money work for you. There’s nothing quite like earning while you sleep.
          </Text>
        </View>
      </View>
      {/* Choose */}
      <View className='w-fit flex items-center md:flex-row lg:flex-col md:space-x-8 md:ml-24 lg:ml-0'>
        <View className='w-36 h-36 bg-c_blue_d rounded-[35%] flex items-center justify-center lg:-mt-20'>
          <IllustrationLifestyle />
        </View>
        <View className='mx-3 md:mx-0'>
          <Text className='font-bold text-size4 font-Manrope text-c_black dark:text-white my-6 text-center md:text-left'>
            Choose your lifestyle
          </Text>
          <Text className='md:w-[400px] lg:w-[260px] text-size5 text-c_black dark:text-white font-Manrope text-center md:text-left'>
            Own your daily schedule. Fancy a lie-in? Go for it! Take charge of your week.
          </Text>
        </View>
      </View>
      {/* Work */}
      <View className='w-fit flex items-center md:flex-row lg:flex-col md:space-x-8 md:-ml-16 lg:ml-0'>
        <View className='w-36 h-36 bg-c_blue_d rounded-[35%] flex items-center justify-center'>
          <IllustrationWorkAnywhere />
        </View>
        <View className='mx-3 md:mx-0'>
          <Text className='font-bold text-size4 font-Manrope text-c_black dark:text-white my-6 text-center md:text-left'>
            Work from anywhere
          </Text>
          <Text className='md:w-[400px] lg:w-[260px] text-size5 text-c_black dark:text-white font-Manrope text-center md:text-left'>
            Selling online means not being pinned down. Want to work AND travel? Go for it!
          </Text>
        </View>
      </View>
    </View>
  )
}

export default Illustration