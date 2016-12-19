import { Factory } from 'ember-cli-mirage';
import encrypt from './util-encrypt';

export default Factory.extend({
  title: 'default title',
  description: 'default description',
  pollType: 'FindADate',
  answerType: 'YesNo',
  answers: [
    {
      type: 'yes',
      labelTranslation: 'answerTypes.yes.label',
      icon: 'glyphicon glyphicon-thumbs-up',
      label: 'Ja'
    },
    {
      type: 'no',
      labelTranslation: 'answerTypes.no.label',
      icon: 'glyphicon glyphicon-thumbs-down',
      label: 'Nein'
    }
  ],
  options: [
    {
      title: '2017-12-24'
    },
    {
      title: '2018-01-01'
    }
  ],
  creationDate: '2015-04-01T11:11:11.111Z',
  forceAnswer: true,
  anonymousUser: false,
  isDateTime: false,
  expirationDate: '',
  timezone: '',
  version: 'v0.3',

  afterCreate(poll, server) {
    let propertiesToEncrypt = [
      'anonymousUser',
      'answers',
      'answerType',
      'creationDate',
      'description',
      'expirationDate',
      'forceAnswer',
      'options',
      'pollType',
      'timezone',
      'title'
    ];
    encrypt(propertiesToEncrypt, poll, server);
  }
});
