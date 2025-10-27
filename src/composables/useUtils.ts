export const useUtils = () => {
  const openLink = (url: string) => {
    window.open(url, '_blank')
  }

  return { openLink }
}
