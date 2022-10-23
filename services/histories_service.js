var histories = [];

export function getHistories() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(
          histories
      )
    }, 1500)
  })
}

export function setHistories(history) {
  histories.push(history);
}