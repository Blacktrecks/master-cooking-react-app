import './ThemeSelector.css'
import { useTheme } from '../hooks/useTheme'
import modeIcon from '../assets/darkmode.svg'

const themeColors = ['#bf4c40', '#249c6b', '#0072B5','#C62168']
export default function ThemeSelector() {
    const { changeColor, changeMode, mode } = useTheme()

    const toggleMode = () => {
        changeMode(mode === 'dark' ? 'light': 'dark')
    }
  return (
    <div class="theme-selector">
        <div className='mode-toggle'>
            <img 
            src={modeIcon}
            onClick={toggleMode}
            style={{filter: mode === 'dark' ? 'invert(100%)' : 'invert(20%)'}}/>
        </div>
        <div className='theme-buttons'>
            {themeColors.map((color) =>(
                <div 
                key={color}
                onClick={ ()=> changeColor(color) }
                style={{ background:color }}
                />
            ))}
        </div>
    </div>
  )
}
