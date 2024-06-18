import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function FeaturedJobCard({ job }) {
  return (
    <View style={styles.card}>
      <Text style={styles.company}>{job.company}</Text>
      <Text style={styles.title}>{job.title}</Text>
      <Text style={styles.salary}>{job.salary}</Text>
      <Text style={styles.location}>{job.location}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#4267B2',
    borderRadius: 10,
    padding: 20,
    marginRight: 15,
    width: 250,
  },
  company: {
    fontSize: 14,
    color: '#fff',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    marginVertical: 5,
  },
  salary: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  location: {
    fontSize: 14,
    color: '#fff',
  },
});
