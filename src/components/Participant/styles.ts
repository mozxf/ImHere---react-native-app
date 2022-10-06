import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#1f1e25',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 5,
  },
  name: {
    flex: 1,
    fontSize: 16,
    color: '#fff',
    paddingLeft: 16,
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
    backgroundColor: '#e23c44',
  },
});
