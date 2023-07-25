
import DateFormatter from "../../../utils/dateFormatter";
import {getAllPostSlugs} from "../../../utils/postMetadata";
import {getPostData} from "../../../utils/postHandler";
import PostPageLayout from "../../../components/layouts/postPageLayout";
import {MdToHtml} from "../../../components/markdown/mdToHtml";


const PostPage = ({postMetadata, content}) => {
  return (
    <PostPageLayout>
        <header>
          <h1>{postMetadata.title}</h1>
          <DateFormatter dateString={postMetadata.date}/>
        </header>
        <MdToHtml mdSource={content}/>
    </PostPageLayout>
  );
};

export async function getStaticPaths() {
  const postSlugs = await getAllPostSlugs();

  const slugsWithCategory = postSlugs.map(({category, slug}) => ({
    params: {category, slug},
  }));

  return {
    paths: slugsWithCategory,
    fallback: false,
  };
}

export async function getStaticProps({params}) {
  const category = params.category;
  const slug = params.slug;

  try {
    const {content, postMetadata} = await getPostData(category, slug);
    return {props: {content, postMetadata}};
  } catch (error) {
    return {notFound: true};
  }
}

export default PostPage;
