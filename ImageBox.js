import React, { PropTypes } from 'react'
import {
  View,
  Text,
  Image,
  StyleSheet,
} from 'react-native'

const styles = StyleSheet.create({
  imageBox: {
    flexDirection: 'column',
    alignItems: 'center',
    margin: 2,
    padding: 4,
    backgroundColor: '#cfcfFF',
    width: 100,
    height: 120,
  },
  title: {
    textAlign: 'center',
  },
})

export default function ImageBox(props) {
  return (
    <View style={[styles.imageBox, { height: props.imageSize.height + 40 }]}>
      <Image
        source={props.source}
        style={props.imageSize}
      />
      <Text style={styles.title}>{props.text}</Text>
    </View>
  )
}

ImageBox.propTypes = {
  source: PropTypes.oneOf(PropTypes.string, PropTypes.number),
  imageSize: PropTypes.object,
  text: PropTypes.oneOf(PropTypes.string, PropTypes.number),
}
ImageBox.width = 110
