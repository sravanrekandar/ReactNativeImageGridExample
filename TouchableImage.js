import React, { PropTypes, Component } from 'react'
import {
  View,
  TouchableHighlight,
} from 'react-native'
import ImageBox from './ImageBox'

export default class TouchableImage extends Component {
  constructor(props) {
    super(props)
    this.onPress = this.onPress.bind(this)
  }
  onPress() {
    this.props.onPress(this.props.id)
  }
  render() {
    return (
      <TouchableHighlight
        onPress={this.onPress}
      >
        <View>
          <ImageBox
            source={this.props.uri}
            imageSize={this.props.imageSize}
            text={this.props.title}
          />
        </View>
      </TouchableHighlight>
    )
  }
}

TouchableImage.propTypes = {
  id: PropTypes.string,
  uri: PropTypes.number,
  title: PropTypes.string,
  imageSize: PropTypes.object,
  onPress: PropTypes.func,
}
