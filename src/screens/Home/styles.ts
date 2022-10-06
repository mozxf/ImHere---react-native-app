import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#131016',
    padding: 24,
  },
  eventName: {
    color: '#FDFCFE',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 48,
  },
  eventDate: {
    color: '#6B6B6B',
    fontSize: 16,
    paddingLeft: 0,
    marginLeft: 0,
  },
  input: {
    flex: 1,
    backgroundColor: '#1f1e25',
    height: 56,
    borderRadius: 5,
    color: '#fff',
    padding: 16,
    marginRight: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 24,
  },
  button: {
    width: 56,
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: '#31cf67',
  },
  buttonDisabled: {
    width: 56,
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: '#a3a3a3',
  },
  form: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    marginTop: 32,
    marginBottom: 42,
  },
  listEmptyComponent: {
    color: '#fff',
    fontSize: 14,
    textAlign: 'center',
  },
});
