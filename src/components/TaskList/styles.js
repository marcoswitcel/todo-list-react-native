import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    width: '100%',
  },
  title: {
    paddingBottom: 14,
  },
  list: {
    display: 'flex',
    height: 'auto',
  },
  listItem: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 16,
    marginBottom: 10,
  },
  listItemMarked: {
    backgroundColor: '#999',
  },
  listItemUnmarked: {
    backgroundColor: '#ccc',
  }
});
