import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, FlatList, Image } from "react-native";

const livros = [
    {
        codigo_livro: 1,
        titulo_livro: 'Melodia',
        imagem_livro: require('../assets/flauta.jpg'),
    },
    {
        codigo_livro: 3,
        titulo_livro: 'percussão',
        imagem_livro: require('../assets/djembe.jpg'),
    },
    
    {
        codigo_livro: 1,
        titulo_livro: 'Cordas',
        imagem_livro: require('../assets/violao.jpg'),
    },
    {
        codigo_livro: 1,
        titulo_livro: 'Teclas',
        imagem_livro: require('../assets/piano.jpg'),
    },
    
];

// COMPONENTE DE ITEM DE RENDERIZAÇÃO
const bookItem = ({ item }) => {
    return (
        <View style={styles.book_container}>
            
            <Image
                style={styles.book_image}
                source={item.imagem_livro}
            />

            <View style={styles.book_text_container}>

                <Text style={styles.book_data}>{item.titulo_livro}</Text>
                <Text style={styles.book_author}>{item.Origem}</Text>
                <Text style={styles.book_data}>{item.preco_livro}</Text>

                <TouchableOpacity style={styles.book_button_details}>
                    <Text style={styles.book_button_text}> Ver instrumentos </Text>
                </TouchableOpacity>

            </View>

        </View>
    )
};

export default function FeedBooks() {
    return (
        <SafeAreaView>

            <FlatList
                data={livros}
                renderItem={bookItem}
                ListEmptyComponent={<Text> A LISTA DE LIVROS ESTÁ VAZIA </Text>}
                keyExtractor={livros => livros.codigo_livro}
            />

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
    },
    header_container: {
        flex: 1,
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    header_title: {
        color: '#333',
        fontSize: 25,
        fontWeight: 'bold',
    },
    icone: {
        width: 60,
        height: 60,
        marginRight: 20,
    },
    book_list_header: {
        height: 100,
    },
    book_container: {
        flex: 1,
        flexDirection: 'row',
        padding: 10,
        borderWidth: 2,
        borderRadius: 10,
        borderColor: '#CCC',
        marginBottom: 10,
        
    },
    book_image: {
        width: 180,
        height: 220,
        marginRight: 10,
        marginBottom: 10,
    },
    book_text_container: {
        width: 200,
        justifyContent: 'center',
    },
    book_data: {
        fontSize: 16,
        fontWeight: '600',
        width: '100%',
        textAlign: 'left',
    },
    book_author: {
        fontSize: 14,
        fontWeight: '400',
        width: '100%',
        textAlign: 'left',
        color: '#CCC',
        marginBottom: 10,
    },
    book_button_details: {
        alignItems: 'center',
        backgroundColor: '#057d2f',
        padding: 10,
        borderRadius: 5,
        marginTop: 90,
        width: '100%',
    },
    book_button_text: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
});