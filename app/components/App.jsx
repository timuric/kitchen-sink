import React from 'react';
import { Link, RouteHandler } from 'react-router';
import Theme from 'reapp-ui/helpers/Theme';
import iOSTheme from 'reapp-ui/themes/ios/theme';
import Menu from 'reapp-ui/components/Menu';
import Button from 'reapp-ui/components/Button';
import LayoutLeftNav from 'reapp-ui/views/LayoutLeftNav';

export default React.createClass({
  getInitialState() {
    return {
      disableDragger: false
    };
  },

  componentDidMount() {
    window.addEventListener('mouseover', this.setInteracted);
    window.addEventListener('focus', this.setInteracted);
  },

  setInteracted() {
    if (this.isMounted() && !this.state.hasInteracted)
      this.setState({ hasInteracted: true });
  },

  handleViewEntered(i) {
    this.setState({ disableDragger: i > 0 });
  },

  render() {
    return (
      <Theme {...iOSTheme}>
          <RouteHandler {...this.props}
            onViewEntered={this.handleViewEntered}
            hasInteracted={this.state.hasInteracted}
          />
      </Theme>
    );
  }
});