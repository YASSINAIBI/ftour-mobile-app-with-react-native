import React, { useState } from "react";
import { View, StyleSheet, SafeAreaView, ScrollView, Pressable, Text } from 'react-native';

import { Avatar, Button } from "react-native-elements";

// ingridient images
// https://www.circulaire-en-ligne.ca//wp-content/uploads/salade-davocat-au-poulet-chimichurri-grille.jpg -> salade d'avocat au poulet
// https://i.pinimg.com/originals/ef/30/cc/ef30cc55cf0678fe510baf6b5c64afc0.jpg-> salade vert
// https://img-3.journaldesfemmes.fr/QhgEdLZ0suRdfP7pAM6vG9ECfvo=/750x/smart/3a86b25b4fd94561959d9ff592bce391/recipe-jdf/10025061.jpg -> salade nicoise
// https://lh3.googleusercontent.com/proxy/piq54fpYQ5sF2yXhIZ_Z18PFBgsAykVuUEXdLCxD3ieQ2YE_Jc4qWolUfgYpcBNFMpqttnNRPsUt9q39fxQ2wOSVObImzXU14CS2UZuDxSA7QQIZAJoXe-Ty -> jus orange
// https://cdn.shopify.com/s/files/1/0248/9771/6302/products/sidi-ali-pack-6x15l_2_1024x.png?v=1592911387 -> side ali

import AsyncStorage from '@react-native-async-storage/async-storage';

const storeData = async (value, value2, value3) => {
  try {
    await AsyncStorage.setItem('titleIng', value)
    await AsyncStorage.setItem('avatarIng', value2)
    await AsyncStorage.setItem('prixIng', value3)
  } catch (e) {
    // saving error
  }
}

const Ingridients = [
    {
       title: 'salade d\'avocat au poulet',
       titleA: 'سلطة الافوكادو مع الدجاج',
       avatar: 'https://www.circulaire-en-ligne.ca//wp-content/uploads/salade-davocat-au-poulet-chimichurri-grille.jpg',
       prix: 10,
       description: 'hfsdkgjksdgjkdsfjkgkjgsdfjkgsdkjgsdhfsdkgjksdgjkdsfjkgkjgsdfjkgsdkjgsdhfsdkgjksdgjkdsfjkgkjgsdfjkgsdkjgsd'
    },
    {
      title: 'salade vert',
      titleA: 'سلطة خضراء',
      avatar: 'https://i.pinimg.com/originals/ef/30/cc/ef30cc55cf0678fe510baf6b5c64afc0.jpg',
      prix: 12,
      description: 'hfsdkgjksdgjkdsfjkgkjgsdfjkgsdkjgsd'
   },
   {
    title: 'salade nicoise',
    titleA: 'سلطة النيشواش',
    avatar: 'https://img-3.journaldesfemmes.fr/QhgEdLZ0suRdfP7pAM6vG9ECfvo=/750x/smart/3a86b25b4fd94561959d9ff592bce391/recipe-jdf/10025061.jpg',
    prix: 16,
    description: 'hfsdkgjksdgjkdsfjkgkjgsdfjkgsdkjgsd'
  },
  {
    title: 'jus orange',
    titleA: 'عصير بالليمون',
    avatar: 'https://lh3.googleusercontent.com/proxy/piq54fpYQ5sF2yXhIZ_Z18PFBgsAykVuUEXdLCxD3ieQ2YE_Jc4qWolUfgYpcBNFMpqttnNRPsUt9q39fxQ2wOSVObImzXU14CS2UZuDxSA7QQIZAJoXe-Ty',
    prix: 21,
    description: 'hfsdkgjksdgjkdsfjkgkjgsdfjkgsdkjgsd'
  },
  {
    title: 'side ali',
    titleA: 'قنينة ماء',
    avatar: 'https://cdn.shopify.com/s/files/1/0248/9771/6302/products/sidi-ali-pack-6x15l_2_1024x.png?v=1592911387',
    prix: 6,
    description: 'hfsdkgjksdgjkdsfjkgkjgsdfjkgsdkjgsd'
  },
   ]

function SelectIngidient({navigation}) {  
  const [language, setLanguage] = useState("ENGLISH")

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('Language')
      setLanguage(value)

    } catch(e) {
      // error reading value
    }
  }
  getData()
    return (
        <View style={styles.container}>
            <SafeAreaView>
                <ScrollView style={styles.scrollView}>
                    <View>
                        <View style={styles.box}>
                            {
                                Ingridients.map((ingridient, i) => {
                                    return (
                                        // ShowItems
                                        <Pressable key={i} onPress={() =>{ storeData(ingridient.title, ingridient.avatar, `${ingridient.prix}`), navigation.navigate('ShowItems') }}>
                                            <Avatar
                                                size="xlarge"
                                                rounded
                                                source={{
                                                    uri: ingridient.avatar,
                                                }}
                                            />
                                            <Text style={styles.textStyle}>{language === "ENGLISH" ? ingridient.title : ingridient.titleA }</Text>
                                        </Pressable>
                                    )
                                })
                            }
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#000000",
    },
    box: {
        textAlign: 'center',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 40
    },
    textStyle: {
      color: '#FFF',
      fontWeight: "bold",
      textAlign: "center",
      fontSize: 15
    },
  });

export default SelectIngidient

