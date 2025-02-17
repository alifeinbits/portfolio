import { useEffect } from 'react'
import { useLocalStorage } from 'usehooks-ts'

export const useTheme = () => {
  const [theme, setTheme] = useLocalStorage('theme', 'dark')

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return { theme, toggleTheme }
}
