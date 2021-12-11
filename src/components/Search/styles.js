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
    color: 'white',
    fontSize: hp('2.5%'),
    padding: wp('6%'),
    flex: 0.8,
  },
  viewIcon: {
    padding: wp('6%'),
    flex: 0.2,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  img: {
    height: hp('25%'),
    width: wp('40%'),
    borderRadius: wp('2.5%'),
  },
});
