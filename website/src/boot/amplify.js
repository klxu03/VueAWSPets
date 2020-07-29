import Vue from 'vue';
import Amplify from 'aws-amplify';
import '@aws-amplify/ui-vue';
import aws_exports from '../aws-exports';

import * as AmplifyModules from 'aws-amplify';
import { AmplifyPlugin } from 'aws-amplify-vue';
Vue.use(AmplifyPlugin, AmplifyModules);

Amplify.configure(aws_exports);
