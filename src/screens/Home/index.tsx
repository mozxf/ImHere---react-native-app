import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  Alert,
} from 'react-native';
import { styles } from './styles';
import { Participant } from '../../components/Participant/Index';
import { EventNameModal } from '../../components/EventNameModal/Index';
import { useEffect, useState } from 'react';

export const Home = () => {
  const [participants, setParticipants] = useState<string[]>([]);
  const [participantName, setParticipantName] = useState<string>('');
  const [eventName, setEventName] = useState<string>('');
  const [showEventNameModal, setShowEventNameModal] = useState<boolean>(false);

  useEffect(() => {
    setShowEventNameModal(true);
  }, []);

  function handleParticipantAdd(name: string) {
    const participantExists = participants.find(
      (participant) => participant === name.trim()
    ) as string;
    if (participantExists) {
      return Alert.alert(
        'There is already a participant with this name in the list!'
      );
    }
    setParticipants([...participants, name]);
    setParticipantName('');
  }

  function handleParticipantRemove(name: string) {
    Alert.alert(
      'Remove participant',
      `Are you sure you want to remove ${name} from participants list?`,
      [
        {
          text: 'Remove',
          onPress: () =>
            setParticipants((prevState) =>
              prevState.filter((participant) => participant !== name)
            ),
        },
        { text: 'Cancel', style: 'cancel' },
      ]
    );
  }

  return (
    <View style={styles.container}>
      <EventNameModal
        eventName={eventName}
        setEventName={setEventName}
        visible={showEventNameModal}
        handleVisibility={() => setShowEventNameModal(false)}
      />
      <Text
        style={styles.eventName}
        onPress={() => setShowEventNameModal(true)}
      >
        {eventName}
      </Text>

      <Text style={styles.eventDate}>{new Date().toDateString()}</Text>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder='Participant name'
          placeholderTextColor='#6b6b6b'
          onChangeText={setParticipantName}
          defaultValue={participantName}
        />
        <TouchableOpacity
          style={participantName ? styles.button : styles.buttonDisabled}
          disabled={!participantName}
          onPress={() => handleParticipantAdd(participantName.trim())}
        >
          <Text style={styles.buttonText}> + </Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={participants}
        keyExtractor={(item) => (item.length * Math.random()).toString()}
        renderItem={({ item }) => (
          <Participant
            name={item}
            onRemove={() => handleParticipantRemove(item)}
          />
        )}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyComponent}>
            No one arrived in the event yet? Add participants to the list!
          </Text>
        )}
      />
    </View>
  );
};
