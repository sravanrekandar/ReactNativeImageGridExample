import React, { PropTypes } from 'react'
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView,
} from 'react-native'
import ImageData from './ImageData'

const { width } = Dimensions.get('window')
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    paddingTop: 70,
    flexDirection: 'column',
  },
  image: {
    width: width - 30,
    height: width - 30,
    padding: 5,
    borderWidth: 1,
    borderColor: '#cccccc',
  },
  title: {
    fontWeight: 'bold',
    color: '#607eef',
    textAlign: 'center',
    fontSize: 30,
    padding: 10,
  },
  desc: {
    textAlign: 'center',
  },
})

export default function ImageDetails(props) {
  const image = ImageData.find((el) => (el.id === props.id))
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <View>
          <Image source={image.uri} style={styles.image} />
        </View>
        <View>
          <Text style={styles.title}>
            {image.title}
          </Text>
          <Text style={styles.desc}>
              {image.desc}
          </Text>
        </View>
      </View>
    </ScrollView>
  )
}

ImageDetails.propTypes = {
  id: PropTypes.string,
}
