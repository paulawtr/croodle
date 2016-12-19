import { RestSerializer } from 'ember-cli-mirage';
import { camelize, singularize } from 'ember-cli-mirage/utils/inflector';

export default RestSerializer.extend({
  keyForRelationshipIds(type) {
    return camelize(singularize(type));
  }
});
