import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const AboutUsPage = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/logo.png')} style={styles.logo} />
      <Text style={styles.heading}>About Us</Text>
      <Text style={styles.paragraph}>
        At [Your Company Name], we're passionate about providing top-notch car assistance services to our customers. With years of experience in the industry, we understand the importance of reliability, efficiency, and trust when it comes to handling your automotive needs.
      </Text>
      <Text style={styles.paragraph}>
        Our mission is simple: to deliver exceptional car assistance solutions that exceed our customers' expectations. Whether you're facing a breakdown, need roadside assistance, or require routine maintenance, we're here to ensure you get back on the road safely and swiftly.
      </Text>
      <View style={styles.divider} />
      <Text style={styles.subHeading}>What Sets Us Apart</Text>
      <View style={styles.listContainer}>
        <Text style={styles.listItem}>
          • Expertise: Our team consists of highly skilled technicians and professionals who are experts in their field. You can trust us to handle your vehicle with care and precision.
        </Text>
        <Text style={styles.listItem}>
          • 24/7 Support: We understand that car troubles don't wait for convenient times. That's why we offer round-the-clock support to assist you whenever you need us, day or night.
        </Text>
        <Text style={styles.listItem}>
          • Fast Response: When you're stranded on the side of the road or facing an emergency, time is of the essence. Our rapid response team is equipped to reach you quickly and provide prompt assistance.
        </Text>
      </View>
      <View style={styles.divider} />
      <Text style={styles.subHeading}>Our Services</Text>
      <View style={styles.listContainer}>
        <Text style={styles.listItem}>
          • Roadside Assistance: From flat tire changes to jump-starts, we're here to help you get moving again, no matter where you are.
        </Text>
        <Text style={styles.listItem}>
          • Vehicle Maintenance: Keep your car running smoothly with our comprehensive maintenance services, including oil changes, brake inspections, and more.
        </Text>
        <Text style={styles.listItem}>
          • Emergency Towing: In the event of a breakdown or accident, rely on our towing services to transport your vehicle to a safe location or repair facility.
        </Text>
      </View>
      <View style={styles.divider} />
      <Text style={styles.contactText}>Contact Us</Text>
      <Text style={[styles.contactInfo, { marginTop: 30 }]}>
        Ready to experience the difference with [Your Company Name]? Reach out to us today to learn more about our services or to request assistance. Your satisfaction and safety are our top priorities.
      </Text>
      {/* Add your contact information here */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
    backgroundColor: '#D6EAF8',
    alignItems: 'center',
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  paragraph: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 16,
    color: '#666',
  },
  divider: {
    width: '100%',
    height: 1,
    backgroundColor: '#ccc',
    marginVertical: 20,
  },
  subHeading: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  listContainer: {
    width: '100%',
    paddingHorizontal: 20,
  },
  listItem: {
    marginBottom: 10,
    fontSize: 16,
    color: '#666',
  },
  contactText: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
    color: '#333',
  },
  contactInfo: {
    marginBottom: 20,
    textAlign: 'center',
    fontSize: 16,
    color: '#666',
  },
});

export default AboutUsPage;
