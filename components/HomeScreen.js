import React from 'react';
import { View, Text, StyleSheet, FlatList, ScrollView, TextInput, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import FeaturedJobCard from './FeaturedJobCard';
import PopularJobCard from './PopularJobCard';



const featuredJobs = [
  { id: '1', title: 'Software Engineer', company: 'Facebook', salary: '$180,000', location: 'Accra, Ghana' },
  { id: '2', title: 'Product Manager', company: 'Google', salary: '$160,000', location: 'California, US' },
  { id: '3', title: 'Data Scientist', company: 'Amazon', salary: '$150,000', location: 'New York, US' },
  { id: '4', title: 'UX Designer', company: 'Apple', salary: '$140,000', location: 'Texas, US' },
  // Add more featured job objects
  
];

const popularJobs = [
  { id: '1', title: 'Jr Executive', company: 'Burger King', salary: '$96,000/y', location: 'Los Angeles, US' },
  { id: '2', title: 'Product Manager', company: 'Beats', salary: '$84,000/y', location: 'Florida, US' },
  { id: '3', title: 'Product Manager', company: 'Facebook', salary: '$86,000/y', location: 'Florida, US' },
  { id: '4', title: 'Software Developer', company: 'Microsoft', salary: '$120,000/y', location: 'Seattle, US' },
  { id: '5', title: 'Marketing Specialist', company: 'Coca Cola', salary: '$78,000/y', location: 'Atlanta, US' },
  { id: '6', title: 'HR Manager', company: 'Tesla', salary: '$110,000/y', location: 'Nevada, US' },
  { id: '7', title: 'Operations Manager', company: 'Nike', salary: '$92,000/y', location: 'Oregon, US' },
  { id: '8', title: 'Financial Analyst', company: 'Goldman Sachs', salary: '$105,000/y', location: 'New York, US' },
  // Add more popular job objects
];

export default function HomeScreen({ route }) {
  const { name, email } = route.params;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.profileContainer}>
        <View>
          <Text style={styles.profileName}>Eric Atsu </Text>
          <Text style={styles.profileEmail}>eric@gmail.com</Text>
        </View>
        <Ionicons name="person-circle" size={55} color="#007BFF" />
      </View>
      <View style={styles.searchContainer}>
        <View style={styles.searchBar}>
          <Ionicons name="search" size={24} color="#333" />
          <TextInput 
            style={styles.searchInput}
            placeholder="Search a job or position"
          />
        </View>
        <View style={styles.optionsIconContainer}>
          <Ionicons name="options" size={24} color="#333" />
        </View>
      </View>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Featured Jobs</Text>
        <Text style={styles.seeAll}>See all</Text>
      </View>
      <FlatList
        data={featuredJobs}
        renderItem={({ item }) => <FeaturedJobCard job={item} />}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.featuredList}
      />
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Popular Jobs</Text>
        <Text style={styles.seeAll}>See all</Text>
      </View>
      {popularJobs.map(job => (
        <PopularJobCard key={job.id} job={job} />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  profileContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  profileName: {
    fontSize: 30,
    fontWeight: '900',
  },
  profileEmail: {
    fontSize: 18,
    color: '#555',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f2f2f3',
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    flex: 1,
    padding: 20,
  },
  optionsIconContainer: {
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    padding: 10,
    marginLeft: 10,
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  seeAll: {
    fontSize: 14,
    color: '#afafb5',
  },
  featuredList: {
    paddingVertical: 10,
  },
});
