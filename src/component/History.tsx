import React, {useCallback, useEffect, useState} from 'react';
import type {PropsWithChildren} from 'react';
import {
  Alert,
  Button,
  FlatList,
  Linking,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import axios from 'axios';
import Card from '../widget/Card';
import {useAppDispatch, useAppSelector} from '../hooks/hooks';
import {updateActivityData} from '../redux/reducer/appInfoReducer';
import {CardComponent} from './CardComponent';
var Spinner = require('react-native-spinkit');

export const History = (): JSX.Element => {
  const {activityList} = useAppSelector(state => state.appState);
  const handleLinkPress = async (url: string) => {
    Linking.openURL(url);
  };
  console.log('activityList', activityList);
  return (
    <View style={styles.mainContainer}>
      <FlatList
        data={activityList}
        renderItem={({item, index}): JSX.Element => (
          <Card style={styles.cardStyle}>
            <CardComponent
              activity={item.activity}
              link={item.link}
              participants={item.participants}
              price={item.price}
              type={item.type}
              handleLinkPress={handleLinkPress}
            />
          </Card>
        )}
        contentContainerStyle={{marginLeft: 10, marginRight: 10}}
        keyExtractor={(item, index): string => item.activity.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: '#000000',
  },
  scrollContainer: {
    justifyContent: 'center',
  },
  link: {
    fontSize: 14,
    fontWeight: '600',
    color: 'blue',
  },
  subtitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#000000',
  },
  cardStyle: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
    paddingBottom: 10,
    margin: 5,
  },
  spinner: {
    marginBottom: 50,
  },
  centerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
