const { celebrate, Joi, Segments } = require("celebrate");

const ongCreateValidator = celebrate({
  [Segments.BODY]: Joi.object().keys({
    name: Joi.string().required(),
    email: Joi.string().required().email(),
    whatsapp: Joi.string().required().length(9),
    city: Joi.string().required(),
    uf: Joi.string().required().min(2),
  }),
});

exports.ongCreateValidator = ongCreateValidator;