const {optimize} = require('svgo')
const cheerio = require('cheerio')

/**
 * Convert string to CamelCase.
 * @param {string} str - A string.
 * @returns {string}
 */
function CamelCase(str) {
  return str.replace(/(^|-)([a-z])/g, (_, __, c) => c.toUpperCase())
}

/**
 * Optimize SVG with `svgo`.
 * @param {string} svg - An SVG string.
 * @returns {Promise<string>}
 */
function optimizing(svg) {
  const result = optimize(svg, {
    plugins: [
      {name: "convertShapeToPath", params: false},
      {
        name: "mergePaths",
        params: false
      },
      {
        name: "removeAttrs",
        params: {
          attrs: "(stroke)"
        }
      },
      {
        name: "removeAttributesBySelector",
        params: {
          selector: `[fill="#26282B"]`,
          attributes: ["fill"]
        }
      },
      {
        name: "removeAttributesBySelector",
        params: {
          selector: `[fill="#1C274D"]`,
          attributes: ["fill"]
        }
      },
      {
        name: "removeAttributesBySelector",
        params: {
          selector: `[fill="#1C274C"]`,
          attributes: ["fill"]
        }
      },
      {
        name: "removeTitle",
        params: true,
      }
    ]
  })

  return new Promise(resolve => {
    resolve(result.data);
  });
}

/**
 * remove SVG element.
 * @param {string} svg - An SVG string.
 * @returns {string}
 */
function removeSVGElement(svg) {
  const $ = cheerio.load(svg);
  return $('body').children().html();
}

/**
 * Process SVG string.
 * @param {string} svg - An SVG string.
 * @param {Promise<string>}
 */
async function processSvg(svg) {
  const optimized = await optimizing(svg)
    // remove semicolon inserted by prettier
    // because prettier thinks it's formatting JSX not HTML
    .then(svg => svg.replace(/;/g, ''))
    .then(removeSVGElement)
    .then(svg => svg.replace(/([a-z]+)-([a-z]+)=/g, (_, a, b) => `${a}${CamelCase(b)}=`))
  return optimized;
}

module.exports = processSvg;
