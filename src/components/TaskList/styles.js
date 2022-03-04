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
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 16,
    marginBottom: 10,
  },
  listItemMarked: {
    backgroundColor: '#999',
  },
  listItemUnmarked: {
    backgroundColor: '#ccc',
  },
  listItemText: {
    flex: 1
  },
  icon: {
    marginRight: 5,
    alignSelf: 'center'
  },
});
