import { Factory } from 'ember-cli-mirage';
import encrypt from './util-encrypt';

export default Factory.extend({
  afterCreate(user, server) {
    let propertiesToEncrypt = [
      'creationDate',
      'name',
      'selections'
    ];
    encrypt(propertiesToEncrypt, user, server);
  }
});
