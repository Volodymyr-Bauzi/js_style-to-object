'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const cssStyles = sourceString
    .split(';')
    .map((line) => line.trim())
    .filter(Boolean)
    .reduce((prev, line) => {
      const [prop, ...value] = line.split(':');

      prev[prop.trim()] = value.join(':').trim();

      return prev;
    }, {});

  return cssStyles;
}

module.exports = convertToObject;
