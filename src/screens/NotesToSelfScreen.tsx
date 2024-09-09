import React, { useState } from 'react';

import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  Pressable,
  Platform,
  TextStyle,
  Dimensions,
} from 'react-native';

import { Fonts } from '../styles';

import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

import { ReframingModal } from '../components/ReframingModal';
import { ReframingSuccessModal } from '../components/ReframingSucessModal';
import { NoteList } from '../components/NoteList';

const windowWidth = Dimensions.get('window').width;

const reframingSteps = [
  {
    title: 'Reframing: Situatieomschrijving',
    description:
      'De situatie is automatisch overgenomen vanuit je zorg. Je kan deze hier eventueel nog aanpassen. Het resultaat van deze methode is een Note-to-Self. Als je deze niet wilt koppelen aan je bestaande zorg, kan je dit uitschakelen.',
    instruction: 'Laten we beginnen!',
  },
  {
    title: 'Reframing: Gevoelsomschrijving',
    description:
      'Omschrijf hier hoe je je voelt door deze situatie, zodat we er mee aan de slag kunnen.',
    placeholder: 'Ik voel me...',
    instruction:
      'Het opschrijven van je gevoelens helpt om je emoties te verhelderen en te begrijpen, wat kan leiden tot meer zelfinzicht en een betere emotionele verwerking.',
  },
  {
    title: 'Reframing: Vraag 1',
    description:
      'Noteer feiten en observaties die jouw gedachte ondersteunen. Dit helpt om te zien of er objectief bewijs is dat jouw zorgen bevestigt.',
    question: 'Welk bewijs heb ik dat deze gedachte echt waar is?',
    placeholder: 'Welk bewijs heb ik dat deze gedachte echt waar is?',
    instruction:
      'Deze vraag helpt om objectieve feiten te verzamelen die je gedachte ondersteunen, waardoor je inzicht krijgt in de realiteit van je zorgen. Het voorkomt dat je uitsluitend op gevoelens en aannames baseert.',
  },
  {
    title: 'Reframing: Vraag 2',
    description:
      'Denk aan tegenvoorbeelden en feiten die jouw gedachte weerleggen. Dit helpt om een evenwichtiger beeld te krijgen en je gedachten te relativeren.',
    question: 'Welk bewijs heb ik dat deze gedachte niet waar is?',
    placeholder: 'Welk bewijs heb ik dat deze gedachte niet waar is?',
    instruction:
      'Door tegenbewijs te overwegen, kun je irrationele gedachten uitdagen en relativeren. Het helpt je een evenwichtiger en realistischer beeld te vormen.',
  },
  {
    title: 'Reframing: Vraag 3',
    description:
      'Bedenk welk advies of welke troostende woorden je een vriend zou geven in dezelfde situatie. Dit perspectief helpt om milder en realistischer naar je eigen gedachten te kijken.',
    question:
      'Wat zou ik tegen een vriend (in) zeggen die deze gedachte heeft?',
    placeholder:
      'Wat zou ik tegen een vriend (in) zeggen die deze gedachte heeft?',
    instruction:
      'Deze vraag stimuleert empathie en zelfcompassie. door je aan te moedigen jezelf dezelfde steun te geven als aan een vriend. Het kan leiden tot mildere en constructievere zelfreflectie.',
  },
  {
    title: 'Reframing: Advies',
  },
  {
    title: 'Reframing: Vraag 4',
    description:
      'Gebruik een schaal van 1 tot 5 om de waarschijnlijkheid van je negatieve gedachte in te schatten. Dit helpt om de reële kans op het scenario te evalueren en irrationele angsten te verminderen.',
    question:
      'Hoe groot denk je dat de kans nu is dat de omschreven, negatieve gedachte realiteit wordt?',
    placeholder: 'Waarom?',
    instruction:
      'Door de waarschijnlijkheid van je zorgen te beoordelen, kun je irrationele angsten verminderen en een realistisch perspectief ontwikkelen. Het helpt om onnodige piekergedachten te relativeren.',
  },
  {
    title: 'Reframing: Vraag 5',
    description:
      'Zoek naar andere verklaringen of interpretaties van de situatie die realistischer en minder negatiet zin. Dit helpt om je perspectief te verschuiven naar een meer evenwichtige en constructieve mindset.',
    question:
      'Wat is een alternatieve, realistische verklaring die ik bij deze situatie heb?',
    placeholder:
      'Wat is een alternatieve, realistische verklaring die ik bij deze situatie heb?',
    instruction:
      'Deze vraag moedigt je aan om bredere en positievere interpretaties van de situatie te overwegen. Het helpt om starre, negatieve denkpatronen te doorbreken en een evenwichtiger perspectief te krijgen.',
  },
];

export const NotesToSelfScreen: React.FC = ({ route }) => {
  const [modalReframingVisible, setModalReframingVisible] =
    useState<boolean>(false);
  const [modalReframingSuccessVisible, setModalReframingSuccessVisible] =
    useState<boolean>(false);
  const [reframingModalIndex, setReframingModalIndex] = useState<number>(0);

  return (
    <>
      <StatusBar />
      <ReframingModal
        // @TODO: Correct `route` type annotation!
        route={route}
        reframingModalIndex={reframingModalIndex}
        setReframingModalIndex={setReframingModalIndex}
        reframingSteps={reframingSteps}
        modalReframingVisible={modalReframingVisible}
        setModalReframingVisible={setModalReframingVisible}
        modalReframingSuccessVisible={modalReframingSuccessVisible}
        setModalReframingSuccessVisible={setModalReframingSuccessVisible}
      />

      {/* Reframing Sucess Modal */}
      <ReframingSuccessModal
        // @TODO: Correct `route` type annotation!
        route={route}
        reframingModalIndex={reframingModalIndex}
        setReframingModalIndex={setReframingModalIndex}
        modalReframingSuccessVisible={modalReframingSuccessVisible}
        setModalReframingSuccessVisible={setModalReframingSuccessVisible}
        modalReframingVisible={modalReframingVisible}
        setModalReframingVisible={setModalReframingVisible}
      />

      <ScrollView
        bounces={false}
        style={styles.container}
        contentContainerStyle={styles.contentContainerStyles}
      >
        {/* Title + Sliders Icon */}
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
            height: 40,
            paddingHorizontal: 30,
          }}
        >
          <Text
            style={{
              ...(Fonts.poppinsSemiBold[Platform.OS] as TextStyle),
              fontSize: 18,
            }}
          >
            Mijn Notes to Self
          </Text>
          <Pressable onPress={() => console.log('Sliders button pressed!')}>
            <FontAwesome6 name='sliders' size={24} color='black' />
          </Pressable>
        </View>

        {/* Note List */}
        <NoteList />

        {/* Buttons */}
        <View style={styles.bottomBarContainer}>
          <Pressable
            onPress={() => setModalReframingVisible(!modalReframingVisible)}
          >
            <View style={{ width: 225 }}>
              <Image
                resizeMode='contain'
                style={{
                  width: '100%',
                  height: 45,
                }}
                source={require('../../assets/images/nieuwe_note_to_self_button.png')}
              />
            </View>
          </Pressable>
          <Pressable
            style={{ position: 'absolute', right: 25, top: 25 }}
            onPress={() => console.log('Sliders button pressed!')}
          >
            <FontAwesome6 name='sliders' size={24} color='black' />
          </Pressable>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  contentContainerStyles: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#ffffff',
  },
  bottomBarContainer: {
    marginBottom: 100,
    width: windowWidth,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#dedede',
    borderWidth: 1,
    borderBottomWidth: 0,
    paddingHorizontal: 20,
    paddingTop: 15,
  },
});