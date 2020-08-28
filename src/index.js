import React, {useState, useEffect } from 'react';
import { SafeAreaView, FlatList, Text, StyleSheet, StatusBar, TouchableOpacity } from 'react-native'

import api from './services/api'

// Elementos não possuem valores semânticos (Significado)
// Não possuem estilização própria
// Todos os componentes possuem por default "display: flex"

// View: div, footer, header, main, aisde, section
// Text: p, span, strong, h1, h2, h3

export default function App() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        api.get('projects').then( response => {
            console.log(response.data)
            setProjects(response.data)
        });
    }, []);

    async function handleAddProject() {
        const response = await api.post('projects', {
            title: `Novo Projeto ${Date.now()}`,
            owner: 'Mestre Jedi'
        })

        const project = response.data
        setProjects([...projects, project])
    }

    return (
        <>
            <StatusBar barStyle="light-content" backgroundColor='#000' />

            <SafeAreaView style={styles.container}>
                <FlatList
                    data={projects}
                    keyExtractor={ project => project.id }
                    renderItem={({ item: project }) => (
                        <Text style={styles.projects}>{project.title}</Text>
                    )}
                />
                {/* <View style={styles.container} >
                    {projects.map(project => (
                        <Text key={project.id} style={styles.projects}>{project.title}</Text>
                    ))}
                    
                </View> */}

                <TouchableOpacity 
                    activeOpacity={0.6} 
                    style={styles.button} 
                    onPress={handleAddProject}>

                    <Text style={styles.buttonText}>Adicionar Projeto</Text>

                </TouchableOpacity>

            </SafeAreaView>

            
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#7159c1',
    },

    projects: {
        color: '#fff',
        fontSize:20,
    },

    button: {
        backgroundColor: '#fff',
        margin: 20,
        height: 50,
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center'
    },

    buttonText: {
        fontWeight: 'bold',
        fontSize: 16
    }
})