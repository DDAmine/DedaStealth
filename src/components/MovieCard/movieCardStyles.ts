import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    // elevation: 8,
    // shadowColor: '#AAB6CE',
    // shadowOffset: {width: 0, height: 5},
    // shadowOpacity: 0.4,
    // shadowRadius: 15,
    borderRadius: 5,
    borderColor: 'grey',
    borderWidth: 0.5,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 5,
    gap: 10,
  },
  image: {height: 100, width: 50},
  detailsContainer: {flex: 1},
});
