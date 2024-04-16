import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const ReviewCard = ({ review }) => {
  // Function to render stars based on rating
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <MaterialIcons
          key={i}
          name={i <= rating ? 'star' : 'star-border'}
          size={24}
          color="#FFD700"
        />
      );
    }
    return stars;
  };

  return (
    <View style={[styles.card, Platform.OS === 'ios' && styles.shadow]}>
      <Text style={styles.name}>{review.name}</Text>
      <Text style={styles.location}>{review.location}</Text>
      {/* Render stars for rating */}
      <View style={styles.ratingContainer}>
        {renderStars(review.rating)}
      </View>
      <Text style={styles.message}>{review.message}</Text>
    </View>
  );
};

const Reviews = () => {
  const customerReviews = [
    { name: "Rahul Sharma", location: "Pune", message: "I was stranded on the highway with a dead battery, and Revive Roadside Assistance came to my rescue within 20 minutes. The mechanic was friendly and professional, and he had my car up and running in no time. I highly recommend their services to anyone in need of roadside assistance.", rating: 5 },
    { name: "Arun Joshi", location: "Mumbai", message: "My tire blew out on a dark and rainy night, and I felt helpless on the side of the road. But thanks to Revive Roadside Assistance, I was back on the road in no time. I'm grateful for their prompt and reliable service.", rating: 4 },
    { name: "Laksh Verma", location: "Navi Mumbai", message: "I ran out of gas on my way to an important meeting, and I was worried that I would be late. But Revive Roadside Assistance saved the day! They delivered fuel to my location within 30 minutes even when the gas station was not too far away.", rating: 3 },
    { name: "Avni Mehra", location: "Pune", message: "I accidentally locked my keys in my car while running errands, and I was panicking because I had groceries in the trunk. Thankfully, Revive Roadside Assistance was able to unlock my car door in no time. I'm extremely satisfied with their service and would highly recommend them to anyone in need of assistance.", rating: 5 },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Customer Reviews</Text>
      {customerReviews.map((review, index) => (
        <ReviewCard key={index} review={review} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    padding: 20,
    backgroundColor: '#D6EAF8',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    marginBottom: 10,
    marginTop: 20,
    ...Platform.select({
      ios: {
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 8,
      },
    }),
  },
  shadow: {
    ...Platform.select({
      android: {
        elevation: 5,
      },
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.5,
        shadowRadius: 6,
      },
    }),
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  location: {
    fontSize: 16,
    color: '#666',
    marginBottom: 10,
  },
  ratingContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  message: {
    fontSize: 16,
    lineHeight: 22,
  },
});

export default Reviews;
