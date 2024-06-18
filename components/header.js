import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Header = ({ title, showBackButton, onBackPress }) => (
  <View style={styles.header}>
    {showBackButton && (
      <TouchableOpacity onPress={onBackPress} style={styles.backButton}>
        <Text style={styles.buttonText}>Back</Text>
      </TouchableOpacity>
    )}
    <Text style={styles.title}>{title}</Text>
  </View>
);

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'lightblue',
    padding: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 20,
  },
  backButton: {
    padding: 10,
  },
  buttonText: {
    color: 'blue',
  },
});

export default Header;