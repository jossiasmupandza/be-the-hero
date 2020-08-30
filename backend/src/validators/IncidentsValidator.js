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
  [Segments.PARAMS]: {
    id: Joi.number().required(),
  },
});

const incidentsListValidator = celebrate({
  [Segments.QUERY]: {
    page: Joi.number(),
  },
});

exports.incidentsCreateValidator = incidentsCreateValidator;
exports.incidentsDeleteValidator = incidentsDeleteValidator;
exports.incidentsListValidator = incidentsListValidator;

