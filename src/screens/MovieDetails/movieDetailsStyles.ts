import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  center: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 16,
    gap: 20,
  },
  image: {width: 100, height: 100},
  rating: {flexDirection: 'row', gap: 5},
  ratingCard: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    borderWidth: 0.5,
    padding: 5,
  },
  actors: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    borderWidth: 0.5,
    padding: 5,
  },
  actorsSection: {flex: 1, gap: 10},
  title: {fontSize: 20},
});
