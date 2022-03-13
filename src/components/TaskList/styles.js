import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    width: '100%',
  },
  header: {
    marginBottom: 14,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  shareButton: {
    padding: 5,
    paddingEnd: 10,
  },
  list: {
    display: 'flex',
    height: 'auto',
    paddingBottom: 70,
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
