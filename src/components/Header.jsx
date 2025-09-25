import ImageLogo from '../assets/legal-and-ethical-issues-in-computing-logo.png'
export default function Header() {
    return (
        <header>
            <img src={ImageLogo} alt='Quiz logo' aria-hidden="true" draggable="false" />
            <h1>Legal and Ethical Issues in Computing</h1>
        </header>

    )
}