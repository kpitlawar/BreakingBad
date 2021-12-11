import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  headerView: {
    flexDirection: 'row',
    backgroundColor: '#242424',
    height: hp('8%'),
  },
  txtTitle: {
    color: '#18CA75',
    fontSize: hp('2.5%'),
    padding: 20,
    flex: 0.8,
  },
  viewIcon: {
    padding: 20,
    flex: 0.2,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  img: {
    height: 200,
    width: 145,
    borderRadius: 10,
  },
});
