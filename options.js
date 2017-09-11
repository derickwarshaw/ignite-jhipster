/**
 * The questions to ask during the install process.
 */

const jhipsterQuestions = [
  {
    name: 'auth-type',
    message: 'Which JHipster Authentication does your server use?',
    type: 'radio',
    choices: ['jwt', 'oauth2', 'uaa'],
    default: 'jwt'
  },
  {
    name: 'searchEngine',
    message: 'Does your JHipster Application use ElasticSearch?',
    type: 'confirm',
    default: false
  }
]

const pluginQuestions = [
  {
    name: 'dev-screens',
    message: 'Would you like Ignite Development Screens?',
    type: 'confirm'
  },
  {
    name: 'vector-icons',
    message: 'What vector icon library will you use?',
    type: 'radio',
    choices: ['none', 'react-native-vector-icons']
  },
  // {
  //   name: 'i18n',
  //   message: 'What internationalization library will you use?',
  //   type: 'list',
  //   choices: ['none', 'react-native-i18n']
  // },
  {
    name: 'animatable',
    message: 'What animation library will you use?',
    type: 'radio',
    choices: ['none', 'react-native-animatable']
  }
]

/**
 * The max preset.
 */
const max = {
  'auth-type': 'jwt',
  'dev-screens': true,
  'vector-icons': 'react-native-vector-icons',
  'i18n': 'none',
  'searchEngine': false,
  'animatable': 'react-native-animatable'
}

/**
 * The min preset.
 */
const min = {
  'auth-type': 'jwt',
  'dev-screens': false,
  'vector-icons': 'none',
  'i18n': 'none',
  'searchEngine': false,
  'animatable': 'none'
}

/**
 * The jwt preset.
 */
const jwt = {
  'auth-type': 'jwt',
  'dev-screens': false,
  'vector-icons': 'none',
  'i18n': 'none',
  'searchEngine': false,
  'animatable': 'none'
}

/**
 * The uaa preset.
 */
const uaa = {
  'auth-type': 'uaa',
  'dev-screens': false,
  'vector-icons': 'none',
  'i18n': 'none',
  'searchEngine': false,
  'animatable': 'none'
}

/**
 * The oauth2 preset.
 */
const oauth2 = {
  'auth-type': 'oauth2',
  'dev-screens': false,
  'vector-icons': 'none',
  'i18n': 'none',
  'searchEngine': false,
  'animatable': 'none'
}

module.exports = {
  jhipsterQuestions,
  pluginQuestions,
  answers: { min, max, jwt, uaa, oauth2 }
}
