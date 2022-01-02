// Посчитать сумму положительных чисел

const data = [
  1,
  [
    {},
    [],
    '10',
    -4,
    2
  ],
  9,
  5,
  7,
  [
    5,
    7,
    [
      1,
      -6,
      8,
      [
        '-10',
        6,
        8,
        -5,
        [
          5,
          6,
          7
        ]
      ]
    ]
  ]
] // 77

let result = 0

const calcSumOfPositiveNumbers = (data = []) => {
  data.forEach(item => {
    if (
        (typeof item !== 'string') && !(Array.isArray(item))
        && (JSON.stringify(item) !== '{}') && item > 0
       ) {
      result += item
    }
    if (Array.isArray(item) && item.length) {
      calcSumOfPositiveNumbers(item)
    }
  })
  return result
}

console.log(calcSumOfPositiveNumbers(data))


