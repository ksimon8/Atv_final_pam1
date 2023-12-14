import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, FlatList, Image } from "react-native";

const livros = [
    {
        codigo_livro: 1,
        titulo_livro: 'Djembe',
        Origem: 'Austrália',
        preco_livro: '500,00',
        imagem_livro: require('../assets/didgeridoo.jpg'),
    },
    {
        codigo_livro: 2,
        titulo_livro: 'Hang Drum',
        Origem: 'Australia',
        preco_livro: '3000,00',
        imagem_livro: require('../assets/hang.jpg'),
    },
    {
        codigo_livro: 3,
        titulo_livro: 'Djembe',
        Origem: 'Africa',
        preco_livro: '1500,00',
        imagem_livro: require('../assets/djembe.jpg'),
    },
    {
        codigo_livro: 4,
        titulo_livro: 'Derbake',
        autor: 'India',
        preco_livro: '1200,00',
        imagem_livro: require('../assets/derbake.jpg'),
    },
    {
        codigo_livro: 5,
        titulo_livro: 'Flauta Pan',
        Origem: 'Peru',
        preco_livro: '200,00',
        
        imagem_livro: require('../assets/flautapan.jpg'),
    },
    {
        codigo_livro: 6,
        titulo_livro: 'Flauta Nativa',
        autor: 'America do norte',
        preco_livro: '150,00',
        imagem_livro: require('../assets/flauta.jpg'),
    },
    {
        codigo_livro: 7,
        titulo_livro: 'Koto',
        Origem: 'China',
        preco_livro: '5000,00',
        imagem_livro: require('../assets/koto.jpg'),
    },
    {
        codigo_livro: 8,
        titulo_livro: 'Violão Estampa mandala',
        autor: 'Espanha',
        preco_livro: '350,00',
        imagem_livro: require('../assets/violao.jpg'),
    },
    {
        codigo_livro: 9,
        titulo_livro: 'Piano Eletrico',
        autor: 'Europa',
        preco_livro: '90,00',
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
                    <Text style={styles.book_button_text}> Detalhes </Text>
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