import React, {Component} from "react";
import "./Layuot.css";
import MenuToggle from "../../components/Navigation/MenuToggle/MenuToggle";
import RouteHub from "../../components/Navigation/RouteHub/RouteHub";

class Layout extends Component {

    state = {
        menu: false
    }
    toggleMenuHandler = () => {
        this.setState({
            menu: !this.state.menu
        })
    }

    menuCloseHandler = () => {
        this.setState({
            menu: false
        })
    }

    render() {
        return (
            <div className={'Layout'}>

                <RouteHub
                    isOpen={this.state.menu}
                    onClose={this.menuCloseHandler}
                />

             <MenuToggle
             onToggle={this.toggleMenuHandler}
             isOpen={this.state.menu}
             />

                <main>
                    {this.props.children}
                </main>
            </div>
        )
    }
}

export default Layout