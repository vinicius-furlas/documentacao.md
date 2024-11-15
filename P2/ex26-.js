/*
Exercício 26: Sistema de Notas Musicais
Nível: Iniciante/Intermediário

Desenvolva um programa que:
1. Receba uma nota musical (C, D, E, F, G, A, B)
2. Mostre a frequência fundamental da nota
3. Indique em qual oitava do piano ela se encontra
4. Mostre uma curiosidade sobre a nota
*/
function sistemaNotasMusicais(nota) {
    let frequencias = {
        "C": 261.63,  // Dó
        "D": 293.66,  // Ré
        "E": 329.63,  // Mi
        "F": 349.23,  // Fá
        "G": 392.00,  // Sol
        "A": 440.00,  // Lá
        "B": 493.88   // Si
    };

    let oitavas = {
        "C": 4,  
        "D": 4, 
        "E": 4,  
        "F": 4,
        "G": 4,  
        "A": 4,  
        "B": 4   
    };

    let curiosidades = {
        "C": "O Dó é a nota musical base para muitas escalas e acordes, e é usada como referência no afinamento de instrumentos.",
        "D": "O Ré é a segunda nota da escala musical, e é associada ao movimento e à ação em muitas músicas.",
        "E": "O Mi é uma nota importante em muitas escalas e é a nota fundamental de várias tonalidades.",
        "F": "O Fá é uma nota que aparece em muitas composições clássicas e é essencial para a harmonia musical.",
        "G": "O Sol é uma das notas mais vibrantes e é usada para criar músicas alegres e cheias de energia.",
        "A": "O Lá é uma das notas centrais na música ocidental e é fundamental para a construção de acordes.",
        "B": "O Si é a última nota da escala diatônica maior e é frequentemente usada para finalizar melodias."
    };

    if (frequencias[nota]) {
        let frequencia = frequencias[nota];
        let oitava = oitavas[nota];
        let curiosidade = curiosidades[nota];

        console.log(`Nota: ${nota}`);
        console.log(`Frequência Fundamental: ${frequencia} Hz`);
        console.log(`Oitava: ${oitava}`);
        console.log(`Curiosidade: ${curiosidade}`);
    } else {
        console.log("Nota inválida! As notas válidas são: C, D, E, F, G, A, B.");
    }
}