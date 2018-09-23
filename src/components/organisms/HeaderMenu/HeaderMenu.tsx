import * as React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { toggleSidebar } from "../../../store";
import {Container, Label, Menu, Icon, Dropdown, Input, MenuItemProps} from "semantic-ui-react";
import { MenuProps } from "../../Menu";
import {PostCardProps} from "../../molecules/PostCard/PostCard";

// TODO should add redux form for the search?
// TODO should use reselect to abstract out the path function

type MenuItemType = {
    id: number;
    name: string;
    path: string;
};

interface HeaderMenuProps {
    dispatch?: Dispatch<any>;
    inverted?: boolean;
    items: MenuItemType[];
    pathname: string;
}

interface HeaderMenuState {
    activeItem: string;
}

// TODO redo tests and implementation
// TODO handle mobile and remove sidebar menu
class HeaderMenu extends React.PureComponent<HeaderMenuProps> {

    public state: HeaderMenuState = {
        activeItem: "home",
    };

    constructor(props: HeaderMenuProps) {
        super(props);

        this.handleItemClick = this.handleItemClick.bind(this);
    }

    handleItemClick(event: React.MouseEvent<HTMLAnchorElement>, data: MenuItemProps): void {
        // TODO should pass on click in here and send name through? Eliminate redux here
        this.setState({
            activeItem: data.name,
        });
    }

    render() {
        const {inverted, items, pathname} = this.props;
        const {activeItem} = this.state;
        return(
            <Container>
                <Menu pointing secondary inverted={inverted}>
                    {items.map((item: MenuItemType) => {
                        const active = pathname.startsWith(item.path); // TODO and handle with comp state
                        return <Menu.Item
                            as={"a"}
                            to={item.path}
                            key={item.path}
                            name={item.name}
                            active={activeItem === item.name}
                            onClick={this.handleItemClick}
                        />;
                    })}
                    <Menu.Menu position="right">
                        <Menu.Item>
                            <Input icon="search" placeholder="Search..." />
                        </Menu.Item>
                    </Menu.Menu>
                </Menu>
            </Container>
        );
    }
}

export default HeaderMenu;
