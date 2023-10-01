import { DiscussionEmbed } from 'disqus-react';

import { domainName } from '../../constants/webSiteVars';
const DisqusComments = ({ postMetadata }) => {
  // change here siteWillComments
  const siteWillComments = false;
  const disqusShortname = 'your-disqus-shortname';
  const url = `https://${domainName}/${postMetadata.category}/${postMetadata.slug}`;
  const disqusConfig = {
    url: url,
    identifier: postMetadata.slug, // Single post id
    title: postMetadata.title, // Single post title
  };
  return siteWillComments ? (
    <div>
      <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
    </div>
  ) : null;
};
export default DisqusComments;
