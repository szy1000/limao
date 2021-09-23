export const dva = {
  config: {
    onError(err) {
      err.preventDefault()
      console.error(err)
    },
  },
}

export function render(oldRender) {
  oldRender()
}
