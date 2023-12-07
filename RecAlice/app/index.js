import React from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

const HomeScreen = ({ navigation }) => {
	return (
		<View style={styles.container}>
			<Text style={styles.headerText}>Instagram SENAC</Text>
			<TouchableOpacity style={styles.nextButton}>
				<Link href="/home">
					<Text style={styles.buttonText}>login</Text>
				</Link>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#6f9149',
		justifyContent: 'center',
		alignItems: 'center',
	},

	headerText: {
		fontSize: 80,
		fontWeight: 'bold',
		color: 'white',
	},
	nextButton: {
		backgroundColor: '#3c6b36',
		padding: 15,
		borderRadius: 10,
		position: 'absolute',
		bottom: '10%',
	},
	buttonText: {
		color: 'black',
		fontWeight: 'bold',
	},
});

export default HomeScreen;
