const joi = require('joi')
module.exports = {
    name: joi
        .string()
        .min(2, 'utf8')
        .max(20, 'utf8')
        .error(new Error('Имя пользователя не должно быть короче 2 символов и не длиннее 20')),
    id: joi
        .number()
        .min(1)
        .error(new Error('Неправильный Id')),
    password: joi
        .string()
        .min(2, 'utf8')
        .max(20, 'utf8')
        .error(new Error('Пароль пользователя не должно быть короче 2 символов и не длиннее 20')),
    email: joi
        .string()
        .email()
        .error(new Error('Email некорректен')),
    serialNumber: joi
        .string()
        .min(8, 'utf8')
        .max(20, 'utf8')
        .error(new Error('Серийный номер некорректный')),
    token: joi
        .string()
        .error(new Error('Неверный токен')),
    date: joi
        .date()
        .error(new Error('data указана неверно')),
    sensorType: joi
        .string()
        .min(8)
        .max(15)
        .error(new Error('sensorType указан неверно'))
}