import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingVertical: 4,
    paddingHorizontal: 16,
    borderRadius: 68,
    flexDirection: 'row-reverse',
    alignItems: 'center',
    borderWidth: 1,
    height: 50,
    borderColor: 'grey',
  },
  closeIcon: {
    width: 20,
    height: 20,
  },
  textInput: {
    fontSize: 15,
    flex: 1,
    includeFontPadding: false,
    textAlignVertical: 'center',
    marginRight: 20,
    marginLeft: 20,
    color: 'black',
  },
  loopIcon: {
    width: 20,
    height: 20,
  },
});
