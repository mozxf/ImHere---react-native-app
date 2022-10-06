import { Modal, View, Text, TextInput, TouchableOpacity } from 'react-native';
import { styles } from './styles';

type TModal = {
  visible: boolean;
  setEventName: React.Dispatch<React.SetStateAction<string>>;
  eventName: string;
  handleVisibility: () => void;
};

export const EventNameModal = ({
  visible,
  setEventName,
  eventName,
  handleVisibility,
}: TModal) => {
  return (
    <Modal visible={visible}>
      <View style={styles.container}>
        <Text style={styles.modalTitle}>What's the name of the event?</Text>
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            placeholder='Some event'
            placeholderTextColor='#6b6b6b'
            onChangeText={setEventName}
            defaultValue={eventName}
          />
          <TouchableOpacity
            style={eventName ? styles.button : styles.buttonDisabled}
            disabled={!eventName}
            onPress={handleVisibility}
          >
            <Text style={styles.buttonText}>✓</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};
