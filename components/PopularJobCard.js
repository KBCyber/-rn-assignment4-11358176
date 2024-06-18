import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function PopularJobCard({ job }) {
  return (
    <View style={styles.card}>
      <View style={styles.logoContainer}>
        <Image source={job.logo} style={styles.logo} />
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{job.title}</Text>
        <Text style={styles.company}>{job.company}</Text>
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.salary}>{job.salary}</Text>
        <Text style={styles.location}>{job.location}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoContainer: {
    marginRight: 10,
  },
  logo: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  infoContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  company: {
    fontSize: 14,
    color: '#666',
    marginTop: 2,
  },
  detailsContainer: {
    alignItems: 'flex-end',
  },
  salary: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  location: {
    fontSize: 14,
    color: '#666',
    marginTop: 2,
  },
});
