const { celebrate, Joi, Segments } = require("celebrate");

const sessionCreateValidator = celebrate({
  [Segments.BODY]: Joi.object().keys({
    id: Joi.string().required(),
  }),
});

exports.sessionCreateValidator = sessionCreateValidator;