import { SafeAreaView, ScrollView } from 'react-native';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Illustration from './components/Illustration';
import Plans from './components/Plans';

export default function Index() {
  return (
    <SafeAreaView className="flex-1 bg-c_bg_l dark:bg-c_black">
      <ScrollView contentContainerClassName="flex-grow">
        <Hero />
        <Illustration />
        <Plans />
        <Footer />
      </ScrollView>
    </SafeAreaView>
  );
}
