const { celebrate, Joi, Segments } = require("celebrate");

const profileValidator = celebrate({
  [Segments.HEADERS]: Joi.object({
    authorization: Joi.string().required(),
  }).unknown(),
});

exports.profileValidator = profileValidator;