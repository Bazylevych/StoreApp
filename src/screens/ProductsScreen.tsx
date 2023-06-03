import React from 'react';
import {FlatList, Image, SafeAreaView, StyleSheet, View} from 'react-native';
import products from '../data/products';

function ProductsScreen(): JSX.Element {
  return (
    <SafeAreaView>
      <FlatList
        data={products}
        renderItem={({item}) => (
          <View style={styles.itemContainer}>
            <Image source={{uri: item.image}} style={styles.image} />
          </View>
        )}
        numColumns={2}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    aspectRatio: 1,
  },
  itemContainer: {
    width: '50%',
    padding: 1,
  },
});

export default ProductsScreen;
