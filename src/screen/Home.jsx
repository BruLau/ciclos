//import libraries
import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, Dimensions } from 'react-native';
import CarouselImage from '../components/CarouselImage';
import CristalButton from '../components/CristalButton';
 
const widthScreen = (Dimensions.get("window").width);

//These arrays (Noticia, titleNovedad, imagenNovedad) replace the data send by the backend
const News = [
    'Noticia Nº 1 - Título y Descripción 1... ver aqui',
    'Noticia Nº 2 - Título y Descripción 2... ver aqui',
    'Noticia Nº 3 - Título y Descripción 3... ver aqui'
]

const titleNovedad = [
    'Título Evento Nº 1 - Descripción 1 - Breve descripción de este evento... ver aqui',
    'Título Evento Nº 2 - Descripción 2 - Breve descripción de este evento... ver aqui',
    'Título Evento Nº 3 - Descripción 3 - Breve descripción de este evento... ver aqui'
]

const imagenNovedad = [
        "https://upload.wikimedia.org/wikipedia/commons/6/63/Municipalidad_de_La_Plata.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4AysmcDZc4aYOPN6WdNcz33m2tb3ZZI67MTOcvlvyiy2vv2jKFsa_p0hpj250gV4JlT8&usqp=CAU",
        "https://i0.wp.com/mochilaexpres.com/wp-content/uploads/2020/02/PB270871-scaled.jpg?fit=500%2C375&ssl=1"
    ]

