import dayjs from 'dayjs'

// 时间格式化
export const datetime = (time, pattern) => {
  let value = dayjs(time)
  let tempPattern = 'YYYY-MM-DD HH:mm:ss'

  if (!pattern) {
    return value.format(tempPattern)
  }

  switch (pattern) {
    case 'date':
      tempPattern = 'YYYY-MM-DD'
      break
    case 'time':
      tempPattern = 'HH:mm:ss'
      break
    default:
      tempPattern = pattern
      break
  }
  return value.format(tempPattern)
}

/**
 * 金钱，分转元，整数部分
 */
export const yuan = totalCent => {
  if (!totalCent) return '0'
  return (totalCent / 100)
    .toFixed(2)
    .toString()
    .split('.')[0]
}

/**
 * 金钱，分转元，小数部分，带两位小数
 */
export const cent = totalCent => {
  if (!totalCent) return '00'
  return (totalCent / 100)
    .toFixed(2)
    .toString()
    .split('.')[1]
}

/**
 * 金钱，分转元，带两位小数
 */
export const fullMoney = totalCent => {
  if (!totalCent) return '0.00'
  return (totalCent / 100).toFixed(2).toString()
}
