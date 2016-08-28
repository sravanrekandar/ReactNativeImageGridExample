import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Dimensions,
  ScrollView,
} from 'react-native'
import { Actions } from 'react-native-router-flux'

import _ from 'lodash'
import ImageBox from './ImageBox'
import ImageData from './ImageData'
import TouchableImage from './TouchableImage'

const { width, height } = Dimensions.get('window')
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    paddingTop: 70,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
})

export default class ImageGrid extends Component {
  static getInitialState() {
    return {
      currentScreenWidth: width,
      currentScreenHeight: height,
      imagesPerRow: Math.floor(width / ImageBox.width),
    }
  }
  constructor(props) {
    super(props)
    this.calculatedSize = this.calculatedSize.bind(this)
    this.renderImagesIngroups = this.renderImagesIngroups.bind(this)
    this.onPressImage = this.onPressImage.bind(this)

    this.state = ImageGrid.getInitialState()
  }
  onPressImage(id) {
    Actions.imageDetails({
      id,
    })
  }
  calculatedSize() {
    const size = (this.state.currentScreenWidth / this.state.imagesPerRow)
    return { width: size, height: size }
  }

  renderImagesIngroups(imagesPerRow) {
    const imageSize = this.calculatedSize()
    const images = _.chunk(ImageData, imagesPerRow).map((imgObj, idx) => (
      <View key={`row-${idx}`} style={styles.row}>
        {
          imgObj.map((img, i) => (
            <TouchableImage
              key={i}
              imageSize={imageSize}
              {...img}
              onPress={this.onPressImage}
            />
          ))
        }
      </View>
    ))
    return (
      <View>
        {images}
      </View>
    )
  }
  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <View >
            {
                this.renderImagesIngroups(this.state.imagesPerRow)
            }
          </View>
        </ScrollView>
      </View>
    )
  }
}
