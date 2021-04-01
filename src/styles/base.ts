import {Dimensions} from 'react-native';
import {fonts} from './fonts';
import {padding} from './spacing';

export const dimensions = {
  fullHeight: Dimensions.get('window').height,
  fullWidth: Dimensions.get('window').width,
};

export const base = {
  container: {
    paddingHorizontal: padding.sm,
    paddingVertical: padding.lg,
    flex: 1
  },
  header: {
    backgroundColor: 'blue',
    fontSize: fonts.lg,
    fontFamily: fonts.primary,
    fontWeight: 'bold',
  },
  section: {
    paddingVertical: padding.lg,
    paddingHorizontal: padding.xl,
  },
};
