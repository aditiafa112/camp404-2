import {
  StyleSheet,
  View,
  ScrollView,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useRef, useState} from 'react';

const DEVICE_WIDTH = Dimensions.get('window').width;

const Carousel = ({list}) => {
  const scrollRef = useRef();
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleSelectedIndex = event => {
    const contentOffset = event.nativeEvent.contentOffset;
    const viewSize = event.nativeEvent.layoutMeasurement;
    const newSelectedIndex = Math.floor(contentOffset.x / viewSize.width);
    setSelectedIndex(newSelectedIndex);
  };

  return (
    <View
      style={{
        height: DEVICE_WIDTH / 2 + 20,
        width: DEVICE_WIDTH,
        alignSelf: 'center',
        overflow: 'hidden',
      }}>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        horizontal
        pagingEnabled
        onMomentumScrollEnd={handleSelectedIndex}
        ref={scrollRef}>
        {Array.isArray(list) &&
          list.map((image, i) => (
            <TouchableOpacity key={i.toString()}>
              <Image
                style={styles.backgroundImage}
                source={{
                  uri: image.photo,
                }}
                key={image.id}
                resizeMode={'cover'}
              />
            </TouchableOpacity>
          ))}
      </ScrollView>
      <View style={styles.circleDiv}>
        {Array.isArray(list) &&
          list.map((image, i) => (
            <View
              style={[
                styles.whiteCircle,
                {backgroundColor: i === selectedIndex ? '#000' : '#fff'},
              ]}
              key={i}
              active={i === selectedIndex}
            />
          ))}
      </View>
    </View>
  );
};

export default Carousel;

const styles = StyleSheet.create({
  backgroundImage: {
    height: DEVICE_WIDTH / 2,
    width: DEVICE_WIDTH,
    backgroundColor: '#c4c4c4',
    borderRadius: 4,
  },
  circleDiv: {
    position: 'absolute',
    bottom: 0,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 10,
  },
  whiteCircle: {
    width: 8,
    height: 8,
    borderRadius: 4,
    margin: 5,
    borderColor: '#000',
    borderWidth: 1,
  },
});
