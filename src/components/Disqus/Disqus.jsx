import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDisqusComments from 'react-disqus-comments';
import config from '../../../data/SiteConfig';

class Disqus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toasts: []
    };
    this.notifyAboutComment = this.notifyAboutComment.bind(this);
    this.onSnackbarDismiss = this.onSnackbarDismiss.bind(this);
  }

  onSnackbarDismiss() {
    const [, ...toasts] = this.state.toasts;
    this.setState({ toasts });
  }
  notifyAboutComment() {
    const toasts = this.state.toasts.slice();
    toasts.push({ text: 'Novo comentário!!' });
    this.setState({ toasts });
  }
  render() {
    const { postNode } = this.props;
    if (!config.disqusShortname) {
      return null;
    }
    const post = postNode.frontmatter;
    const url = config.siteUrl + config.pathPrefix + postNode.fields.slug;
    return (
      <ReactDisqusComments
        shortname={config.disqusShortname}
        identifier={post.title}
        title={post.title}
        url={url}
        category_id={post.category_id}
        onNewComment={this.notifyAboutComment}
      />
    );
  }
}

Disqus.propTypes = {
  postNode: PropTypes.object.isRequired
};

export default Disqus;
