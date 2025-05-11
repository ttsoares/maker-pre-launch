import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { ImageBackground, Keyboard, Modal, Text, TextInput, TouchableOpacity, View } from 'react-native';

type FormData = {
  email: string;
};

const squeegle = require('../../assets/images/bg-footer-squiggle.svg');

const Footer = () => {

  function AlertModal({ visible, title, message, onClose }: { visible: boolean; title: string; message: string; onClose: () => void }) {
    return (
      <Modal visible={visible} transparent>
        <View className="flex-1 justify-end items-center bg-c_black/50 dark:bg-c_bg_l/50">
          <View className="bg-c_bg_l dark:bg-c_black p-4 rounded-lg w-80">
            <Text className="text-lg font-bold text-c_black dark:text-white font-Manrope">{title}</Text>
            <Text className="my-4 text-c_black dark:text-white font-Manrope">{message}</Text>
            <TouchableOpacity
              onPress={onClose}
              className="bg-blue-500 py-2 rounded"
            >
              <Text className="text-c_black dark:text-white font-Manrope text-center">OK</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    );
  }

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
    clearErrors
  } = useForm<FormData>({
    defaultValues: {
      email: ''
    }
  });

  const [showAlert, setShowAlert] = useState(false);

  const onSubmit = (data: FormData) => {
    console.log('Submitted email:', data.email);
    Keyboard.dismiss();
    setShowAlert(true);
  };

  const onError = () => {
    setTimeout(() => {
      clearErrors('email');
    }, 10000);
  };

  return (
    <>
      <ImageBackground
        source={squeegle}
        resizeMode='contain'
        className='flex justify-center items-center w-full invert dark:invert-0 '
        style={{ aspectRatio: 7.3, width: '100%' }}
      >
        <Text className="font-bold text-white dark:text-white font-Manrope text-size4 md:text-[24px] text-center mb-4 md:mb-10">
          Get notified when we launch
        </Text>
        <View className="lg:p-4 w-[70%] lg:w-[35%] flex flex-col items-center md:flex-row">
          <View className="flex flex-col md:flex-row items-center  gap-6 w-full">
            <Controller
              control={control}
              name="email"
              rules={{
                required: 'Oops! Please add your email',
                pattern: {
                  value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i,
                  message: 'Oops! That doesn’t look like an email address',
                },
              }}
              render={({ field: { onChange, value } }) => (
                <TextInput
                  className={`flex w-full px-4 py-3 rounded-full font-sans text-white border-2 border-c_blue_d
                    ${errors.email
                      ? 'border border-c_red bg-c_blue_d'
                      : 'bg-c_blue_d hover:border-c_blue_l'
                    }`}
                  placeholder="Email address"
                  placeholderTextColor="#94a3b8"
                  keyboardType="email-address"
                  returnKeyType="done"
                  autoCapitalize="none"
                  value={value}
                  onChangeText={onChange}
                  onSubmitEditing={handleSubmit(onSubmit, onError)}
                />
              )}
            />

            {errors.email && (
              <Text className="text-c_red md:mt-2 text-size5 font-Manrope">
                {errors.email.message}
              </Text>
            )}

            <TouchableOpacity
              onPress={handleSubmit(onSubmit)}
              className="border bg-[#c1201a] dark:border-c_blue_l dark:bg-c_blue_l focus:bg-c_black  hover:bg-c_black px-4 py-2 rounded-full group w-full md:w-fit mb-10 md:mb-0 "
            >
              <Text className="text-black text-center text-size5 font-bold font-Manrope group-focus:text-white group-hover:text-white group-hover:cursor-pointer">
                Get notified
              </Text>
            </TouchableOpacity>
          </View>


        </View>
      </ImageBackground>

      <AlertModal
        visible={showAlert}
        title="Submitted!"
        message="Your email has been submitted."
        onClose={() => {
          setShowAlert(false);
          reset({ email: '' });
        }}
      />
    </>
  )
}

export default Footer