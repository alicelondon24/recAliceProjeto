import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import axios from 'axios';

const AppNavigation = ({ navigation }) => {
	const [images, setImages] = useState(null);

	useEffect(() => {
		if (images) {
			const imgUrl = `http://localhost:3000/images/${location}`;
			axios
				.get(imgUrl)
				.then((response) => {
					setProduto(response.data);
				})
				.catch((error) => {
					console.error('Erro ao buscar informações do post:', error);
				});
		}
	}, []);

		

	return (
		<View style={styles.container}>
			<Image source={images.location} style={styles.saladaImage} />

			<View style={styles.saladaDetails}>
				{images && (
					<View>
						<Text style={styles.postCaption}>{images.caption}</Text>
					</View>
				)}

		</View></View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#6f9149',
	},
	header: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingHorizontal: 20,
		marginTop: 20,
		marginBottom: 10,
	},
	headerText: {
		fontSize: 18,
		fontWeight: 'bold',
		color: 'white',
	},
	postImage: {
		width: '100%',
		height: 200,
		resizeMode: 'cover',
	},
	postCaption: {
		padding: 20,
		color: 'white',
	},
	postDescriprition: {
		fontSize: 16,
		marginBottom: 20,
		color: 'white',
	}
});

export default AppNavigation;
