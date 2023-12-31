import Settings from "./navbar_components/Settings";
import Information from "./navbar_components/Information";
import Statistics from "./navbar_components/Statistics";
import Logo from "./navbar_components/Logo";

export default function Navbar() {
    return (
        <span class="flex bg-red-600 w-full">
            <Settings />
            <Information />
            <Statistics />
            <Logo />
        </span>
    );
}
