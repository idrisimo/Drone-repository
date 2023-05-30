import { Menu } from "antd"



export const NavBar = () => {
    
    return (
        <Menu mode="horizontal">
            <Menu.Item>Home</Menu.Item>
            <Menu.Item>Services</Menu.Item>
            <Menu.Item>About Us</Menu.Item>
            <Menu.Item>Contact Us</Menu.Item>
        </Menu>
    )
}