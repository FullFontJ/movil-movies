import { StatusBar } from 'expo-status-bar';
import { SearchBar } from 'react-native-elements';
import React, { useEffect, useState } from 'react';

import {
  StyleSheet,
  ActivityIndicator,
  Text,
  View,
  SectionList,
  SafeAreaView,
  Image,
  FlatList,
} from 'react-native';



export default () => {

  const [isLoading, setLoading] = useState(true);
  const [dataMovi, setData] = useState([]);

  const ListItem = ({ item }) => {
    return (
      <View style={styles.item}>
        <Image
          source={{
            uri: item.Poster,
          }}
          style={styles.itemPhoto}
          resizeMode="cover"
        />
          <View style={styles.content}>
              <View style={styles.contentHeader}>
                  <Text style={styles.itemText}>{item.Title}</Text>
              </View>
          </View>
        
      </View>
    );
  };
  

  const getMovies = async () => {
    try {
     const response = await fetch('https://www.omdbapi.com/?apikey=3fb23227&s=batman&r=json');
     const json = await response.json();
     setData(json.Search);
     console.log(json);
   } catch (error) {
     console.error(error);
   } finally {
     setLoading(false);
   }
 }

 useEffect(() => {
   getMovies();
 }, []);

  return (
    
    <View style={styles.container}>
      <SearchBar
        placeholder="busca aqui..."
      />
      
      <StatusBar style="light" />
      
      <SafeAreaView style={{ flex: 1 }}>
        <SectionList
          contentContainerStyle={{ paddingHorizontal: 10 }}
          stickySectionHeadersEnabled={false}
          sections={SECTIONS}
          renderSectionHeader={({ section }) => (
            <>
              <Text style={styles.sectionHeader}>{section.title}</Text>
              
              {isLoading ? <ActivityIndicator/> : (
                <FlatList
                  Vertical
                  data={dataMovi}
                  renderItem={({ item }) => <ListItem item={item} />}
                  showsHorizontalScrollIndicator={false}
                />
                )}
            </>
          )}
          renderItem={({ item, section }) => {
              return null;
            
            return <ListItem item={item} />;
          }}
        />
      </SafeAreaView>
    </View>
  );

  
};

const SECTIONS = [
  {
    title: 'Resultado:',
    data: [
      {
        key: '1',
        text: 'Item text 1',
        uri: 'https://picsum.photos/id/1/200',
      },
      {
        key: '2',
        text: 'Item text 2',
        uri: 'https://picsum.photos/id/10/200',
      },

      {
        key: '3',
        text: 'Item text 3',
        uri: 'https://picsum.photos/id/1002/200',
      },
      {
        key: '4',
        text: 'Item text 4',
        uri: 'https://picsum.photos/id/1006/200',
      },
      {
        key: '5',
        text: 'Item text 5',
        uri: 'https://picsum.photos/id/1008/200',
      },
    ],
  }
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  sectionHeader: {
    fontWeight: '800',
    fontSize: 18,
    color: '#f4f4f4',
    marginTop: 20,
    marginBottom: 5,
  },
  item: {
    margin: 10,
    paddingVertical: 12,
    flexDirection: 'row',
    alignItems: 'flex-start'
  },
  itemPhoto: {
    width: '40%',
    height: 150,
    margin: 7,
  },
  itemText: {
    fontSize: 20,
    color: 'rgba(255, 255, 255, 0.8)',
  },
  content: {
    marginLeft: 26,
    height: '100%',
    flex: 1,
    paddingVertical: 30,
  },
  contentHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    
  },
});