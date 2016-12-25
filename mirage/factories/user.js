import { Factory } from 'ember-cli-mirage';
import encrypt from './util-encrypt';

export default Factory.extend({
  creationDate: (new Date()).toISOString(),
  name: 'John Doe',
  selections: [],
  afterCreate(user, server) {
    let propertiesToEncrypt = [
      'creationDate',
      'name',
      'selections'
    ];
    encrypt(propertiesToEncrypt, user, server);
  }
});
