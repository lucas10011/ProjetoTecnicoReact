/** @format */
import { Navigation } from "react-native-navigation";
import Loja from './Loja';
import Home from './Home';
import Livro from './src/components/livro';

Navigation.registerComponent(`Loja`, () => Loja);
Navigation.registerComponent(`Livro`, () => Livro);
Navigation.registerComponent(`Home`, () => Home);



Navigation.setRoot({
    root: {
      bottomTabs: {
        options: {
          bottomTabs: {
              backgroundColor: 'black',
              animate: false,
          }
      },
        id: 'BottomTabsId',
        children: [
          {
            stack: {
              children: [
                {
                  component: {
                    name: 'Home',
                    options: {
                      topBar: {
                        backButton: {
                          title: 'Back',
                        },
                        title: {
                          text: 'Inicio',
                          alignment: 'center', // Center title
                          color: 'white'
                        },
                        background:{
                          color: 'black',
                        }
                      },
                      bottomTab: {
                        fontSize: 12,
                        text: 'Home',
                        icon: require('./src/images/home.png'),
                        selectedIcon: require('./src/images/home.png')
                      },
                    },
                  },
                }
              ]
            }
          },
          {
            stack: {
              children: [
                {
                  component: {
                    name: 'Home',
                    options: {
                      topBar: {
                        title: {
                          text: 'Favoritos',
                          alignment: 'center', // Center title
                          color: 'white',
                        },
                        background:{
                          color: 'black',
                        }

                      },
                      bottomTab: {
                        text: 'Favoritos',
                        fontSize: 12,
                        icon: require('./src/images/like.png'),
                        selectedIcon: require('./src/images/like.png')
                      }
                    }
                  },
                }
              ],
            },
          },
          {
            stack: {
              children: [
                {
                  component: {
                    name: 'Loja',
                    options: {
                      topBar: {
                        title: {
                          text: 'Loja',
                          alignment: 'center', // Center title
                          color: 'white',
                        },
                        background:{
                          color: 'black',
                        }

                      },
                      bottomTab: {
                        text: 'Loja',
                        fontSize: 12,
                        icon: require('./src/images/store.png'),
                        selectedIcon: require('./src/images/store.png')
                      }
                    }
                  },
                }
              ],
            },
          },
          {
            stack: {
              children: [
                {
                  component: {
                    name: 'Home',
                    options: {
                      topBar: {
                        title: {
                          text: 'Download',
                          alignment: 'center', // Center title
                          color: 'white',
                        },
                        background:{
                          color: 'black',
                        }

                      },
                      bottomTab: {
                        text: 'Download',
                        fontSize: 12,
                        icon: require('./src/images/download.png'),
                        selectedIcon: require('./src/images/download.png')
                      }
                    }
                  },
                }
              ],
            },
          },
        ],
      },
    }
  });


