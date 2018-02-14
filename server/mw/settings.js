const _ = require('lodash');
const path = require('path');
const request = require('request-promise-native');
const config = require('../../config');

// req.rules
// profile.company
// next()

module.exports = new class SettingsMiddleware {

  genRules(req, res, next) {

    const options = {
      method: 'GET',
      url: `${config.mgmtApi.host}/api/v1/schemas`,
      json: true
    };

    request(options)
      .then((schemas) => {
        req.rules = _.chain(schemas)
          .map((s) => {
            const modelRuleObj = _.chain(s.properties)
              .toPairs()
              .map(([field, schema]) => {
                const rules = [];

                rules.push({
                  required: !s.required ? false : s.required.indexOf(field) >= 0,
                  message: `Please provide a value for ${schema.title}.`,
                  trigger: 'blur'
                });

                if (schema.minLength) {
                  let rule = {
                    min: schema.minLength,
                    message: `${schema.title} must be at least ${schema.minLength} characters.`,
                    trigger: 'blur'
                  };
                  rules.push(rule);
                }

                if (schema.maxLength) {
                  let rule = {
                    max: schema.maxLength,
                    message: `${schema.title} cannot be greater than ${schema.maxLength} characters.`,
                    trigger: 'blur'
                  };
                  rules.push(rule);
                }

                return [field, rules];
              })
              .fromPairs()
              .value();

            return [path.basename(s.$id), modelRuleObj];
          })
          .fromPairs()
          .value();
        next();
      })
      .catch((err) => {
        next(err);
      });

  }
}
