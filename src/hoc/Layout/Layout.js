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

    render() {
        return (
            <div className={'Layout'}>

             <MenuToggle
             onToggle={this.toggleMenuHandler}
             isOpen={this.state.menu}

             />


                <main>
                    {this.props.children}
                </main>

                <RouteHub>

                </RouteHub>

            </div>
        )
    }
}

export default Layout