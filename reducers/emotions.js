import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [
    { emotionName: "Joie", imageUrl: require("../assets/emotion-joie.png"), score: 100, description: "Sentiment de bonheur intense et profond, de plaisir, de gaité et de satisfaction", emotionRemede: ['Tristesse'] },
    { emotionName: "Confusion", imageUrl: require("../assets/emotion-confusion.png"), score: 50, description: "Mélange d’autres émotions, peut-être suite à une maladresse ou à une faute.", emotionRemede: ['Sérénité'] },
    { emotionName: "Honte", imageUrl: require("../assets/emotion-honte.png"), score: 30, description: "Peur du rejet, du regard et du jugement des autres.", emotionRemede: ['Colère', 'Fierté'] },
    { emotionName: "Colère", imageUrl: require("../assets/emotion-colere.png"), score: 25, description: "Vif mécontentement, accès d’énervement extrême, qui s’exprime par une grande agressivité", emotionRemede: ['Sérénité', 'Anxiété'] },
    { emotionName: "Fierté", imageUrl: require("../assets/emotion-fierte.png"), score: 80, description: "Emotion agréable qui surgit quand on se sent à la hauteur, souvent suite à un succès", emotionRemede: ['Honte'] },
    { emotionName: "Peur", imageUrl: require("../assets/emotion-peur.png"), score: 45, description: "Sentiment d’insécurité. Appréhension qui peut nous figer. Elle peut se manifester lors d’un danger réel ou supposé.", emotionRemede: ['Colère', 'Surprise'] },
    { emotionName: "Anxiété", imageUrl: require("../assets/emotion-anxiete.png"), score: 20, description: "Trouble qui porte l’inquiétude à un niveau supérieur, peur de l’avenir, de ce qui va se passer.", emotionRemede: ['Sérénité', 'Colère'] },
    { emotionName: "Dégoût", imageUrl: require("../assets/emotion-degout.png"), score: 40, description: "Sensation d’aversion, de répugnance, d’écœurement. Elle va plus loin que le manque d’intérêt ou d’estime.", emotionRemede: ['Fierté', 'Ennui', 'Suprise'] },
    { emotionName: "Sérénité", imageUrl: require("../assets/emotion-serenite.png"), score: 90, description: "Absence de sentiments violents, comme la colère, l’anxiété ou l’euphorie. Sensation de tranquillité, de paix intérieure.", emotionRemede: ['Peur', 'Anxiété'] },
    { emotionName: "Surprise", imageUrl: require("../assets/emotion-surprise.png"), score: 70, description: "Réaction spontanée à des événements dans l’environnement imprévu, comme la perception d’un bruit ou d’un mouvement.", emotionRemede: ['Sérénité', 'Anxiété'] },   
    { emotionName: "Ennui", imageUrl: require("../assets/emotion-ennui.png"), score: 55, description: "Sensation de lassitude, de vide ou d’inutilité. L’expérience vécue manque de sens à nos yeux et peut provoquer fatigue et découragement.", emotionRemede: ['Dégoût', 'Joie', 'Sérénité'] },
    { emotionName: "Tristesse", imageUrl: require("../assets/emotion-triste.png"), score: 10, description: "Etat provoqué par un mal ou un manque, et qui englobe une impression pénible, une sensation de mélancolie.", emotionRemede: ['Joie', 'Surprise'] },
  ]
};

export const emotionSlice = createSlice({
  name: "emotions",
  initialState,
  reducers: {
    allEmotions: (state, action) => {
      state.value;
    }, 
  },
});

export const { allEmotions } = emotionSlice.actions;
export default emotionSlice.reducer;
