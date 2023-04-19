import React, {useCallback, useEffect, useState} from 'react';
import type {PropsWithChildren} from 'react';
import {
  Alert,
  Button,
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
import {useAppDispatch} from '../hooks/hooks';
import {updateActivityData} from '../redux/reducer/appInfoReducer';
import {CardComponent} from './CardComponent';
var Spinner = require('react-native-spinkit');

export const Activity = (): JSX.Element => {
  let [data, setData] = useState({});
  let [isLoading, setLoading] = useState({});
  const dispatch = useAppDispatch();

  let getData = () => {
    setData('');
    setLoading(true);
    axios
      .get('https://www.boredapi.com/api/activity')
      .then(res => {
        setData(res.data);
        setLoading(false);
        dispatch(updateActivityData(res.data));
      })
      .catch(err => {
        console.log(err);
        setLoading(false);
      });
  };

  useEffect(() => {
    getData();
  }, []);
  const handleLinkPress = async (url: string) => {
    Linking.openURL(url);
  };
  return (
    <View style={styles.mainContainer}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Card style={styles.cardStyle}>
          {isLoading ? (
            <View style={styles.centerContainer}>
              <Spinner
                // style={styles.spinner}
                isVisible={isLoading}
                size={50}
                type={'Wave'}
                color={'#9F2B68'}
              />
            </View>
          ) : (
            <>
              <CardComponent
                activity={data.activity}
                link={data.link}
                participants={data.participants}
                price={data.price}
                type={data.type}
                handleLinkPress={handleLinkPress}
              />
            </>
          )}
        </Card>
      </ScrollView>
      <View>
        <Button
          title="Give Me an activity"
          color="#9F2B68"
          onPress={() => getData()}
        />
      </View>
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
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 20,
    paddingBottom: 20,
    margin: 10,
  },
  spinner: {
    marginBottom: 50,
  },
  centerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
