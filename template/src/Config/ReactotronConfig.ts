// ReactotronConfig.js
import Reactotron from 'reactotron-react-native';

if (__DEV__) {
  const { NativeModules } = require('react-native');
  const scriptURL = NativeModules.SourceCode?.scriptURL;
  let host = 'localhost';

  if (scriptURL) {
    // Ambil IP host bundler (misal: 192.168.x.x)
    host = scriptURL.split('://')[1].split(':')[0];
  }

  Reactotron
    .configure({
      name: 'MyApp',
      host,
    })
    .useReactNative()
    .connect();

  // Optional: supaya bisa log lewat console.tron.log()
  console.tron = Reactotron;

  Reactotron.clear();
  console.tron.log('✅ Reactotron connected on ' + host);
}
