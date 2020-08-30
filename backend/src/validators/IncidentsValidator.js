const { celebrate, Joi, Segments } = require("celebrate");

const incidentsCreateValidator = celebrate({
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required(),
    }).unknown(),
    [Segments.BODY]: Joi.object().keys({
        title: Joi.string().required(),
        descripition: Joi.string().required(),
        value: Joi.number().required()
    }),
});

const incidentsDeleteValidator = celebrate({
  [Segments.HEADERS]: Joi.object({
    authorization: Joi.string().required(),
  }).unknown(),
  [Segments.QUERY]: {
    id: Joi.number().required(),
  },
});

exports.incidentsCreateValidator = incidentsCreateValidator;
exports.incidentsDeleteValidator = incidentsDeleteValidator;

