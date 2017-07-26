import React, { PureComponent } from 'react';
import { TabTemplate } from '../TabTemplate/TabTemplate';

const SELECTED_INDEX_DEFAULT = 0;

class Tabs extends PureComponent {
    constructor(props, context) {
        super(props, context);
        this.state = {
            selectedIndex: SELECTED_INDEX_DEFAULT,
            currentTemplate: null
        };
        this.handleTabClick = this.handleTabClick.bind(this);
    }

    handleTabClick(tabIndex) {
        this.setState(prevState => ({
            selectedIndex: tabIndex
        }));
    }

    render() {
        const tabs = React.Children.map(this.props.children, (tab, index) => {
            if (this.state.selectedIndex === index) {
                this.state.currentTemplate = tab.props.children;
            }
            return React.cloneElement(tab, {
                selected: this.state.selectedIndex === index,
                index,
                onClick: this.handleTabClick
            });
        });
        return (
            <section className="Tabs">
                { tabs }
                <TabTemplate>
                    { this.state.currentTemplate }
                </TabTemplate>
            </section>
        );
    }
}

export { Tabs };
