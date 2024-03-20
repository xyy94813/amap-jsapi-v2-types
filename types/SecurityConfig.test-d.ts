import { expectAssignable } from 'tsd';
import SecurityConfig from './SecurityConfig';

expectAssignable<SecurityConfig>({
  serviceHost: '',
});

expectAssignable<SecurityConfig>({
  securityJsCode: '',
});

expectAssignable<SecurityConfig>({
  serviceHost: '',
  securityJsCode: '',
  otherProperties: '',
});