// create a component
const Home = () => {
    const [indexNew, setIndexNew] = useState(0);
    const [activeSlice, setActiveSlide] = useState(0);

    function changeNextNew() {
        if (indexNew === (News.length - 1)) {
            return setIndexNew(0);
        }

        return setIndexNew(indexNew + 1);
        
    }

    function changePrevNew() {
        if (indexNew === 0) {
            return setIndexNew(News.length -1);
        }

        return setIndexNew(indexNew - 1);
        
    }

    return (
        <View style={styles.container}>

            <View style={styles.headerStyles}>
                <Image
                    style={styles.headerLogo}
                    source={require('../../assets/logo2.jpg')}
                />
            </View>
            <ScrollView style={styles.scrollContainer}>
                {/* Noticias Section */}
                <View style= {styles.carruselStyle}>
                    <Image
                        style={styles.carruselImage}
                        source={require('../../assets/desarrolloSustentable.jpg')}
                    />
                    <View style={{position: 'absolute', top: 30, left: 5, width: 40}}>
                        <CristalButton
                            title = '<'
                            onPress={() => changePrevNew()}                        
                            >
                        </CristalButton>
                    </View>
                    <View style={{position: 'absolute', top: 30, left: widthScreen - 10 - 40, width: 40}}>
                        <CristalButton
                            title = '>'
                            onPress={() => changeNextNew()}
                        >
                        </CristalButton>
                    </View> 
                    <Text style={{ color: 'white', fontSize: 20, fontWeight: '400', textAlign: 'center', paddingVertical: 5, 
                                borderRadius: 10, backgroundColor: 'rgba(0,0,0,0.3)',
                                position: 'absolute', top: 20, left: (widthScreen / 2) - 100, 
                                width: 200, height: 120,
                                }}
                                >
                                    {News[indexNew]}  {/* Show news */}
                            </Text> 
                </View>
                    {/* Quienes Somos Section */}
                <View style={styles.containerSecundarie}>
                    <Text style={styles.titleSecundarie}>¿QUIENES SOMOS?</Text> 
                </View>
                <View>
                    <View style={{ backgroundColor: 'rgba(46,46,46,0.74)', borderRadius: 10, margin: 5, }}>
                        <Text style={{textAlign: 'justify', color: 'white', margin: 5,}}>
                            Somos una organización no gubernamental (ONG) enfocados en impulsar la agenda 2030
                            promoviendo espacios de participacion ciudadana para crear vínculos
                            entre los actores políticos y la sociedad civil.
                        </Text>
                        <Text style={{textAlign: 'justify', color: 'white', margin: 5,}}>
                            la agenda del 2030 está integrada por 17 objetivos de desarrollo sostenible (ODS) 
                            y 169 metas establecidos en 2015 por las naciones Unidas (ONU). 
                            Suponen un nuevo reto de la comunidad internacional para lograr erradicar la pobresa, 
                            extender el acceso a los derechos humanos, lograr un desarrollo económico global 
                            sostenible y respetuoso con el planeta y los recursos que ofrece.
                        </Text>
                    </View>
                </View>
                    {/* Como Trabajamos Section */}
                <View style={styles.containerSecundarie}>
                    <Text style={styles.titleSecundarie}>¿CÓMO TRABAJAMOS?</Text>
                </View>
                <View style={{alignItems: 'center'}}>
                    <View style={{ backgroundColor: 'rgba(46,46,46,0.74)', borderRadius: 10, margin: 5, }}>
                        <Text style={{textAlign: 'justify', color: 'white', margin: 5,}}>
                            Nuestra organización cuenta con tres áreas para planificar, gestionar y llevar adelante 
                            cada etapa del ciclo organizado. ¡Conoce cada una!
                        </Text>
                    </View>
                    <View style={{ width: '98%', height: 'auto',  
                                //backgroundColor: 'white', 
                                margin: 5, alignContent: 'space-around', alignItems: 'center'}}>
                        <View style={{ width: '90%', margin: 10, }}>
                            <Image
                                style={{ width: '100%', height: 200, borderRadius: 10, }}
                                source={require('../../assets/informaOds.jpg')}
                            />   

                            <Text style={{ fontSize: 20, textAlign: 'center', paddingVertical: 5, 
                                            borderRadius: 10, backgroundColor: 'white' }}>
                                Programa Informa ODS
                            </Text>
                        </View>
                        <View style={{ width: '90%', margin: 10, }}>
                            <Image
                                style={{ width: '100%', height: 200, borderRadius: 10, }}
                                source={require('../../assets/difusionVirtual.jpg')}
                            />   

                            <Text style={{ fontSize: 20, textAlign: 'center', paddingVertical: 5, 
                                            borderRadius: 10, backgroundColor: 'white',}}>
                                Difusión Virtual
                            </Text>
                        </View>
                        <View style={{ width: '90%', margin: 10, }}>
                            <Image
                                style={{ width: '100%', height: 200, borderRadius: 10, }}
                                source={require('../../assets/participacionCiudadana.jpg')}
                            />   

                            <Text style={{ fontSize: 20, textAlign: 'center', paddingVertical: 5, 
                                            borderRadius: 10, backgroundColor: 'white',}}>
                                Participacion Ciudadana
                            </Text>
                        </View>                        
                    </View>          
                </View>
                    {/* Eventos Section */}
                <View style={styles.containerSecundarie}>
                    <Text style={styles.titleSecundarie}>EVENTOS</Text>
                </View>
                <View>      
                    <View style= {{ flex: 1, justifyContent: 'center', alignItems: 'center', 
                    alignContent: 'center', marginHorizontal: 20, marginVertical: 10 }}>
                            <CarouselImage
                                titles = {titleNovedad}
                                images = {imagenNovedad}
                                height = {270}
                                width = {widthScreen - 40}
                                activeSlide={activeSlice}
                                setactiveSlide={setActiveSlide}
                            />
                    </View>
                </View>
                    {/* Asociados Section */}
                <View style={{ flexDirection: 'row', backgroundColor: 'white',}}>
                    <Text style={{ width: '40%', fontSize: 23, 
                                fontWeight: '200', color: 'rgba(4,191,191,1)',
                                textAlign: 'center', paddingVertical: 20}}>
                                NUESTROS ASOCIADOS
                    </Text>
                    <View style={{ width: '60%', flexDirection: 'row', justifyContent: 'space-around', }}>
                        <Image
                                style={{ width: '30%', 
                                height: 100,
                                resizeMethod: 'resize',
                                resizeMode: 'contain',
                                }}
                                source={require('../../assets/desconocido.jpg')}
                        />
                        <Image
                                style={{ width: '33%', 
                                height: 100, 
                                resizeMethod: 'resize',
                                resizeMode: 'contain',
                                }}
                                source={require('../../assets/uba.jpg')}
                        />
                        <Image
                                style={{ width: '30%', 
                                height: 100, 
                                resizeMethod: 'resize',
                                resizeMode: 'contain',
                                }}
                                source={require('../../assets/desconocido.jpg')}
                        />
                    </View>
                </View>
                {/* Contactanos Section */}
                <View style={{ width: '100%', backgroundColor: 'white', 
                                flexDirection: 'row', alignContent: 'space-between',}}>
                    <View style={{flex: 2}}>
                            <Text style={{ fontSize: 20, fontWeight: '100', textAlign: 'center'}}>
                                CONTACTANOS O VISITANOS EN
                            </Text>
                    </View>
                    <View style={{flex: 2, justifyContent: 'center',}}>
                        <View style={{ flex: 1}}>
                            <Image
                                style={{ width: 130, 
                                height: 40,
                                alignSelf: 'center', 
                                resizeMethod: 'resize',
                                resizeMode: 'contain',
                                }}
                                source={require('../../assets/rs.jpg')}
                            />   
                        </View>
                    </View>
                </View> 
            </ScrollView>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1E1E1E',
    },
    headerStyles: {
        width: '100%',
        height: 70,
        backgroundColor: '#fff',
    },
    headerLogo: {
        width: 110,
        height: 70,
        marginLeft: 30,
    },
    scrollContainer: {
        width: '100%',
        backgroundColor: '#04BFBF',
        marginTop: 5,
    },
    carruselStyle: {
        width: '100%',
        height: 175,
    },
    carruselImage: {
        width: '100%',
        height: 170,
        resizeMethod: 'resize',
        resizeMode: 'contain',
    },
    containerSecundarie: {
        width: '100%',
        height: 50,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    titleSecundarie: {
        marginHorizontal: 50,
        fontSize: 20,
        fontWeight: '100',
        color: 'black',
  
    }
});

//make this component available to the app
export default Home;