import React, { useState } from 'react'
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ImageBackground,
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import image from '../../assets/music.jpg'

export default function HomeScreen() {
  const [text, setText] = useState('Artists, songs, or podcast')
  //   {
  //       text: 'Artists, songs or podcast'
  //   }
  console.log(text)
  return (
    <SafeAreaView style={styles.container}>
      <TextInput style={styles.input} onChangeText={setText} value={text} />
      <Text style={styles.text}>Browse All</Text>

      <View style={styles.parentCard}>
        <View>
          <View style={styles.card}>
            <ImageBackground
              source={image}
              resizeMode='cover'
              style={styles.img}
            >
              <View>
                <Text
                  style={{
                    color: 'white',
                    marginTop: 7,
                    marginLeft: 10,
                    fontWeight: 'bold',
                    fontSize: 16,
                  }}
                >
                  Podcasts
                </Text>
              </View>
            </ImageBackground>
          </View>
        </View>

        <View>
          <View style={styles.card}></View>
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  img: {
    flex: 1,
  },
  card: {
    height: 100,
    width: 190,
    backgroundColor: 'pink',
    borderRadius: 5,
  },
  parentCard: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  container: {
    flex: 1,
  },
  input: {
    height: 40,
    backgroundColor: 'white',
    borderRadius: 8,
    marginHorizontal: 10,
    paddingHorizontal: 40,
  },
  text: {
    color: 'white',
    marginHorizontal: 10,
    marginTop: 20,
    marginBottom: 15,
  },
})
