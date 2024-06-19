import React from 'react';
import { View, Text, StyleSheet, FlatList, ScrollView, TextInput, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import FeaturedJobCard from './FeaturedJobCard';
import PopularJobCard from './PopularJobCard';

// Import local images
const facebookLogo = require('../assets/images/facebook.png');
const googleLogo = require('../assets/images/google.png');
const amazonLogo = require('../assets/images/apple.png');
const appleLogo = require('../assets/images/apple.png');
const burgerKingLogo = require('../assets/images/burger.png');
const beatsLogo = require('../assets/images/beats.png');
const microsoftLogo = require('../assets/images/ms.png');
const cocaColaLogo = require('../assets/images/coke.png');
const teslaLogo = require('../assets/images/tesla.png');
const nikeLogo = require('../assets/images/nike.png');
const goldmanSachsLogo = require('../assets/images/goldman.png');

const featuredJobs = [
  { 
    id: '1', 
    title: 'Software Engineer', 
    company: 'Facebook', 
    salary: '$180,000', 
    location: 'Accra, Ghana', 
    image: facebookLogo,
    backgroundColor: '#5386e4'
  },
  { 
    id: '2', 
    title: 'Product Manager', 
    company: 'Google', 
    salary: '$160,000', 
    location: 'California, US', 
    image: googleLogo,
    backgroundColor: '#042849'
  },
  { 
    id: '3', 
    title: 'Data Scientist', 
    company: 'Amazon', 
    salary: '$150,000', 
    location: 'New York, US', 
    image: amazonLogo,
    backgroundColor: '#00255a'
  },
  { 
    id: '4', 
    title: 'UX Designer', 
    company: 'Apple', 
    salary: '$140,000', 
    location: 'Texas, US', 
    image: appleLogo,
    backgroundColor: '#2e5055'
  },
];

const popularJobs = [
  { id: '1', title: 'Jr Executive', company: 'Burger King', salary: '$96,000/y', location: 'Los Angeles, US', logo: burgerKingLogo },
  { id: '2', title: 'Product Manager', company: 'Beats', salary: '$84,000/y', location: 'Florida, US', logo: beatsLogo },
  { id: '3', title: 'Product Manager', company: 'Facebook', salary: '$86,000/y', location: 'Florida, US', logo: facebookLogo },
  { id: '4', title: 'Software Developer', company: 'Microsoft', salary: '$120,000/y', location: 'Seattle, US', logo: microsoftLogo },
  { id: '5', title: 'Marketing Specialist', company: 'Coca Cola', salary: '$78,000/y', location: 'Atlanta, US', logo: cocaColaLogo },
  { id: '6', title: 'HR Manager', company: 'Tesla', salary: '$110,000/y', location: 'Nevada, US', logo: teslaLogo },
  { id: '7', title: 'Operations Manager', company: 'Nike', salary: '$92,000/y', location: 'Oregon, US', logo: nikeLogo },
  { id: '8', title: 'Financial Analyst', company: 'Goldman Sachs', salary: '$105,000/y', location: 'New York, US', logo: goldmanSachsLogo },
];

export default function HomeScreen({ route }) {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.profileContainer}>
        <View>
          <Text style={styles.profileName}>Eric Atsu</Text>
          <Text style={styles.profileEmail}>eric@gmail.com</Text>
        </View>
        <View style={styles.imageContainer}>
          <Image
            source={require('../assets/images/profile.png')}
            style={styles.profileImage}
          />
          <View style={styles.notificationDot} />
        </View>
      </View>
      <View style={styles.searchContainer}>
        <View style={styles.searchBar}>
          <Ionicons name="search" size={24} color="#95969d" />
          <TextInput 
            style={styles.searchInput}
            placeholder="Search a job or position"
          />
        </View>
        <View style={styles.optionsIconContainer}>
          <Ionicons name="options" size={24} color="#41709e" />
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
        <Text style={styles.headerText} >Popular Jobs</Text>
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
    backgroundColor: '#fafafd',
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
  imageContainer: {
    width: 70,
    height: 55,
    position: 'relative',
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  notificationDot: {
    width: 17,
    height: 17,
    borderRadius: 10,
    borderWidth: 4,      // Adjust this value to change the border thickness
    borderColor: '#FFF', // Change this value to the desired border color
    backgroundColor: 'red',
    position: 'absolute',
    top: 5,
    right: 10,
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
    paddingVertical: 10,
    flex: 1,
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
    paddingTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  seeAll: {
    fontSize: 14,
    color: '#95969d',
  },
  featuredList: {
    paddingVertical: 10,
  },
  popullarj: {
  }
});
