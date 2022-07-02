import Reactotron from 'reactotron-react-native';

const reactotron = Reactotron.configure({
  name: 'Axtone 🔥',
  host: '192.168.43.87',
}).useReactNative();

if (reactotron) {
  reactotron.connect();
  reactotron.clear();
}
export default reactotron;
console.tron = reactotron;
