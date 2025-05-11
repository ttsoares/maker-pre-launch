import React from 'react'
import { Text, View } from 'react-native'

import IconCheck from '@/assets/images/icon-check'
import IconFree from '@/assets/images/icon-free'
import IconPaid from '@/assets/images/icon-paid'

const Plans = () => {
  return (
    <View className='bg-c_bg_l dark:bg-c_black flex justify-center items-center w-full mt-32 md:mt-20 lg:mt-40 lg:mb-48 '>
      <View className='w-fit lg:w-[40%] flex flex-col justify-center items-center  '>
        <Text className='font-bold text-[24px] lg:text-size3 font-Manrope text-c_black dark:text-white my-6'>
          Our pricing plans
        </Text>
        <Text className='text-center mx-3 md:mx-0 text-size5 text-c_black dark:text-c_grey font-Manrope md:max-w-[600px]'>
          We only make money when our creators make money. Our plans are always affordable, and it’s completely free to get started.
        </Text>
      </View>
      <View className='mt-20 w-[80%] flex sm:flex-col lg:flex-row justify-center items-center rounded-xl gap-8'>
        {/* Free */}
        <View className='w-full md:w-[70%] lg:w-1/2 bg-c_blue_d relative py-5 rounded-lg'>
          <IconFree className='absolute left-10 -top-7' />
          <View className='flex flex-col justify-start pl-5'>
            <Text className='font-bold text-size4 font-Manrope text-white my-6 mx-2'>Dip your toe</Text>
            <Text className='text-size5 text-white font-Manrope mx-2'>
              Just getting started? No problem at all! Our free plan will take you a long way.
            </Text>
            <Text className='font-bold text-size3 font-Manrope text-white my-6 mx-2'>Free</Text>
            <View className='flex flex-row justify-start items-center my-1'>
              <IconCheck fill="#3EDFE5" className='mr-4' />
              <Text className='text-size5 font-Manrope  text-white'>Unlimited products</Text>
            </View>
            <View className='flex flex-row justify-start items-center my-1'>
              <IconCheck fill="#3EDFE5" className='mr-4 ' />
              <Text className='text-size5 font-Manrope  text-white'>Basic analytics</Text>
            </View>
            <View className='flex flex-row justify-start items-center my-1'>
              <IconCheck fill="#3EDFE5" className='mr-4 ' />
              <Text className='text-size5 font-Manrope  text-white'>Limited marketplace exposure</Text>
            </View>
            <View className='flex flex-row justify-start items-center my-1'>
              <IconCheck fill="#3EDFE5" className='mr-4 ' />
              <Text className='text-size5 font-Manrope  text-white'>10% fee per transaction</Text>
            </View>
          </View>
        </View>
        {/* 25/month */}
        <View className='w-full md:w-[70%] lg:w-1/2 bg-c_blue_l relative py-8 rounded-lg mt-10 lg:mt-0'>
          <IconPaid className='absolute left-10 -top-7' />
          <View className='flex flex-col justify-start pl-5'>
            <Text className='font-bold text-size4 font-Manrope text-black my-6'>Drive right in</Text>
            <Text className='text-size5 text-black font-Manrope'>
              Ready for the big time? Our paid plan will help you take your business to the next level.
            </Text>
            <View className='flex flex-row justify-start items-center my-1'>
              <Text className='font-bold text-size3 font-Manrope text-black my-6'>
                $25.00
              </Text>
              <Text className='ml-2 text-size5 text-black font-extralight'>/month</Text>
            </View>
            <View className='flex flex-row justify-start items-center my-1'>
              <IconCheck fill="#000" className='mr-4' />
              <Text className='text-size5 text-black font-Manrope'>Custom domain</Text>
            </View>
            <View className='flex flex-row justify-start items-center my-1'>
              <IconCheck fill="#000" className='mr-4 ' />
              <Text className='text-size5 text-black font-Manrope'>Advanced analytics and reports</Text>
            </View>
            <View className='flex flex-row justify-start items-center my-1'>
              <IconCheck fill="#000" className='mr-4 ' />
              <Text className='text-size5 text-black font-Manrope'>High marketplace visibility</Text>
            </View>
            <View className='flex flex-row justify-start items-center my-1'>
              <IconCheck fill="#000" className='mr-4 ' />
              <Text className='text-size5 text-black font-Manrope'>5% fee per transaction</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  )
}

export default Plans