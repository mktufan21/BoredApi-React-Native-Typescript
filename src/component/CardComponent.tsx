import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
interface CardProps {
  activity: string;
  link: string;
  participants: string;
  price: string;
  type: string;
  handleLinkPress: CallableFunction;
}
export const CardComponent = (props: CardProps): JSX.Element => {
  const {activity, link, participants, price, type, handleLinkPress} = props;
  return (
    <>
      <Text style={styles.sectionTitle}>{activity}</Text>
      {link && (
        <TouchableOpacity onPress={() => handleLinkPress(link)}>
          <Text style={styles.link}>{link}</Text>
        </TouchableOpacity>
      )}

      <Text style={styles.subtitle}>
        {`${'Participants: '}${participants}`}
      </Text>
      <Text style={styles.subtitle}>{`${'Price: '}${price}`}</Text>
      <Text style={styles.subtitle}>{`${'Type: '}${type}`}</Text>
    </>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000000',
  },
  scrollContainer: {
    justifyContent: 'center',
  },
  link: {
    fontSize: 14,
    fontWeight: '400',
    color: 'blue',
  },
  subtitle: {
    fontSize: 14,
    fontWeight: '400',
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
