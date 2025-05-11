import { useColorScheme } from 'nativewind';
import { useEffect, useRef, useState } from 'react';
import { Animated, Image, Platform, Pressable } from 'react-native';

const sunIcon = require('@/assets/images/icon-sun.png');
const moonIcon = require('@/assets/images/icon-moon.png');

export default function ThemeToggle() {
  const { colorScheme, setColorScheme } = useColorScheme();
  const [loaded, setLoaded] = useState(false);
  const opacity = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    if (Platform.OS === 'web') {
      const saved = localStorage.getItem('theme');
      if (saved === 'dark' || saved === 'light') {
        setColorScheme(saved);
      }
    }
    setLoaded(true);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const fadeThemeToggle = () => {
    Animated.sequence([
      Animated.timing(opacity, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.timing(opacity, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const toggleTheme = () => {
    fadeThemeToggle();
    const newScheme = colorScheme === 'dark' ? 'light' : 'dark';
    setColorScheme(newScheme);
    if (Platform.OS === 'web') {
      localStorage.setItem('theme', newScheme);
    }
  };

  if (!loaded) return null;

  const icon = colorScheme === 'dark' ? sunIcon : moonIcon;

  return (
    <Animated.View style={{ opacity }} className="absolute top-4 right-10">
      <Pressable onPress={toggleTheme} className="p-2 md:mr-10">
        <Image source={icon} className=" w-8 h-8 mr-4 md:mr-24" resizeMode="contain" />
      </Pressable>
    </Animated.View>
  );
}
