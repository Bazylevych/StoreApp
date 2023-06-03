import {
  FlatList,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
import React from 'react';
import products from '../data/products';

function ProductDetailsScreen() {
  const product = products[0];
  const {width} = useWindowDimensions();

  const addToCart = () => {
    console.warn('Ass to cart');
  };

  return (
    <View>
      <ScrollView>
        <FlatList
          data={product.images}
          renderItem={({item}) => (
            <Image
              source={{uri: item}}
              style={[styles.image, {width: width}]}
            />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
        />

        <View style={{padding: 20}}>
          <Text style={styles.title}>{product.name}</Text>

          <Text style={styles.price}>${product.price}</Text>

          <Text style={styles.description}>{product.description}</Text>
        </View>
      </ScrollView>

      <Pressable onPress={addToCart} style={styles.button}>
        <Text style={styles.buttonText}>Add to cart</Text>
      </Pressable>
    </View>
  );
}

export default ProductDetailsScreen;

const styles = StyleSheet.create({
  image: {
    aspectRatio: 1,
  },
  title: {fontSize: 34, fontWeight: '500', marginVertical: 10},
  price: {
    fontWeight: '500',
    fontSize: 16,
    letterSpacing: 1.5,
  },
  description: {
    marginVertical: 10,
    fontSize: 18,
    lineHeight: 30,
    fontWeight: '500',
  },
  button: {
    position: 'absolute',
    backgroundColor: 'black',
    bottom: 30,
    width: '70%',
    alignSelf: 'center',
    padding: 20,
    borderRadius: 25,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: '500',
    fontSize: 18,
  },
});
