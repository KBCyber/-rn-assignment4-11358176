// components/JobCard.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function JobCard({ job }) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{job.title}</Text>
      <Text>{job.company}</Text>
      <Text>{job.salary}</Text>
      <Text>{job.location}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 20,
    marginVertical: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
