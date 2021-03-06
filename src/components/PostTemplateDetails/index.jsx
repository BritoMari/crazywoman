import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import moment from 'moment';
import Disqus from '../Disqus';
import Sidebar from '../Sidebar';
import SocialLinks from "../SocialLinks";
import './style.scss';

class PostTemplateDetails extends React.Component {
  render() {
    const { slug } = this.props.pathContext;
    const { author } = this.props.data.site.siteMetadata;
    const post = this.props.data.markdownRemark;
    const tags = post.fields.tagSlugs;

    const tagsBlock = (
      <div className="post-single__tags">
        <ul className="post-single__tags-list">
          {tags.map((tag, i) =>
            <li className="post-single__tags-list-item" key={tag}>
              <Link to={tag} className="post-single__tags-list-item-link">
                {post.frontmatter.tags[i]}
              </Link>
            </li>
          )}
        </ul>
      </div>
    );

    const commentsBlock = (
      <div className="post-single__comments">
        <Disqus postPath={slug} postNode={post} />
      </div>
    );

    const shareBlock = (
      <div className="post-single__share">
        <SocialLinks postPath={slug} postNode={post} />
      </div>
    );

    return (
      <div>
        <Sidebar {...this.props} />
        <div className="post-single content">
          <div className="post-single__inner">
            <h1 className="post-single__title">{post.frontmatter.title}</h1>
            <div className="post-single__body" dangerouslySetInnerHTML={{ __html: post.html }} />
            <div className="post-single__date">
              <em>Publicado em {moment(post.frontmatter.date).locale('pt-BR').format('D MMM YYYY')} por <a href={author.twitter} target="_blank" rel="noopener noreferrer">{author.name}</a></em>
            </div>
          </div>
          <div className="post-single__footer">
            {tagsBlock}
            <hr />
            {shareBlock}
            {commentsBlock}
          </div>
        </div>
      </div>
    );
  }
}

PostTemplateDetails.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        subtitle: PropTypes.string.isRequired,
        author: PropTypes.object.isRequired
      })
    }),
    markdownRemark: PropTypes.object.isRequired
  })
};

export default PostTemplateDetails;
