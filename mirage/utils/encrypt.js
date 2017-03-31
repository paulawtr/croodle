/*
 * Encrypts all properties in mirage model (created by factory), encrypts them using
 * sjcl and encryptionKey property of model as passphrase.
 * Unsets encryptionKey property afterwards.
 */
import Ember from 'ember';
import sjcl from 'sjcl';

const { assert, get, isArray, isPresent } = Ember;

export default function(propertiesToEncrypt, model) {
  assert(isArray(propertiesToEncrypt), 'first argument must be an array');
  assert(isPresent(get(model, 'encryptionKey')), 'model must have an encryptionKey property which isn\'t empty');

  let passphrase = get(model, 'encryptionKey');
  let data = {
    encryptionKey: undefined
  };

  propertiesToEncrypt.forEach((propertyToEncrypt) => {
    let value = JSON.stringify(
      get(model, propertyToEncrypt)
    );
    data[propertyToEncrypt] = sjcl.encrypt(passphrase, value);
  });

  model.update(data);
}
