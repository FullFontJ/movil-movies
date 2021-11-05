import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  ActivityIndicator,
  Text,
  View,
  SectionList,
  SafeAreaView,
  Image,
  TouchableHighlight,
  FlatList,
} from 'react-native';




export default () => {
  const [isLoading, setLoading] = useState(true);
  const [dataMovi, setData] = useState([]);

  const ListItem = ({ item }) => {
    return (
      <View style={styles.item}>
        {/* <TouchableHighlight onPress={() => navigation.navigate('Details')}> */}
        <Image
          source={{
            uri: item.Poster,
          }}
          style={styles.itemPhoto}
          resizeMode="cover"
        />
        <Text style={styles.itemText}>{item.Title}</Text>
        {/* </TouchableHighlight> */}
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
                  horizontal
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

    // <View style={{ flex: 1, padding: 24 }}>
    //   {isLoading ? <ActivityIndicator/> : (
    //     <FlatList
    //       data={data}
    //       keyExtractor={({ id }, index) => id}
    //       renderItem={({ item }) => (
    //         <Text>{item.title}, {item.releaseYear}</Text>
    //       )}
    //     />
    //   )}
    // </View>

  );
};

// export default () => {
//   return (
//     <View style={styles.container}>
//       <StatusBar style="light" />
//       <SafeAreaView style={{ flex: 1 }}>
//         <SectionList
//           contentContainerStyle={{ paddingHorizontal: 10 }}
//           stickySectionHeadersEnabled={false}
//           sections={SECTIONS}
//           renderSectionHeader={({ section }) => (
//             <>
//               <Text style={styles.sectionHeader}>{section.title}</Text>
              
              
//                 <FlatList
//                   horizontal
//                   data={section.data}
//                   renderItem={({ item }) => <ListItem item={ item} />}
//                   showsHorizontalScrollIndicator={false}
//                 />
                
//             </>
//           )}
//           renderItem={({ item, section }) => {
//               return null;
            
//             return <ListItem item={item} />;
//           }}
//         />
//       </SafeAreaView>
//     </View>
//   );
// };

const SECTIONS = [
  {
    title: 'Batman',
    horizontal: true,
    data: [
      {
        key: '1',
        text: 'Item text 1',
        uri: 'https://picsum.photos/id/1/200',
      }
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
  },
  itemPhoto: {
    width: 200,
    height: 350,
  },
  itemText: {
    color: 'rgba(255, 255, 255, 0.5)',
    marginTop: 5,
  },
});