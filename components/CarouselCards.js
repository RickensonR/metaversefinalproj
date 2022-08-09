import React from 'react'
import { View } from "react-native"
import Carousel, { Pagination } from 'react-native-snap-carousel'
import CarouselCardItem, { SLIDER_WIDTH, ITEM_WIDTH } from './CarouselCardItem'
//import data from '../assets/data'
import { StyleSheet, Text } from 'react-native'
import { useState } from 'react'



const CarouselCards = ({data}) => {
    
  const isCarousel = React.useRef(null)
  const [index, setIndex] = React.useState(0)

  return (
        <View style = {styles.container}>

        <Carousel 
            layout="default"
            layoutCardOffset={9}
            ref={isCarousel}
            data={data}
            renderItem={CarouselCardItem}
            sliderWidth={SLIDER_WIDTH}
            itemWidth={ITEM_WIDTH}
            inactiveSlideShift={0}
            useScrollView={true}
            onSnapToItem={(index) => setIndex(index)}
        />

        <Pagination
            dotsLength={data.length}
            activeDotIndex={index}
            carouselRef={isCarousel}
            dotStyle={{
            width: 10,
            height: 10,
            borderRadius: 5,
            marginHorizontal: 0,
            backgroundColor: "#aa7bb3"
            }}
            inactiveDotOpacity={0.4}
            inactiveDotScale={0.5}
            tappableDots={true}
            />

    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: "white",
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20
    }
  });


export default CarouselCards